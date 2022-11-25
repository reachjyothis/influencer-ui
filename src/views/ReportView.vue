<template>
    <div class="home">
        <!-- <div v-for="(report, index) in reportsData" :key="index">
            <ReportsSection :reportInfo="report" />
        </div> -->
        <div>

        </div>
    </div>
</template>
  
<script>
// import ReportsSection from '@/components/ReportsSection.vue';
import { webService, HttpMethod } from "../_services";


export default {
    name: 'ReportView',
    components: {  },
    data() {
        return {
            reportsData: [],
        };
    },
    created() {
        this.loadData();
    },
    methods: {
        loadData() {
            webService
                .req(HttpMethod.GET, "/entries")
                .then((data) => {
                    this.reportsData = data.entries;
                })
                .catch(() => {
                    alert("ERROR")
                });
        }
    }
}
</script>
  
  