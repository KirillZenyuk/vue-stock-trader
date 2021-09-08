<template>
    <div class="container">
        <h1>Trade or View your Portfolio</h1>
        <!--<h6>You may Save & Load your Data!</h6>-->
        <h6>Click on 'End Day' to begin a new Day!</h6>
        <hr>
        <h2>Your Funds: {{ funds | currency }}</h2>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Home",
        computed: {
          funds () {
            return this.$store.getters.funds
          }
        }
    }
</script>

<style scoped>

</style>
