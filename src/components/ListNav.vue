<template>
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
        <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
        <li class="nav-item"><router-link to="/contact" class="nav-link">Contact</router-link></li>
        <li class="nav-item"><router-link to="/pricing" class="nav-link">Pricing</router-link></li>
        <li class="nav-item"><router-link to="/faq" class="nav-link">FAQ</router-link></li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdownBlog" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Blog</a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownBlog">
                <li><router-link to="/bloghome" class="dropdown-item">Blog Home</router-link></li>
                <li><router-link to="/blogpost" class="dropdown-item">Blog Post</router-link></li>
            </ul>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" id="navbarDropdownPortfolio" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Portfolio</a>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                <li><router-link to="/portafolio" class="dropdown-item">Portfolio Overview</router-link></li>
                <li><router-link to="/portafolioitem" class="dropdown-item">Portfolio Item</router-link></li>
            </ul>
        </li>
    </ul>
</template>

<script setup>

</script>

<style scoped>

</style>