<script setup>
    import { ref, onMounted } from 'vue';
    import { Services } from '../constant';
    import { AboutParallax } from './parallax';
  
    const aboutTitle = ref(null);
    const title = 'ABOUT ME';

    const descTitle = ref(null);
    const desc = "I have an interest in mathematics education, the web. application developer and robotics. So far I have often won mathematics competitions and have created a website. My dream is to create a robot that can understand human feelings";

    const serviceData = ref([])
    const services = Services;
  
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
        serviceData.value.forEach(ref => observer.observe(ref))
    });
</script>

<template>
    <div class="max-w-7xl mx-auto relative z-0 sm:px-16 px-6 sm:py-16 py-10" id="about">
        <div ref="aboutTitle" class="fade-in-down text-center">
            <h2 class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">{{ title }}</h2>
        </div>
        <div class="flex w-full justify-center">
            <div ref="descTitle" class='fade-in-down mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center'>
                {{ desc }}
            </div>
        </div>

        <div class='mt-20 flex flex-wrap gap-10'>
            <div v-for="(ser, index) in services" :key="index" :ref="el => serviceData[index] = el" class="lg:w-[30%] md:w-[46%] w-full fade-in-right" :style="{ transitionDelay: `${index * .4}s` }">
                <AboutParallax :title="ser.title" :icon="ser.icon" />
            </div>
        </div>

    </div>
</template>
  