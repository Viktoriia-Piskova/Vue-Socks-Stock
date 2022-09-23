app.component('product-details', {
    data(){
        return {       
        }
    },

    template: 
    /*html*/
    ` <ul>
        <li v-for="detailscomp in detailscomps">{{detailscomp}}</li>
      </ul>`,

    props: {
        detailscomps: {
            type: Array
        }
    }
})