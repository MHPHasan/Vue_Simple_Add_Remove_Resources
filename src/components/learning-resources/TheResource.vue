<template>
    <base-card>
        <BaseButton @click="setSelectedTab('StoredResource')" :mode="storedResButtonMode">Stored Resources</BaseButton>
        <BaseButton @click="setSelectedTab('AddResource')" :mode="addResButtonMode">Add Resources</BaseButton>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
import StoredResource from './StoredResourced.vue'
import AddResource from './AddResource.vue'
export default {
    components: {
        StoredResource,
        AddResource
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            removeResource: this.removeResource,
        }
    },
    data() {
        return {
            selectedTab: 'StoredResource',
            storedResources: [
                { id: 'official-guide', title: 'Official Guide', description: 'The Official Vue.js Documentation', link: 'https://vuejs.org' },
                { id: 'google', title: 'Google', description: 'Learn To Google...', link: 'https://google.org' },
                { id: 'facebook', title: 'Facebook', description: 'Learn To Facebook...', link: 'https://facebook.com' },
            ]
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(title, desc, link) {
            const newResource = {
                id: new Date().toISOString(),
                title,
                description: desc,
                link
            }
            this.storedResources.unshift(newResource);
            this.selectedTab = 'StoredResource';
        },
        removeResource(resId) {
            // this.storedResources = this.storedResources.filter(resource => resource.id !== resId );

            const resIndex = this.storedResources.findIndex(res => res.id === resId);
            this.storedResources.splice(resIndex, 1);
            console.log(this.storedResources.length);
        }
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab === 'StoredResource' ? null : 'flat'
        },
        addResButtonMode() {
            return this.selectedTab === 'AddResource' ? null : 'flat'
        },
    }
}
</script>
