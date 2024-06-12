<script setup>
    import { ref, onMounted } from 'vue';
    import { AI } from '../assets'
    import { ProfileParallax } from './parallax';

    const heroRef = ref(null);
    const profileRef = ref(null);
  
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
  
        observer.observe(heroRef.value);
        observer.observe(profileRef.value);
    });
</script>

<template>
    <div>
        <section id="home" class="relative w-full h-screen mx-auto">
            <div class="absolute inset-0 top-[120px]  max-w-7xl mx-auto sm:px-16 px-6 flex flex-row items-start gap-5">
                <div class="sm:flex lg:h-[90%] h-[70%] sm:items-center w-full">
                    <div ref="heroRef" class="relative z-[9] fade-in-right">
                        <h1 class="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2flex items-center">
                            <img :src="AI" class="lg:w-[120px] sm:w-[100px] sm:block hidden me-5" />
                            Hi, I'm <span class='text-first'> Zero</span>
                        </h1>
                        <p class="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
                            I'm a software and ai developer, <br class='sm:block hidden' />also a math teacher
                        </p>
                    </div>
                    <div class="sm:mt-0 mt-5 sm:absolute lg:top-[50%] sm:top-[35%] sm:translate-y-[-50%] sm:right-[50px] flex items-center justify-center">
                        <div ref="profileRef" class="fade-in-left">
                            <ProfileParallax />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>