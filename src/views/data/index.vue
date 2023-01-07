<template>
  <div style="padding: 0px 10px 20px">
    <h2>Code Availability</h2>
    All the codes needed to reproduce the results from this work can be found on GitHub, <a href="https://github.com/orgs/Shuhua-Group/repositories">https://github.com/orgs/Shuhua-Group/repositories</a>.
    <h2>The CPC Phase I Data Availability</h2>
    The release of the CPC Phase I data by this work is permitted by The Ministry of Science and Technology of the People’s Republic of China (permission no. 2022BAT2142, 2022BAT1947, and 2022BAT1948) at the National Genomics Data Center  (<a href="https://ngdc.cncb.ac.cn">https://ngdc.cncb.ac.cn</a>).
    <div>
      <a :href="fileUrl1" download="CPC.Phase1.CHM13v2.gfa.gz" target="_blank">
        CPC.Phase1.CHM13v2.gfa.gz
      </a>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      fileUrl1: `https://pog.fudan.edu.cn/cpc/files/CPC.Phase1.CHM13v2.gfa.gz`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/index.scss';
.card-title {
  margin-left: 8px;
  font-size: 20px;
  color: #5F74A4FF;
}

.card-content {
  text-align: justify;
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  font-size: 16px;
  color: #606266;
}

p {
  text-align: justify;
  color: #606266;
}
</style>
