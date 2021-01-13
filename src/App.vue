<template>
  <header>
    <h2>Test Your Reaction Time</h2>
    <h3>Click play to start</h3>
    <h3>When the circle appears, click as soon as possible</h3>
    <div class = "box-change" v-if = "!isStarted">
        <input type="text" placeholder="target width (px)" v-model = "boxWidth">
        <input type="text" placeholder="target height (px)" v-model = "boxHeight">
    </div>
    <button :disabled = "isStarted" @click = "start" >
        <p v-show = "reactionTime">{{timeMessage}}</p>
        <p>{{message}}</p>
    </button>

  </header>
  <div class="buttonList">
    <button v-if = "!isStarted" class = "btn-easy pop-on-hover" :class = "btnEasyActive" @click = "swtichActiveBtn" >easy</button>
    <button v-if = "!isStarted" class = "btn-hard pop-on-hover" :class = "btnHardActive" @click = "swtichActiveBtn" >hard</button>
  </div>
  <box-easy v-if = "isStarted && btnEasyActive.active" :delay = "delay" @boxClicked = "reset" :boxWidth = "boxWidth ? boxWidth : 120" :boxHeight = "boxHeight ? boxHeight : 120"></box-easy>
  <box-hard v-if = "isStarted && btnHardActive.active" :delay = "delay" @boxClicked = "reset" :boxWidth = "boxWidth ? boxWidth : 60" :boxHeight = "boxHeight ? boxHeight : 60"></box-hard>
</template>

<script>
    import boxEasy from "./components/boxEasy.vue"
    import boxHard from "./components/boxHard.vue"

    export default {
        components: {
            "box-easy": boxEasy,
            "box-hard": boxHard
        },
        data() {
            return {
                isStarted: false,
                delay: null,
                round: 0,
                message: "play",
                reactionTime: null,
                "btnEasyActive": {
                    active: true
                },
                "btnHardActive": {
                    active: false
                },
                boxWidth: null,
                boxHeight: null,
            }
        },
        methods: {
            start() {
                this.isStarted = true
                this.boxShown = true
                this.delay = 200 + Math.random() * 9800
                this.round += 1
            },
            reset(reactionTime) {
                this.isStarted = false
                this.reactionTime = reactionTime
                if (this.btnEasyActive.active) {
                    if (reactionTime <= 300) {
                        this.message = "Ninja Fingers! Try Again"
                    } else if (reactionTime <= 320) {
                        this.message = "You are Quick! Try Again"
                    } else if (reactionTime <= 350) {
                        this.message = "Not Bad! Try Again"
                    } else {
                        this.message = "Slow ... Try Again"
                    }
                } else if (this.btnHardActive.active) {
                    if (reactionTime <= 500) {
                        this.message = "Ninja Fingers! Try Again"
                    } else if (reactionTime <= 600) {
                        this.message = "You are Quick! Try Again"
                    } else if (reactionTime <= 800) {
                        this.message = "Not Bad! Try Again"
                    } else {
                        this.message = "Slow ... Try Again"
                    }
                }
            },
            swtichActiveBtn(e) {
                const el = e.currentTarget
                if (el.classList.contains("btn-easy") && !el.classList.contains("active")) {
                    this.btnEasyActive.active = true
                    this.btnHardActive.active = false
                } else if (el.classList.contains("btn-hard") && !el.classList.contains("active")) {
                    this.btnHardActive.active = true
                    this.btnEasyActive.active = false
                }
            }

        },
        computed: {
            timeMessage() {
                return this.reactionTime / 1000 + "s"
            }
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Kalam&display=swap');
     :root {
        box-sizing: border-box;
        background-color: #e4f1e1;
        margin: 0;
        padding: 0;
    }
    
    *,
    *::after,
    *::before {
        box-sizing: inherit;
        white-space: pre-wrap;
        padding: 0;
        margin: 0;
    }
    
    body {
        overflow: hidden;
    }
    
    *:focus {
        outline: none;
    }
    
    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #287274;
        font-family: Kalam, sans-serif;
        min-height: 30vh;
        margin-bottom: 0.5rem;
        margin-top: 1rem;
    }
    
    h2 {
        font-size: 3rem;
        margin: 0;
    }
    
    h3 {
        font-style: normal;
        margin: 0;
    }
    
    h3:nth-child(3) {
        margin-bottom: 0.5rem;
    }
    
    .box-change {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }
    
    .box-change {
        display: block
    }
    
    .box-change>*+* {
        margin-left: 2rem;
    }
    
    input {
        border-radius: 6px;
        transition: 180ms box-shadow ease-in-out;
        padding: 3px 0 3px 3px
    }
    
    input:focus {
        box-shadow: 0 0 0 3px teal;
        outline: 3px solid transparent;
    }
    
    button {
        border-radius: 15px;
        font-size: 1.5rem;
        padding: 0 50px;
        font-family: Kalam, sans-serif;
        cursor: pointer;
    }
    
    button[disabled] {
        opacity: 0.2;
        cursor: not-allowed;
    }
    
    button:hover {
        box-shadow: 0.5px 0.5px teal;
        transform: translateY(-1px);
        color: teal
    }
    
    button p {
        margin: 0
    }
    
    .buttonList {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .buttonList>*+* {
        margin-left: 2rem;
    }
    
    .buttonList button {
        display: flex;
        font-size: 1rem;
    }
    
    .active {
        background-color: #46aea0;
    }
    
    @-webkit-keyframes pop-on-hover {
        50% {
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
        }
    }
    
    @keyframes pop-on-hover {
        50% {
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
        }
    }
    
    .pop-on-hover {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    }
    
    .pop-on-hover:hover,
    .pop-on-hover:focus,
    .pop-on-hover:active {
        -webkit-animation-name: pop-on-hover;
        animation-name: pop-on-hover;
        -webkit-animation-duration: 0.3s;
        animation-duration: 0.3s;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
    }
</style>