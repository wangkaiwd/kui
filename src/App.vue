<template>
  <div class="app">
    <k-form>
      <k-form-item>
        <k-input></k-input>
      </k-form-item>
    </k-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import KForm from '@/components/form/form';
import KFormItem from '@/components/form/formItem';
import KInput from '@/components/input/input';

export default defineComponent({
  name: 'App',
  components: { KInput, KFormItem, KForm },
});
</script>

<style lang="less">
.app {
}
</style>
