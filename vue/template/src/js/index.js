import Vue from 'vue';
import State from './State.vue';
import Intro from './Intro.vue';
import Next from './Next.vue';


let app = new Vue({
    el: "#app",
    data: {
        view: "intro",
        state: State
    },
    components: {
        intro: Intro,
        next: Next
    },
    watch: {
          
    },
    computed: {
        
    },
    methods: {
        changeView(view) {
            this.view = view;
        }
    },
    filters: {
        caps(val) {
            return val.toUpperCase(); 
        }
    },
    created() {
        console.log("created");
    },
    mounted() {
        console.log("mounted");
    },
    updated() {
        console.log("updated");
    },
    destroyed() {
        console.log("destroyed");
    }
});
