<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';
    import VanillaTilt from 'vanilla-tilt';
    import { defineProps } from 'vue';

    // Define and destructure props directly
    const props = defineProps({
        title: String,
        icon: String
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
        <div class="w-full green-blue-gradient p-[1px] rounded-[20px] shadow-card">
            <div class='bg-primary rounded-[20px] py-5 px-12 min-h-[50px] flex justify-evenly items-center'>
                <img :src="props.icon" :alt="props.title" class='w-16 h-16 object-contain' />
                <h3 class='text-white text-[18px] font-bold text-center ms-3'>
                    {{ props.title }}
                </h3>
            </div>
        </div>
    </div>
</template>
