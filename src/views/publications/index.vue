<template>
  <div style="padding: 20px;">
    <PublicationList/>
  </div>
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
