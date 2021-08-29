import { computed, defineComponent, inject, onBeforeUnmount, onMounted, PropType, provide, reactive } from 'vue';
import './formItem.less';
import {
  FormItemKey,
  FormItemContext,
  KRuleItem,
  KRule,
  KRuleTrigger,
  FormKey,
  FormContext, KRules
} from '@/components/form/types';
import Schema from 'async-validator';
import { ValidateError } from 'async-validator/dist-types/interface';
import { uuid } from '@/shared/uuid';

export default defineComponent({
  name: 'KFormItem',
  props: {
    label: { type: String },
    prop: { type: String },
    help: { type: String },
    rules: { type: [Object, Array] as PropType<KRule> }
  },
  setup (props, { slots }) {
    const id = uuid(`k-form-item-`);
    const state = reactive({ help: '' });
    const help = computed(() => props.help ?? state.help);
    const rules = computed<KRuleItem[] | undefined[]>(() => {
      if (!props.rules) {return [];}
      if (Array.isArray(props.rules)) {
        return [...props.rules];
      } else {
        return [{ ...props.rules }];
      }
    });
    const trigger = computed<KRuleTrigger>(() => rules.value[0]?.trigger ?? 'change');
    
    const validate = (value: any, rules?: KRule): Promise<boolean> => {
      const normalizedRules = rules ?? props.rules;
      if (props.prop && normalizedRules) {
        const validator = new Schema({ [props.prop]: normalizedRules });
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
    provide<Partial<FormItemContext>>(FormItemKey, {
      onControlInputChange,
      onControlBlurChange
    });
    const formContext = inject<Partial<FormContext>>(FormKey);
    onMounted(() => {
      formContext?.addItem?.({ ...props, id, validate });
    });
    onBeforeUnmount(() => {
      formContext?.removeItem?.(id);
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