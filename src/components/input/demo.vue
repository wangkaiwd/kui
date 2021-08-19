<template>
  <div class="demo-box">
    <k-input></k-input>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import KInput from '@/components/input/input';

export default defineComponent({
  name: 'InputDemo',
  components: { KInput },
  setup () {}
});
</script>