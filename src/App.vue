<template>
  <NavComposition/>

  <router-view></router-view>
  
  <FooterComponent/>
</template>

<script setup>
import FooterComponent from './components/FooterComponent.vue';
import NavComposition from './components/NavComposition.vue';
</script>

<style scoped>

</style>
