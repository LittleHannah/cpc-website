<template>
  <div id="app">
    <GroupNav/>
    <nav class="navbar navbar-light bg-light second-nav" style="justify-content: center;padding: 0;">
      <div style="width:1200px;padding: 0 10px;">
        <div style="height:150px;display: flex;align-items: center;">
          <a style="display:block;font-size:2rem;font-weight: 550;color: #2b4275;">
            <span class="highlight">C</span>hinese <span class="highlight">P</span>angenome <span
              class="highlight">C</span>onsortium
<!--            class="highlight">C</span>onsortium (Phase I)-->
          </a>
        </div>
        <div style="display: flex; " class="nav-links">
          <router-link active-class="nav-link-active" to="/home">Home</router-link>
          <p style="color:#606266; "> | </p>
          <router-link active-class="nav-link-active" to="/phasei">Phase I</router-link>
          <p style="color:#606266; "> | </p>
          <router-link active-class="nav-link-active" to="/participants">Participants</router-link>
          <p style="color:#606266; "> | </p>
          <router-link active-class="nav-link-active" to="/data">Data</router-link>
          <p style="color:#606266; "> | </p>
          <router-link active-class="nav-link-active" to="/publications">Publications</router-link>
          <p style="color:#606266; "> | </p>
          <router-link active-class="nav-link-active" to="/conferenceTalks">Conference Talks</router-link>
          <p style="color:#606266; "> | </p>
          <router-link active-class="nav-link-active" to="/about">About</router-link>
        </div>
      </div>
    </nav>
    <div style="max-width: 1200px; margin: 0 auto">
      <router-view style="min-height:500px;"/>
    </div>
    <GroupFooter/>
  </div>
</template>

<script>
import GroupNav from "./components/GroupNav.vue";
import GroupFooter from "./components/GroupFooter.vue";

export default {
  name: 'App',
  components: {
    GroupNav,
    GroupFooter
  }
}
</script>

<style lang="scss">
.highlight {
  color: var(--main-color) !important;
  //background-color: #f8f9fa;

}
//248,249,250
.nav-links {
  flex-flow: row wrap;

  > a {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    text-decoration: none;
    font-size: 1.15rem;
    font-weight: 500;
    color: #606266;
  }

  > a:hover {
    color: var(--main-color) ;
  }
}

.nav-link-active {
  color: #ff9113 !important;
  border-bottom: 3px solid var(--main-color);
}

</style>
