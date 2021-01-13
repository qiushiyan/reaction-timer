<template>
    <div class="box-hard" v-if = "showBox" @click = "stopTimer" :style = "boxStyle">
        <p class = "click">click me</p>
    </div>
</template>


<script>
    export default {
        props: ["delay", "boxWidth", "boxHeight"],
        data() {
            return {
                showBox: false,
                timer: null,
                reactionTime: 0,
                timerStopped: false,
                boxStyle: {}
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
                this.$emit("boxClicked", this.reactionTime)
            },
            getRandomPositionStyle(max) {
                let x = Math.random() * max + "%"
                let y = Math.random() * max + "%"
                this.boxStyle.left = x
                this.boxStyle.top = y
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
                this.showBox = true
                this.getRandomPositionStyle(95)
                this.boxStyle.width = this.boxWidth + "px"
                this.boxStyle.height = this.boxHeight + "px"
                this.boxStyle.fontSize = (this.boxWidth * this.boxHeight) / 20833 + "rem"
                console.log(this.boxStyle)
            }, this.delay)
        }
    }
</script>

<style scoped>
    .box-hard {
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
    
    .box-hard p {
        margin: 0;
    }
</style>