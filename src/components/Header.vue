<script lang="ts">
    export default {
        name: "Header"
    };
</script>

<template>
    <header class="bg-white shadow-sm">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
            <div class="flex items-center">
                <img src="" alt="que buena shiet" class="h-12">
            </div>
            <div class="flex items-center space-x-6">
                <div class="h-8 w-px bg-gray-300">
                    <nav class="flex space-x-6">
                        <a href="#" class="text-gray-600 hover:text-blue-600">Personal</a>
                        <a href="#" class="text-gray-600 hover:text-blue-600">Contactos</a>
                        <a href="#" class="text-gray-600 hover:text-blue-600">Noticias</a>
                        <a href="#" class="text-gray-600 hover:text-blue-600">Trabaja con nosotros</a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>