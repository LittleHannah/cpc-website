<template>
  <div>
    <ul>
      <li v-for="pub, index in pubList" v-bind:key="index">
        <a :href="pub.url">{{ pub.citation }}</a>
      </li>
    </ul>
    {{ pubList }}
    <a href="https://www.baidu.com">Hi</a>
  </div>
</template>

<script>
export default {
  name: 'PublicationList',
  data() {
    return {
      pubList: [
        { citation: 'publication A', url: 'https://www.baidu.com' },
        { citation: 'publication B', url: 'https://www.baidu.com' },
      ]
    }
  },
  methods: {
    handleClick() {}
  }
}
</script>

<style lang="scss" scoped>

</style>
