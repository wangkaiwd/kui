import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KFormItem',
  setup (props, { slots }) {
    return () => <div class="k-form-item">{slots.default?.()}</div>;
  }
});