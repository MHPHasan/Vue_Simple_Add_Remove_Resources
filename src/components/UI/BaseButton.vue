<template>
    <button :type="type" :class="mode">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: ['type', 'mode']
}
</script>

<style scoped>
    button {
        padding: 0.75rem 1.5rem;
        font-family: inherit;
        background-color: #3a0061;
        border: 1px solid #3a0061;
        color: #fff;
        cursor: pointer;
        transition: all .3s ease;
    }
    button:hover,
    button:active {
        background-color: #270041;
        border-color: #270041;
    }

    button:not(:last-child) {
        margin-right: 10px;
    }

    .flat {
        background-color: transparent;
        color: #3a0061;
        border-color: #edd2ff;
    }

    .flat:hover,
    .flat:active {
        background-color: #edd2ff;
        border-color: #edd2ff;
    }

</style>