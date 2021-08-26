import { defineComponent, getCurrentInstance, PropType, reactive, toRefs } from 'vue';
import { KRules } from '@/components/form/types';

export default defineComponent({
  name: 'KForm',
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object as PropType<KRules>
    }
  },
  setup (props, { slots }) {
    const instance = getCurrentInstance();
    console.log('instance', instance);
    const validate = () => {

    };
    return () => <div class="k-form">{slots.default?.()}</div>;
  }
});