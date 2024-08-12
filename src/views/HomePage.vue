<template>
    
    <HeaderHome/>
    <FeaturesHome/>
    <TestimonialHome/>

    <section class="py-5">
    <div class="container px-5 my-5">
      <BlogHome/>
      <AsideHome/>
    </div>
  </section>

</template> 

<script setup>

import HeaderHome from '@/components/Home/HeaderHome.vue';
import FeaturesHome from '@/components/Home/FeaturesHome.vue';
import TestimonialHome from '@/components/Home/TestimonialHome.vue';
import BlogHome from '@/components/Home/BlogHome.vue';
import AsideHome from '@/components/Home/AsideHome.vue';
</script>

<style>

</style>