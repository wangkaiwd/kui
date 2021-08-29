## Form组件

### 需求分析

#### component

* form: handle all form item
* formItem: handle single form item

#### formItem

* customLabel: slot label to customize label
* input change how to notify formItem component validate value, think two resolve schema:
  * `vue2`: mounted $on + recursive $parent
    * [formItem `instance.$on('validate',validateFn)`](https://github.com/wangkaiwd/js-deep/blob/5016bf9254e9f374633c549a8a6970408119d0b0/advanced/vue-usage/vue-components/src/components/el-form/el-form-item.vue#L30-L34)
    * [input recursive find $parent which name is `FormItem` and call `$parent.$emit('validate',value)`](https://github.com/wangkaiwd/js-deep/blob/5016bf9254e9f374633c549a8a6970408119d0b0/advanced/vue-usage/vue-components/src/components/el-form/el-input.vue#L26-L40)
  * `vue3`: provide + inject

### form validate

> [`async-validator`](https://github.com/yiminghe/async-validator)

* think form validate logic

```ts
const formData = { name: 'xxx', age: 18 }
const rules = {
  name: [{ required: true, message: '必填' }, { maxLength: 20, message: '内容太长' }],
  age: [{ required: true, message: '必填' }]
}

// {name: ['必填','内容太长'], age: ['必填']}
// 异步校验？
const validate = (formData, rules) => {
  const errors = {}
  // 遍历formData，看其中的每个值，是否满足校验条件。最终组合成errors，将错误信息渲染到表单下方  
}

```

### 知识点

* [optional chaining(?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
* [provide/inject](https://v3.vuejs.org/guide/composition-api-provide-inject.html#provide-inject)
* how to invoke child component method: (provide/inject)`addItem` and `removeItem` ?
  * execute slots to get type props(not ideally)
  * provide/inject
* [template refs](https://v3.vuejs.org/guide/composition-api-template-refs.html)
  * [expose api](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0042-expose-api.md#summary)