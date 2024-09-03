---
title: Enterprise Design System
description: Case Study
dates: 2020 - 2024
image: /assets/images/portfolio/CAP-DS/CAPDS-cover.png
---

<div class="flex items-center justify-center w-fit mt-16">
    <div x-data="{ tab: 'overview' }">
        <div class="flex rounded shadow items-center justify-center mx-auto max-w-fit -translate-y-1/2">
            <button @click="tab = 'overview'" :class="{ 'bg-neutral-900 text-white border-black': tab === 'overview' }" class="inline-flex w-auto px-4 py-2 text-xs font-semibold duration-300 ease-out border rounded-l-md bg-transparent text-neutral-900 border-white" type="button">
                ✈️ 30,000 foot view
              </button>
              <button @click="tab = 'contributions'" :class="{ 'bg-neutral-900 text-white border-black': tab === 'contributions' }" class="inline-flex w-auto px-4 py-2 text-xs font-semibold duration-300 ease-out border rounded-r-md bg-transparent text-black border-white" type="button">
                🚁 10,000 foot view
              </button>
        </div>
        <div x-show="tab === 'overview'">
            <div id="overview">
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
            </div>
            <div id="objectives">
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
            </div>
        </div>
        <div x-show="tab === 'contributions'">
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
        </div>
    </div>
</div>