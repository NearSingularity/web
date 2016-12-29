<script>
    export default {
        state: {
            backgroundColor: {
                start: "#FFF",
                current: "#FFF"
            }
        },
        methods: {
            update(prop, val) {
                if(!this[prop]) {
                    console.error("You tried updating ("+prop+") which isn't a part of the State component");
                    return;   
                }
                this[prop].current = val;
            }
        }
    }
</script>