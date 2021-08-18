import { defineComponent, PropType, toRefs } from 'vue';

interface RuleItem {
  required?: boolean
  message: string
}

interface Rules {
  [key: string]: RuleItem[]
}

export default defineComponent({
  name: 'KForm',
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object as PropType<Rules>
    }
  },
  setup (props, { slots }) {
    const validate = () => {
      if (props.model && props.rules) {
        Object.keys(props.model).forEach(key => {
          const value = props.model![key];
          const rule = props.rules![key];
        });
      }

    };
    return () => <div class="k-form">{slots.default?.()}</div>;
  }
});