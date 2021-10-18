<template>
  <div class="k-tree">
    <k-tree-node :item="item" v-for="item in dataSource" :key="item.key">
      {{ item.title }}
    </k-tree-node>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs } from 'vue';
import { DataProps } from './types';
import KTreeNode from '@/components/tree/node.vue';

export default defineComponent({
  name: 'KTree',
  components: { KTreeNode },
  props: {
    dataSource: {
      type: Array as PropType<DataProps[]>,
      default: []
    }
  },
  setup () {
    const state = reactive({});
    return {
      ...toRefs(state)
    };
  },
});
</script>

<style lang="less" scoped>
.k-tree {

}
</style>