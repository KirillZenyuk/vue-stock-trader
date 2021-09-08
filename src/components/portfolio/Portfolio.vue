<template>
    <div class="container mt-3">
        <div class="row">
            <Stock v-for="stock in portfolioStocks" :stock="stock"/>
        </div>
    </div>
</template>

<script>
    import Stock from "./Stock.vue";
    import {mapGetters} from "vuex";

    export default {
        name: "Portfolio",
        components: {Stock},
        computed: {
          portfolioStocks () {
            return this.$store.getters.portfolioStocks
          }
        }
    }
</script>

<style scoped>

</style>
