<template>
  <div class="app">
    <!--    <form-demo></form-demo>-->
    <k-tab-demo></k-tab-demo>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import KForm from '@/components/form/form';
import KFormItem from '@/components/form/formItem';
import KInput from '@/components/input/input';
import InputDemo from '@/components/input/demo.vue';
import FormDemo from '@/components/form/demo.vue';
import KTabDemo from '@/components/tabs/demo.vue';

export default defineComponent({
  name: 'App',
  components: { KTabDemo, FormDemo, InputDemo, KInput, KFormItem, KForm },
});
</script>

<style lang="less">
.app {
  padding: 20px;
}
</style>
