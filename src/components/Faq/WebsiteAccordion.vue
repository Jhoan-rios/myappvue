<template>
  <h2 class="fw-bolder mb-3">Website Issues</h2>
                            <div class="accordion mb-5 mb-xl-0" id="accordionExample2">
                                <div class="accordion-item">
                                    <h3 class="accordion-header" id="headingOne"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">Accordion Item #1</button></h3>
                                    <div class="accordion-collapse collapse show" id="collapseOne2" aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                                        <AccordionItem/>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h3 class="accordion-header" id="headingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">Accordion Item #2</button></h3>
                                    <div class="accordion-collapse collapse" id="collapseTwo2" aria-labelledby="headingTwo" data-bs-parent="#accordionExample2">
                                        <AccordionItem/>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h3 class="accordion-header" id="headingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree2">Accordion Item #3</button></h3>
                                    <div class="accordion-collapse collapse" id="collapseThree2" aria-labelledby="headingThree" data-bs-parent="#accordionExample2">
                                        <AccordionItem/>
                                    </div>
                                </div>
                            </div>
</template>

<script setup>
import AccordionItem from './AccordionItem.vue';
</script>

<style>

</style>