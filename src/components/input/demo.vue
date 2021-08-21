<template>
  <div class="demo-box">
    <k-input :maxlength="10" v-model:model-value="value"></k-input>
    {{ value }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import KInput from '@/components/input/input';

export default defineComponent({
  name: 'InputDemo',
  components: { KInput },
  setup () {
    const value = ref('aa');
    return {
      value
    };
  }
});
</script>