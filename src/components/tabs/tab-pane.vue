<template>
  <div class="k-tab-pane">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, reactive, toRefs } from 'vue';
import { TabsContext, TabsKey } from '@/components/tabs/types';
import { uuid } from '@/shared/uuid';

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
  setup (props) {
    // only when parent execute provide and provide property's name is TabsKey tabsContext still would have value
    const tabsContext = inject<TabsContext>(TabsKey);
    onMounted(() => {
      tabsContext?.addItem({
        id: uuid('k-tab-pane'),
        name: props.name,
        tab: props.tab
      });
    });
    return {};
  },
});
</script>

<style lang="less" scoped>
.k-tab-pane {

}
</style>