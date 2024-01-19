<template>
  <div>
    <!-- {{ data }} -->
    <table>
      <thead>
        <th>slno.</th>
        <th>name</th>
        <th>DOB</th>
        <th>Email</th>
        <th>Location</th>
        <th>Phone</th>
        <th>Picture</th>
      </thead>
      <tbody>
        <tr v-for="(result, index) in data.results" :key="result.id.value">
          <td>{{ index + 1 }}</td>
          <td>{{ result.name.title }}. {{ result.name.first }} {{ result.name.last }}</td>
          <td>{{ result.dob.date }}</td>
          <td>{{ result.email }}</td>
          <td>{{ result.location.city }}</td>
          <td>{{ result.phone }}</td>
          <td>{{ result.picture.large }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts" setup>
import axios from 'axios'
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
