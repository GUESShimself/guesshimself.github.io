---
title: CAP Design System
company: Conduent
description: Case Study
dates: 2020 - 2024
image: /assets/images/portfolio/CAP-DS/CAPDS-cover.png
---

<div class="flex items-center justify-center w-full mt-16">
    <div class="w-full">
        <div class="absolute w-fit h-px bg-gradient-to-r from-transparent to-white md:from-white dark:from-transparent dark:to-neutral-950 md:dark:from-neutral-950 md:via-transparent md:dark:via-transparent md:to-white md:dark:to-neutral-950"></div>
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
        <p>The company, which serves multiple industries like commercial, government, and transportation, faced a major challenge: its products were built by different teams across the globe without a consistent design language. This resulted in fragmented user experiences and inefficiencies. With a new initiative to develop an automation platform and customer portal, I joined a small design team tasked with creating a scalable design system to unify the products, improve efficiency, and ensure accessibility.</p>
        <h2>Task:</h2>
        <p>Our team was responsible for developing a design system that would:</p>
        <ul>
            <li>Create a consistent design language across multiple global products.</li>
            <li>Improve collaboration between designers and developers in different time zones.</li>
            <li>Enhance efficiency by minimizing redundant design and development work.</li>
            <li>Ensure all components met accessibility standards for a user-friendly experience.</li>
        </ul>
        <h2>Action:</h2>
        <ol>
            <li>
                <h3>Audit and Discovery:</h3>
                <ul>
                    <li>I conducted a detailed audit of the existing designs to form the foundation of the design system's styles and components.</li>
                    <li>I worked closely with developers to understand existing frameworks and incorporated their feedback to build components that would help us move away from 3rd party dependencies while documenting component variations for future use.</li>
                    <li>I leveraged resources provided by Brand, Marketing, and other design teams to help align and inform our design team's strategy.</li>
                </ul>
            </li>
            <li>
                <h3>Design and Development:</h3>
                <ul>
                    <li>I helped create and then migrate our design process from Adobe XD to Figma, where I built foundational style libraries, icon libraries, and component libraries to improve collaboration and efficiency.</li>
                    <li>I also translated design styles into Sass files, created documentation to guide developers in integrating components, and worked with the UI development team to integrate our components into Storybook.</li>
                    <li>Working closely with PMs, I spent a portion of my time helping maintain and organizing our product backlogs, assisting with project management duties, and aiding our design and dev teams with scrum master duties.</li>
                </ul>
            </li>
            <li>
                <h3>Overcoming Challenges:</h3>
                <ul>
                    <li>I faced significant issues with conflicting UI libraries used by different development teams. Although I proposed eliminating those libraries to streamline the design system, resource constraints prevented this change.</li>
                    <li>To bridge the communication gap due to time zone differences, I recorded video walkthroughs of my design decisions and shared them with global teams, allowing them to continue work seamlessly during my offline hours.</li>
                </ul>
            </li>
            <h2>Result:</h2>
            <p>The design system was successfully adopted across the teams, improving collaboration between design and development. The system's components were easy to implement, accessible, and reduced redundant work, earning praise from stakeholders and other teams. Our streamlined process led to a cohesive user experience, while ongoing documentation and communication ensured continuous updates and improvements. Ultimately, the design system transformed the development process, driving more efficient workflows and consistent, high-quality products.</p>
            <figure>
                <figcaption class="mb-4 text-base">Sketching more than just UI flows, I often start my design thoughts on paper. The below image is my rough sketch of how we would organize and distribute our design system.</figcaption>
                <img src="/assets/images/portfolio/CAP-DS/cap-ds-api.jpeg" class="shadow object-fill">
            </figure>
            <figure>
                <figcaption class="mb-4 text-base">Figma libraries&hellip;</figcaption>
                <img src="/assets/images/portfolio/CAP-DS/figma-libraries.png" class="shadow object-fill">
            </figure>
            <figure>
                <figcaption class="mb-4 text-base">Figma onboarding&hellip;</figcaption>
                <img src="/assets/images/portfolio/CAP-DS/figma-onboard.png" class="shadow object-fill">
            </figure>
            <figure>
                <figcaption class="mb-4 text-base">Figma guidelines&hellip;</figcaption>
                <img src="/assets/images/portfolio/CAP-DS/figma-guidelines.png" class="shadow object-fill">
            </figure>
            <figure class="mt-16">
                <figcaption class="mb-4 text-base">Creating annotations within Figma not only help designers and developers understand intended usage and functionality of components, but it also serves as a good double-check on consistency of design decisions.</figcaption>
            <img src="/assets/images/portfolio/CAP-DS/cap-ds-table-behavior.png" class="shadow object-fill">
            </figure>
            <figure class="mt-16">
                <figcaption class="mb-4 text-base">In order to help ensure accessibility was built into our components, I documented guidance on various aspects of usability, like keyboard-navigation as seen in the image below.</figcaption>
                <img src="/assets/images/portfolio/CAP-DS/cap-ds-a11y-pick-list.png" class="shadow object-fill">
            </figure>
            <figure class="mt-16">
                <figcaption class="mb-4 text-base">While I'm very efficient in both Figma and front-end code, I still find it faster to sketch my ideas out on paper prior to delving into a digital interface.</figcaption>
                <img src="/assets/images/portfolio/CAP-DS/cap-ds-header.jpeg" class="shadow object-fill">
            </figure>
            <figure class="mt-16">
                <figcaption class="mb-4 text-base">The humble button component does so much heavy lifting on many UIs. This is typically the first component I create when working on a new design system in order to help solidify initial design decisions like color, typography, spacing, rounded corners, etc, etc.</figcaption>
                <img src="/assets/images/portfolio/CAP-DS/cap-ds-button.jpg" class="shadow object-fill">
            </figure>
        </article>
        <!-- <article x-show="activeTab === 2" role="tabpanel" tabindex="0" id="tabpanel-2" aria-labelledby="tab-2">
            <div class="not-prose">
            </div>
        </article> -->
    </div>

</div>
