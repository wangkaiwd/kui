<template>
  <div class="k-tree-demo">
    <k-tree
      :data-source="dataSource"
      v-model:expand-keys="expandKeys"
      v-model:checked-keys="checkedKeys"
    >
    </k-tree>
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
    const expandKeys = ref([]);
    const checkedKeys = ref(['0-0-0']);
    return {
      dataSource,
      expandKeys,
      checkedKeys
    };
  },
});
</script>

<style lang="less" scoped>
.k-tree-demo {

}
</style>