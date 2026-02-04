from playwright.sync_api import sync_playwright
import sys

URL = 'http://127.0.0.1:8000'

def run():
    results = []
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto(URL)

        # Check assets linked
        has_themes_css = page.query_selector('link[href="css/themes.css"]') is not None
        has_theme_lab_js = page.query_selector('script[src="js/theme-lab.js"]') is not None
        results.append(('themes_css_linked', has_themes_css))
        results.append(('theme_lab_js_linked', has_theme_lab_js))

        # Ensure unlocked flag cleared, then reload
        page.evaluate("localStorage.removeItem('themeLabUnlocked'); localStorage.removeItem('theme');")
        page.reload()

        # Ensure theme-lab not present initially
        tl_present_initial = page.query_selector('#theme-lab') is not None
        results.append(('theme_lab_initial_present', tl_present_initial))

        # Send Konami keys
        seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']
        for k in seq:
            page.keyboard.press(k)
        page.wait_for_timeout(200)

        tl_present_after = page.query_selector('#theme-lab') is not None
        results.append(('theme_lab_after_konami', tl_present_after))

        # Open menu
        page.click('#theme-lab-button')
        page.wait_for_selector('#theme-lab-menu')

        # Click Y2K
        # find button with text "Y2K"
        y2k_btn = page.query_selector('#theme-lab-menu button:has-text("Y2K")')
        if y2k_btn:
            y2k_btn.click()
            page.wait_for_timeout(200)
            # Check localStorage.theme
            stored = page.evaluate("localStorage.getItem('theme')")
            results.append(('stored_after_y2k', stored))
        else:
            results.append(('stored_after_y2k', None))

        # Reload and ensure data-theme attr applied
        page.reload()
        data_theme = page.evaluate("document.documentElement.getAttribute('data-theme')")
        results.append(('data_theme_after_reload', data_theme))

        # Check computed CSS var immediately (before main toggle)
        css_bg = page.evaluate("getComputedStyle(document.documentElement).getPropertyValue('--color-bg').trim()")
        body_bg = page.evaluate("getComputedStyle(document.body).backgroundColor")
        results.append(('css_var_color_bg', css_bg))
        results.append(('body_background_color', body_bg))

        # Use main theme toggle to cycle (should set to 'system')
        page.click('#theme-toggle')
        page.wait_for_timeout(200)
        stored_after_toggle = page.evaluate("localStorage.getItem('theme')")
        results.append(('stored_after_main_toggle', stored_after_toggle))

        browser.close()

    # Print results
    # Evaluate expectations
    expectations = {
        'themes_css_linked': True,
        'theme_lab_js_linked': True,
        'theme_lab_initial_present': False,
        'theme_lab_after_konami': True,
        'stored_after_y2k': 'y2k',
        'data_theme_after_reload': 'y2k',
        'stored_after_main_toggle': 'system'
    }

    ok = True
    for k,v in results:
        print(f"{k}: {v}")
        if k in expectations:
            expected = expectations[k]
            if expected is True and v is not True:
                ok = False
            elif expected is False and v is not False:
                ok = False
            elif isinstance(expected, str) and v != expected:
                ok = False

    if not ok:
        print('SMOKE TEST: FAILED')
        sys.exit(2)
    print('SMOKE TEST: PASSED')

if __name__ == '__main__':
    run()
