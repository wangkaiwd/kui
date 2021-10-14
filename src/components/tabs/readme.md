## `Tab`组件

### 需求分析

1. 渲染`tab`以及对应的`content`
2. 切换
3. custom tab pane title by slot
4. bottom line of tabs

### 使用方式

### `problem`

* onBeforeUnmount vs onBeforeUnmount in composition api

### knowledge

* [setup arguments](https://v3.vuejs.org/guide/composition-api-setup.html#arguments)
  * `props` destructure will lose reactivity
  * render function will use `expose` to provide public api for `template refs`
* [Usage inside v-for](https://v3.vuejs.org/guide/composition-api-template-refs.html#usage-inside-v-for)
