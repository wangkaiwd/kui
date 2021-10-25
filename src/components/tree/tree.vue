<template>
  <div class="k-tree">
    <k-tree-node
      :expand-keys="expandKeys"
      :checked-keys="checkedKeys"
      @expand="handleExpand"
      :item="item"
      v-for="item in dataSource"
      :key="item.key"
    >
      {{ item.title }}
    </k-tree-node>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue';
import { DataProps, PlainArray } from './types';
import KTreeNode from '@/components/tree/node.vue';

export default defineComponent({
  name: 'KTree',
  components: { KTreeNode },
  props: {
    dataSource: {
      type: Array as PropType<DataProps[]>,
      default: () => []
    },
    expandKeys: {
      type: Array as PropType<(string | number)[]>,
      default: () => []
    },
    checkable: {
      type: Boolean,
      default: false
    },
    checkedKeys: {
      type: Array as PropType<PlainArray>,
      default: () => []
    }
  },
  setup (props, { emit }) {
    const state = reactive({});
    const handleExpand = (expandKeys: PlainArray, item: DataProps) => {
      // this is lower case
      emit('update:expand-keys', expandKeys);
      emit('expand', expandKeys, item);
    };
    return {
      ...toRefs(state),
      handleExpand
    };
  },
});
</script>

<style lang="less" scoped>
.k-tree {

}
</style>