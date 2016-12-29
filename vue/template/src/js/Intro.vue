<style>

    header {
        height: 50%;
        background-color: #00897B;
    }
    
    img {
        cursor: pointer;
    }

</style>

<template>
    <div class="flex-container center-start col">
        <header class="flex-container end-center">
            <img id="logo" src="src/img/logo.png" @mouseover="grow(1.5)" @click="nextView">
        </header>
    </div>
</template>

<script>
    import State from './State.vue';
    
    export default {
        data() {
            return {
                state: State,
                colors: [
                    "#E0F2F1",
                    "#B2DFDB",
                    "#80CBC4",
                    "#4DB6AC",
                    "#4DB6AC",
                    "#80CBC4",
                    "#B2DFDB",
                    "#E0F2F1"
                ],
                step: 0,
                iid: 0
            };
        },
        methods: {
            grow(size) {
                $("#logo").css("transform", "translateY(50%) scale("+size+")");
            },
            nextColor() {
                let colors = this.colors;
                
                if(this.step < colors.length) {
                    let color = colors[this.step++];
                    $("body").css("background-color", color);
                }
                else
                    this.step = 0;
            },
            nextView() {
                console.log('oh uh')
                clearInterval(this.iid);
                $("body").css("background-color", "#FFF");
                this.$emit("change", "next");
            }
        },
        created() {
            let self = this;
            
            setTimeout(function(){
                $("#logo").css("transform", "translateY(50%)");
            }, 1000);
            
            this.iid = setInterval(function(){
                self.nextColor();
            }, 500);
        }
    };
</script>
