<template>
  <div class="k-tab-pane" v-show="paneVisible">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, onBeforeUnmount, onMounted } from 'vue';
import { TabsContext, TabsKey } from '@/components/tabs/types';

export default defineComponent({
  name: 'KTabPane',
  props: {
    name: {
      type: String,
      required: true
    },
    tab: {
      type: String
    }
  },
  setup (props, { slots }) {
    console.log('slots', slots);
    // only when parent execute provide and provide property's name is TabsKey tabsContext still would have value
    const tabsContext = inject<TabsContext>(TabsKey);
    const paneVisible = computed(() => tabsContext?.modelValue?.value === props.name);
    onMounted(() => {
      tabsContext?.addItem({
        name: props.name,
        tab: props.tab,
        tabSlot: slots.tab
      });
    });
    onBeforeUnmount(() => {
      tabsContext?.removeItem(props.name);
    });
    return {
      paneVisible
    };
  },
});
</script>

<style lang="less" scoped>
.k-tab-pane {

}
</style>