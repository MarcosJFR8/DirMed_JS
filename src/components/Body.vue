<template>
    <main class="w-full bg-gradient-to-r from-green-600 to-green-300">

    <div class="relative w-full h-64 md:h-96 overflow-hidden">
        
        <!-- Image + Title -->
            <img 
                src="@\assets\personal.jpg"  
                alt="Medical Professionals"
                class="absolute inset-0 w-full h-full object-cover">

            <div class="absolute inset-0 bg-black/30"></div>

            <div class="relative z-10 h-full flex flex-col items-start justify-center pl-8 text-white">
                <div>
                    <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">
                    Haz tu cita con nosotros
                    </h1>
                </div>

            
    <!-- Appointment Button -->
            <router-link 
                to="/appointments" 
                class="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-full shadow-md transition-colors duration-300 whitespace-nowrap">
                Book Appointment
            </router-link>
            </div>
        </div>

    <!-- Big Title -->
    <div class="mx-auto px-4 py-8 text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-8">Medical Directory</h1>

    <!-- Search Bar -->
        <div class="max-w-2xl mx-auto mb-12">
            <input
                type="text"
                placeholder="Search illnesses or afflictions..."
                class="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ctw-input"
                autocomplete="off"
                v-bind:data-ctw-ino="iNo">
                <div class="ctw-window" v-bind:data-ctw-ino="iNo"></div>
        </div>

    <!-- Alphabet Circles (A-Z) -->
        <div class="flex flex-wrap justify-center gap-3 max-w-xl mx-auto">
        <a 
            v-for="letter in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')" 
            :key="letter"
            href="#"
            class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition">
                {{ letter }}
        </a>
        </div>
    </div>
    </main>
</template>

<script lang="ts">
import * as ECT from '@whoicd/icd11ect';


export default {
    name: "Body",
    data() {
        return {
        iNo: 1,
    };
},

created() {
    // configure the ECT
    const settings = {
      // the API located at the URL below should be used only for software development and testing
      apiServerUrl: 'https://icd11restapi-developer-test.azurewebsites.net',
      autoBind: false, // in Vue.js we recommend using the manual binding
    };
    const callbacks = {
      selectedEntityFunction: (selectedEntity) => {
        // shows an alert with the code selected by the user and then clears the search results
        alert('ICD-11 code selected: ' + selectedEntity.code);
        ECT.Handler.clear(this.iNo);
      },
    };
    ECT.Handler.configure(settings, callbacks);
  },
  mounted() {
    // manual binding only after the component has been mounted
    ECT.Handler.bind(this.iNo);
  },
};
</script>
