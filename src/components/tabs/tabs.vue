<template>
  <div class="k-tabs">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, reactive, toRefs } from 'vue';
import { TabPaneContext, TabsContext, TabsKey } from '@/components/tabs/types';

export default defineComponent({
  name: 'KTabs',
  props: {
    modelValue: {
      type: String
    }
  },
  setup (props) {
    const items: TabPaneContext[] = [];
    const addItem = (item: TabPaneContext) => {
      items.push(item);
    };
    const removeItem = (id: number) => {

    };
    provide<TabsContext>(TabsKey, { modelValue: props.modelValue, addItem, removeItem });
    return {
      ...toRefs(state)
    };
  },
});
</script>

<style lang="less" scoped>
.k-tabs {

}
</style>