<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container px-5">
                    <router-link to="/" class="navbar-brand">Start Bootstrap</router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ListNav/>
                    </div>
                </div>
            </nav>
</template>

<script setup>
import ListNav from './ListNav.vue';
</script>

<style scoped>

</style>