<template>
  <div class="k-tabs">
    <div class="k-tabs-navs">
      <div @click="onChange(item)" class="k-tabs-title" :class="{active: item.name === modelValue}"
           v-for="item in items" :key="item.name">
        {{ item.tab }}
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, reactive, ref, toRef, toRefs } from 'vue';
import { TabPaneContext, TabsContext, TabsKey } from '@/components/tabs/types';

export default defineComponent({
  name: 'KTabs',
  props: {
    modelValue: {
      type: String
    }
  },
  setup (props, { emit }) {
    const items = ref<TabPaneContext[]>([]);
    const addItem = (item: TabPaneContext) => {
      items.value.push(item);
    };
    const removeItem = (name: string) => {
      const index = items.value.findIndex((item) => item.name === name);
      if (index !== -1) {
        items.value.splice(index, 1);
      }
    };
    // make model property of props keep reactivity 
    provide<TabsContext>(TabsKey, { modelValue: toRef(props, 'modelValue'), addItem, removeItem });

    const onChange = (item: TabPaneContext) => {
      emit('update:modelValue', item.name);
      emit('change', item);
    };
    return {
      items,
      onChange
    };
  },
});
</script>

<style lang="less" scoped>
.k-tabs {
  .k-tabs-navs {
    display: flex;
  }
  .k-tabs-title {
    padding: 4px 8px;
    &.active {
      border: 1px solid red;
    }
  }
}
</style>