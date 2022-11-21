<template>

  <div>

    <img
      :src="`https://flagpedia.net/data/flags/icon/72x54/${paisInfo.alpha2Code.toLowerCase()}.png`"
      alt=""
      srcset=""
    />
  </div>
  <div>{{ paisInfo.name.common }}</div>
  <div></div>

  <table class="table">
    <thead></thead>
    <tbody>
      <tr>
        <td style="width: 30%">Capital</td>
        <td>{{ paisInfo.capital[0] }}</td>
      </tr>
      <tr>
        <td>Area</td>
        <td>{{ paisInfo.area }} km <sup>2</sup></td>
      </tr>
      <tr>
        <td>Borders</td>
        <td>
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
<style scoped></style>
