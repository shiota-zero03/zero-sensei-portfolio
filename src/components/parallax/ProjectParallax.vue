<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';
    import VanillaTilt from 'vanilla-tilt';
    import { defineProps } from 'vue';

    // Define and destructure props directly
    const props = defineProps({
        title: String,
        icon: String,
        used: String,
        time: String,
        link: String,
    });

    const tiltElement = ref(null);

    onMounted(() => {
        if (tiltElement.value) {
            VanillaTilt.init(tiltElement.value, {
                max: 10,
                speed: 1000,
            });
        }
    });

    onUnmounted(() => {
        if (tiltElement.value && tiltElement.value.vanillaTilt) {
            tiltElement.value.vanillaTilt.destroy();
        }
    });
</script>

<template>
    <div ref="tiltElement">
        <div class="w-full green-blue-gradient p-[1px] rounded-[20px] shadow-card group">
            <a target="__blank" :href="props.link">
                <div class='bg-primary rounded-[20px] min-h-[50px] p-5'>
                    <div class="relative overflow-hidden rounded-[20px]">
                        <div>
                            <img :src="props.icon" :alt="props.title" class='w-full object-contain hover:opacity-50 duration-300 group-hover:opacity-50' />
                        </div>
                        <div class="absolute left-1 top-1 -translate-y-5 group-hover:translate-y-0 duration-300">
                            <small class="font-base font-bold"><em>{{ props.time }}</em></small>
                        </div>
                        <div class="w-full justify-center flex absolute top-[100%] transform translate-y-[100%] duration-300 group-hover:translate-y-[-50%] group-hover:top-[50%]">
                            <div class="text-center">
                                <h3 class='text-white text-[18px] font-bold text-center'>
                                    {{ props.title }}
                                </h3>
                                <small class="font-base"><em>{{ props.used }}</em></small>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>
