<template>
    <section class="py-5 bg-light">
                <div class="container px-5 my-5">
                    <div class="text-center">
                        <h2 class="fw-bolder">Our team</h2>
                        <p class="lead fw-normal text-muted mb-5">Dedicated to quality and your success</p>
                    </div>
                    <div class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                        
                        <CeoMember/>
                        
                        <CfoMember/>

                        <ManagerMember/>

                        <CtoMember/>

                    </div>
                </div>
            </section>
</template>

<script setup>
import CeoMember from './CeoMember.vue';
import CfoMember from './CfoMember.vue';
import ManagerMember from './ManagerMember.vue';
import CtoMember from './CtoMember.vue';
</script>