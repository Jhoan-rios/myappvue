<template>
  <router-link to="/">Inicio</router-link>
  <router-link to="/about">Acerca de</router-link>
  <router-link to="/services">Servicios</router-link>
  <router-view></router-view>

  <h1>Listado de post</h1>
  <PostContainer/>
</template>

<script setup>
import PostContainer from './components/PostContainer.vue';
</script>

<style scoped>

</style>
