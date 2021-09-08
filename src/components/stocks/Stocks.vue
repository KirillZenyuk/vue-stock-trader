<template>
    <div class="container mt-3">
        <div class="row">
            <Stock v-for="stock in stocks" :stock="stock"/>
        </div>
    </div>
</template>

<script>
    import Stock from "./Stock.vue";
    import {mapGetters} from "vuex";

    export default {
        name: "Stocks",
        components: {Stock},
        computed: {
          stocks () {
            return this.$store.getters.stocks
          }
        }
    }
</script>

<style scoped>

</style>
