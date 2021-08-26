<template>
  <div class="demo-box">
    <k-form :model="formValues" :rules="formRules">
      <k-form-item label="姓名" prop="name">
        <k-input v-model="formValues.name"></k-input>
      </k-form-item>
      <k-form-item label="年龄" prop="age">
        <k-input v-model="formValues.age"></k-input>
      </k-form-item>
    </k-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import KForm from './form';
import KFormItem from './formItem';
import KInput from '../input/input';
import { KRule, KRules } from '@/components/form/types';

export default defineComponent({
  name: 'FormDemo',
  components: { KInput, KFormItem, KForm },
  setup () {
    const formValues = reactive({
      name: '',
      age: ''
    });
    // const nameRules = reactive<KRules>({
    //   required: true,
    //   message: '请输入姓名',
    //   trigger: 'blur'
    // });
    const formRules: KRules = {
      name: { required: true, message: '姓名必填' },
      age: { max: 4, message: '长度不能超过4' }
    };
    return {
      formValues,
      // nameRules,
      formRules
    };
  },
});
</script>

<style lang="less" scoped>
.demo {

}
</style>