<template>
  <div>
    <header v-if="dev">
      <router-link to="/admin">Admin</router-link> | 
      <router-link to="/jobs">Jobs page</router-link>
    </header>
    <router-view />
  </div>
</template>

<script>
import config from "./services/config"

export default {
  data() {
    return {
      dev: config.isDev
    };
  },
  created() {
    if (!config.isDev) return

    window.jobs = [ {
      company: "Eztalk",
      ctgs: ["QA", "Cat-Lover"],
      kewords: ["css", "Application", "api", "bug", "Fill-stack", "Browser", "Backend", "Frontend", "Deployment"],
      location: "Petah Tikva",
      title: "Handyman",
      type: "part-time",
      _id: "6040b5b96f89fd0014be79d8"
    }, {
      company: "Eztalk",
      ctgs: ["Cat-Lover"],
      kewords: [],
      location: "Tel Aviv",
      title: "Writter",
      type: "part-time",
      _id: "6040b5b96f89fd0014be79d7"
    }, {
      company: "Eztalk",
      ctgs: ["Dev", "Cat-Lover"],
      kewords: ["bug", "Fill-stack", "Browser", "Backend", "Frontend", "Deployment"],
      location: "Petah Tikva",
      title: "Reader",
      type: "part-time",
      _id: "6040b5b96f89fd0014be79d6"
    }]
  },
  mounted() {

  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  max-width: 800px;
  margin: 0 auto;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
