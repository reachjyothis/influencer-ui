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
import reqData from "./req.json";


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
                .req(
                    HttpMethod.POST,
                    "youtube/search",
                    reqData
                    )
                .then((data) => {
                    console.log(`Modash POST data ${data}`)
                    this.reportsData = data;
                })
                .catch(() => {
                    alert("ERROR")
                });
        },
        loadTempPostData() {
            webService
                .req(
                    HttpMethod.POST,
                    "api/users",
                    reqData
                    )
                .then((data) => {
                    console.log(`POST data ${data}`)
                    this.reportsData = data;
                })
                .catch(() => {
                    alert("ERROR")
                });
        },
        loadTempGet() {
            webService
                .req(HttpMethod.GET, "/entries")
                .then((data) => {
                    console.log(`GET data ${data}`)
                    this.reportsData = data.entries;
                })
                .catch(() => {
                    alert("ERROR")
                });
        }
    }
}
</script>
  
  