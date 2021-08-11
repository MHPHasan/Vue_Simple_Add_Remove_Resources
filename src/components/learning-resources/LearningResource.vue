<template>
    <li>
        <base-card>
            <header>
                <h3>{{title}}</h3>
                <BaseButton type="button" mode="flat" @click="removeResource(id)">Delete</BaseButton>
            </header>
            <p>{{description}}</p>
            <nav>
                <a :href="link">View Resources</a>
            </nav>
        </base-card>
    </li>
</template>

<script>
export default {
    props: ['title', 'description', 'link', 'id'],
    inject: ['removeResource']
}
</script>

<style scoped>
    li {
        margin: auto;
        max-width: 40rem;
    }
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    h3 {
        font-size: 1.25rem;

    }
    p, h3 {
        margin: .5rem 0;
    }
    a:hover, a:active {
        color: #c89300;
    }
</style>