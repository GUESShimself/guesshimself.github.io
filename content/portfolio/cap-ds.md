---
title: CAP Design System
company: Conduent
description: Case Study
dates: 2020 - 2024
image: /assets/images/portfolio/CAP-DS/CAPDS-cover.png
alt: Cover image for case study that includes screenshots of component code, accessibility checklist, and documentation
---
<div class="case-study">
        <div class="mb-10">
                <h2 class="text-2xl font-semibold text-slate-700 dark:text-slate-100 mb-4">Overview</h2>
                <!-- Stats that are visible by default -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div class="bg-slate-50 dark:bg-slate-800 rounded-md shadow p-5 text-center border-t-4 border-slate-600 dark:border-slate-600">
                        <div class="text-2xl font-bold text-slate-600 dark:text-slate-100 mb-2">40%</div>
                        <div class="text-sm text-slate-600 dark:text-slate-100">Faster Development</div>
                    </div>
                    <div class="bbg-slate-50 dark:bg-slate-800 rounded-md shadow p-5 text-center border-t-4 border-slate-600 dark:border-slate-600">
                        <div class="text-2xl font-bold text-slate-600 dark:text-slate-100 mb-2">3</div>
                        <div class="text-sm text-slate-600 dark:text-slate-100">Products Unified</div>
                    </div>
                    <div class="bg-slate-50 dark:bg-slate-800 rounded-md shadow p-5 text-center border-t-4 border-slate-600 dark:border-slate-600">
                        <div class="text-2xl font-bold text-slate-600 mb-2 dark:text-slate-100 ">WCAG 2.1</div>
                        <div class="text-sm text-slate-600 dark:text-slate-100">AA Compliant</div>
                    </div>
                </div>
                <p class="mb-4">
                    As a Senior UX/UI Product Designer at Conduent, I helped lead the creation of the Conduent Automation Platform (CAP) Design System—a scalable, cross-product solution built on a foundation of 
                    <span class="text-slate-600 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50 cursor-pointer underline decoration-dotted font-medium expandable-trigger p-1 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md" 
                        data-target="design-components" 
                        tabindex="0" 
                        role="button" 
                        aria-expanded="false" 
                        aria-controls="design-components">modular components</span> 
                    that brought clarity, consistency, and 
                    <span class="text-slate-600 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50 cursor-pointer underline decoration-dotted font-medium expandable-trigger p-1 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md" 
                        data-target="accessibility" 
                        tabindex="0" 
                        role="button" 
                        aria-expanded="false" 
                        aria-controls="accessibility">accessibility compliance</span>
                    to a fragmented enterprise ecosystem.
                </p>
                <div id="design-components" class="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-md expandable-content">
                    <div class="p-4">
                        <p class="italic mb-4">...modular components built with flexibility and extensibility in mind, creating a foundation for unified product experiences.</p>
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-4 pt-4  border-t border-slate-500">Component Architecture</h3>
                        <p class="mb-4">We structured the system using atomic design principles, organizing components into four tiers:</p>
                        <ul class="list-disc pl-6">
                            <li class="mb-2"><span class="font-medium">Foundation</span>: color tokens, typography scales, spacing systems</li>
                            <li class="mb-2"><span class="font-medium">Core components</span>: buttons, inputs, checkboxes, etc.</li>
                            <li class="mb-2"><span class="font-medium">Patterns</span>: complex UI structures like forms, data tables, navigation</li>
                            <li class="mb-2"><span class="font-medium">Page templates</span>: reusable layouts for common use cases</li>
                        </ul>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <img src="/assets/images/portfolio/CAP-DS/component-architecture-diagram.png" alt="Component architecture diagram" class="w-full rounded-md">
                            <img src="/assets/images/portfolio/CAP-DS/component-variants-showcase.png" alt="Component variants showcase" class="w-full rounded-md">
                        </div>
                        <p>Each component was intentionally built with customization and variants in mind, allowing teams to address edge cases without breaking visual or functional consistency.</p>
                        <!-- <blockquote class="border-l-4 border-slate-600 pl-4 italic text-gray-600 my-4">
                            "The component library Eric created has dramatically improved our development velocity and product consistency. What used to take weeks now takes days." — Engineering Director
                        </blockquote> -->
                    </div>
                    <button class="w-full py-2 text-center text-slate-600 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 cursor-pointer transition-colors font-medium expandable-bottom-trigger" 
                            data-target="design-components"
                            tabindex="0"
                            role="button"
                            aria-expanded="true"
                            aria-controls="design-components">
                        <span class="trigger-icon text-xs align-middle">▲</span> Close
                    </button>
                </div>
                <div id="accessibility" class="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-md expandable-content">
                    <div class="p-4">
                        <p class="italic mb-0!">...accessibility compliance throughout the design system, ensuring all components met WCAG 2.1 AA standards and were usable by people with diverse abilities.</p>
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-4 pt-4  border-t border-slate-500 pt-2 border-t border-stone-500">Accessibility Implementation</h3>
                        <p class="mb-4">Accessibility wasn’t a bolt-on—it was a guiding principle from day one. We:</p>
                        <ul class="list-disc pl-6 mb-4">
                            <li class="mb-2">Met WCAG 2.1 AA contrast and interaction requirements</li>
                            <li class="mb-2">Supported full keyboard navigation and focus states</li>
                            <li class="mb-2">Used semantic markup and ARIA attributes to support screen readers</li>
                            <li class="mb-2">Designed responsive layouts that scaled cleanly up to 200% zoom</li>
                        </ul>
                        <img src="/assets/images/portfolio/CAP-DS/accessibility.png" alt="Accessibility audit tools and guidelines" class="w-full rounded-md mb-4">
                        <p class="mb-4">I also led accessibility documentation and ran cross-functional workshops to embed accessible design thinking into our process. This helped designers and engineers approach accessibility with clarity and consistency—not confusion.</p>
                    </div>
                    <button class="w-full py-2 text-center text-slate-600 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 cursor-pointer transition-colors font-medium expandable-bottom-trigger" 
                            data-target="accessibility"
                            tabindex="0"
                            role="button"
                            aria-expanded="true"
                            aria-controls="accessibility">
                        <span class="trigger-icon text-xs align-middle">▲</span> Close
                    </button>
                </div>
            </div>
            <!-- Another visible image to break up content -->
            <img src="/assets/images/portfolio/CAP-DS/cap-ds-cover.png" alt="Design system button components and documentation" class="w-full rounded-lg shadow-lg mb-8 object-cover max-h-96">
            <div class="mb-10">
                <h2 class="text-2xl font-semibold text-slate-700 dark:text-slate-100 mb-4">The Challenge</h2>
                <p class="mb-4">
                    Conduent’s product suite was grappling with serious 
                    <span class="text-slate-600 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50 cursor-pointer underline decoration-dotted font-medium expandable-trigger p-1 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md" data-target="legacy-issues" 
                        tabindex="0" 
                        role="button" 
                        aria-expanded="false" 
                        aria-controls="legacy-issues">consistency issues</span>.
                    Years of independent development had led to siloed products, each with its own UI patterns, visual language, and interaction quirks. This lack of cohesion slowed teams down, introduced usability challenges, and resulted in 
                    <span class="text-slate-600 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50 cursor-pointer underline decoration-dotted font-medium expandable-trigger p-1 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md" data-target="key-problems" 
                        tabindex="0" 
                        role="button" 
                        aria-expanded="false" 
                        aria-controls="key-problems">increased development time</span>
                    and fragmented user journeys.
                </p>
                <div id="legacy-issues" class="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-md expandable-content">
                    <div class="p-4">
                        <p class="italic mb-4">...consistency issues stemming from years of independent product development across different business units and acquired companies.</p>
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-4 pt-4  border-t border-slate-500">System Fragmentation</h3>
                        <p class="mb-4">During our audit, we found:</p>
                        <ul class="list-disc pl-6 mb-4">
                            <li class="mb-2">12 different button styles with conflicting states</li>
                            <li class="mb-2">8 color palettes, many of them off-brand</li>
                            <li class="mb-2">Form and layout patterns all over the map</li>
                            <li class="mb-2">Navigation that changed from app to app</li>
                            <li class="mb-2">No standardized spacing or type scale</li>
                        </ul>
                        <!-- <img src="/api/placeholder/400/300" alt="Inconsistent UI elements from different products" class="w-full rounded-md">
                        <img src="/api/placeholder/400/300" alt="UI audit findings visualization" class="w-full rounded-md"> -->
                        <p class="mb-4">The lack of consistency increased cognitive load for users and slowed teams down. Fixing this was more than a design task—it was a business necessity.</p>
                    </div>
                    <button class="w-full py-2 text-center text-slate-600 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 cursor-pointer transition-colors font-medium expandable-bottom-trigger" data-target="legacy-issues"
                            tabindex="0"
                            role="button"
                            aria-expanded="true"
                            aria-controls="legacy-issues">
                        <span class="trigger-icon text-xs align-middle">▲</span> Close
                    </button>
                </div>
                <div id="key-problems" class="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-md expandable-content">
                    <div class="p-4">
                        <p class="italic mb-4">...increased development time, higher training costs, and accessibility concerns that needed to be addressed systematically.</p>
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-4 pt-4  border-t border-slate-500">Business Impact of Fragmentation</h3>
                        <p class="mb-4">The inconsistency had a clear cost:</p>
                        <ul class="list-disc pl-6 mb-4">
                            <li class="mb-2">40% longer development cycles for UI features</li>
                            <li class="mb-2">More QA hours chasing visual and functional bugs</li>
                            <li class="mb-2">Gaps in accessibility creating legal risk</li>
                            <li class="mb-2">Expensive onboarding and training</li>
                            <li class="mb-2">Eroded trust in the brand’s visual identity</li>
                        </ul>
                        <!-- <img src="/api/placeholder/700/350" alt="Development cycle comparison chart" class="w-full rounded-md mb-4"> -->
                        <p class="mb-4">Product and engineering leads were especially concerned about velocity. Teams needed a way to ship faster without sacrificing quality—or reinventing basic components every time.</p>
                    </div>
                    <button class="w-full py-2 text-center text-slate-600 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 cursor-pointer transition-colors font-medium expandable-bottom-trigger" data-target="key-problems"
                            tabindex="0"
                            role="button"
                            aria-expanded="true"
                            aria-controls="key-problems">
                        <span class="trigger-icon text-xs align-middle">▲</span> Close
                    </button>
                </div>
            </div>
            <!-- Another visible image to break up content -->
            <figure class="mb-8">
                <img src="/assets/images/portfolio/CAP-DS/cap-ds-table-behavior.png" alt="CAP Table component documentation" class="w-full rounded-lg shadow-lg mb-8 object-cover max-h-96">
                <figcaption class="text-sm text-gray-600 dark:text-gray-400 mt-2 italic text-center">
                    To improve clarity, documentation for complex components like the table grid was broken down into smaller, more manageable organisms.
                </figcaption>
            </figure>
            <div class="mb-10">
                <h2 class="text-2xl font-semibold text-slate-700 dark:text-slate-100 mb-4">The Process</h2>
                <p class="mb-4">
                    We approached the CAP Design System as more than a UI toolkit—it was a strategic initiative that started with 
                    <span class="text-slate-600 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50 cursor-pointer underline decoration-dotted font-medium expandable-trigger p-1 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md" data-target="research-process" 
                        tabindex="0" 
                        role="button" 
                        aria-expanded="false" 
                        aria-controls="research-process">extensive research</span> 
                    and conversations with stakeholders across product, design, and engineering. From there, I worked closely with teams to define and deliver a  
                    <span class="text-slate-600 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50 cursor-pointer underline decoration-dotted font-medium expandable-trigger p-1 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md" data-target="component-development" 
                        tabindex="0" 
                        role="button" 
                        aria-expanded="false" 
                        aria-controls="component-development">scalable component library</span>
                    that could flex across different product needs without compromising consistency.
                </p>
                <div id="research-process" class="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-md expandable-content">
                    <div class="p-4">
                        <p class="italic mb-4">...extensive research including competitive analysis, user interviews, and UI audits to understand both user needs and system requirements.</p>
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-4 pt-4  border-t border-slate-500">Research Methodology</h3>
                        <p class="mb-4">The research phase included:</p>
                        <ul class="list-disc pl-6 mb-4">
                            <li class="mb-2">UI audits of key products</li>
                            <li class="mb-2">Competitive benchmarking across 8 SaaS platforms</li>
                            <li class="mb-2">Interviews with many stakeholders across design, product, and engineering</li>
                            <li class="mb-2">Workshops to align on shared use cases and pain points</li>
                            <li class="mb-2">User research to understand pain points with existing interfaces</li>
                        </ul>
                        <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <img src="/api/placeholder/400/300" alt="Research methodology diagram" class="w-full rounded-md">
                            <img src="/api/placeholder/400/300" alt="Stakeholder workshop session" class="w-full rounded-md">
                        </div> -->
                        <p class="mb-4">The research provided critical insights into both the technical requirements and user needs that would drive the design system. It also helped identify priority components and patterns that would deliver the most immediate value.</p>
                        <!-- <blockquote class="border-l-4 border-slate-600 pl-4 italic text-gray-600 my-4">
                            "The research Eric conducted helped us understand that we weren't just building pretty UI components—we were creating the foundation for our entire product experience." — Product Manager
                        </blockquote> -->
                    </div>
                    <button class="w-full py-2 text-center text-slate-600 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 cursor-pointer transition-colors font-medium expandable-bottom-trigger" data-target="research-process"
                            tabindex="0"
                            role="button"
                            aria-expanded="true"
                            aria-controls="research-process">
                        <span class="trigger-icon text-xs align-middle">▲</span> Close
                    </button>
                </div>
                <div id="component-development" class="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-md expandable-content">
                    <div class="p-4">
                        <p class="italic mb-4">...scalable component library through an iterative process that balanced standardization with the flexibility needed for diverse product requirements.</p>
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-4 pt-4  border-t border-slate-500">Component Design & Development</h3>
                        <p class="mb-4">We followed a structured approach:</p>
                        <ol class="list-decimal pl-6 mb-4">
                            <li class="mb-2">Define design principles and system architecture</li>
                            <li class="mb-2">Build foundational elements (color, type, spacing)</li>
                            <li class="mb-2">Design core components with robust variant support</li>
                            <li class="mb-2">Create usage documentation and guidelines</li>
                            <li class="mb-2">Review with cross-functional teams</li>
                            <li class="mb-2">Refine after implementation feedback</li>
                            <li class="mb-2">Publish to Figma and Storybook for broad access</li>
                        </ol>
                        <img src="/assets/images/portfolio/CAP-DS/cap-ds-api.jpeg" alt="Component design iterations" class="w-full rounded-md">
                        <!-- <img src="/api/placeholder/300/200" alt="Figma component library" class="w-full rounded-md">
                        <img src="/api/placeholder/300/200" alt="Storybook documentation" class="w-full rounded-md"> -->
                        <p class="mb-4">We used atomic design to ensure scalability: smaller elements built into patterns, then templates. Every component was usability tested and engineering-reviewed before release.</p>
                    </div>
                    <button class="w-full py-2 text-center text-slate-600 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 cursor-pointer transition-colors font-medium expandable-bottom-trigger" data-target="component-development"
                            tabindex="0"
                            role="button"
                            aria-expanded="true"
                            aria-controls="component-development">
                        <span class="trigger-icon text-xs align-middle">▲</span> Close
                    </button>
                </div>
            </div>
            <!-- Another visible image to break up content -->
            <figure class="mb-8">
                <img src="/assets/images/portfolio/CAP-DS/cap-ds-button.jpg" alt="Botton component variants" class="w-full rounded-lg shadow-lg mb-8 object-cover max-h-96">
                <figcaption class="text-sm text-gray-600 dark:text-gray-400 mt-2 italic text-center">
                    The first component built was the Button, as many of the initial design decisions for the system, such as color, spacing, typography, interaction states, and accessibility behavior, could be defined and tested through it.
                </figcaption>
            </figure>
            <div class="mb-10">
                <h2 class="text-2xl font-semibold text-slate-700 dark:text-slate-100 mb-4">The Solution</h2>
                <p class="mb-4">
                    We structured the system around three tightly integrated pillars:
                    <span class="text-slate-600 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50 cursor-pointer underline decoration-dotted font-medium expandable-trigger p-1 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md" data-target="figma-library" 
                        tabindex="0" 
                        role="button" 
                        aria-expanded="false" 
                        aria-controls="figma-library">a comprehensive Figma library</span>,
                    <span class="text-slate-600 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50 cursor-pointer underline decoration-dotted font-medium expandable-trigger p-1 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md" data-target="component-code" 
                        tabindex="0" 
                        role="button" 
                        aria-expanded="false" 
                        aria-controls="component-code">reusable code components</span>, and
                    <span class="text-slate-600 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50 cursor-pointer underline decoration-dotted font-medium expandable-trigger p-1 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md" data-target="documentation" 
                        tabindex="0" 
                        role="button" 
                        aria-expanded="false" 
                        aria-controls="documentation">detailed documentation</span>.
                    This end-to-end approach helped teams design and build with confidence, ensuring consistency from concept to code.
                </p>
                <div id="figma-library" class="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-md expandable-content">
                    <div class="p-4">
                        <p class="italic mb-4">...a comprehensive Figma library that provided designers with ready-to-use components, styles, and templates to accelerate the design process.</p>
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-4 pt-4  border-t border-slate-500">Figma Component Library</h3>
                        <p class="mb-4">The library included:</p>
                        <ul class="list-disc pl-6 mb-4">
                            <li class="mb-2">Design tokens implemented as Figma variables</li>
                            <li class="mb-2">Core components with smart properties and variants</li>
                            <li class="mb-2">Auto-layout-based templates</li>
                            <li class="mb-2">Example screens showing components in context</li>
                            <li class="mb-2">In-component documentation for clarity</li>
                        </ul>
                        <img src="/assets/images/portfolio/CAP-DS/figma-libraries.png" alt="Figma component library overview" class="w-full rounded-md mb-4">
                        <p class="mb-4">We structured everything to promote speed and flexibility—designers could drop in components and adapt them without breaking consistency.</p>
                    </div>
                    <button class="w-full py-2 text-center text-slate-600 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 cursor-pointer transition-colors font-medium expandable-bottom-trigger" data-target="figma-library"
                            tabindex="0"
                            role="button"
                            aria-expanded="true"
                            aria-controls="figma-library">
                        <span class="trigger-icon text-xs align-middle">▲</span> Close
                    </button>
                </div>
                <div id="component-code" class="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-md expandable-content">
                    <div class="p-4">
                        <p class="italic mb-4">...reusable code components that implemented the design specifications with precision, ensuring visual fidelity and functional consistency.</p>
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-4 pt-4  border-t border-slate-500">Code Implementation</h3>
                        <p class="mb-4">Partnering closely with engineers, we delivered:</p>
                        <ul class="list-disc pl-6 mb-4">
                            <li class="mb-2">A CSS variable system using custom properties</li>
                            <li class="mb-2">Angular components mirroring the Figma library</li>
                            <li class="mb-2">IBuilt-in accessibility behavior</li>
                            <li class="mb-2">Performance-optimized, reusable code</li>
                            <li class="mb-2">Integration support for existing front-end stacks</li>
                        </ul>
                        <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <img src="/api/placeholder/400/300" alt="Code component structure" class="w-full rounded-md">
                            <img src="/api/placeholder/400/300" alt="Component testing in browser" class="w-full rounded-md">
                        </div> -->
                        <p class="mb-4">Every component was stress-tested for responsiveness, accessibility, and browser support before being shipped to production.</p>
                    </div>
                    <button class="w-full py-2 text-center text-slate-600 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 cursor-pointer transition-colors font-medium expandable-bottom-trigger" data-target="component-code"
                            tabindex="0"
                            role="button"
                            aria-expanded="true"
                            aria-controls="component-code">
                        <span class="trigger-icon text-xs align-middle">▲</span> Close
                    </button>
                </div>
                <div id="documentation" class="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-md expandable-content">
                    <div class="p-4">
                        <p class="italic mb-4">...detailed documentation that provided clear guidelines, usage examples, and best practices for using the design system effectively.</p>
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-4 pt-4  border-t border-slate-500">System Documentation</h3>
                        <p class="mb-4">We treated documentation as a first-class deliverable:</p>
                        <ul class="list-disc pl-6 mb-4">
                            <li class="mb-2">Clear guidelines for when and how to use each component</li>
                            <li class="mb-2">Accessibility dos and don’ts</li>
                            <li class="mb-2">Developer notes, code examples, and integration details</li>
                            <li class="mb-2">Decision trees to help teams pick the right UI patterns</li>
                            <li class="mb-2">A living portal (via Storybook) that served as a shared source of truth</li>
                        </ul>
                        <img src="/assets/images/portfolio/CAP-DS/figma-guidelines.png" alt="Design system guidelines" class="w-full rounded-md mb-4">
                        <p class="mb-4">We also baked governance and contribution rules into the documentation to keep the system sustainable and collaborative.</p>
                    </div>
                    <button class="w-full py-2 text-center text-slate-600 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 cursor-pointer transition-colors font-medium expandable-bottom-trigger" data-target="documentation"
                            tabindex="0"
                            role="button"
                            aria-expanded="true"
                            aria-controls="documentation">
                        <span class="trigger-icon text-xs align-middle">▲</span> Close
                    </button>
                </div>
            </div>
            <!-- Another visible image to break up content -->
            <img src="/assets/images/portfolio/CAP-DS/cap-ds-a11y-pick-list.png" alt="CAP Pick List accessibility documentation" class="w-full rounded-lg shadow-lg mb-8 object-cover max-h-96">
            <div class="mb-10">
                <h2 class="text-2xl font-semibold text-slate-700 dark:text-slate-100 mb-4">Results & Impact</h2>
                <p class="mb-4">
                    The results spoke for themselves. The CAP Design System delivered 
                    <span class="text-slate-600 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50 cursor-pointer underline decoration-dotted font-medium expandable-trigger p-1 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md" data-target="business-impact" 
                        tabindex="0" 
                        role="button" 
                        aria-expanded="false" 
                        aria-controls="business-impact">significant business value</span>—not just in terms of faster development and better UX, but in the way it 
                    <span class="text-slate-600 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50 cursor-pointer underline decoration-dotted font-medium expandable-trigger p-1 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md" data-target="team-impact" 
                        tabindex="0" 
                        role="button" 
                        aria-expanded="false" 
                        aria-controls="team-impact">transformed how teams collaborated</span>. It became a shared language that brought designers and developers together, aligned efforts, and raised the bar across the board.
                </p>
                <div id="business-impact" class="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-md expandable-content">
                    <div class="p-4">
                        <p class="italic mb-4">...significant business value with measurable improvements in development velocity, product quality, and user satisfaction.</p>
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-4 pt-4  border-t border-slate-500">Quantifiable Outcomes</h3>
                        <p class="mb-4">Across four major product teams, we saw:</p>
                        <ul class="list-disc pl-6 mb-4">
                            <li class="mb-2">40% faster UI development</li>
                            <li class="mb-2">60% drop in visual/UI bugs</li>
                            <li class="mb-2">75% faster design-to-dev handoff</li>
                            <li class="mb-2">Full WCAG 2.1 AA compliance</li>
                            <li class="mb-2">Easier cross-product onboarding for end users</li>
                        </ul>
                        <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <img src="/api/placeholder/400/300" alt="Before and after comparison" class="w-full rounded-md">
                            <img src="/api/placeholder/400/300" alt="Performance metrics dashboard" class="w-full rounded-md">
                        </div>
                        <p class="mb-4">The system also enabled faster product launches, with one product team reducing their design-to-development cycle from 8 weeks to just 3 weeks for a major feature update.</p> -->
                        <!-- <blockquote class="border-l-4 border-slate-600 pl-4 italic text-gray-600 my-4">
                            "The ROI on the design system has been remarkable. Not only are we building faster, but what we're building is more consistent and of higher quality." — VP of Product
                        </blockquote> -->
                    </div>
                    <button class="w-full py-2 text-center text-slate-600 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 cursor-pointer transition-colors font-medium expandable-bottom-trigger" data-target="business-impact"
                            tabindex="0"
                            role="button"
                            aria-expanded="true"
                            aria-controls="business-impact">
                        <span class="trigger-icon text-xs align-middle">▲</span> Close
                    </button>
                </div>
                <div id="team-impact" class="max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded-md expandable-content">
                    <div class="p-4">
                        <p class="italic mb-4">...transformed how teams collaborated by creating a shared language and reference point for both designers and developers.</p>
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-4 pt-4  border-t border-slate-500">Cultural & Process Impact</h3>
                        <p class="mb-4">The intangible wins were just as meaningful:</p>
                        <ul class="list-disc pl-6 mb-4">
                            <li class="mb-2">Tighter collaboration between design and dev</li>
                            <li class="mb-2">Reduced design review time (thanks to clear standards)</li>
                            <li class="mb-2">Easier onboarding for new team members</li>
                            <li class="mb-2">A shared design vocabulary that built trust and alignment</li>
                            <li class="mb-2">More space to focus on the experience—not the pixels</li>
                        </ul>
                        <img src="/assets/images/portfolio/CAP-DS/figma-onboard.png" alt="Figma CAP DS onboarding" class="w-full rounded-md mb-4">
                        <p class="mb-4">The CAP Design System didn’t just solve consistency issues—it helped design become a strategic asset for the business. It showed that thoughtful systems thinking could reduce friction, speed up delivery, and raise the quality bar across the board.</p>
                    </div>
                    <button class="w-full py-2 text-center text-slate-600 dark:text-slate-200 hover:text-slate-700 dark:hover:text-slate-50 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 cursor-pointer transition-colors font-medium expandable-bottom-trigger" data-target="team-impact"
                            tabindex="0"
                            role="button"
                            aria-expanded="true"
                            aria-controls="team-impact">
                        <span class="trigger-icon text-xs align-middle">▲</span> Close
                    </button>
                </div>
            </div>
            <!-- Another visible image to break up content -->
            <figure class="mb-8">
                <img 
                    src="/assets/images/portfolio/CAP-DS/cap-ds-header.jpeg" 
                    alt="Sketch of header component prior to Figma work" 
                    class="w-full rounded-lg shadow-lg object-cover max-h-96"
                >
                <figcaption class="text-sm text-gray-600 dark:text-gray-400 mt-2 italic text-center">
                    Early sketches of the CAP header component design, created before implementation in Figma
                </figcaption>
            </figure>
            <div class="mt-12 pt-4 border-t border-gray-200 text-sm text-gray-500">
                Click on the highlighted text to expand sections and see more detailed information about each aspect of the project.
            </div>
            </div>
