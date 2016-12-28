//Class-render-based component
//|new Component();
class Component {
    constructor() {
        this.state = { 
            current: {
                counter: 0,
                wishList: ["Job", "Money", "Fame"]
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
            //Example: independent counter with external HTML container
            counter(data) {
                document.getElementById("counter").innerHTML = "<span>"+data+"</span>";
            },
            //Example: Sub-view with contained markup
            wishList(data) {
                let container = document.getElementById("my-list");
                if(container) {
                    container.innerHTML = '';
                    data.map(li => {
                        let litem = document.createElement("li");
                        litem.innerHTML = li;
                        container.appendChild(litem);
                    });
                }
                else {
                    let list = document.createElement("ol");
                    list.setAttribute("id", "my-list");
                    
                    data.map(li => {
                        let litem = document.createElement("li");
                        litem.innerHTML = li;
                        list.appendChild(litem);
                    });
                    document.getElementById("body").appendChild(list);
                }
            }
        }
        this._render(["counter", "wishList"]); //Explicit call to render out the components...grows linearly.
    }
    
    //setState({key: newVal})
    //| should be the only entry point to modify component
    setState(newState){
        let state = this.state.current;
        let keys = [];
        
        if(!newState)
            return this;
        
        for(let key in newState) {
            keys.push(key);

            state[key] = newState[key];
        }
        
        this._render(keys);
        
        return this;
    }
    
    _render(keys) {
        let state = this.state.current;
        
        if(!keys) {
            return;
        }
        
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