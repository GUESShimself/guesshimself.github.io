// Add your javascript here

window.darkMode = false;

const stickyClasses = ['fixed', 'h-14'];
const unstickyClasses = ['absolute', 'h-20'];
const stickyClassesContainer = ['border-neutral-300/50', 'bg-white/80', 'dark:border-neutral-600/40', 'dark:bg-neutral-900/60', 'backdrop-blur-2xl'];
const unstickyClassesContainer = ['border-transparent'];
let headerElement = null;

document.addEventListener('DOMContentLoaded', function () {
    headerElement = document.getElementById('header');

    // if (localStorage.getItem('dark_mode') === 'true') {
    //     window.darkMode = true;
    //     document.documentElement.setAttribute('data-theme', 'dark');
    //     showNight(false);
    // } else {
    //     showDay(false);
    // }

    stickyHeaderFuncionality();
    applyMenuItemClasses();
    evaluateHeaderPosition();
    mobileMenuFunctionality();
});

// window.toggleDarkMode = function (animate = true) {
//     const htmlElement = document.documentElement;
//     const isDark = htmlElement.getAttribute('data-theme') === 'dark';

//     document.documentElement.classList.add('duration-300');

//     if (isDark) {
//         htmlElement.removeAttribute('data-theme');
//         localStorage.setItem('dark_mode', 'false');
//         window.darkMode = false;
//         showDay(animate);
//     } else {
//         htmlElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('dark_mode', 'true');
//         window.darkMode = true;
//         showNight(animate);
//     }
// }

// document.getElementById('darkToggle').addEventListener('click', function () {
//     window.toggleDarkMode(true);
// });

window.stickyHeaderFuncionality = function () {
    window.addEventListener('scroll', function () {
        evaluateHeaderPosition();
    });
}

window.evaluateHeaderPosition = function () {
    if (window.scrollY > 16) {
        headerElement.firstElementChild.classList.add(...stickyClassesContainer);
        headerElement.firstElementChild.classList.remove(...unstickyClassesContainer);
        headerElement.classList.add(...stickyClasses);
        headerElement.classList.remove(...unstickyClasses);
        document.getElementById('menu').classList.add('top-[56px]');
        document.getElementById('menu').classList.remove('top-[75px]');
    } else {
        headerElement.firstElementChild.classList.remove(...stickyClassesContainer);
        headerElement.firstElementChild.classList.add(...unstickyClassesContainer);
        headerElement.classList.add(...unstickyClasses);
        headerElement.classList.remove(...stickyClasses);
        document.getElementById('menu').classList.remove('top-[56px]');
        document.getElementById('menu').classList.add('top-[75px]');
    }
}

// function showDay(animate) {
//     document.getElementById('sun').classList.remove('setting');
//     document.getElementById('moon').classList.remove('rising');

//     let timeout = 0;

//     if (animate) {
//         timeout = 500;
//         document.getElementById('moon').classList.add('setting');
//     }

//     setTimeout(function () {
//         document.getElementById('dayText').classList.remove('hidden');
//         document.getElementById('nightText').classList.add('hidden');

//         document.getElementById('moon').classList.add('hidden');
//         document.getElementById('sun').classList.remove('hidden');

//         if (animate) {
//             document.getElementById('sun').classList.add('rising');
//         }
//     }, timeout);
// }

// function showNight(animate) {
//     document.getElementById('moon').classList.remove('setting');
//     document.getElementById('sun').classList.remove('rising');

//     let timeout = 0;

//     if (animate) {
//         timeout = 500;
//         document.getElementById('sun').classList.add('setting');
//     }

//     setTimeout(function () {
//         document.getElementById('nightText').classList.remove('hidden');
//         document.getElementById('dayText').classList.add('hidden');

//         document.getElementById('sun').classList.add('hidden');
//         document.getElementById('moon').classList.remove('hidden');

//         if (animate) {
//             document.getElementById('moon').classList.add('rising');
//         }
//     }, timeout);
// }

window.applyMenuItemClasses = function () {
    const menuItems = document.querySelectorAll('#menu a');
    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].pathname == window.location.pathname) {
            menuItems[i].classList.add('text-neutral-900', 'dark:text-white');
        }
    }
}

function mobileMenuFunctionality() {
    document.getElementById('openMenu').addEventListener('click', function () {
        openMobileMenu();
    });

    document.getElementById('closeMenu').addEventListener('click', function () {
        closeMobileMenu();
    });
}

window.openMobileMenu = function () {
    document.getElementById('openMenu').classList.add('hidden');
    document.getElementById('closeMenu').classList.remove('hidden');
    document.getElementById('menu').classList.remove('hidden');
    document.getElementById('mobileMenuBackground').classList.add('opacity-0');
    document.getElementById('mobileMenuBackground').classList.remove('hidden');

    setTimeout(function () {
        document.getElementById('mobileMenuBackground').classList.remove('opacity-0');
    }, 1);
}

window.closeMobileMenu = function () {
    document.getElementById('closeMenu').classList.add('hidden');
    document.getElementById('openMenu').classList.remove('hidden');
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('mobileMenuBackground').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function () {
    const allTriggers = document.querySelectorAll('.expandable-trigger, .expandable-bottom-trigger');

    document.querySelectorAll('[id]').forEach(section => {
        const hasTrigger = document.querySelector(`[data-target="${section.id}"]`);
        if (hasTrigger && !section.classList.contains('expanded')) {
            const interactiveElements = section.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
            interactiveElements.forEach(element => {
                if (element.hasAttribute('tabindex')) {
                    element.setAttribute('data-original-tabindex', element.getAttribute('tabindex'));
                }
                element.setAttribute('tabindex', '-1');
            });
        }
    });

    allTriggers.forEach(trigger => {
        if (!trigger.hasAttribute('tabindex')) {
            trigger.setAttribute('tabindex', '0');
        }

        if (!trigger.hasAttribute('role')) {
            trigger.setAttribute('role', 'button');
        }

        const targetId = trigger.getAttribute('data-target');

        if (targetId && !trigger.hasAttribute('aria-controls')) {
            trigger.setAttribute('aria-controls', targetId);
        }

        if (!trigger.hasAttribute('aria-expanded')) {
            const contentElement = document.getElementById(targetId);
            if (contentElement) {
                const isExpanded = contentElement.classList.contains('expanded');
                trigger.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
            }
        }

        if (!trigger.classList.contains('expandable-bottom-trigger') && !trigger.hasAttribute('title')) {
            trigger.setAttribute('title', 'Click to expand additional information');
            if (!trigger.hasAttribute('aria-label')) {
                trigger.setAttribute('aria-label', 'Expand additional information');
            }
        }

        function handleActivation() {
            const targetId = this.getAttribute('data-target');
            const contentElement = document.getElementById(targetId);
            const isBottomTrigger = this.classList.contains('expandable-bottom-trigger');

            const topTrigger = document.querySelector(`.expandable-trigger[data-target="${targetId}"]`);
            const topTriggerPosition = topTrigger ? topTrigger.getBoundingClientRect().top + window.pageYOffset : null;

            const allTriggersForTarget = document.querySelectorAll(`[data-target="${targetId}"]`);

            allTriggersForTarget.forEach(t => {
                t.classList.toggle('expanded');
                const newState = contentElement.classList.contains('expanded') ? 'false' : 'true';
                t.setAttribute('aria-expanded', newState);
            });

            contentElement.classList.toggle('expanded');

            if (contentElement.classList.contains('expanded')) {
                contentElement.style.maxHeight = '2000px';
                contentElement.style.opacity = '1';
                contentElement.style.marginBottom = '1.5rem';
                contentElement.style.marginTop = '0.75rem';

                allTriggersForTarget.forEach(t => {
                    const icon = t.querySelector('.trigger-icon');
                    if (icon) icon.textContent = '▲';
                });

                allTriggersForTarget.forEach(t => {
                    t.setAttribute('aria-expanded', 'true');
                });

                const interactiveElements = contentElement.querySelectorAll('a, button, [tabindex]');
                interactiveElements.forEach(element => {
                    if (element.hasAttribute('data-original-tabindex')) {
                        element.setAttribute('tabindex', element.getAttribute('data-original-tabindex'));
                    } else if (element.getAttribute('tabindex') === '-1') {
                        element.setAttribute('tabindex', '0');
                    }
                });

                allTriggers.forEach(otherTrigger => {
                    const otherId = otherTrigger.getAttribute('data-target');
                    if (otherId !== targetId && document.getElementById(otherId)?.classList.contains('expanded')) {
                        const allOtherTriggers = document.querySelectorAll(`[data-target="${otherId}"]`);
                        allOtherTriggers.forEach(t => {
                            t.classList.remove('expanded');
                            t.setAttribute('aria-expanded', 'false');
                            const icon = t.querySelector('.trigger-icon');
                            if (icon) icon.textContent = t.classList.contains('expandable-bottom-trigger') ? '▲' : '▼';
                        });

                        const otherContent = document.getElementById(otherId);
                        otherContent.classList.remove('expanded');
                        otherContent.style.maxHeight = '0';
                        otherContent.style.opacity = '0';
                        otherContent.style.marginBottom = '0';
                        otherContent.style.marginTop = '0';

                        const collapsedInteractiveElements = otherContent.querySelectorAll('a, button, [tabindex]');
                        collapsedInteractiveElements.forEach(element => {
                            if (!element.hasAttribute('data-original-tabindex') && element.hasAttribute('tabindex')) {
                                element.setAttribute('data-original-tabindex', element.getAttribute('tabindex'));
                            }
                            element.setAttribute('tabindex', '-1');
                        });
                    }
                });

            } else {
                contentElement.style.maxHeight = '0';
                contentElement.style.opacity = '0';
                contentElement.style.marginBottom = '0';
                contentElement.style.marginTop = '0';

                allTriggersForTarget.forEach(t => {
                    const icon = t.querySelector('.trigger-icon');
                    if (icon) icon.textContent = t.classList.contains('expandable-bottom-trigger') ? '▲' : '▼';
                    t.setAttribute('aria-expanded', 'false');
                });

                if (isBottomTrigger && topTriggerPosition !== null) {
                    setTimeout(() => {
                        window.scrollTo({
                            top: topTriggerPosition - 100,
                            behavior: 'smooth'
                        });
                    }, 10);
                }

                const interactiveElements = contentElement.querySelectorAll('a, button, [tabindex]');
                interactiveElements.forEach(element => {
                    if (!element.hasAttribute('data-original-tabindex') && element.hasAttribute('tabindex')) {
                        element.setAttribute('data-original-tabindex', element.getAttribute('tabindex'));
                    }
                    element.setAttribute('tabindex', '-1');
                });
            }
        }

        trigger.removeEventListener('click', handleActivation);
        trigger.addEventListener('click', handleActivation);

        if (!trigger.hasAttribute('onkeydown')) {
            trigger.addEventListener('keydown', function (event) {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handleActivation.call(this);
                }
            });
        }

        if (!trigger.querySelector('.trigger-icon')) {
            const icon = document.createElement('span');
            icon.className = 'trigger-icon ml-1 text-xs align-middle';
            icon.textContent = trigger.classList.contains('expandable-bottom-trigger') ? '▲' : '▼';
            trigger.appendChild(icon);
        }
    });

    allTriggers.forEach(trigger => {
        const targetId = trigger.getAttribute('data-target');
        if (targetId) {
            const contentElement = document.getElementById(targetId);
            if (contentElement && !contentElement.hasAttribute('role')) {
                contentElement.setAttribute('role', 'region');
                if (trigger.id && !contentElement.hasAttribute('aria-labelledby')) {
                    contentElement.setAttribute('aria-labelledby', trigger.id);
                }
            }
        }
    });
});
