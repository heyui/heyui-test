import Vue from 'vue';
import App from './app.vue';
import {Radio, RadioGroup } from 'iview';
import { install, Prototypes, Button, DropdownMenu } from 'heyui';
import 'iview/dist/styles/iview.css';

require('./module.less');

Vue.component('i-radio', Radio);
Vue.component('i-radiogroup', RadioGroup);
Vue.use(install, { components: { 'h-button': Button, 'h-dropdownmenu':DropdownMenu}, prototypes: Prototypes });

const app = new Vue({
  el: '#app',
  render: h => h(App)
});
export default app;
