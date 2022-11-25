<template>
    <div class="home">
        <!-- <div v-for="(report, index) in reportsData" :key="index">
            <ReportsSection :reportInfo="report" />
        </div> -->
        <ReportsSection :reportInfo="reportsData" />
    </div>
</template>
  
<script>
import ReportsSection from '@/components/ReportsSection.vue';
import { webService, HttpMethod } from "../_services";


export default {
    name: 'ReportView',
    components: {ReportsSection
    },
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
                    this.reportsData = data;
                })
                .catch(() => {
                    alert("ERROR")
                });
        }
    }
}
</script>
  
  