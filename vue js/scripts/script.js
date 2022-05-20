new Vue({
    el: '#app',
    data: {
    currentPage: 'about'
    },
    components: {
    home: {
    template: "<p>Home</p>"
    },
    about: {
    template: "<p>About</p>"
    },
    contact: {
    template: "<p>Contact</p>"
    }
    }
   })
   