<script setup>
    import { ref, onMounted } from 'vue';
    import { Project } from '../constant';
    import { ProjectParallax } from './parallax';
  
    const aboutTitle = ref(null);
    const title = 'PROJECT';

    const descTitle = ref(null);
    const desc = "Here are a few examples of projects that reflect my skills and experience in tackling real-world tasks. With this portfolio, I aim to showcase my ability to handle complex challenges, work with various technologies, and manage projects efficiently.";

    const projectData = ref([])
    const project = Project;
  
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
        observer.observe(descTitle.value);
        projectData.value.forEach(ref => observer.observe(ref))
    });
</script>

<template>
    <div class="max-w-7xl mx-auto relative z-0 sm:px-16 px-6 sm:py-16 py-10" id="project">
        <div ref="aboutTitle" class="fade-in-down text-center">
            <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">{{ title }}</h2>
        </div>
        <div class="flex w-full justify-center">
            <div ref="descTitle" class='fade-in-down mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center'>
                {{ desc }}
            </div>
        </div>

        <div class='mt-20 flex flex-wrap gap-10'>
            <div v-for="(ser, index) in project" :key="index" :ref="el => projectData[index] = el" class="lg:w-[30%] md:w-[46%] w-full fade-in-right" :style="{ transitionDelay: `${index * .4}s` }">
                <ProjectParallax :title="ser.title" :icon="ser.icon" :used="ser.used" :time="ser.time" :link="ser.link" />
            </div>
        </div>

    </div>
</template>
  