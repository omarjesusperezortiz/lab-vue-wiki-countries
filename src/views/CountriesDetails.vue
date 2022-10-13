<template>

<div class="section">
    <figure class="image is-128x128">
        <img :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`">
    </figure>
    <span> {{country.name.common}}</span>
</div>


</template>
<script setup>
import { useRoute } from 'vue-router'
import { ref, watchEffect } from 'vue'
import countries from '../assets/countries.json';


// route nos da la informacion de la ruta
const route = useRoute();
const code = ref()
const country = ref()

console.log(route.params.code)

const ruta = route.params.code

    watchEffect(() => {
        code.value = ruta
        country.value = getCountry(code.value);
        //Comprobamos
        console.log(country.value.name.common)
    });

    


    function getCountry(code){
        return countries.find(element => element.alpha3Code == code);
    }




</script>
<style scoped>
</style>