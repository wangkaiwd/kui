import { defineComponent, PropType, reactive, toRefs } from 'vue';
import { isEmpty } from '@/shared/helper';

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
    const errors = reactive<Record<string, string>>({});
    const validate = () => {
      if (props.model && props.rules) {
        Object.keys(props.model).forEach(key => {
          const value = props.model![key];
          const ruleItems = props.rules![key];
          ruleItems.forEach(rule => {
            if (rule.required && isEmpty(value)) {
              errors[key] = rule.message;
            }
          });
        });
        console.log('errors', errors);
      }
    };
    return () => <div class="k-form">{slots.default?.()}</div>;
  }
});