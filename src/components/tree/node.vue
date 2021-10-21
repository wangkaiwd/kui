<template>
  <div class="k-tree-node">
    <div class="k-tree-node-title">
      <div class="k-tree-node-arrow" v-if="item.children" @click="onExpand">
        {{ arrow }}
      </div>
      <slot></slot>
    </div>
    <div class="k-tree-node-children" v-if="item.children && expanded">
      <k-tree-node :item="child" @expand="" :expand-keys="expandKeys" v-for="child in item.children" :key="child.key">
        {{ child.title }}
      </k-tree-node>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { DataProps, PlainArray } from '@/components/tree/types';

export default defineComponent({
  name: 'KTreeNode',
  props: {
    item: {
      type: Object as PropType<DataProps>
    },
    expandKeys: {
      type: Array as PropType<PlainArray>,
      default: () => []
    }
  },
  setup (props, { emit }) {
    const expanded = computed(() => {
      const { expandKeys, item } = props;
      if (!item) {
        return false;
      }
      return expandKeys.includes(item.key);
    });
    const arrow = computed(() => {
      return expanded.value ? '⬇' : '>';
    });
    const onExpand = () => {
      let newExpandKeys: PlainArray = [];
      console.log('expand', props.item, expanded);
      if (props.item) {
        if (expanded.value) {
          newExpandKeys = props.expandKeys.filter(key => key !== props.item?.key);
        } else {
          newExpandKeys = [...props.expandKeys, props.item.key];
        }
      }
      handleExpand(newExpandKeys);
    };

    const handleExpand = (expandKeys: PlainArray) => {
      emit('expand', expandKeys);
    };
    return {
      arrow,
      expanded,
      onExpand,
      handleExpand
    };
  },
});
</script>

<style lang="less" scoped>
.k-tree-node {
  .k-tree-node-children {
    padding-left: 10px;
  }
  .k-tree-node-title {
    display: flex;
  }
  .k-tree-node-arrow {
    margin-right: 4px;
  }
}
</style>