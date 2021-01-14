<template>
    <div class="circle-hard" v-if = "showcircle" @click = "stopTimer" :style = "circleStyle">
        <p class = "click">click me</p>
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
            },
            getRandomPositionStyle(max) {
                let x = Math.random() * max + "%"
                let y = Math.random() * max + "%"
                this.circleStyle.left = x
                this.circleStyle.top = y
            }
        },

        computed: {
            reactionMessage() {
                return "Reaction Time: " + this.reactionTime / 1000 + " s"
            }
        },

        mounted() {
            setTimeout(() => {
                this.startTimer()
                this.showcircle = true
                this.getRandomPositionStyle(95)
                this.circleStyle.width = this.circleWidth + "px"
                this.circleStyle.height = this.circleHeight + "px"
                this.circleStyle.fontSize = (this.circleWidth * this.circleHeight) / 20833 + "rem"
                console.log(this.circleStyle)
            }, this.delay)
        }
    }
</script>

<style scoped>
    .circle-hard {
        position: absolute;
        font-family: Kalam, sans-serif;
        margin: 0 0.5rem;
        border-radius: 50%;
        background: #3b738f;
        color: white;
        text-align: center;
        font-size: 1.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    
    .circle-hard:hover {
        box-shadow: 0 0 0 3px teal;
        outline: 3px solid transparent;
    }
    
    .circle-hard p {
        margin: 0;
    }
</style>