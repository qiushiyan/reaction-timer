<template>
        <div class="circle" v-if = "showcircle" :delay = "delay" @click = "stopTimer" :style= "circleStyle">
            <p :style = "circleFontStyle">click me</p>
        </div>
</template>

<script>
    export default {
        props: ["delay", "circleStyle", "circleFontStyle"],
        data() {
            return {
                showcircle: false,
                timer: null,
                reactionTime: 0,
                timerStopped: false,
            }
        },
        methods: {
            startTimer() {
                this.timer = setInterval(() => {
                    this.reactionTime += 10
                }, 10)
            },
            stopTimer() {
                clearInterval(this.timer)
                this.timerStopped = true
                this.$emit("circleClicked", this.reactionTime)
            }
        },
        mounted() {
            setTimeout(() => {
                this.showcircle = true
                this.startTimer()
            }, this.delay)
        }
    }
</script>

<style scoped>
    .circle {
        font-family: Kalam, sans-serif;
        border-radius: 50%;
        background: #3b738f;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .circle:hover {
        box-shadow: 0 0 0 3px teal;
        outline: 3px solid transparent;
    }
    
    .circle p {
        margin: 0;
        color: white;
    }
</style>