---
title: Enterprise Product Design
company: Conduent
description: Case Study
dates: 2020 - 2024
image: /assets/images/portfolio/CAP-UI/CAPUI-cover.png
---

<div class="flex items-center justify-center w-fit mt-16">
    <div x-data="{ activeTab: 1 }">
        <div class="absolute w-fit h-px bg-gradient-to-r from-transparent to-white md:from-white dark:from-transparent dark:to-neutral-950 md:dark:from-neutral-950 md:via-transparent md:dark:via-transparent md:to-white md:dark:to-neutral-950"></div>
        <div class="w-full h-px border-t border-dashed border-neutral-300 dark:border-neutral-600"></div>
        <div role="tablist" class="flex rounded-full shadow items-center justify-center mx-auto max-w-fit -translate-y-1/2">
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
            <h2>Coming soon&hellip;</h2>
        </article>
    </div>

</div>
