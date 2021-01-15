<template>
    <header>
        <slot>
            <h2>Test Your Reaction Time</h2>
            <h3>Click play to start</h3>
            <h3>When the circle appears, click as soon as possible. Select a target size of your choice!</h3>
        </slot>
    </header>
</template>

<script>
    export default {

    }
</script>


<style>
    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #287274;
        font-family: Kalam, sans-serif;
        margin-bottom: 0.5rem;
        margin-top: 1rem;
    }
    
    header h2 {
        font-size: 3rem;
        margin: 0;
    }
    
    header h3 {
        font-style: normal;
        margin: 0;
    }
</style>