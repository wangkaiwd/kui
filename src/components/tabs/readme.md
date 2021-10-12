## `Tab`组件

### 需求分析

1. 渲染`tab`以及对应的`content`
2. 切换
3. custom tab pane title by slot
4. bottom line of tabs

### 使用方式

### `problem`

* onBeforeUnmount vs onBeforeUnmount in composition api

### 参考

* [setup arguments](https://v3.vuejs.org/guide/composition-api-setup.html#arguments)
  * `props` destructure will lose reactivity
  * render function will use `expose` to provide public api for `template refs`