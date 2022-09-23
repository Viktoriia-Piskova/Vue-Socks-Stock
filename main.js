
const app = Vue.createApp({
    data(){
        return {
            cart: [],
            premium: true
        }
    },

    methods: {
        addIdToCart(prodId){
           this.cart.push(prodId)
        },

        removeIdFromCart(prodId){
            const prodIndex = this.cart.indexOf(prodId);
            if (prodIndex > -1){
                this.cart.splice(prodIndex, 1)
            }else{
                return
            }
        }
    },

    computed: {
        quantityInCart(){
            return this.cart.length
        }
    }
})