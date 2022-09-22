const product = 'Socks'
const app = Vue.createApp({
    data(){
        return {
            cart: 0,
            selectedVariant: 0,
            product: 'Socks',
            description: 'High quality',
            link: 'https://rozetka.com.ua/ua/',
            oldImage: './assets/images/socks_blue.jpg',
            remain: 5, 
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, isNew: true },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 28, isNew: false},
                { id: 2235, color: 'red', image: './assets/images/socks_red.jpg', quantity: 0, isNew: false},
                { id: 2235, color: 'orange', image: './assets/images/socks_orange.jpg', quantity: 5, isNew: true }
              ]
        }
    },
    
    methods: {
        addToCart() {
            this.cart += 1
        },

        removeFromCart() {
            this.cart -= 1;
        },

        updateVariant(index) {
            this.selectedVariant = index
        }


    },

    computed: {
        inStock() {
            return this.variants[this.selectedVariant].quantity > 0 ? true : false
        },

        image() {
            return this.variants[this.selectedVariant].image
        },

        onSale(){
            if (this.variants[this.selectedVariant].quantity < 30 && this.variants[this.selectedVariant].quantity > 0){
                return true
            }
        },

        isLimited(){
            if (this.variants[this.selectedVariant].quantity < 10 && this.variants[this.selectedVariant].quantity > 0){
                return true
            }
        },

        quantity(){
            return this.variants[this.selectedVariant].quantity
        },
        isNew(){
            return this.variants[this.selectedVariant].isNew
        }
    }
})