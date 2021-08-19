import { defineComponent } from 'vue';
import './formItem.less';

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
    const validate = () => {

    };
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