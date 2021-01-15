<template>
    <div class="buttonList">
        <div class = "play-btn" v-if = "round !== 1 || reactionTime">
            <base-button :isDisabled = "isStarted" @click = "start" >
                <p v-show = "reactionTime || round === 0">{{timeMessage}}</p>
                <p v-show = "reactionTime && waitPlay">{{message}}</p>
            </base-button>
        </div>
        <div class = "mode-btn">
            <base-button v-if = "!isStarted" :classProp = "['btn-easy', 'pop-on-hover', btnEasyActive]" @click = "switchActiveBtn" >easy</base-button>
            <base-button v-if = "!isStarted" :classProp = "['btn-hard', 'pop-on-hover', btnHardActive]" @click = "switchActiveBtn" >hard</base-button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["isStarted", "round", "reactionTime", "waitPlay"],
        data() {
            return {
                "btnEasyActive": {
                    active: true,
                    mode: "easy"
                },
                "btnHardActive": {
                    active: false,
                    mode: "hard"
                }
            }
        },
        methods: {
            start() {
                this.$emit("start")
            },
            switchActiveBtn(e) {
                const el = e.currentTarget
                if (el.classList.contains("btn-easy") && !el.classList.contains("active")) {
                    this.btnEasyActive.active = true
                    this.btnHardActive.active = false
                    this.$emit("select-mode", this.btnEasyActive.mode)
                } else if (el.classList.contains("btn-hard") && !el.classList.contains("active")) {
                    this.btnHardActive.active = true
                    this.btnEasyActive.active = false
                    this.$emit("selectMode", this.btnHardActive.mode)
                }
            }
        },
        computed: {
            timeMessage() {
                return (this.round === 0) ? "Play" : (this.reactionTime / 1000) + "s"
            },
            message() {
                if (this.btnEasyActive.active) {
                    if (this.reactionTime <= 300) {
                        return "Ninja Fingers! Try Again"
                    } else if (this.reactionTime <= 320) {
                        return "You are Quick! Try Again"
                    } else if (this.reactionTime <= 350) {
                        return "Not Bad! Try Again"
                    } else {
                        return "Slow ... Try Again"
                    }
                } else if (this.btnHardActive.active) {
                    if (this.reactionTime <= 500) {
                        return "Ninja Fingers! Try Again"
                    } else if (this.reactionTime <= 600) {
                        return "You are Quick! Try Again"
                    } else if (this.reactionTime <= 800) {
                        return "Not Bad! Try Again"
                    } else {
                        return "Slow ... Try Again"
                    }
                }
                return ""
            }
        }
    }
</script>


<style scoped>
    .buttonList {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 0.5rem;
        flex-direction: column;
    }
    
    .buttonList>*+* {
        margin-top: 1rem;
    }
    
    .mode-btn {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .mode-btn>*+* {
        margin-left: 2rem;
    }
</style>