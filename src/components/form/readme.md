## Form组件

### 需求分析

#### component

* form: handle all form item
* formItem: handle single form item

### form validate

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