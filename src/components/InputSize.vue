<template>
    <the-header v-if = "!isStarted">
        <div class = "input">
            <span>Target Width <span>{{circleWidth}}</span> px</span>
            <input type="range" class = "slider" step = "10" min = "10" max = "200" v-model = "circleWidth"  @input = "updateSize">
        </div>
        <div class="input">
            <span>Target Height <span>{{circleHeight}}</span> px</span>
            <input type="range" class = "slider" step  = "10" min = "10" max = "200" v-model = "circleHeight" @input = "updateSize">
        </div>
    </the-header>
</template>

<script>
    export default {
        props: ["isStarted"],
        data() {
            return {
                circleWidth: 70,
                circleHeight: 70
            }
        },
        methods: {
            updateSize() {
                this.$emit("updateSize", this.circleWidth, this.circleHeight)
            }
        }
    }
</script>

<style scoped>
    header {
        flex-direction: row;
        margin-bottom: 1rem;
    }
    
    header>*+* {
        margin-left: 3rem;
    }
    
    .input {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .input>*+* {
        margin-left: 0.8rem;
    }
    
    span>span {
        font-weight: bold;
    }
    
    .slider {
        opacity: 0.6;
    }
    
    .slider:hover {
        opacity: 1;
        /* Fully shown on mouse-over */
    }
    
    .slider:focus {
        border: none;
        outline: none
    }
    
    input[type=range] {
        -webkit-appearance: none;
    }
    
    input[type=range]::-webkit-slider-runnable-track {
        width: 300px;
        height: 5px;
        background: #ddd;
        border: none;
        border-radius: 3px;
    }
    
    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: #287274;
        margin-top: -4px;
    }
    
    input[type=range]:focus {
        outline: none;
    }
    
    input[type=range]:focus::-webkit-slider-runnable-track {
        background: #ccc;
    }
</style>