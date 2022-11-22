<template>
  <div>
    <img class="img-country-info"
      :src="`https://flagpedia.net/data/flags/icon/72x54/${paisInfo.alpha2Code.toLowerCase()}.png`"
      alt=""
      srcset=""
    />
  </div>
  <div class="country-name">{{ paisInfo.name.common }}</div>
  <div></div>

  <table class="table">
    <thead></thead>
    <tbody>
      <tr>
        <td class="key" style="width: 30%">Capital</td>
        <td class="value">{{ paisInfo.capital[0] }}</td>
      </tr>
      <tr>
        <td class="key">Area</td>
        <td class="value">{{ paisInfo.area }} km <sup>2</sup></td>
      </tr>
      <tr>
        <td class="key">Borders</td>
        <td class="value">
          <ul>
            <li v-for="border in paisInfo.borders">
              <router-link :to="`${buscarPais(border).alpha3Code}`">
              {{buscarPais(border).name.common}}
              </router-link>
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, watch, onMounted } from "vue";
import countries from "../assets/countries.json";

// route nos da la informacion de la ruta
const route = useRoute();
const router = useRouter();
const country = ref();
const paisInfo = ref();
const nombrePais = ref();

watch(
  () => route.params.code,
  (newValue) => {
    console.log("nuevo valor!", newValue);
    paisInfo.value = buscarPais(route.params.code);
  }
);


const buscarPais = (code) => {
  return countries.find((element) => element.alpha3Code == code);
};

paisInfo.value = buscarPais(route.params.code);




</script>
<style scoped>

.country-name{
  color:white;
  font-size:25px;
  font-weight: 600;
  line-height: 2;
}
.img-country-info{
  width:120px;
  height:auto;
}

.table {
    background-color: #222;
    color: #ffffff;
    font-weight:600;
    
}
.table tbody{
  font-size:18px;
}


</style>
