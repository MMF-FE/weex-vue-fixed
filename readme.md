# weex-vue-fixed

This component is using for solving the issue that when using `vue-router` in weex, the DOM elements with `position: fixed`
attribute will never disappear or close on Android devices. [issue](https://github.com/alibaba/weex/issues/2310)
## Install

```
npm i weex-vue-fixed --save-dev
# or
yarn add weex-vue-fixed --dev
```

## Configuration

```js
import Vue from 'vue'
import Router from 'vue-router'
import weexVueFixed from 'weex-vue-fixed'

Vue.use(weexVueFixed)
Vue.use(Router)

let router = new Router({
    // you config
})

router.beforeEach((to, from, next) => {
    Vue.fixedClear() // clear for android
    next()
})
```

## Usage

```html
<wx-fixed top="0" left="0" :show="true">
    <text>This is fixed tag for android , clear safe</text>
</wx-fixed>
```

## props

| name   | type    |  desc      |
|--------|---------|------------|
| left   | number  | css left   |
| right  | number  | css right  |
| bottom | number  | css bottom |
| top    | number  | css top    |
| show   | boolean | create or destroy |
