---
title: Facilities Management Products
company: FM:Systems
description: Case Study
dates: 2019 - 2020
image: /assets/images/portfolio/FMS/FMS-cover.png
---

<div class="flex items-center justify-center w-full mt-16">
    <div x-data="{ activeTab: 1 }" class="w-full">
        <div class="absolute w-fit h-px bg-linear-to-r from-transparent to-white md:from-white dark:from-transparent dark:to-neutral-950 md:dark:from-neutral-950 md:via-transparent md:dark:via-transparent md:to-white md:dark:to-neutral-950"></div>
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
            <p>When I joined FM:Systems as the sole UX/Product Designer, I was both excited and a bit apprehensive. The opportunity to take full ownership of the design process was a challenge I was eager to tackle. From research and ideation to prototyping and implementation, I was responsible for every stage of product design.</p>
            <h2>Challenges and Growth:</h2>
            <p>Working solo meant balancing a wide array of tasks. I had to be not just a designer, but also a researcher, strategist, and sometimes even a project manager. This role pushed me to quickly adapt and learn, ensuring that I could handle the full spectrum of design responsibilities. The autonomy allowed me to refine my decision-making skills and become more resourceful, especially when navigating legacy products and multiple platforms.</p>
            <h2>Design Process:</h2>
            <p>My design process was user-centric and iterative. I began with thorough research, conducting user interviews and analyzing feedback to understand pain points and needs. I used these insights to inform my ideation phase, where I created wireframes and user flows using Sketch and Adobe XD. Prototyping was an integral part of my process, allowing me to test and refine designs before final implementation. Collaboration with the development teams was crucial to ensure that the designs were translated effectively into the final products.</p>
            <h2>Collaboration:</h2>
            <p>As the only designer, effective communication with other departments was crucial. I regularly collaborated with developers to ensure the feasibility of my designs, and I worked closely with product management to align the product's design with our north star.</p>
            <h2>Lessons Learned:</h2>
            <p>This experience taught me the importance of flexibility and adaptability. I learned to manage my time effectively, prioritize tasks, and maintain a clear focus on user needs while balancing business goals. The role also strengthened my problem-solving skills, as I often had to find creative solutions to complex design challenges.</p>
            <h2>Conclusion:</h2>
            <p>My time at FM:Systems was incredibly rewarding. As the sole UX/Product Designer, I was able to drive significant design improvements that positively impacted the company's products and user experience. This role not only deepened my design expertise but also prepared me for future challenges in the ever-evolving field of UX and Product Design.</p>
        </article>
        <article x-show="activeTab === 2" role="tabpanel" tabindex="0" id="tabpanel-2" aria-labelledby="tab-2">
            <div>
                <h2>Key Projects:</h2>
                <p>One of the most significant projects I worked on was a web-based mobile app called FM:Mobile. The goal was to develop a new modern mobile app to replace a legacy mobile app. Through user research, talking with and visiting maintenance technicians and supervisors, I learned about seeveral pain points within their workflow. Working closely with product management and engineering, I was able to quickly prototype and test potential solutions which led to the design and development of a new mobile solution with offline storage, a new notification system, and improved integration with our desktop-based facilities management product.</p>
            </div>
            <div class="flex">
                <img src="/assets/images/portfolio/FMS/fm-mobile-offline.png" class="w-1/2" />
                <img src="/assets/images/portfolio/FMS/fm-mobile-filters.png" class="w-1/2" />
            </div>
        </article>
    </div>

</div>
