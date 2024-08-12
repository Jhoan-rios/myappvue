<template>
  <section class="py-5">
    <div class="container px-5 my-5">
      <TitlePortafolio/>
      <ProjectsPortafolio/>
    </div>
  </section>
  <ContactPortafolio/>
</template>

<script setup>
import TitlePortafolio from '@/components/Portafolio/TitlePortafolio.vue';
import ProjectsPortafolio from '@/components/Portafolio/ProjectsPortafolio.vue';
import ContactPortafolio from '@/components/Portafolio/ContactPortafolio.vue';
</script>

<style>

</style>