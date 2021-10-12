<template>
  <div class="k-tab-demo">
    <k-tab v-model="activeKey">
      <k-tab-pane name="a" tab="a">
        this is a
      </k-tab-pane>
      <k-tab-pane name="b" tab="b">
        this is b
      </k-tab-pane>
    </k-tab>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import KTab from '@/components/tabs/tabs.vue';
import KTabPane from '@/components/tabs/tab-pane.vue';

export default defineComponent({
  name: 'KTabDemo',
  components: { KTabPane, KTab },
  setup () {
    const state = reactive({
      activeKey: 'a'
    });
    return {
      ...toRefs(state)
    };
  },
});
</script>

<style lang="less" scoped>
.k-tab-demo {

}
</style>