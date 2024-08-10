<template>
    <div class="post-card">
        <h3>Titulo</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium temporibus nobis repellendus veritatis necessitatibus mollitia obcaecati quis officiis impedit maxime esse aliquam quidem, iure possimus autem itaque. Sapiente, incidunt obcaecati.</p>
        <PostBtn/>
    </div>
</template>

<script setup>
    import PostBtn from './PostBtn.vue';
</script>

<style scoped>
.post-card{
    border-radius: 15px;
    padding: 10px;
    margin: 5px;
    border: 1px solid #ccc;
}
</style>