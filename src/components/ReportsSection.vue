<template>
    <div class="hello">
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
console.log(this.reportInfo)
      // this.reports = this.reportInfo.map((report) => {
      //   console.log(report)
      //   return { key: report[0], value: report[1] };
      // });
    },
  };
  </script>
  