<template>
    <main class="container mx-auto px-4 py-12 text-center">
    <!-- Big Title -->
        <h1 class="text-4xl font-bold text-gray-800 mb-8">Medical Directory</h1>

    <!-- Search Bar -->
        <div class="max-w-2xl mx-auto mb-12">
            <input
                type="text"
                placeholder="Search illnesses or afflictions..."
                class="w-full px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>

    <!-- Alphabet Circles (A-Z) -->
        <div class="flex flex-wrap justify-center gap-3">
        <a 
            v-for="letter in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')" 
            :key="letter"
            href="#"
            class="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition">
            {{ letter }}
        </a>
        </div>
    </main>
</template>

<script>
    export default {
        name: "Body",
    };
</script>