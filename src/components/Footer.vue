<template>
    <footer class="w-full bg-gray-200 flex flex-col items-center">
        <!-- Main Footer -->
        <div class="flex flex-col lg:grid grid-cols-8 py-10 px-8 maxWidthPage w-11/12">
            <!-- Pages -->
            <div class="col-span-5 row-span-1 flex flex-col gap-y-4 lg:flex-row lg:gap-0 justify-between lg:pr-8 text-center lg:text-left mb-6 lg:mb-0">
                <div>
                    <h1>Newstar Optical</h1>
                    <h3>Jun Liu</h3>
                </div>
                <div>
                    <h3>PRODUCTS</h3>
                    <ul>
                        <li><router-link to="/frames">Frames</router-link></li>
                        <li><router-link to="/sunglasses">Sunglasses</router-link></li>
                        <li><router-link to="/lenses">Lenses</router-link></li>
                        <li><router-link to="/contactlenses">Contact Lenses</router-link></li>
                    </ul>
                </div>
                <div>
                    <h3>SERVICES</h3>
                    <ul>
                        <li><router-link to="/exams">Eye Exams</router-link></li>
                    </ul>
                </div>
                <div>
                    <h3>RESOURCES</h3>
                    <ul>
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </div>
            <!-- Need help -->
            <div class="lg:border-l-2 lg:border-gray-300 col-span-3 row-span-1 text-center">
                <h3>Need a hand?</h3>
                <p>We’re available every day from 10a.m.–3:30p.m. ET.</p>
                <div class="flex flex-row justify-around px-10 text-gray-700 mt-6">
                    <a href = "tel:613-233-1888" class="flex flex-col items-center p-2 hover:bg-gray-300 transition-colors duration-100">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                        <p>Call</p>
                    </a>
                    <a class="flex flex-col items-center p-2 hover:bg-gray-300 transition-colors duration-100">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                        <p>FAQ</p>
                    </a>
                    <a href="mailto:jun_liu66@hotmail.com" class="flex flex-col items-center p-2 hover:bg-gray-300 transition-colors duration-100">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"></path></svg>
                        <p>E-mail</p>
                    </a>
                </div>
            </div>
        </div>

        <!-- BOTTOM TEXT -->
        <div class="w-full bg-blue-500 text-white py-4">
            <p class="text-center uppercase text-lg font-semibold">
                Made with <span class="text-xl">❤</span> by Edwin Zheng
            </p>
        </div>
    </footer>
</template>

<script lang="ts">
    import {defineComponent} from 'vue'
    export default defineComponent({
        name:'Footer'
    })
</script>

<style scoped>
	h3{
		font-size: 1.2rem;
		font-weight: 700;
		margin-bottom: 0.4rem;
    }
    
    li{
        font-weight: 500;
        opacity:0.8;
        margin-bottom: 0.1rem;
    }

	h1{
		font-size: 2.25rem;
		font-weight: 800;
    }
</style>