/**
 * 
 * @author vfasky<vfasky@gmail.com>
 * 
 **/
'use strict'

let _data = []
const _isRun = String(weex.config.env.platform).toLowerCase() == 'android'

export function clear() {
    if (!_isRun) return
    _data.forEach((component) => {
        let node = component.$refs.fixed
        if(node) {
            let parent = node.parentNode
            if (parent) {
                try {
                    parent.removeChild(node, true)
                } catch (error) {}
            }
        }
    })
    _data = []
}

export function add(component) {
    if (!_isRun) return
    _data.push(component)
}

