<template>
  <div class="main">
    <!-- {{ data }} -->
    <div class="table-wrapper">
      <table>
        <thead class="table-header-wrapper">
          <th class="table-header">slno.</th>
          <th class="table-header">name</th>
          <th class="table-header">DOB</th>
          <th class="table-header">Email</th>
          <th class="table-header">Location</th>
          <th class="table-header">Phone</th>
          <th class="table-header">Picture</th>
        </thead>
        <tbody class="table-body-wrapper">
          <tr v-for="(result, index) in data.results" :key="result.id.value" class="table-row">
            <td class="table-cell">{{ index + 1 }}</td>
            <td class="table-cell">
              {{ result.name.title }}. {{ result.name.first }} {{ result.name.last }}
            </td>
            <td class="table-cell">
              <!-- {{ result.dob.date }} -->

              {{ getDOB(result.dob.date) }}
            </td>
            <td class="table-cell">{{ result.email }}</td>
            <td class="table-cell">
              {{ result.location.country }}
            </td>
            <td class="table-cell">{{ result.phone }}</td>
            <td class="table-cell">
              <img :src="result.picture.large" alt="" />
              <!-- {{ result.picture.large }} -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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
function getDOB(url) {
  var timeStr = url
  var date = new Date(timeStr)
  var day = date.getDate()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var dateStr = month + '/' + day + '/' + year
  return dateStr
}
async function getLocation(url) {}
onMounted(() => {
  getData()
})
</script>
<style scoped>
.main {
  /* background: #e4e4e4; */
  /* color: rgb(112, 112, 112); */
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
table {
  /* border: 1px solid white; */
}
tr,
thead {
  /* border-bottom: 1px solid white; */
}
.table-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.table-header-wrapper {
  /* border-bottom: 1px soid white; */
}
.table-header {
}
.table-body-wrapper {
}
.table-row {
}
.table-cell {
  /* border: 1px solid white; */
  padding: 10px;
  text-align: center;
}
</style>
