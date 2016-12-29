/* global Vue */

let basic = new Vue({
    el: "#basic",
    data: {
        message: "Basic Vue"
    }
});

let vBindTitle = new Vue({
    el: "#v-bind-title",
    data: {
        title: "Woah!"
    }
});

let vIf = new Vue({
    el: "#v-if",
    data: {
        seen: false
    },
    methods: {
        toggle() {
            this.seen = !this.seen;
        }
    }
});

let vFor = new Vue({
    el:"#v-for",
    data: {
        todos: [
            { text: "Woot" },
            { text: "Foo" },
            { text: "Bar" }
        ]
    }
});

let vModel = new Vue({
    el: "#v-model",
    data: {
        message: "Change Me!"
    }
});


let lifeCycle = new Vue({
    el: "#vue-life",
    data: {
        messages: [],
        updated: false
    },
    created() {
        this.messages.push("created");
    },
    mounted() {
        this.messages.push("mounted");
    },
    updated() {
        if(!this.updated) {
            this.messages.push("updated");
            this.updated = true;
        }
    },
    destroyed() {
        this.message.push("destroyed");
    }
});

let vHTML = new Vue({
    el: "#v-html",
    data: {
        raw: "<div style='background-color:#333;color:white;'><p>Hi, I'm raw HTML</p></div>"
    }
});


let vOn = new Vue({
    el: "#v-on",
    data: {
        message: "Click Me!"
    },
    methods: {
        doIt() {
            this.message = this.message.split('').reverse().join('');
        }
    },
    computed: {
        reversedMessage() {
            return this.message.split('').reverse().join('');
        }
    }
});

//v-on -- @
//v-bind -- :

Vue.component("simple-counter", {
    template: "<button @click='addCount'> {{counter}} </button>",
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        addCount() {
            this.counter += 1;
            this.$emit('update');
        }
    }
});

let buttons = new Vue({
    el: "#buttons",
    data: {
        total: 0
    },
    methods: {
        updateTotal() {
            this.total += 1
        }
    }
})




let ChildComponent = {
    template: "<div> Child Component </div>"
};

let fullExample = new Vue({
    el: "#full",
    data: {
        message: "Simple",
        messages: []
    },
    components: {
        'local-component': ChildComponent
    },
    watch: {
          
    },
    computed: {
        reversedMessage() {
            return this.message.split('').reverse().join('');
        }
    },
    methods: {
        print() {
            return this.message;
        }
    },
    filters: {
        caps(val) {
            return val.toUpperCase(); 
        }
    },
    created() {
        this.messages.push("created");
    },
    mounted() {
        this.messages.push("mounted");
    },
    updated() {
        if(!this.updated) {
            this.messages.push("updated");
            this.updated = true;
        }
    },
    destroyed() {
        this.message.push("destroyed");
    }
});



Vue.component("my-app", {
    template: "<div id='app'></div>",
    data() {
        
    }
})

Vue.component("my-child", {
    data() {
        message: "Hi"
    }
})



// Interview Answer using Vue.js
Vue.component("user-row", {
    props: ["person"],
    template: "<tr><td>{{ person.name }}</td><td>{{ person.email }}</td></tr>"
});


Vue.component('user-table', {
    template: "<table><user-row v-for='person in people' :person='person'></user-row></table>",
    data() {
        return { 
            people: [
                {
                    name: 'James',
                    email: 'james@gmail.com'   
                },
                {
                    name: 'Jones',
                    email: 'jones@gmail.com'   
                }, 
                {
                    name: 'Donald',
                    email: 'don@yahoo.com' 
                }
            ]
        };
    }
});

let test = new Vue({
    el: "#test",
    data: {
        
    }
});
