import Vue from 'vue'
import App from './vue/app.vue';
import CSS from '../style/app.scss'

new Vue({
    el:'#root',
    render:h=>h(App)
})