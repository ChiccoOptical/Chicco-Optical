<template>
    <div>
        <!-- SECTION 1 -->
        <div
            class="w-full relative"
            style="
                background-image:url(https://irisvision.com/wp-content/uploads/2018/06/eye-exam-make-the-most-of-your-vision-and-eye-health-1.jpg);
                background-size:cover;
                background-position:center;
                background-attachment: fixed;
                height:50vh;
            "
        >
            <div class="w-full h-full" style="backdrop-filter: saturate(0.7) brightness(0.7);"></div>
            <h1 class="absolute font-bold text-6xl text-white" style="bottom:5%;right:10%;">Eye Exams</h1>
        </div>
        <div class="lg:mx-48 mx-0">
            <div class="flex flex-col lg:grid lg:grid-cols-4">
                <div class="p-4 lg:col-s">
                    <h1 class="text-2xl font-semibold">Personal Information</h1>    
                </div>
                <form
                    id="personalForm"
                    class="lg:col-span-3 p-4 flex flex-col"

                    @submit.prevent="checkForm"
                >
                    <div class="relative">
                        <input v-model.lazy="name" class="w-full" type="text" id="name" placeholder="eeeeee">
                        <transition name="error">
                            <svg v-if="!name&&checkValid" class="absolute verticalCenter w-6 h-6" style="right:2%" fill="#e65757" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                        </transition>
                        <label for="name">Full Name</label>
                    </div>
                    
                    <div class="relative">
                        <input v-model.lazy="email" class="w-full" type="email" id="email" placeholder="eeeeee">
                        <transition name="error">
                            <svg v-if="!email&&checkValid" class="absolute verticalCenter w-6 h-6" style="right:2%" fill="#e65757" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                        </transition>
                        <label for="email">Email</label>
                    </div>

                    <div class="relative">
                        <input v-model.lazy="phone" class="w-full" v-mask="'(###)-###-####'" type="tel" id="phone" placeholder="eeeeee">
                        <transition name="error">
                            <svg v-if="(phone.length!=14)&&checkValid" class="absolute verticalCenter w-6 h-6" style="right:2%" fill="#e65757" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                        </transition>
                        <label for="phone">Phone Number</label>
                    </div>
                    <div class="relative">
                        <textarea v-model.lazy="message" class="w-full" style="resize: none;" id="message" placeholder="eeeeeee"></textarea>
                        <transition name="error">
                            <svg v-if="!message&&checkValid" class="absolute verticalCenter w-6 h-6" style="right:2%" fill="#e65757" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                        </transition>
                        <label for="message">Message</label>
                    </div>

                    <input type="submit" value="Submit" class="w-full lg:w-1/3 py-2">

                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {mask} from 'vue-the-mask'
import db from '../firebase'

export default Vue.extend({
    directives: {mask},
    data(){
        return{
            name:'',
            email:'',
            phone:'',
            message:'',
            checkValid:false,
        }
    },
    methods:{
        checkForm(){
            console.log("yoot")
            if(!this.email || !this.name || this.phone.length != 14 || !this.message){
                this.checkValid=true
                return
            }

            console.log("yees")
            db.firestore().collection('eyeexam')
                .doc(this.email)
                .set({
                    name:this.name,
                    phone:this.phone,
                    message:this.message
                }).then((data)=>{
                    console.log(data)
                })
        }
    },
})
</script>

<style scoped>
    #personalForm div{
        margin-bottom: 1rem;
        --funColor:rgb(22, 25, 206);
        --inactiveColor:#aaaaaa;
        --background:#f3f3f3;
        --fontsize:1.1rem;
    }

    /* FOR THE TEXTBOXES */
    input[type=text],
    input[type=email],
    input[type=tel],
    textarea{
        border:2px solid var(--inactiveColor);
        border-radius:3px;
        padding:.5rem;
        outline:none;
        font-size: var(--fontsize);
        background-color:var(--background);
    }

    /* FOCUS STATE */
    input[type=text]:focus,
    input[type=email]:focus,
    input[type=tel]:focus,
    textarea:focus{
        border-color: var(--funColor);
    }

    /* HIDE PLACEHOLDER */
    input[type=text]::placeholder,
    input[type=email]::placeholder,
    input[type=tel]::placeholder,
    textarea::placeholder{
        opacity: 0;
    }

    /* 3 LABEL STATES */
    /* 1- NO INTERACTION */
    input[type=text]:placeholder-shown ~ label,
    input[type=email]:placeholder-shown ~ label,
    input[type=tel]:placeholder-shown ~ label{
        padding:0;
        background:transparent;
        color:var(--inactiveColor);
        top:50%;
        transform: translateY(-50%);
        left:.6rem;
        cursor: text;
    }
    textarea:placeholder-shown ~ label{
        padding:0;
        background:transparent;
        color:var(--inactiveColor);
        top:1rem;
        left:.6rem;
        cursor: text;
    }
    /* 2- SELECTED */
    input[type=text]:focus~label,
    input[type=email]:focus~label,
    input[type=tel]:focus~label,
    textarea:focus~label{
        color:var(--funColor)!important
    }
    /* 3- TEXT HERE */
    input[type=text]~label,
    input[type=email]~label,
    input[type=tel]~label,
    textarea~label{
        position:absolute;
        left:.6rem;
        top:-20%;
        background:var(--background);
        background: linear-gradient(0deg,var(--background) 0%, var(--background) 50%, white 50%, white 100%); 
        padding: 0 2px;
        line-height: 100%;
        transition: .2s ease;
        color:var(--inactiveColor);
        font-size: var(--fontsize);
    }
    textarea ~ label{
        top:-10%;
    }

    .error-enter-to,
    .error-leave{
        position:absolute;
        top:50%;
        transform: translateY(-50%);

        opacity:1;
    }
    .error-enter,
    .error-leave-to{
        position:absolute;
        top:75%;

        opacity: 0;
    }
    .error-enter-active,
    .error-leave-active{
        transition: all .3s ease;
    }
</style>