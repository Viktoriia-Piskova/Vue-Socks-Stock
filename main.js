const product = 'Socks'
const app = Vue.createApp({
    data(){
        return {
            product: 'Socks',
            description: 'High quality',
            link: 'https://rozetka.com.ua/ua/',
            image: './assets/images/socks_blue.jpg',
            remain: 15, 
        }
    }
})