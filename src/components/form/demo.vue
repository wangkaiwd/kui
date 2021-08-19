<template>
  <div class="demo-box">
    <k-form>
      <k-form-item label="姓名">
        <k-input></k-input>
      </k-form-item>
    </k-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import KForm from './form';
import KFormItem from './formItem';
import KInput from '../input/input';

export default defineComponent({
  name: 'FormDemo',
  components: { KInput, KFormItem, KForm },
  setup () {
    const state = reactive({});
    return {
      ...toRefs(state)
    };
  },
});
</script>

<style lang="less" scoped>
.demo {

}
</style>