<template>
  <div class="k-tab-demo">
    <k-tab v-model="activeKey" @change="onChange">
      <k-tab-pane name="a" @click="onClick">
        <template #tab="item">
          <button>{{ item.name }}-slot</button>
        </template>
        this is a
      </k-tab-pane>
      <k-tab-pane name="b" tab="tabB">
        <template #tab="item">
          <button style="background-color: #116db5;">{{ item.name }}-slot</button>
        </template>
        this is b
      </k-tab-pane>
    </k-tab>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import KTab from '@/components/tabs/tabs.vue';
import KTabPane from '@/components/tabs/tab-pane.vue';
import { TabPaneContext } from '@/components/tabs/types';

export default defineComponent({
  name: 'KTabDemo',
  components: { KTabPane, KTab },
  setup () {
    const state = reactive({
      activeKey: 'b'
    });
    const onClick = () => {
      console.log('click');
    };
    const onChange = (item: TabPaneContext) => {
      console.log('item', item);
      console.log('state', { ...state });
    };
    return {
      ...toRefs(state),
      onClick,
      onChange
    };
  },
});
</script>

<style lang="less" scoped>
.k-tab-demo {

}
</style>