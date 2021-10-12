<template>
  <div class="k-tab-pane" v-show="paneVisible">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, onMounted, onUnmounted, reactive, toRefs } from 'vue';
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
    const id = uuid('k-tab-pane');
    console.log('tabsContext', tabsContext?.modelValue);
    const paneVisible = computed(() => tabsContext?.modelValue?.value === props.name);
    onMounted(() => {
      tabsContext?.addItem({
        id,
        name: props.name,
        tab: props.tab
      });
    });
    onUnmounted(() => {
      tabsContext?.removeItem(id);
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