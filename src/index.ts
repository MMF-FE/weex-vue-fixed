/**
 * fixed tag for weex
 * @author vfasky<vfasky@gmail.com>
 * 
 **/
'use strict'
import { clear } from './reg'
import component from './fixed'
declare var require

export default {
    install(Vue) {
        Vue.fixedClear = function() {
            clear()
        }
        let fixed
        if (String(weex.config.env.platform).toLowerCase() == 'web'){
            fixed = require('../dist/weex-vue-fixed.js')
        } else {
            fixed = require('../dist/weex-weex-fixed.js')
        }
        component.render = fixed.render
        Vue.component('wv-fixed', component)
    }
}