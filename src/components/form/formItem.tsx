import { defineComponent, provide } from 'vue';
import './formItem.less';
import { FormItemKey, FormItemContext } from '@/components/form/types';

export default defineComponent({
  name: 'KFormItem',
  props: {
    label: {
      type: String
    },
    name: {
      type: String
    }
  },
  setup (props, { slots }) {
    const validate = (value: any) => {
    };
    const onControlInputChange = (value: any) => {
      console.log('input');
      validate(value);
    };
    const onControlBlurChange = (value: any) => {
      console.log('blur');
      validate(value);
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
        </div>
      </div>
    );
  }
});