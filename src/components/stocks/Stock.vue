<template>
    <div class="col-sm-6 col-md-4 my-3">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ stock.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Price: {{ stock.price }}</h6>
                <div class="row mt-3 px-2">
                    <input v-model="quantity" type="number" placeholder="Quantity" class="col-8 form-control mr-auto">
                    <button @click="buyStock" :disabled="quantity <= 0 || !isEnoughFunds" class="col-3 btn btn-success">BUY</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Stock",
        props: ['stock'],
        data: () => ({
            quantity: 0
        }),
        computed: {
            funds () {
              return this.$store.getters.funds
            },
            isEnoughFunds() {
                return this.funds >= this.quantity * this.stock.price
            }
        },
        methods: {
            buyStock() {
                const order = {
                    id: this.stock.id,
                    quantity: Number.parseInt(this.quantity),
                    price: this.stock.price,
                }
                this.$store.dispatch("buyStock", order)
                this.quantity = 0
            }
        }
    }
</script>

<style scoped>

</style>
