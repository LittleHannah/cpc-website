<template>
  <!-- <div style="padding: 20px;">
    <PublicationList/>
  </div> -->
  <div style="padding:20px 0">
    The fist main report of CPC is now available in preprint: <a href='https://europepmc.org/article/PPR/PPR557648'>https://europepmc.org/article/PPR/PPR557648</a> and <a href='https://www.researchsquare.com/article/rs-2097264/v1'>https://www.researchsquare.com/article/rs-2097264/v1</a>.

    <div style="padding:30px 0">
      <div style="color: #385493;font-size: 25px;font-weight: 700">
        PublicationList:
      </div>
      <div style="padding:20px 0">
        <PublicationList/>
      </div>
  </div>
  </div>

  <!--  <div style="padding:20px 10px">-->

<!--  </div>-->
</template>

<script>
import PublicationList from '@/components/PublicationList.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Publications',
  components: { PublicationList }
}
</script>

<style lang="scss" scoped>
p {
  margin-left: 20px;
  color: #606266;
}
</style>
