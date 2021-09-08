<template>
    <div class="col-sm-12">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" class="navbar-brand">Stock Trader</router-link>
            <div class="collapse navbar-collapse">
                <div class="navbar-nav mr-auto">
                    <router-link to="/portfolio" class="nav-item nav-link" active-class="active"><a>Portfolio</a>
                    </router-link>
                    <router-link to="/stocks" class="nav-item nav-link" active-class="active"><a>Stocks</a>
                    </router-link>
                </div>
                <div class="nav-additional">
                    <div @click="endDay" class="end-day">
                        End Day
                    </div>
                    <!--<div class="dropdown" :class="{show: active}">
                        <a @click="active = !active" class="dropdown-toggle">
                            Save & Load
                        </a>
                        <div class="dropdown-menu" :class="{show: active}">
                            <a class="dropdown-item" href="#">Save Data</a>
                            <a class="dropdown-item" href="#">Load Data</a>
                        </div>
                    </div>-->
                    <div class="">
                        <strong>Funds: {{ funds | currency }}</strong>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "Header",
        data: () => ({
            active: false
        }),
        computed: {
          funds () {
            return this.$store.getters.funds
          }
        },
        methods: {
            endDay() {
                this.$store.dispatch("randomizeStocks")
            }
        }
    }
</script>

<style scoped>
    .nav-additional {
        display: flex;
    }

    .nav-additional div {
        margin-right: 10px;
    }

    .end-day {
        cursor: pointer;
        color: #00000080;
    }

    .end-day:hover {
        color: #000000B3;
    }

    .dropdown-toggle {
        cursor: pointer;
    }
</style>
