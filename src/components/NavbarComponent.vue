<script setup>
    import { NavMenu } from '../constant';
    import { Logo, Menu, Close } from '../assets';
    import { ref, onMounted, onUnmounted } from 'vue';

    const navMenu = NavMenu;
    const toggle = ref(false);
    const scrolled = ref(false)

    function toggleClick () {
        toggle.value = !toggle.value
    }

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 50) {
            scrolled.value = true;
        } else {
            scrolled.value = false;
        }
    };

    onMounted(() => {
        window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll);
    });
</script>
<template>
    <div>
        <nav :class="[scrolled ? 'bg-primary' : 'bg-transparent', 'duration-300 sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20']">

            <div class='w-full flex justify-between items-center max-w-7xl mx-auto'>

                <a href='#home' class='flex items-center gap-2'>
                    <img :src="Logo" alt='logo' class='w-9 h-9 object-contain' />
                    <p class='text-white text-[18px] font-bold cursor-pointer flex '>
                        Zero Sensei
                    </p>
                </a>

                <ul class="list-none hidden lg:flex flex-row gap-10">
                    <li v-for="nav in navMenu" :key="nav.linkTo" class="hover:text-white text-[18px] font-medium cursor-pointer text-secondary" >
                        <a :href="'#' + nav.linkTo">{{ nav.name }}</a>
                    </li>
                </ul>

                <div class='lg:hidden flex flex-1 justify-end items-center'>
                    <img :src="toggle ? Close : Menu" alt='menu' class='w-[28px] h-[28px] object-contain' @click="toggleClick()" />
                    <div :class="[!toggle ? 'hidden' : 'flex', 'p-6 blue-gradient absolute top-20 right-[5%] my-2 w-[90%] z-10 rounded-xl sm:px-16 px-6 sm:py-16 py-6']" >
                        <ul class='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            <li v-for="nav in navMenu" :key="nav.linkTo" class="font-poppins font-medium cursor-pointer text-[16px] text-secondary" @click="toggleClick()" >
                                <a :href="'#' + nav.linkTo">{{ nav.name }}</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        
        </nav>
    </div>
</template>