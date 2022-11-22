<template>
<div clase="container" style="height: calc(100vh - 76px)">

    <div class="columns mt-0 " style="height: 100%;">
      <div class="column is-4" style="overflow: auto">
        <div v-for="country in countries" class="media is-clickable pl-4">
            
            <figure class="media-left">
              <router-link  :to="`${country.alpha3Code}`">
                <img class="image is-64px"
              :src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
            />
            <div class="media-content">
                <p><strong>{{ country.name.common }}</strong></p>
            </div></router-link>
            </figure>
        </div>
      </div>
  
      <div class="column info">
      <router-view ></router-view>
      
      </div>
    </div>

</div>
</template>
<script setup>
import countries from "../assets/countries.json";
</script>
<style scoped>
.media {
    display: flex;
    text-align: center;
    justify-content: center;
    padding:25px 0;
    margin:0;
}
.media-left a{    
    display: flex;
    flex-direction: column;
    align-items: center;
    color:white;
    font-size:20px;
    
    }

  .media-content strong{    
    line-height:40px;
    }

    .media+.media {
  
    border-top: 3px solid rgba(125, 125, 125, 0.5);
    }

    .info{
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
}

</style>
