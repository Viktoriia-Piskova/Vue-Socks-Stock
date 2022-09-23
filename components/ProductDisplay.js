app.component('product-display', {

  template:
    /*html */
    `
    <div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img :class="[inStock ? '' : 'out-of-stock-img']" :src="image" alt="">
        </div>
        <div class="product-info">
          <h1>{{ product }} {{comppremium}}</h1>

          <div class="product-badges">
            <div v-if="!inStock" class="sale-badge out-of-stock-badge">sold out</div>
            <div v-if="isNew" class="sale-badge new-badge">new</div>
            <div v-if="onSale" class="sale-badge">sale</div>
            <div v-if="isLimited" class="sale-badge limited-badge">limited</div>
            <p>Deleivery is {{comppremium}}</p>
          </div>

          <div class="product-description">
           <product-details :detailscomps="details"></product-details>
            <p class="product-sizes"> <span v-for="size in sizes">{{size}}, </span> </p>
          </div>

          <div class="product-remain">
            <p>{{quantity}} pcs left!</p>
          </div>

          <div class="color-circles">
            <div class="color-circle" v-for="(variant, index) in variants" :style="{'background-color': variant.color}"
              :key="variant.id" @mouseover="updateVariant(index)">
            </div>
          </div>

          <div class="button-container">
            <button class="button" @click="addToCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Add to
              Cart</button>

            <button @click="removeFromCart" class="button btn-delete" :disabled="cart <= 0"
              :class="{disabledButton: cart <= 0}">Delete</button>
          </div>
        </div>
      </div>
    </div>`
  ,

  data() {
    return {
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
        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 28, isNew: false },
        { id: 2235, color: 'red', image: './assets/images/socks_red.jpg', quantity: 0, isNew: false },
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

    onSale() {
      if (this.variants[this.selectedVariant].quantity < 30 && this.variants[this.selectedVariant].quantity > 0) {
        return true
      }
    },

    isLimited() {
      if (this.variants[this.selectedVariant].quantity < 10 && this.variants[this.selectedVariant].quantity > 0) {
        return true
      }
    },

    quantity() {
      return this.variants[this.selectedVariant].quantity
    },

    isNew() {
      return this.variants[this.selectedVariant].isNew
    },

    shipping(){
       if (this.comppremium){
        return 'Free'
      } else{
        return 2.99
      }
    }

  },

  props: {
    comppremium: {
      type: Boolean,
      required: true
    }
  }

})