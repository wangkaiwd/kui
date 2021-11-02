<template>
  <div class="k-tree-node">
    <div class="k-tree-node-title">
      <div class="k-tree-node-arrow" v-if="item.children" @click="onExpand">
        {{ arrow }}
      </div>
      <div class="check">
        <input ref="inputRef" @change="onCheckChange" type="checkbox" :checked="checked">
      </div>
      <slot></slot>
    </div>
    <div class="k-tree-node-children" v-if="item.children && expanded">
      <k-tree-node
        :item="child"
        :parent="item"
        @expand="handleExpand"
        :checked-keys="checkedKeys"
        :expand-keys="expandKeys"
        v-for="child in item.children"
        @check="handleCheck"
        :key="child.key"
      >
        {{ child.title }}
      </k-tree-node>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue';
import { DataProps, PlainArray } from '@/components/tree/types';

export default defineComponent({
  name: 'KTreeNode',
  props: {
    item: {
      type: Object as PropType<DataProps>,
      required: true
    },
    expandKeys: {
      type: Array as PropType<PlainArray>,
      default: () => []
    },
    parent: {
      type: Object as PropType<DataProps>
    },
    checkedKeys: {
      type: Array as PropType<PlainArray>,
      default: () => []
    }
  },
  setup (props, { emit }) {
    const inputRef = ref<HTMLInputElement | null>(null);
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
    const processHalfCheck = () => {
      if (!props.item.children?.length) {
        if (inputRef.value) {
          inputRef.value.indeterminate = false;
        }
        return;
      }
      if (!isAllChildrenChecked.value && !isAllChildrenUnChecked.value) {
        if (inputRef.value) {
          inputRef.value.indeterminate = true;
        }
      } else {
        if (inputRef.value) {
          inputRef.value.indeterminate = false;
        }
      }
    };
    const checked = computed(() => {
      const { checkedKeys, item, parent } = props;
      processHalfCheck();
      if (parent) {
        return checkedKeys.includes(item.key) || checkedKeys.includes(parent.key);
      }
      if (isAllChildrenChecked.value) { // all children checked, parent checked
        return true;
      }
      return checkedKeys.includes(item.key);
    });
    const onExpand = () => {
      let newExpandKeys: PlainArray = [];
      if (props.item) {
        if (expanded.value) {
          newExpandKeys = props.expandKeys.filter(key => key !== props.item?.key);
        } else {
          newExpandKeys = [...props.expandKeys, props.item.key];
        }
      }
      handleExpand(newExpandKeys, props.item);
    };

    const handleExpand = (expandKeys: PlainArray, item: DataProps) => {
      emit('expand', expandKeys, item);
    };
    const updateTreeUp = () => {

    };
    const updateTreeDown = () => {
      
    };
    const onCheckChange = () => {
      const checkedKeysCopy = [...props.checkedKeys];
      if (checked.value) { // if checked, should cancel check and cancel all children check status and change parent check status
        // recursive update parent
        const newCheckedKeys = checkedKeysCopy.filter(key => key !== props.item.key);
        // recursive update children
        handleCheck(newCheckedKeys);
      } else {
        checkedKeysCopy.push(props.item.key);
        handleCheck(checkedKeysCopy);
      }
    };
    // 1. check 2. uncheck 3. indeterminate: must set via javascript
    const isAllChildrenChecked = computed(() => {
      const { children } = props.item;
      return children?.every((child) => props.checkedKeys.includes(child.key));
    });
    const isAllChildrenUnChecked = computed(() => {
      const { children } = props.item;
      return children?.every((child) => !props.checkedKeys.includes(child.key));
    });
    const handleCheck = (checkedKeys: PlainArray) => {
      emit('check', checkedKeys, props.item);
    };
    return {
      inputRef,
      arrow,
      checked,
      expanded,
      onExpand,
      handleExpand,
      onCheckChange,
      handleCheck
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