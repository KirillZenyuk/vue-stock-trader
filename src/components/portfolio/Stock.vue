<template>
    <div class="col-sm-6 col-md-4 my-3">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">{{ stock.title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Price: {{ stock.price }} | Quantity: {{ stock.quantity }}</h6>
                <div class="row mt-3 px-2">
                    <input v-model="quantity" type="number" placeholder="Quantity" class="col-8 form-control mr-auto">
                    <button @click="sellStock" :disabled="quantity <= 0 || !isEnoughQuantity" class="col-3 btn btn-primary">SELL</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Stock",
        props: ['stock'],
        data: () => ({
            quantity: 0
        }),
        computed: {
            isEnoughQuantity() {
                return this.stock.quantity >= this.quantity
            }
        },
        methods: {
            sellStock() {
                const order = {
                    id: this.stock.id,
                    quantity: this.quantity,
                    price: this.stock.price,
                }
                this.$store.dispatch("sellStock", order)
                this.quantity = 0
            }
        }
    }
</script>

<style scoped>

</style>
