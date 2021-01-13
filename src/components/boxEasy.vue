<template>
    <div class="box-easy" v-if = "showBox" @click = "stopTimer" :style = "boxStyle">
        <p>click me</p>
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
            }
        },


        mounted() {
            setTimeout(() => {
                this.startTimer()
                this.showBox = true
                this.boxStyle.width = this.boxWidth + "px"
                this.boxStyle.height = this.boxHeight + "px"
                this.boxStyle.fontSize = (this.boxWidth * this.boxHeight) / 20833 + "rem"
            }, this.delay)
        }
    }
</script>

<style scoped>
    .box-easy {
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
    
    .box-easy p {
        margin: 0;
        color: white;
    }
</style>