<template>
  <nav class="navbar navbar-dark my-bg-dark">
    <div class="container-fluid" style="width:1200px">
      <div style="display:flex;width: 50%;align-items: center;">
        <img style="width: 150px;height: 32px;margin-right: 12px;" @click="docs" src="@/assets/img/logo.jpg" alt="HumPOG-logo"/>
        <a class="navbar-brand brand-small">
          <p style="margin:0;line-height:1.2rem;font-size: 1.1rem;font-weight: 500;">Human Population<br> Omics Group</p>
        </a>
      </div>
<!--      先把搜索栏注释掉-->
<!--      <form class="d-flex">-->
<!--        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">-->
<!--        <button type="button" class="btn btn-outline-primary">Search</button>-->
<!--      </form>-->

    </div>
  </nav>
</template>

<script>
export default {
  name: 'GroupNav',
  methods: {
    docs() {
      // console.log("转到课题组网站");
      window.location.href = 'https://pog.fudan.edu.cn';
    },
  },

}
</script>

<style>
.brand-small {
  font-size: 1rem;
  font-weight: 550;
}
.my-bg-dark {
  background-color: rgb(8,22,49) !important;
}
</style>