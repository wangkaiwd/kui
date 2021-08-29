import { defineComponent, getCurrentInstance, PropType, provide, reactive, toRefs } from 'vue';
import { FormContext, FormItemContext, FormKey, KRules } from '@/components/form/types';

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
  setup (props, { slots, expose }) {
    // can't get child component methods by slots and getCurrentInstance
    const formItems: Partial<FormItemContext>[] = [];
    const addItem: FormContext['addItem'] = (item) => {
      formItems.push(item);
    };
    const removeItem: FormContext['removeItem'] = (id) => {
      const index = formItems.findIndex(item => item.id === id);
      if (index !== -1) {
        formItems.splice(index, 1);
      }
    };
    provide<Partial<FormContext>>(FormKey, { addItem, removeItem });
    const validate = (): Promise<boolean> => {
      if (props.model) {
        const promises = formItems.filter(item => item.prop).map(item => {
          return item.validate?.(props.model![item.prop!], props.rules?.[item.prop!]);
        });
        return Promise.all(promises).then(() => Promise.resolve(true)).catch(() => Promise.resolve(false));
      } else {
        throw Error('please pass model prop when you validate form items');
      }
    };
    expose({ validate });
    return () => <div class="k-form">{slots.default?.()}</div>;
  }
});