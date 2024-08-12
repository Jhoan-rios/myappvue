<template>
    <div class="row gx-5 row-cols-2 row-cols-lg-4 py-5">
        <ChatCard/>
        <AskCard/>
        <SupportCard/>
        <CallCard/>
    </div>
</template>

<script setup>
import ChatCard from './ChatCard.vue';
import CallCard from './CallCard.vue'
import AskCard from './AskCard.vue';
import SupportCard from './SupportCard.vue';
</script>