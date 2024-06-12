<script setup>
    import { ref, onMounted } from 'vue';
    import { Works } from '../../constant';

    const workData = ref([])
    const works = Works;

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
  
        workData.value.forEach(ref => observer.observe(ref))
    });
</script>
<template>
    <div class="mt-20">
        <ol class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li v-for="(work, index) in works" :key="index" :ref="el => workData[index] = el" class="relative mb-6 sm:mb-6 fade-in-right" :style="{ transitionDelay: `${index * .2}s` }">
                <div class="flex items-center">
                    <div class="z-10 flex items-center justify-center p-2 green-blue-gradient rounded-full shrink-0">
                        <div class="bg-white py-2 md:px-4 px-3 rounded-full">
                            <img :src="work.icon" alt="" class="md:h-8 h-6">
                        </div>
                    </div>
                    <div class="flex w-full bg-white h-0.5"></div>
                </div>
                <div class="mt-2 blue-gradient md:p-2 p-1 rounded-2xl h-[90%]">
                    <div class="bg-primary md:p-3 p-3 rounded-2xl h-full relative">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ work.position }}</h3>
                        <time class="block mb-3 text-sm font-normal leading-none text-secondary">{{ work.location }}</time>
                        <div class="text-xs font-normal text-white mt-2" v-html="work.description"></div>
                        <time class="block mt-3 text-xs font-normal leading-none text-secondary italic absolute bottom-5">{{ work.periode }}</time>
                    </div>
                </div>
            </li>
        </ol>
        <br /><br /><br /><br /><br />
    </div>
</template>