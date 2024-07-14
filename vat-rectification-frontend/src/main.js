import { createApp } from 'vue';
import App from './App.vue';

// Création de l'application Vue
const app = createApp(App);

// Configuration optionnelle
app.config.productionTip = false;

// Montage de l'application dans l'élément avec l'id "app"
app.mount('#app');
