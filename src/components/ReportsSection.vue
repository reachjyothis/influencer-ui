<template>
    <div class="hello">
      <div>{{ reportInfo.name }}</div>
      <table>
        <!-- show the data-->
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: ["reportInfo"],
    data() {
      return {
        reports: []
      };
    },
    mounted() {
      this.reports = this.reportInfo.creds.map((cred) => {
        return { key: cred[0], value: cred[1] };
      });
    },
  };
  </script>
  