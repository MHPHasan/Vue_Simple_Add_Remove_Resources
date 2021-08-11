import { createApp } from 'vue';

import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseDialog from './components/UI/BaseDialog.vue'

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('BaseButton', BaseButton);
app.component('BaseDialog', BaseDialog);

app.mount('#app');