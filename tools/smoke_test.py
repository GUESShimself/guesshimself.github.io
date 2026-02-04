from playwright.sync_api import sync_playwright
import sys

URL = 'http://127.0.0.1:8000'

def run():
    results = []
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        
        # Capture console logs for debugging
        page.on('console', lambda msg: print(f"[CONSOLE] {msg.text}"))
        page.goto(URL)

        # Check assets linked
        has_themes_css = page.query_selector('link[href="css/themes.css"]') is not None
        has_theme_lab_js = page.query_selector('script[src="js/theme-lab.js"]') is not None
        has_skin_stylesheet = page.query_selector('#skin-stylesheet') is not None
        results.append(('themes_css_linked', has_themes_css))
        results.append(('theme_lab_js_linked', has_theme_lab_js))
        results.append(('skin_stylesheet_present', has_skin_stylesheet))

        # Clear old storage and reload
        page.evaluate("""
          localStorage.removeItem('themeLabUnlocked');
          localStorage.removeItem('skin');
          localStorage.removeItem('appearance');
          localStorage.removeItem('theme');
        """)
        page.reload()

        # Verify theme-toggle button exists
        button = page.query_selector('#theme-toggle')
        results.append(('theme_toggle_button_exists', button is not None))

        # Menu should be present after load (injected on DOMContentLoaded)
        menu_initially = page.query_selector('#theme-menu')
        results.append(('theme_menu_exists_after_load', menu_initially is not None))

        # Test cycling appearance when locked
        page.click('#theme-toggle')
        page.wait_for_timeout(100)
        label1 = page.text_content('#theme-toggle')
        page.click('#theme-toggle')
        page.wait_for_timeout(100)
        label2 = page.text_content('#theme-toggle')
        results.append(('cycle_works_when_locked', label1 != label2))

        # Send Konami sequence
        seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']
        for k in seq:
            page.keyboard.press(k)
        page.wait_for_timeout(300)

        # Menu should now be visible and Skins section should show
        menu = page.query_selector('#theme-menu')
        menu_hidden_attr = menu.get_attribute('hidden') if menu else 'no menu'
        menu_visibility = page.evaluate("document.getElementById('theme-menu').style.visibility") if menu else 'no menu'
        menu_display = page.evaluate("getComputedStyle(document.getElementById('theme-menu')).display") if menu else 'no menu'
        menu_visible = menu is not None and menu_hidden_attr is None
        results.append(('menu_visible_after_konami', menu_visible))
        results.append(('menu_hidden_attr', menu_hidden_attr))
        results.append(('menu_visibility_style', menu_visibility))
        results.append(('menu_display_computed', menu_display))

        skins_section = page.query_selector('.theme-lab-only')
        skins_visible = skins_section is not None and skins_section.get_attribute('hidden') is None
        results.append(('skins_section_visible_after_unlock', skins_visible))

        # Debug: print all buttons in menu
        all_buttons = page.query_selector_all('#theme-menu button')
        results.append(('total_menu_buttons', len(all_buttons)))
        for i, btn in enumerate(all_buttons):
            text = btn.text_content()
            data_attrs = page.evaluate(f'document.querySelectorAll("#theme-menu button")[{i}].dataset')
            print(f"  Button {i}: text='{text}', data={data_attrs}")
        
        # Click a skin (Y2K) - try to find and click
        y2k_btn = page.query_selector('button[data-skin="y2k"]')
        if y2k_btn:
            y2k_btn.click()
            page.wait_for_timeout(200)
            # Check localStorage.skin
            stored_skin = page.evaluate("localStorage.getItem('skin')")
            results.append(('stored_skin_after_selection', stored_skin))
            # Check if skin stylesheet is loaded
            skin_link = page.query_selector('#skin-stylesheet')
            skin_href = skin_link.get_attribute('href') if skin_link else None
            skin_disabled = skin_link.get_attribute('disabled') if skin_link else 'disabled'
            results.append(('skin_stylesheet_href', skin_href))
            results.append(('skin_stylesheet_disabled', skin_disabled))
        else:
            results.append(('stored_skin_after_selection', None))
            results.append(('skin_stylesheet_href', None))
            results.append(('skin_stylesheet_disabled', None))

        # Reload and check persistence
        page.reload()
        page.wait_for_timeout(200)
        stored_skin_after_reload = page.evaluate("localStorage.getItem('skin')")
        results.append(('skin_persists_after_reload', stored_skin_after_reload))

        # To click a menu item, we need to open the menu first
        # But after reload, the Skins will be hidden again unless we unlock again
        # So let's just send Konami again to unlock and open the menu
        seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']
        for k in seq:
            page.keyboard.press(k)
        page.wait_for_timeout(300)

        # Click an appearance (Light)
        light_btn = page.query_selector('button[data-appearance="light"]')
        if light_btn:
            light_btn.click()
            page.wait_for_timeout(200)
            stored_appearance = page.evaluate("localStorage.getItem('appearance')")
            results.append(('stored_appearance_after_selection', stored_appearance))
        else:
            results.append(('stored_appearance_after_selection', None))

        # Check unlock flag
        unlock_flag = page.evaluate("localStorage.getItem('themeLabUnlocked')")
        results.append(('themeLabUnlocked_flag', unlock_flag))

        browser.close()

    # Evaluate expectations
    expectations = {
        'themes_css_linked': True,
        'theme_lab_js_linked': True,
        'skin_stylesheet_present': True,
        'theme_toggle_button_exists': True,
        'theme_menu_exists_after_load': True,
        'cycle_works_when_locked': True,
        'menu_visible_after_konami': True,
        'skins_section_visible_after_unlock': True,
        'stored_skin_after_selection': 'y2k',
        'skin_stylesheet_href': 'css/skins/y2k.css',
        'skin_stylesheet_disabled': None,  # should not have 'disabled' attr when active
        'skin_persists_after_reload': 'y2k',
        'stored_appearance_after_selection': 'light',
        'themeLabUnlocked_flag': 'true'
    }

    ok = True
    for k, v in results:
        print(f"{k}: {v}")
        if k in expectations:
            expected = expectations[k]
            if expected is True and v is not True:
                ok = False
            elif expected is False and v is not False:
                ok = False
            elif isinstance(expected, str) and v != expected:
                ok = False
            elif expected is None and v is not None:
                ok = False

    if not ok:
        print('SMOKE TEST: FAILED')
        sys.exit(2)
    print('SMOKE TEST: PASSED')

if __name__ == '__main__':
    run()
