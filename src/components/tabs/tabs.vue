<template>
  <div class="k-tabs">
    <div class="k-tabs-navs">
      <div
        @click="onChange(item)"
        class="k-tabs-title"
        :class="{active: item.name === modelValue}"
        v-for="(item,i) in items" :key="item.name"
        :ref="(el,otherRef) => setItemRef(el,i)"
      >
        <component v-if="item.tabSlot" :is="item.tabSlot" v-bind="item"></component>
        <template v-else>
          {{ item.tab }}
        </template>
      </div>
      <div ref="lineRef" class="k-tabs-line"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, onMounted, provide, reactive, ref, toRef, toRefs } from 'vue';
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
    let activeRef: HTMLDivElement | null = null;
    const lineRef = ref<HTMLDivElement | null>(null);
    const activeIndex = computed(() => {
      const index = items.value.findIndex((item) => item.name === props.modelValue);
      return index === -1 ? 0 : index;
    });
    const setItemRef = (el: HTMLDivElement, i: number) => {
      if (activeIndex.value === i) {
        activeRef = el;
      }
    };
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
    const onChange = (item: TabPaneContext) => {
      emit('update:modelValue', item.name);
      emit('change', item);
      calculateLinePosition();
    };
    provide<TabsContext>(TabsKey, { modelValue: toRef(props, 'modelValue'), addItem, removeItem });
    const calculateLinePosition = () => {
      // vue source: theory of nextTick
      nextTick(() => { // must in execute in nextTick callback, otherwise can't get activeRef
        if (activeRef && lineRef.value) {
          const { width } = activeRef.getBoundingClientRect();
          lineRef.value.style.left = width * activeIndex.value + 'px';
          lineRef.value.style.width = width + 'px';
        }
      });
    };
    onMounted(() => {
      calculateLinePosition();
    });
    return {
      items,
      onChange,
      lineRef,
      setItemRef
    };
  },
});
</script>

<style lang="less" scoped>
.k-tabs {
  .k-tabs-navs {
    display: flex;
    position: relative;
  }
  .k-tabs-title {
    padding: 4px 8px;
    &.active {
      border: 1px solid red;
    }
  }
  .k-tabs-line {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: blue;
    transition: all 200ms;
  }
}
</style>