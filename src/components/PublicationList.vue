<template>
  <div>
    <ul>
      <li v-for="pub, index in pubList" v-bind:key="index">
        <a>{{ pub.name }}:</a>
        <a :href="pub.url">{{ pub.citation }}</a>
      </li>
    </ul>
    <!--    {{ pubList }}-->
    <!--    <a href="https://www.baidu.com">Hi</a>-->
  </div>
</template>

<script>
export default {
  name: 'PublicationList',
  data() {
    return {
      pubList: [
        {name:'A pangenome reference of 36 Chinese populations',citation: 'https://www.nature.com/articles/s41586-023-06173-7', url: 'https://www.nature.com/articles/s41586-023-06173-7'},
        // {citation: 'publication B', url: 'https://www.baidu.com'},
      ]
    }
  },
  methods: {
    handleClick() {
    }
  }
}
</script>

<style lang="scss" scoped>

a {
  margin-right: 0.75rem;
  text-decoration: none;
  font-size: 1.10rem;
  font-weight: 500;
  color: #0d6efd;

}

a:hover {
  color: var(--main-color) !important;
}

a.active {
  color: var(--main-color) !important;
  border-bottom: 3px solid var(--main-color);
}

</style>
