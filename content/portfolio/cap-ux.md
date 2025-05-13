---
title: Enterprise Product Design
company: Conduent
description: Case Study
dates: 2020 - 2024
image: /assets/images/portfolio/CAP-UI/CAPUI-cover.png
---

<div class="flex items-center justify-center w-full mt-16">
    <div x-data="{ activeTab: 1 }" class="w-full">
        <div class="absolute w-fit h-px bg-linear-to-r from-transparent to-white md:from-white dark:from-transparent dark:to-neutral-950 md:dark:from-neutral-950 md:via-transparent md:dark:via-transparent md:to-white md:dark:to-neutral-950"></div>
        <div class="w-full h-px border-t border-dashed border-neutral-300 dark:border-neutral-600"></div>
        <div role="tablist" class="flex rounded-full shadow-sm items-center justify-center mx-auto max-w-fit -translate-y-1/2">
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
        </div>
        <article x-show="activeTab === 1" role="tabpanel" tabindex="0" id="tabpanel-1" aria-labelledby="tab-1">
            <h2>Project Overview</h2>
            <p>
                As a Sr Product Designer for Conduent, I helped create a new enterprise-level platform that allows engineers to efficiently build low-code solutions for a wide variety of our customers’ automated tasks. Designed in tandem with the CAP Design System, I worked with globally distributed teams to quickly create and validate solutions for our developers and engineers to implement.
            </p>
            <h2>Objectives</h2>
            <ul class="list-disc list-inside">
                <li>Create design principles for design and dev</li>
                <li>Incorporate and help refine design system usage</li>
                <li>Discover and document design patterns</li>
                <li>Provide flexible and comprehensive design solutions for various business needs</li>
            </ul>
            <h2>My Contributions</h2>
            <p>As the senior designer on the team, my experience working across various types of projects and teams came in handy as I helped maneuver our team through a transition from XD to Figma, backlogs in Axure DevOps, and cross-team communication with a global team of designers, developers, and PMs. As Brad Frost puts it, <a href="https://bradfrost.com/blog/post/job-title-its-complicated/">some people are bricks and some are mortar</a>. I’m the mortar.</p>
        </article>
        <article x-show="activeTab === 2" role="tabpanel" tabindex="0" id="tabpanel-2" aria-labelledby="tab-2">
            <div class="not-prose">
                <figure class="mt-16">
                    <figcaption class="mb-4 text-base">Sketching is an integral part of my design process where I'm able to quickly share and validate ideas. Below is a sketch of providing the ability to search by data types and receiving search results in real time via the dropdown. Sharing a photo of this with product mangement allowed for a quick thumbs-up to move forward with design and development.</figcaption>
                    <img src="/assets/images/portfolio/CAP-UI/cap-ui-search.jpeg" class="shadow-sm">
                </figure>
                <figure class="mt-16">
                    <figcaption class="mb-4 text-base">One of the most integral areas of the automation platform, the Workflow Builder is a low-code solution to creating custom workflows for a plethora of business needs. I continually iterated on the design and functionality of this part of the product alongside our solution engineers and architects. I created design patterns and built flexible components that allowed for the configuration of wide-ranging business needs.</figcaption>
                    <img src="/assets/images/portfolio/CAP-UI/workflowbuilder.png" class="shadow-sm">
                </figure>
                <figure class="mt-16">
                    <figcaption class="mb-4 text-base">In order to design the dashboards for our configurable customer-facing products, I created guidelines for color ussage, chart types dependent on data, and layout standards. Those guides helped create consistent and user-friendly experiences while allowing users to access powerful features like filtering and reporting.</figcaption>
                    <img src="/assets/images/portfolio/CAP-UI/dashboards.png" class="shadow-sm">
                </figure>
                <figure class="mt-16">
                    <figcaption class="mb-4 text-base">User management can become a complex beast, so keeing the user interface simplistic allowed users to easily find the information they need and quickly take action. This was a theme that was carried across the entire product as part of our product design guidelines.</figcaption>
                    <img src="/assets/images/portfolio/CAP-UI/users.png" class="shadow-sm">
                </figure>
            </div>
        </article>
    </div>

</div>
