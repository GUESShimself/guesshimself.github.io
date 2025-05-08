// Add your javascript here

window.darkMode = false;

const stickyClasses = ['fixed', 'h-14'];
const unstickyClasses = ['absolute', 'h-20'];
const stickyClassesContainer = ['border-neutral-300/50' , 'bg-white/80', 'dark:border-neutral-600/40', 'dark:bg-neutral-900/60', 'backdrop-blur-2xl'];
const unstickyClassesContainer = ['border-transparent'];
let headerElement = null;

document.addEventListener('DOMContentLoaded', function(){
    headerElement = document.getElementById('header');

    if(localStorage.getItem('dark_mode') && localStorage.getItem('dark_mode') == 'true'){
        window.darkMode = true;
        showNight();
    } else {
        showDay();
    }
    stickyHeaderFuncionality();
    applyMenuItemClasses();
    evaluateHeaderPosition();
    mobileMenuFunctionality();
});

// window.toggleDarkMode = function(){
//     document.documentElement.classList.toggle('dark');
//     if(document.documentElement.classList.contains('dark')){
//         localStorage.setItem('dark_mode', true);
//         window.darkMode = true;
//     } else {
//         window.darkMode = false;
//         localStorage.setItem('dark_mode', false);
//     }
// }




window.stickyHeaderFuncionality = function(){
    window.addEventListener('scroll', function() {
        evaluateHeaderPosition();
    });
}

window.evaluateHeaderPosition = function(){
    if(window.scrollY > 16){
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



document.getElementById('darkToggle').addEventListener('click', function(){
    document.documentElement.classList.add('duration-300');
    
    if(document.documentElement.classList.contains('dark')){
        localStorage.removeItem('dark_mode');
        showDay(true);
        
    } else {
        localStorage.setItem('dark_mode', true);
        showNight(true);
        
    }
});

function showDay(animate){
    document.getElementById('sun').classList.remove('setting');
    document.getElementById('moon').classList.remove('rising');
    
    let timeout = 0;
    

    if(animate){
        timeout = 500;
        
        document.getElementById('moon').classList.add('setting');
    }

    setTimeout(function(){
        document.getElementById('dayText').classList.remove('hidden');
        document.getElementById('nightText').classList.add('hidden');

        document.getElementById('moon').classList.add('hidden');
        document.getElementById('sun').classList.remove('hidden');

        if(animate){
            document.documentElement.classList.remove('dark');
            document.getElementById('sun').classList.add('rising');
        }
        
    }, timeout);
}

function showNight(animate){
    document.getElementById('moon').classList.remove('setting');
    document.getElementById('sun').classList.remove('rising');

    let timeout = 0;
    

    if(animate){
        timeout = 500;
        
        document.getElementById('sun').classList.add('setting');
    }

    setTimeout(function(){
        document.getElementById('nightText').classList.remove('hidden');
        document.getElementById('dayText').classList.add('hidden');

        document.getElementById('sun').classList.add('hidden');
        document.getElementById('moon').classList.remove('hidden');

        if(animate){
            document.documentElement.classList.add('dark');
            document.getElementById('moon').classList.add('rising');
        }

    }, timeout);
}

window.applyMenuItemClasses = function(){
    const menuItems = document.querySelectorAll('#menu a');
    console.log(menuItems);
    for(let i = 0; i < menuItems.length; i++){
        if(menuItems[i].pathname == window.location.pathname){
            menuItems[i].classList.add('text-neutral-900', 'dark:text-white');
        }
    }
    //:class="{ 'text-neutral-900 dark:text-white': window.location.pathname == '{menu.url}', 'text-neutral-700 dark:text-neutral-400': window.location.pathname != '{menu.url}' }"
}


function mobileMenuFunctionality(){
    document.getElementById('openMenu').addEventListener('click', function(){
        openMobileMenu();
    });

    document.getElementById('closeMenu').addEventListener('click', function(){
        closeMobileMenu();
    });
}

window.openMobileMenu = function(){
    document.getElementById('openMenu').classList.add('hidden');
    document.getElementById('closeMenu').classList.remove('hidden');
    document.getElementById('menu').classList.remove('hidden');
    document.getElementById('mobileMenuBackground').classList.add('opacity-0');
    document.getElementById('mobileMenuBackground').classList.remove('hidden');

    setTimeout(function(){
        document.getElementById('mobileMenuBackground').classList.remove('opacity-0');
    }, 1);
}

window.closeMobileMenu = function(){
    document.getElementById('closeMenu').classList.add('hidden');
    document.getElementById('openMenu').classList.remove('hidden');
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('mobileMenuBackground').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    // Select both top triggers and bottom close buttons
    const allTriggers = document.querySelectorAll('.expandable-trigger, .expandable-bottom-trigger');
    
    // Initially disable tabbing to elements in collapsed content sections
    document.querySelectorAll('[id]').forEach(section => {
        // Find if this is a content section (has a trigger pointing to it)
        const hasTrigger = document.querySelector(`[data-target="${section.id}"]`);
        if (hasTrigger && !section.classList.contains('expanded')) {
            // This is a collapsed content section
            const interactiveElements = section.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
            interactiveElements.forEach(element => {
                // Store original tabindex if it exists
                if (element.hasAttribute('tabindex')) {
                    element.setAttribute('data-original-tabindex', element.getAttribute('tabindex'));
                }
                // Make non-tabbable
                element.setAttribute('tabindex', '-1');
            });
        }
    });
    
    allTriggers.forEach(trigger => {
        // Add keyboard accessibility attributes if not already present
        if (!trigger.hasAttribute('tabindex')) {
            trigger.setAttribute('tabindex', '0');
        }
        
        if (!trigger.hasAttribute('role')) {
            trigger.setAttribute('role', 'button');
        }
        
        const targetId = trigger.getAttribute('data-target');
        
        // Set aria-controls attribute if not already set
        if (targetId && !trigger.hasAttribute('aria-controls')) {
            trigger.setAttribute('aria-controls', targetId);
        }
        
        // Set initial aria-expanded state if not already set
        if (!trigger.hasAttribute('aria-expanded')) {
            const contentElement = document.getElementById(targetId);
            if (contentElement) {
                const isExpanded = contentElement.classList.contains('expanded');
                trigger.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
            }
        }
        
        // Add tooltip for expandable triggers (only for top triggers, not bottom close buttons)
        if (!trigger.classList.contains('expandable-bottom-trigger') && !trigger.hasAttribute('title')) {
            trigger.setAttribute('title', 'Click to expand additional information');
            
            // Optionally add tooltip using aria-label for screen readers
            if (!trigger.hasAttribute('aria-label')) {
                trigger.setAttribute('aria-label', 'Expand additional information');
            }
        }
        
        // Function to handle both click and keyboard activation
        function handleActivation() {
            const targetId = this.getAttribute('data-target');
            const contentElement = document.getElementById(targetId);
            const isBottomTrigger = this.classList.contains('expandable-bottom-trigger');
            
            // Store the position of the top trigger for scrolling back later
            // We'll use the first non-bottom trigger as our reference point
            const topTrigger = document.querySelector(`.expandable-trigger[data-target="${targetId}"]`);
            const topTriggerPosition = topTrigger ? topTrigger.getBoundingClientRect().top + window.pageYOffset : null;
            
            // Get all triggers for this content (top and bottom)
            const allTriggersForTarget = document.querySelectorAll(`[data-target="${targetId}"]`);
            
            // Toggle expanded class on all related triggers
            allTriggersForTarget.forEach(t => {
                t.classList.toggle('expanded');
                const newState = contentElement.classList.contains('expanded') ? 'false' : 'true';
                t.setAttribute('aria-expanded', newState);
            });
            
            // Toggle expanded class on content
            contentElement.classList.toggle('expanded');
            
            // Change content max-height and opacity for animation
            if (contentElement.classList.contains('expanded')) {
                contentElement.style.maxHeight = '2000px';
                contentElement.style.opacity = '1';
                contentElement.style.marginBottom = '1.5rem';
                contentElement.style.marginTop = '0.75rem';
                
                // Update the trigger icons
                allTriggersForTarget.forEach(t => {
                    const icon = t.querySelector('.trigger-icon');
                    if (icon) {
                        // Different icon for top vs bottom trigger
                        if (t.classList.contains('expandable-bottom-trigger')) {
                            icon.textContent = '▲'; // Bottom trigger icon when expanded
                        } else {
                            icon.textContent = '▲'; // Top trigger icon when expanded
                        }
                    }
                });
                
                // Update ARIA states for all related triggers
                allTriggersForTarget.forEach(t => {
                    t.setAttribute('aria-expanded', 'true');
                });
                
                // Enable tabbing to interactive elements within the expanded content
                const interactiveElements = contentElement.querySelectorAll('a, button, [tabindex]');
                interactiveElements.forEach(element => {
                    // If element has a stored tabindex, restore it
                    if (element.hasAttribute('data-original-tabindex')) {
                        const originalTabindex = element.getAttribute('data-original-tabindex');
                        element.setAttribute('tabindex', originalTabindex);
                    } 
                    // Otherwise, if it has tabindex=-1 that wasn't original, set to 0
                    else if (element.getAttribute('tabindex') === '-1') {
                        element.setAttribute('tabindex', '0');
                    }
                });
                
                // Optional: Close other expanded content
                allTriggers.forEach(otherTrigger => {
                    const otherId = otherTrigger.getAttribute('data-target');
                    if (otherId !== targetId && document.getElementById(otherId)?.classList.contains('expanded')) {
                        // Get all triggers for other target
                        const allOtherTriggers = document.querySelectorAll(`[data-target="${otherId}"]`);
                        
                        // Remove expanded class from all other triggers
                        allOtherTriggers.forEach(t => {
                            t.classList.remove('expanded');
                            t.setAttribute('aria-expanded', 'false');
                            const icon = t.querySelector('.trigger-icon');
                            if (icon) {
                                // Reset icon based on trigger type
                                icon.textContent = t.classList.contains('expandable-bottom-trigger') ? '▲' : '▼';
                            }
                        });
                        
                        // Collapse the other content
                        const otherContent = document.getElementById(otherId);
                        otherContent.classList.remove('expanded');
                        otherContent.style.maxHeight = '0';
                        otherContent.style.opacity = '0';
                        otherContent.style.marginBottom = '0';
                        otherContent.style.marginTop = '0';
                        
                        // Disable tabbing to elements in collapsed content
                        const collapsedInteractiveElements = otherContent.querySelectorAll('a, button, [tabindex]');
                        collapsedInteractiveElements.forEach(element => {
                            // Store original tabindex if not already stored
                            if (!element.hasAttribute('data-original-tabindex') && element.hasAttribute('tabindex')) {
                                element.setAttribute('data-original-tabindex', element.getAttribute('tabindex'));
                            }
                            // Make non-tabbable
                            element.setAttribute('tabindex', '-1');
                        });
                    }
                });
            } else {
                contentElement.style.maxHeight = '0';
                contentElement.style.opacity = '0';
                contentElement.style.marginBottom = '0';
                contentElement.style.marginTop = '0';
                
                // Update the trigger icons
                allTriggersForTarget.forEach(t => {
                    const icon = t.querySelector('.trigger-icon');
                    if (icon) {
                        // Different icon for top vs bottom trigger
                        icon.textContent = t.classList.contains('expandable-bottom-trigger') ? '▲' : '▼';
                    }
                });
                
                // Update ARIA states for all related triggers
                allTriggersForTarget.forEach(t => {
                    t.setAttribute('aria-expanded', 'false');
                });
                
                // If this is a bottom trigger, scroll back to the top trigger position
                if (isBottomTrigger && topTriggerPosition !== null) {
                    // Use setTimeout to allow the collapse animation to start first
                    setTimeout(() => {
                        window.scrollTo({
                            top: topTriggerPosition - 100, // Scroll slightly above the trigger for better visibility
                            behavior: 'smooth'
                        });
                    }, 10);
                }
                
                // Disable tabbing to elements in collapsed content
                const interactiveElements = contentElement.querySelectorAll('a, button, [tabindex]');
                interactiveElements.forEach(element => {
                    // Store original tabindex if not already stored
                    if (!element.hasAttribute('data-original-tabindex') && element.hasAttribute('tabindex')) {
                        element.setAttribute('data-original-tabindex', element.getAttribute('tabindex'));
                    }
                    // Make non-tabbable
                    element.setAttribute('tabindex', '-1');
                });
            }
        }
        
        // Remove any existing event listeners to prevent duplicates
        trigger.removeEventListener('click', handleActivation);
        
        // Add click event listener
        trigger.addEventListener('click', handleActivation);
        
        // Add keyboard event listener (if not using inline handlers)
        if (!trigger.hasAttribute('onkeydown')) {
            trigger.addEventListener('keydown', function(event) {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    handleActivation.call(this);
                }
            });
        }
        
        // Add dropdown icon to triggers if not already present
        if (!trigger.querySelector('.trigger-icon')) {
            const icon = document.createElement('span');
            icon.className = 'trigger-icon ml-1 text-xs align-middle';
            // Different default icon based on trigger type
            icon.textContent = trigger.classList.contains('expandable-bottom-trigger') ? '▲' : '▼';
            trigger.appendChild(icon);
        }
    });
    
    // Set up ARIA roles on the content elements (only if they don't already have roles)
    allTriggers.forEach(trigger => {
        const targetId = trigger.getAttribute('data-target');
        if (targetId) {
            const contentElement = document.getElementById(targetId);
            if (contentElement && !contentElement.hasAttribute('role')) {
                contentElement.setAttribute('role', 'region');
                // If the trigger has an ID, use it for aria-labelledby
                if (trigger.id && !contentElement.hasAttribute('aria-labelledby')) {
                    contentElement.setAttribute('aria-labelledby', trigger.id);
                }
            }
        }
    });
});