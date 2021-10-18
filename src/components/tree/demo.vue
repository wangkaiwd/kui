<template>
  <div class="k-tree-demo">
    <k-tree :data-source="dataSource"></k-tree>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import KTree from './tree.vue';
import { treeData } from '@/components/tree/test-data';

export default defineComponent({
  name: 'KTreeDemo',
  components: { KTree },
  setup () {
    const dataSource = ref(treeData);
    return {
      dataSource
    };
  },
});
</script>

<style lang="less" scoped>
.k-tree-demo {

}
</style>