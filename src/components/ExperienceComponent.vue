<script setup>
    import { ref, onMounted } from 'vue';
    import { ExperienceTimeline } from './timeline';
    import { TechParallax } from './parallax';
    import { HTML, CSS, JS, PHP, MySql, Java, C, CPP, NodeJS, Tailwind, ReactJS, NextJS, VueJS, CodeIgniter, Laravel, Git, Figma } from '../assets'

    const TechData = [
        HTML, CSS, JS, C, CPP, Java, NodeJS, PHP, MySql, 
        Tailwind, ReactJS, NextJS, VueJS, CodeIgniter, Laravel,
        Git, Figma,
    ]

    const aboutTitle = ref(null);
    const techData = ref([])
    const title = 'WORK EXPERIENCE';
  
    onMounted(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, options);
  
        observer.observe(aboutTitle.value);
        techData.value.forEach(ref => observer.observe(ref))
    });
</script>

<template>
    <div class="max-w-7xl mx-auto relative z-0 sm:px-16 px-6 sm:py-16 py-10" id="work">
        <div ref="aboutTitle" class="fade-in-down text-center">
            <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">{{ title }}</h2>
        </div>
        <ExperienceTimeline />
        <div class="flex justify-center">
            <div class="flex flex-wrap justify-center">
                <div v-for="(Tech, index) in TechData" :key="index" :ref="el => techData[index] = el" class="fade-in-down" :style="{ transitionDelay: `${index * .4}s` }">
                    <TechParallax :image="Tech" />
                </div>
            </div>
        </div>
    </div>
</template>