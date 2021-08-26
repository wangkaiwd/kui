import { computed, defineComponent, PropType, provide, reactive } from 'vue';
import './formItem.less';
import { FormItemKey, FormItemContext, KRuleItem, KRules, KRuleTrigger } from '@/components/form/types';
import Schema from 'async-validator';
import { ValidateError } from 'async-validator/dist-types/interface';

export default defineComponent({
  name: 'KFormItem',
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    },
    help: {
      type: String
    },
    rules: {
      type: [Object, Array] as PropType<KRules>
    }
  },
  setup (props, { slots }) {
    const state = reactive({
      help: ''
    });
    const help = computed(() => {
      return props.help ?? state.help;
    });
    const rules = computed<KRuleItem[] | undefined[]>(() => {
      if (!props.rules) {
        return [];
      }
      if (Array.isArray(props.rules)) {
        return [...props.rules];
      } else {
        return [{ ...props.rules }];
      }
    });
    const trigger = computed<KRuleTrigger>(() => {
      return rules.value[0]?.trigger ?? 'change';
    });
    const validate = (value: any): Promise<boolean> => {
      // prop and rules both exist 
      if (props.prop && props.rules) {
        const validator = new Schema({ [props.prop]: props.rules });
        return validator.validate({ [props.prop]: value }).then(() => {
          state.help = '';
          return true;
        }).catch(({ errors }: { errors: ValidateError[] }) => {
          state.help = errors[0].message!;
          return false;
        });
      }
      return Promise.resolve(true);
    };
    const onControlInputChange = (value: any) => {
      if (trigger.value === 'change') {
        validate(value);
      }
    };
    const onControlBlurChange = (value: any) => {
      if (trigger.value === 'blur') {
        validate(value);
      }
    };
    provide<FormItemContext>(FormItemKey, {
      onControlInputChange,
      onControlBlurChange
    });
    const renderLabel = () => {
      if (slots.label) {
        return <div class="k-form-item-label">{slots.label()}</div>;
      }
      if (props.label) {
        return <div class="k-form-item-label">{props.label}:</div>;
      }
    };
    return () => (
      <div class="k-form-item">
        <div class="k-form-item-content-wrapper">
          {renderLabel()}
          <div class="k-form-item-body">
            {slots.default?.()}
          </div>
          <div class="k-form-item-help">
            {help.value}
          </div>
        </div>
      </div>
    );
  }
});