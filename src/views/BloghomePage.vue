<template>
  <TitleBlog/>
  <section class="py-5 bg-light">
    <div class="container px-5">
      <AssideBlog/>
      <NewsBlog/>
    </div>
  </section>
  <FeaturedBlog/>
</template>

<script setup>
import TitleBlog from '@/components/BlogHome/TitleBlog.vue';
import NewsBlog from '@/components/BlogHome/NewsBlog.vue';
import AssideBlog from '@/components/BlogHome/AssideBlog.vue';
import FeaturedBlog from '@/components/BlogHome/FeaturedBlog.vue';
</script>

<style scoped>

</style>