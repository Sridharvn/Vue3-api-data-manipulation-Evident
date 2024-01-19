<template>
  <div>
    <home-page></home-page>
    <!-- {{ data }} -->
    <div v-for="result in data.results" :key="result.id.value">{{ result.name.first }}</div>
  </div>
</template>
<script lang="ts" setup>
import axios from 'axios'
import HomePage from './views/HomePage.vue'
import { Convert, RandomUserData } from './utils/randomUserData'
import { onMounted, reactive, ref } from 'vue'
var data = ref<RandomUserData>({
  results: [],
  info: { seed: '', results: 0, page: 0, version: '' }
})
var k = 0
async function getData() {
  await axios.get('https://randomuser.me/api/?results=50').then((Response) => {
    data.value = Response.data
    console.log(data)
    k++
  })
}
onMounted(() => {
  getData()
})
</script>
