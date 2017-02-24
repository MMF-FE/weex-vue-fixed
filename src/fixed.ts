/**
 * @date 2017-02-21 11:26:57
 * 
 **/
'use strict'

import * as Vue from 'vue'
import * as reg from './reg'

let attr = ['left', 'right', 'top', 'bottom']

export default {
    render() {
        //hook
    },
    props: {
        left: {
            type: [Number, String]
        },
        right: {
            type: [Number, String]
        },
        top: {
            type: [Number, String]
        },
        bottom: {
            type: [Number, String]
        },
        show: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        style() {
            let css = {
                position: 'fixed'
            }

            attr.forEach(v => {
                if (this[v] && this[v] !== 'auto') {
                    css[v] = `${this[v]}px`
                }
            })

            return css
        }
    },
    created() {
        reg.add(this)
    }
}