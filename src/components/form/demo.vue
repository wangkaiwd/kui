<template>
  <div class="demo-box">
    <k-form :model="formValues" :rules="formRules" ref="kForm">
      <k-form-item label="姓名" prop="name">
        <k-input v-model="formValues.name"></k-input>
      </k-form-item>
      <k-form-item label="年龄" prop="age">
        <k-input v-model="formValues.age"></k-input>
      </k-form-item>
      <k-form-item>
        <button @click="onSubmit">提交</button>
      </k-form-item>
    </k-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue';
import KForm from './form';
import KFormItem from './formItem';
import KInput from '../input/input';
import { FormContext, KRule, KRules } from '@/components/form/types';

export default defineComponent({
  name: 'FormDemo',
  components: { KInput, KFormItem, KForm },
  setup () {
    const formValues = reactive({
      name: '',
      age: ''
    });
    const kForm = ref<FormContext>(null!);
    // const nameRules = reactive<KRules>({
    //   required: true,
    //   message: '请输入姓名',
    //   trigger: 'blur'
    // });
    const formRules: KRules = {
      name: { required: true, message: '姓名必填' },
      age: [
        { required: true, message: '年龄必填' },
        { min: 4, message: '长度不能小于4' }
      ]
    };
    const onSubmit = () => {
      kForm.value.validate().then((res) => {
        console.log(res);
      });
    };
    return {
      formValues,
      // nameRules,
      formRules,
      kForm,
      onSubmit
    };
  },
});
</script>

<style lang="less" scoped>
.demo {

}
</style>