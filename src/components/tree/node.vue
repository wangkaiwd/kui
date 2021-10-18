<template>
  <div class="k-tree-node">
    <slot></slot>
    <div class="k-tree-node-children" v-if="item.children">
      <k-tree-node :item="child" v-for="child in item.children" :key="child.key">
        {{ child.title }}
      </k-tree-node>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { DataProps } from '@/components/tree/types';

export default defineComponent({
  name: 'KTreeNode',
  props: {
    item: {
      type: Object as PropType<DataProps>
    }
  },
  setup () {
    return {};
  },
});
</script>

<style lang="less" scoped>
.k-tree-node {
  .k-tree-node-children {
    padding-left: 10px;
  }
}
</style>