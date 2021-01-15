<template>
    <button :disabled = "isDisabled" :class = "classProp">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: ["isDisabled", "classProp"]
    }
</script>

<style scoped>
    button {
        border-radius: 15px;
        font-size: 1.5rem;
        padding: 0 50px;
        font-family: Kalam, sans-serif;
        cursor: pointer;
        display: block
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
    
    button.active {
        background-color: #46aea0;
    }
</style>