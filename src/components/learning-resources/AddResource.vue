<template>
    <BaseDialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
        <template #default>
            <p>Unfortunately, at least one input value is invalid</p>
            <p>Please Check all inputs and make sure you enter at least a few charecters into each input field </p>
        </template>
        <!-- <template #actions>
            <BaseButton @click="confirmError">Okey</BaseButton>
        </template> -->
    </BaseDialog>
    <base-card>
        <form @submit.prevent="submitData" ref="addResourceForm">
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" id="title" name="title" ref="titleInput">
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea name="description" id="description" ref="descInput"></textarea>
            </div>
            <div class="form-group">
                <label for="link">Link</label>
                <input type="url" id="link" name="link" ref="linkInput">
            </div>
            <div class="form-group">
                <BaseButton type="submit">Add Resources</BaseButton>
            </div>
        </form>
    </base-card>
</template>

<script>
export default {
    inject: ['addResource'],
    data() {
        return {
            inputIsInvalid: false
        }
    },
    methods: {
        submitData() {
            const enteredTitle = this.$refs.titleInput.value;
            const enteredDesc = this.$refs.descInput.value;
            const enteredLink = this.$refs.linkInput.value;

            if (enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredLink.trim() === '') {
                this.inputIsInvalid = true;
                return;
            }
            
            this.addResource(enteredTitle, enteredDesc, enteredLink);
            this.$refs.addResourceForm.reset();
        },
        confirmError() {
            this.inputIsInvalid = false;
        }
    }
}
</script>

<style scoped>
label {
    font-weight: 700;
    display: block;
    margin-bottom: 8px;
}
input, textarea {
    width: 100%;
    display: block;
    font: inherit;
    padding: 5px 10px;
    border: 1px solid #ccc;
    height: 40px;
    transition: all .3s ease-in-out;
}
textarea {
    height: 80px;
    resize: none;
}
input:focus, textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #edd2ff;
}

.form-group {
    margin: 1rem 0;
}
</style>