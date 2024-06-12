<script setup>
    import { ref, onMounted, onUnmounted } from 'vue';
    import VanillaTilt from 'vanilla-tilt';
    import { Avatar } from '../../assets';

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
        <div class="blue-gradient lg:w-[320px] lg:h-[320px] w-[250px] h-[250px] rounded-full relative overflow-y-hidden">
            <img :src="Avatar" class="w-[100%] me-5 profile-image absolute bottom-0" />
        </div>
    </div>
</template>
