<style scoped>

    #logo {
        transform: rotate(180deg);
    }
</style>

<template>
    <div class="flex-container center-center col">
        <img id="logo" src="src/img/logo.png" @click="nextView">
    </div>
</template>

<script>
    import State from './State.vue'
    
    export default {
        data() {
            return {
                state: State
            };
        },
        methods: {
            nextView() {
                this.$emit("change", "intro");
            }
        },
        created() {
            
        }
    };
</script>