//Class-render-based component
//|new Component();
class Component {
    constructor() {
        this.state = { 
            current: {
                counter: 0
            },
            //|state.get()
            //| gets the state
            get() {
                return this.current;
            },
            //|state.set({})
            //| useful for setting the entire state at once
            //| use setState for individual updates
            set(state) {
                this.current = state;
                return this.current;
            }
        };
        this.view = {
            counter(data) {
                document.getElementById("counter").innerHTML = "<div id='counter'>"+data.counter+"</div>";
            }
        }
    }
    
    setState(val){
        let state = this.state.current;
        let keys = [];
        
        if(!val)
            return state;
        
        for(let key in val) {
            keys.push(key);
            state[key] = val[key];
        }
        
        this.render(keys);
    }
    
    render(keys) {
        let state = this.state.current;
        
        for(let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let data = state[key];
    
            if(this.view[key]) 
                this.view[key](data);
        }
    }
    
}

//Object-message-based component
//|component.init()
const component = {
    model: {
        history: [],
        //|model.init()
        //| initialize your model and then inits your view
        init() {
            
            component.view.init();
        },
        //|update(String, [(key, val), ...]
        //| updates your model and then sends the message to your view to update it
        update(msg, ...vals){
            this.history.push(this.model);
            
            for(let i = 0; i < vals.length; i++){
                let prop = vals[i][0];
                let val  = vals[i][1];
                this[prop] = val;
            }
            
            component.view.update(msg);
        }
    },
    view: {
        //|els: {elementName: document.getElementById("#")}
        //| attach all of your initial templates or elements here
        els: {
            
        },
        //|view.init()
        //| initialize your component's view
        init() {
            
            this.listen();  
        },
        //|listen()
        //| attach all of your event listeners of your component here.
        listen() {
            
        },
        //|update(String)
        //| updates your view based on the message sent from the model
        update(msg){
            if(typeof msg != "string") return;
            
            switch(msg){
                default:
                    console.warn("You passed your view's update a message it didn't recognize: "+msg);
                break;
            }
        }
    },
    //|component.init()
    // initializes the entire component
    init() {
        this.model.init();
    }
};