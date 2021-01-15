<template>
    <github-link></github-link>
    <the-header></the-header>
    <input-size @updateSize = "updateSize" :isStarted = "isStarted"></input-size>
    <button-list @start = "start" @selectMode = "updateCircleStyle" :isStarted = "isStarted" :round = "round" :reactionTime = "reactionTime" :waitPlay = "waitPlay"></button-list>
    <target-circle v-if = "isStarted" @circleClicked = "reset" :delay = "delay"  :circleStyle = "circleStyle" :circleFontStyle = "circleFontStyle"></target-circle>
</template>

<script>
    import GitHubLink from "./components/GithubLink.vue"
    import ButtonList from "./components/ButtonList.vue"
    import TargetCircle from "./components/TargetCircle.vue"
    import InputSize from "./components/InputSize.vue"

    export default {
        components: {
            "github-link": GitHubLink,
            "button-list": ButtonList,
            "target-circle": TargetCircle,
            "input-size": InputSize
        },
        data() {
            return {
                isStarted: false,
                delay: null,
                round: 0,
                waitPlay: null,
                reactionTime: null,
                mode: null,
                circleStyle: {
                    width: "70px",
                    height: "70px",
                    margin: "30px auto"
                },
                circleFontStyle: {
                    fontSize: "1rem"
                },
            }
        },
        methods: {
            start() {
                this.isStarted = true
                this.delay = 200 + Math.random() * 9800
                this.round += 1
                this.waitPlay = false
                    // if the user keeps playing the hard mode
                if (this.mode === "hard") {
                    this.getRandomPositionStyle(90)
                }
            },
            reset(reactionTime) {
                this.isStarted = false
                this.reactionTime = reactionTime
                this.waitPlay = true
            },
            getRandomPositionStyle(max) {
                let x = Math.random() * max + "%"
                let y = Math.random() * max + "%"
                this.circleStyle.left = x
                this.circleStyle.top = y
                this.circleStyle.position = "absolute"
                this.circleStyle.margin = "0"
            },
            updateCircleStyle(mode) {
                this.mode = mode
                    // hard mode
                if (this.mode === "hard") {
                    this.getRandomPositionStyle(90)
                        // easy mode, clear hard mode setting
                } else {
                    this.circleStyle.left = null
                    this.circleStyle.top = null
                    this.circleStyle.position = null
                    this.circleStyle.margin = "30px auto"
                }
            },
            updateSize(circleWidth, circleHeight) {
                if (this.mode === "hard" && this.round === 0) {
                    this.getRandomPositionStyle(90)
                }
                this.circleStyle.width = circleWidth + "px"
                this.circleStyle.height = circleHeight + "px"
                this.circleFontStyle.fontSize = (this.circleStyle.width.slice(0, -3) * this.circleStyle.height.slice(0, -3) / 15000) + "rem"
            }
        },
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Kalam&display=swap');
     :root {
        box-sizing: border-circle;
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
</style>