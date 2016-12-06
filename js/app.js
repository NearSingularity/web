const component = {
    model: {
        states: [],
        init() {
            
            
        },
        update(msg, ...vals){
            this.states.push(this.model);
            
            for(let i = 0; i < vals.length; i++){
                let prop = vals[i][0];
                let val  = vals[i][1];
                this[prop] = val;
            }
            
            component.view.update(msg);
        } 
    },
    view: {
        init() {
            
        },
        update(msg){
            if(typeof msg != "string") return;
            
            switch(msg){
                default:
                    console.warn("You passed your view's update a message it didn't recognize: "+msg)
                break;
            }
        }
    },
    init() {
    }
};