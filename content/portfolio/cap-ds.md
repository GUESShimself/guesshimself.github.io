---
title: CAP Design System
company: Conduent
description: Case Study
dates: 2020 - 2024
image: /assets/images/portfolio/CAP-DS/CAPDS-cover.png
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
                A new automation platform and customer portal projects were being kicked off with
                development teams located across the globe. To streamline development processes and ensure
                consistency, I joined a small but mighty design team to build and develop the framework with the
                goal of empowering our teams to develop these new products in an accessible and user-friendly
                way.
            </p>
            <p>
                Our company, serving numerous industries including commercial, government, and
                transportation, faced significant challenges with inconsistent design practices across different
                teams. This led to inefficient processes and fragmented user experiences. Our division was
                tasked with creating a new platform built on new technology to enable engineers to deliver
                low-code solutions for various customer needs. To address these issues, our design team set out
                to build a design system to support the quick growth of our new enterprise-level product.
            </p>
            <h2>Objectives</h2>
            <ul class="list-disc list-inside">
                <li>Establish a consistent design language across these products.</li>
                <li>Improve collaboration between designers and developers working across global time zones.
                </li>
                <li>Enhance efficiency by reducing redundant work.</li>
                <li>Ensure accessibility standards are met across all components.</li>
            </ul>
            <h2>My Contributions</h2>
            <p>
                My work spanned nearly all aspects of the design system. I began with UI audits of
                initial designs and code, then built components in XD before migrating and rebuilding them in
                Figma. I also wrote our foundational CSS, established design standards & front-end guidelines,
                and ensured the continued maintenance, evangelism, and success of the design system.
            </p>
        </article>
        <article x-show="activeTab === 2" role="tabpanel" tabindex="0" id="tabpanel-2" aria-labelledby="tab-2">
            <h2>Audit and Discovery:</h2>
            <p>Just before I joined the team, our design lead had created a few early screens in Adobe XD to produce some main views during the development of an MVP. These designs formed the basis of our design system's foundational styles and components. During this phase, I worked closely with our development teams to understand the frameworks already in place. I used this information to build out our grid system within XD and document any component outliers for future implementation.</p>
            <h2>Design and Development:</h2>
            <p>Initially, we used Adobe XD for creating a shared library of styles and components. However, as our design library grew, we switched to Figma due to XD's limitations. I recreated our foundational styles and components in Figma and drove our documentation efforts using OneNote, which was already adopted across our organization. Links to documentation were included on component pages and vice-versa.In tandem with design efforts, I translated our foundational styles into a base Sass file and created initial documentation for our development teams. I worked closely with our UI development team to integrate our components into Storybook and set up workflows in Azure DevOps that incorporated automated testing for code consistency and accessibility.</p>
            <h2>Challenges</h2>
            <p>One major challenge was dealing with conflicts from other UI libraries that development teams had used to build initial views. These libraries caused issues with styling specificity. While I lobbied for stripping out the competing libraries, we had to manage with existing resources, creating a new epic in our backlog for future improvements.With our team spread across the globe, coordinating discussions was challenging. I often shared recordings of myself explaining my thought processes to allow design and development to continue during my offline hours. This approach was much appreciated by my colleagues and facilitated continuous progress.</p>
            <h2>Outcomes</h2>
            <p>The design system's creation in tandem with new view designs in Figma ensured seamless adoption. Constant communication between our design and development teams resulted in consistent and accessible implementation. Our efforts received high praise from other dev teams, product managers, and stakeholders for the high quality and ease of incorporating the design system's components into our products.</p>
            <h2>Lessons learned</h2>
            <p>Creating a successful design system requires buy-in from leadership, passionate and communicative teams, and a product-like approach. Proper planning, constant communication, purposeful inclusion, ample documentation, and ongoing maintenance are key to widespread adoption and continued relevance.</p>
            <h2>Conclusion</h2>
            <p>Despite initial reliance on other UI libraries, close collaboration with the design system team transformed our development processes. This led to more efficient workflows and a cohesively tailored user experience, ultimately enhancing our product offerings.</p>
            <div class="not-prose">
                <figure class="mt-16">
                    <figcaption class="mb-4 text-base">Sketching more than just UI flows, I often start my design thoughts on paper. The below image is my rough sketch of how we would organize and distribute our design system.</figcaption>
                    <img src="/assets/images/portfolio/CAP-DS/cap-ds-api.jpeg" class="shadow">
                </figure>
                <figure class="mt-16">
                    <figcaption class="mb-4 text-base">Creating annotations within Figma not only help designers and developers understand intended usage and functionality of components, but it also serves as a good double-check on consistency of design decisions.</figcaption>
                    <img src="/assets/images/portfolio/CAP-DS/cap-ds-table-behavior.png" class="shadow">
                </figure>
                <figure class="mt-16">
                    <figcaption class="mb-4 text-base">In order to help ensure accessibility was built into our components, I documented guidance on various aspects of usability, like keyboard-navigation as seen in the image below.</figcaption>
                    <img src="/assets/images/portfolio/CAP-DS/cap-ds-a11y-pick-list.png" class="shadow">
                </figure>
                <figure class="mt-16">
                    <figcaption class="mb-4 text-base">While I'm very efficient in both Figma and front-end code, I still find it faster to sketch my ideas out on paper prior to delving into a digital interface.</figcaption>
                    <img src="/assets/images/portfolio/CAP-DS/cap-ds-header.jpeg" class="shadow">
                </figure>
                <figure class="mt-16">
                    <figcaption class="mb-4 text-base">The humble button component does so much heavy lifting on many UIs. This is typically the first component I create when working on a new design system in order to help solidify initial design decisions like color, typography, spacing, rounded corners, etc, etc.</figcaption>
                    <img src="/assets/images/portfolio/CAP-DS/cap-ds-button.jpg" class="shadow">
                </figure>
            </div>
        </article>
    </div>

</div>
