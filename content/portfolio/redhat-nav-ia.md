---
title: Customer Portal Navigation/IA
company: Red Hat
description: Case Study
dates: 2013
image: /assets/images/portfolio/CAP-DS/CAPDS-cover.png
---

<div class="flex items-center justify-center w-full mt-16">
    <div class="w-full">
        <div class="absolute w-fit h-px bg-linear-to-r from-transparent to-white md:from-white dark:from-transparent dark:to-neutral-950 md:dark:from-neutral-950 md:via-transparent md:dark:via-transparent md:to-white md:dark:to-neutral-950"></div>
        <div class="w-full h-px border-t border-dashed border-neutral-300 dark:border-neutral-600"></div>
        <!-- <div role="tablist" class="flex rounded-full shadow items-center justify-center mx-auto max-w-fit -translate-y-1/2">
            <button id="tab-1"
                class="inline-flex w-auto px-4 py-2 text-xs font-semibold duration-300 ease-out border rounded-l-full cursor-default"
                :class="activeTab === 1 ? 'bg-white dark:bg-black text-black dark:text-white border-black dark:border-white' : 'bg-black dark:bg-white hover:bg-white dark:hover:bg-black text-white dark:text-black hover:text-black dark:hover:text-white border-black dark:border-white hover:border-black dark:hover:border-white cursor-pointer'"
                :tabindex="activeTab === 1 ? 0 : -1"
                :aria-selected="activeTab === 1"
                aria-controls="tabpanel-1"
                @click="activeTab = 1"
                @focus="activeTab = 1">
                🖼️ The Big Picture
            </button>
            <button id="tab-2"
                class="inline-flex w-auto px-4 py-2 text-xs font-semibold duration-300 ease-out border rounded-r-full"
                :class="activeTab === 2 ? 'bg-white dark:bg-black text-black dark:text-white border-black dark:border-white' : 'bg-black dark:bg-white hover:bg-white dark:hover:bg-black text-white dark:text-black hover:text-black dark:hover:text-white border-black dark:border-white hover:border-black dark:hover:border-white cursor-pointer'"
                :tabindex="activeTab === 2 ? 0 : -1"
                :aria-selected="activeTab === 2"
                aria-controls="tabpanel-2"
                @click="activeTab = 2"
                @focus="activeTab = 2">
                🖌️ The Important Details
            </button>
        </div> -->
        <article x-show="activeTab === 1" role="tabpanel" tabindex="0" id="tabpanel-1" aria-labelledby="tab-1">
        <h2>Situation:</h2>
        <p>At the start of my tenure as a UX designer on Red Hat's award-winning Customer Portal, I was tasked with adding a link for an additional product section to one of the navigation dropdown menus. I realized this would be the eighth item in that menu, with several more products slated for addition soon after. Given the menu's current design, these additions would render the navigation unwieldy and user-unfriendly. Recognizing this issue, I proposed to my manager that a comprehensive redesign of the navigation was necessary. I offered to explore redesign options and received approval to proceed.</p>
        <h2>Task:</h2>
        <p>My task was to redesign the navigation system for the Customer Portal to accommodate the growing number of product sections while maintaining user-friendliness and efficiency. This involved analyzing the current navigation structure, researching best practices for complex menu systems, and developing a solution that would scale with the addition of new products. I needed to create a design that would improve the user experience while also being technically feasible to implement within our existing framework.</p>
        <h2>Action:</h2>
        <p>I began by working closely with our SEO specialist to analyze navigation usage and traffic patterns. I also partnered with product owners to identify areas they deemed most useful for users.</p>

<p>IAfter establishing a baseline for navigation usability, I designed a new navigation structure and information architecture for the Customer Portal. I conducted usability testing sessions with users from across the globe to test and quickly iterate on my proposed changes.</p>

<p>IOnce the design was thoroughly tested and finalized, I collaborated with our development team to implement the new navigation. Simultaneously, I worked with product teams across the organization to redesign their product pages, aiming to better surface information that users were seeking.</p>
            <h2>Result:</h2>
            <p>After implementing the new navigation and product pages, I continued to collaborate with our SEO specialist and product owners to monitor the effectiveness of the changes. The improvements I proposed and implemented yielded significant results:</p>
            <ul>
                <li>20% increase in traffic to content</li>
                <li>Elevated visibility of important content—previously in the bottom 1%—to the top 50 pieces</li>
                <li>15% increase in time spent on site</li>
                <li>12% decrease in help requests</li>
                <li>20% increase in Google indexing due to the architectural changes</li>
            </ul>
        </article>
        <!-- <article x-show="activeTab === 2" role="tabpanel" tabindex="0" id="tabpanel-2" aria-labelledby="tab-2">
            <div class="not-prose">
            </div>
        </article> -->
    </div>

</div>
