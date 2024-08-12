<template>
  <section class="py-5">
    <div class="container px-5 my-5">
      <div class="row gx-5">
        <AsidePost/>
        <div class="col-lg-9">
          <HeaderPost/>
          <CommentPost/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AsidePost from '@/components/BlogPost/AsidePost.vue';
import HeaderPost from '@/components/BlogPost/HeaderPost.vue'
import CommentPost from '@/components/BlogPost/CommentPost.vue';
</script>

<style scoped>

</style>