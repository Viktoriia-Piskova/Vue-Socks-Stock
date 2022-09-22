const product = 'Socks'
const app = Vue.createApp({
    data(){
        return {
            cart: 0,
            product: 'Socks',
            description: 'High quality',
            link: 'https://rozetka.com.ua/ua/',
            image: './assets/images/socks_blue.jpg',
            remain: 15, 
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
              ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },

        removeFromCart() {
            this.cart -= 1;
        }


    }
})