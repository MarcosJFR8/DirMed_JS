<template>
    <footer class="bg-green-700/40 text-black py-8">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-center">

        <!-- Copyright + Year -->
                <div class="mb-4 md:mb-0">
                    <p>&copy; {{ currentYear }} Hospital Name. All rights reserved.</p>
                </div>

        <!-- Contacts + Phone -->
                <div class="flex flex-col md:flex-row md:space-x-8 text-center md:text-left">
                    <p>Email: contact@hospital.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
    name: "Footer",
        data() {
            return {
                currentYear: new Date().getFullYear(),
            };
        },
    };
</script>