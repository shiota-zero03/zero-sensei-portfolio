<script setup>
    import emailjs from '@emailjs/browser';
    import { ref, onMounted } from 'vue';
    import { LastChapter } from './3d';

    import Swal from 'sweetalert2';

    const formRef = ref(null);
    const ref3D = ref(null);
    const loadingSend = ref(false)
    const formData = ref({
        name: '',
        email: '',
        message: ''
    })

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
  
        observer.observe(formRef.value);
        observer.observe(ref3D.value)
    });

    function submitForm() {
        loadingSend.value = true
        const sendFormData = {
            name: formData.value.name,
            email_from: formData.value.email,
            message: formData.value.message
        }
        emailjs.send("service_qkr5e6s","template_lkdgy4j",sendFormData, {
            publicKey: 'mgRzqYsAn1iEpkv7P'
        }).then(() => {
            Swal.fire({
                title: 'Success!',
                text: 'Message send successfully',
                icon: 'success',
                confirmButtonText: 'Okey'
            })
        }).catch((error) => {
            Swal.fire({
                title: 'Error!',
                text: "Error message to send, check your console for errors",
                icon: 'error',
                confirmButtonText: 'Okey'
            })
            console.error(error)
        }).finally(() => {
            loadingSend.value = false
        });
    }

</script>
<template>
    <div class="max-w-7xl mx-auto relative z-0 sm:px-16 px-6 sm:py-16 py-10">
        <div class="flex xl:flex-row flex-col-reverse gap-10 overflow-hidden" id="contact">
            <div ref="formRef" class='flex-[0.75] bg-black-100 p-8 rounded-2xl fade-in-right'>
                <p class="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact Me</p>
                <h3 class="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Contact.</h3>

                <form class='mt-12 flex flex-col gap-8' @submit.prevent="submitForm">
                    <label class='flex flex-col'>
                        <span class='text-white font-medium mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            v-model="formData.name"
                            required
                            placeholder="What's your name?"
                            class='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label class='flex flex-col'>
                        <span class='text-white font-medium mb-4'>Your email</span>
                        <input
                            type='email'
                            name='email'
                            v-model="formData.email"
                            placeholder="What's your web address?"
                            class='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label class='flex flex-col'>
                        <span class='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            v-model="formData.message"
                            placeholder='What you want to say?'
                            class='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        ></textarea>
                    </label>

                    <button
                        v-if="!loadingSend"
                        :disabled="loadingSend"
                        type='submit'
                        class='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                    >
                    {{ loadingSend ? 'Sending ...' : 'Submit' }}
                    </button>
                </form>

            </div>
            <div ref="ref3D" class="xl:flex-1 xl:block hidden xl:h-auto md:h-[550px] h-[350px] fade-in-left xl:mt-20" >
                <LastChapter />
            </div>
        </div>
    </div>
</template>