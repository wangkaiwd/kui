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
    return () => (
      <div class="k-form-item">
        <div class="k-form-item-content-wrapper">
          {props.label && <div class="k-form-item-label">{props.label}</div>}
          <div class="k-form-item-body">
            {slots.default?.()}
          </div>
        </div>
      </div>
    );
  }
});