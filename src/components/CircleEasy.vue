<template>
    <div class="circle-easy" v-if = "showcircle" @click = "stopTimer" :style = "circleStyle">
        <p>click me</p>
    </div>
</template>


<script>
    export default {
        props: ["delay", "circleWidth", "circleHeight"],
        data() {
            return {
                showcircle: false,
                timer: null,
                reactionTime: 0,
                timerStopped: false,
                circleStyle: {}
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
                this.startTimer()
                this.showcircle = true
                this.circleStyle.width = this.circleWidth + "px"
                this.circleStyle.height = this.circleHeight + "px"
                this.circleStyle.fontSize = (this.circleWidth * this.circleHeight) / 20000 + "rem"
            }, this.delay)
        }
    }
</script>

<style scoped>
    .circle-easy {
        font-family: Kalam, sans-serif;
        margin: 20px auto;
        border-radius: 50%;
        background: #3b738f;
        text-align: center;
        margin: 40px auto;
        font-size: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
    .circle-easy:hover {
        box-shadow: 0 0 0 3px teal;
        outline: 3px solid transparent;
    }
    
    .circle-easy p {
        margin: 0;
        color: white;
    }
</style>