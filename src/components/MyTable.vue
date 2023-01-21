<template>
  <div>
    <h4>{{ tableName }}</h4>
    <table class="table table-bordered table-striped table-hover table-sm " style="width:100%">
      <thead>
        <tr class="table-dark">
          <th scope="col" v-for="c in colHeader" :key="c">{{ c }}</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
        <tr v-for="r in tdata" :key="r.name">
          <td style="word-wrap:break-word;white-space:normal;word-break:break-all;" v-for="value in r" :key="value">{{ value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MyTable',
  props: ['jsonPath'],
  data() {
    return {
      tableName: '',
      colHeader: [],
      tdata: []
    }
  },
  mounted() {
    this.getTableData()
  },
  methods: {
    async getTableData() {
      await axios.get(this.jsonPath).then(response => {
        let { tableName, colHeader } = response.data[0]
        console.log(this.jsonPath)
        this.tableName = tableName
        this.colHeader = colHeader
        this.tdata = response.data
        this.tdata.shift()
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
