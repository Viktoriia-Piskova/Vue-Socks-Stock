const product = 'Socks'
const app = Vue.createApp({
    data(){
        return {
            cart: 0,
            product: 'Socks',
            inStock: true,
            description: 'High quality',
            link: 'https://rozetka.com.ua/ua/',
            image: './assets/images/socks_blue.jpg',
            remain: 5, 
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
                { id: 2235, color: 'red', image: './assets/images/socks_red.jpg' },
                { id: 2235, color: 'orange', image: './assets/images/socks_orange.jpg' }
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

        updateImage(imageVariants) {
            this.image = imageVariants
        }


    }
})