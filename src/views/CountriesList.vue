<template>
<div clase="container" style="height: calc(100vh - 52px)">

    <div class="columns mt-0 " style="height: 100%;">
      <div class="column is-4" style="overflow: auto">
        <div v-for="country in countries" class="media is-clickable pl-4">
            
            <figure class="media-left">
                <a  :href="`/${country.alpha3Code}`">
            <img class="image is-64px"
              :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
            />
            <div class="media-content">
                <p><strong>{{ country.name.common }}</strong></p>
            </div>
          
          </a>

            </figure>


        </div>
      </div>
  
      <div class="column">
      <router-view ></router-view>
      
      </div>
    </div>

</div>
</template>
<script setup>
import countries from "../assets/countries.json";
</script>
<style scoped>

</style>
