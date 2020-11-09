<template>
    <div>
        <div style="height:72px"></div>
        <div
            class="grid lg:grid-cols-3 grid-rows-2 lg:grid-rows-1 gap-6 px-10 items-center"
            style="
                height:calc(100vh - 72px);
                background-size:cover;
                background-image:url('https://venngage-wordpress.s3.amazonaws.com/uploads/2018/09/Colorful-Circle-Simple-Background-Image-1.jpg')
            "
        >
            <!-- WeChat Element -->
            <div class="col-span-1 relative">
                <img src="../assets/wechat.jpg" alt="WeChat" class="rounded-xl shadow-2xl border-2 cursor-pointer" @click="saveWeChat">
                <div
                    class="absolute horizontalCenter border-2 bg-white flex flex-row items-center p-3 rounded-lg"
                    style="z-index:1;bottom:2%;width:80%"
                >
                    <svg class="w-6 h-6 mr-2" fill="#4a5568" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                    <p style="line-height:100%">Click the image to save it to scan in WeChat</p>
                </div>
            </div>
            <!-- Contact Form -->
            <div class="bg-white rounded-3xl overflow-hidden shadow-2xl w-full h-64 col-span-2 grid grid-cols-5" style="height:83%">
                <!-- LEFT PURPLE -->
                <div class="bg-purple-600 h-full col-span-2 p-8 rounded-3xl text-white">
                    <h1 class="text-5xl font-bold" style="line-height:100%">Contact Us</h1>
                    <p class="mt-4">Fill in the form</p>

                    <ul class="mt-20 text-xl flex flex-col justify-between" style="height:35%">
                        <li class="flex flex-row items-center">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                            <p>(613) 233-1888</p>
                        </li>
                        <li class="flex flex-row items-center">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"></path></svg>
                            <p>jun_liu66@hotmail.com</p>
                        </li>
                        <li class="flex flex-row items-center">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                            <p>254 Bank St.</p>
                        </li>
                    </ul>
                </div>
                <!-- RIGHT WHITE -->
                <form class="col-span-3 h-full grid grid-cols-2 grid-rows-6 p-4 pt-8 gap-4" id="contactForm" action="">
                    <div class="relative col-span-1 pt-4">
                        <input type="text" id="name" placeholder="nameplaceholder" name="Name" class="noOutline">
                        <label for="name">Name</label>
                    </div>
                    <div class="relative col-span-1 pt-4">
                        <input type="text" id="email" placeholder="emailplaceholder" name="email" class="noOutline">
                        <label for="email">Email</label>
                    </div>
                    <div class="relative col-span-2 row-span-4 pt-4">
                        <textarea type="text" id="message" placeholder="messageplaceholder" name="message" class="noOutline"></textarea>
                        <label for="message">Message</label>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name:'ContactPage',
        methods:{
            saveWeChat: function(){
                const a  = document.createElement('a');
                a.href = '../assets/wechat.jpg';
                a.download = 'image.jpg';

                a.click()
            }
        }
    })
</script>

<style scoped>
    li svg{
        margin-right: 9px;
    }
</style>