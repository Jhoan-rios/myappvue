<template>
  <section class="py-5">
    <div class="container px-5 my-5">

        <TitleFaq/>
        <AssideFaq/>
        <div class="row gx-5">
          

            <AccountAccordion/>
            <WebsiteAccordion/>

          
        </div>

        
    </div>
  </section>
</template>

<script setup>
import TitleFaq from '@/components/Faq/TitleFaq.vue';
import AccountAccordion from '@/components/Faq/AccountAccordion.vue';
import WebsiteAccordion from '@/components/Faq/WebsiteAccordion.vue';
import AssideFaq from '@/components/Faq/AssideFaq.vue';
</script>

<style>

</style>