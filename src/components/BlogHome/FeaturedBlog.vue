<template>
  <section class="py-5">
                <div class="container px-5">
                    <h2 class="fw-bolder fs-5 mb-4">Featured Stories</h2>
                    <div class="row gx-5">
                        <BlogCard/>
                        <AnotherCard/>
                        <LastblogCard/>
                    </div>
                    <div class="text-end mb-5 mb-xl-0">
                        <a class="text-decoration-none" href="#!">
                            More stories
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </section>
</template>

<script setup>
import BlogCard from './BlogCard.vue';
import AnotherCard from './AnotherCard.vue';
import LastblogCard from './LastblogCard.vue';
</script>

<style>

</style>