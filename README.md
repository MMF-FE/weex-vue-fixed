# weex-vue-fixed

这个组件，解决了 weex 使用 `vue-router`, 带有 `position: fixed` 属性的 DOM 
在 android 不会消失的[问题](https://github.com/alibaba/weex/issues/2310)

## 安装

```
npm i weex-vue-fixed --save-dev
# or
yarn add weex-vue-fixed --dev
```

## 配置

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

## 使用

```html
<wx-fixed top="0" left="0" :show="true">
    <text>This is fixed tag for android , clear safe</text>
</wx-fixed>
```

## 属性 props

| name   | type    |  desc      |
|--------|---------|------------|
| left   | number  | css left   |
| right  | number  | css right  |
| bottom | number  | css bottom |
| top    | number  | css top    |
| show   | boolean | create or destroy |