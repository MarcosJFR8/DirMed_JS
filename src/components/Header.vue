<script lang="ts">
// Definicon del componente en JS
    export default {
        name: "Header"
    };
</script>

<template>
    <header class=" bg-gradient-to-b from-blue-800 to-blue-500 shadow-sm">

        <!-- Container del header -->
        <div class="container px-4 py-4 justify-between flex items-center">

        <!-- Logo del centro medico -->
            <div class="flex items-center">
                <img src="C:\Users\marco\OneDrive\Documentos\VSC_Projects\Dir_Med\DirMed_JS\src\assets\san_jose.jpg" alt="que buena shiet" class="h-12">
            </div>

        <!-- Elementos clickeables del header -->
            <div class="flex items-center">
                <div class="h-8 w-px bg-gray-300 mx-70">
                    <nav class="flex space-x-4">
                        <a href="#" class="text-white hover:text-blue-600">Personal</a>
                        <a href="#" class="text-white hover:text-blue-600">Contactos</a>
                        <a href="#" class="text-white hover:text-blue-600">Noticias</a>
                        <a href="#" class="text-white hover:text-blue-600 text">Trabajo</a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>