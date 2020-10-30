<template>
    <footer class="w-full bg-gray-200 flex flex-col items-center">
        <!-- Main Footer -->
        <div class="grid grid-cols-8 footerMain py-6 px-8">
            <!-- Pages -->
            <div class="col-span-5 flex flex-row justify-between pr-8">
                <div>
                    <h1>Chicco Optical</h1>
                    <h3>Jun Liu</h3>
                </div>
                <div>
                    <h3>PRODUCTS</h3>
                    <ul>
                        <li>Glasses</li>
                        <li>Contact Lenses</li>
                        <li>Sunglasses</li>
                    </ul>
                </div>
                <div>
                    <h3>SERVICES</h3>
                    <ul>
                        <li>Eye Exams</li>
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
            <div class="border-l-2 border-gray-300 col-span-3 text-center">
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
    import Vue from 'vue'
    export default Vue.extend({
        name:'Footer'
    })
</script>

<style scoped>
	h3{
		font-size: 1.2rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	h1{
		font-size: 2.25rem;
		font-weight: 700;
	}
</style>