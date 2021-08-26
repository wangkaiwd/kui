<template>
  <div class="demo-box">
    <k-form>
      <k-form-item label="姓名" prop="name" :rules="nameRules">
        <!--  custom label      -->
        <!--        <template #label>
                  <h2>hhhh</h2>
                </template>-->
        <k-input v-model="name"></k-input>
      </k-form-item>
      <k-form-item label="年龄" prop="age">
        <!--  custom label      -->
        <!--        <template #label>
                  <h2>hhhh</h2>
                </template>-->
        <k-input v-model="age"></k-input>
      </k-form-item>
    </k-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import KForm from './form';
import KFormItem from './formItem';
import KInput from '../input/input';
import { KRules } from '@/components/form/types';

export default defineComponent({
  name: 'FormDemo',
  components: { KInput, KFormItem, KForm },
  setup () {
    const formValues = reactive({
      name: '',
      age: ''
    });
    const nameRules = reactive<KRules>({
      required: true,
      message: '请输入姓名',
      trigger: 'blur'
    });
    return {
      ...toRefs(formValues),
      nameRules
    };
  },
});
</script>

<style lang="less" scoped>
.demo {

}
</style>