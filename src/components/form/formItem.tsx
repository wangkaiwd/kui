import { defineComponent, provide } from 'vue';
import './formItem.less';
import { formItemKey, FormItemProvide } from '@/components/form/types';

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
      console.log('validate');
    };
    const onControlInputChange = (value: any) => {
      console.log('input');
      validate(value);
    };
    const onControlBlurChange = (value: any) => {
      console.log('blur');
      validate(value);
    };
    provide<FormItemProvide>(formItemKey, {
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