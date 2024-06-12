<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';
    import VanillaTilt from 'vanilla-tilt';
    import { defineProps } from 'vue';

    const props = defineProps({
        image: String
    });

    const techElement = ref(null);

    onMounted(() => {
        if (techElement.value) {
            VanillaTilt.init(techElement.value, {
                max: 25,
                speed: 2000,
            });
        }
    });

    onUnmounted(() => {
        if (techElement.value && techElement.value.vanillaTilt) {
            techElement.value.vanillaTilt.destroy();
        }
    });
</script>

<template>
    <div ref="techElement">
        <div class="blue-gradient rounded-full m-2 p-4 ">
            <img :src="props.image" alt="Tech Data" class="md:h-[60px] h-[50px] rounded-full" />
        </div>
    </div>
</template>
