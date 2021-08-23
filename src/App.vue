<template>
  <div class="app">
    <form-demo></form-demo>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import KForm from '@/components/form/form';
import KFormItem from '@/components/form/formItem';
import KInput from '@/components/input/input';
import InputDemo from '@/components/input/demo.vue';
import FormDemo from '@/components/form/demo.vue';

export default defineComponent({
  name: 'App',
  components: { FormDemo, InputDemo, KInput, KFormItem, KForm },
});
</script>

<style lang="less">
.app {
}
</style>
