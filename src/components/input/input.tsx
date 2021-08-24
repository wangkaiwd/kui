import { computed, defineComponent, inject, ref } from 'vue';
import { FormItemKey, FormItemContext } from '@/components/form/types';

export default defineComponent({
  name: 'KInput',
  props: {
    modelValue: {
      type: String
    }
  },
  inheritAttrs: false,
  emits: ['update:modelValue'],
  setup (props, { emit, attrs }) {
    // const value = computed({
    //   get: () => {
    //     console.log('get');
    //     return props.modelValue;
    //   },
    //   set: (val) => {
    //     console.log('val', val);
    //     emit('update:modelValue', val);
    //   }
    // });
    const formItemContext = inject<FormItemContext>(FormItemKey);
    const onInput = (e: Event) => {
      const value = (e.target as HTMLInputElement).value;
      emit('update:modelValue', value);
      formItemContext?.onControlInputChange(value);
    };
    const onBlur = () => {
      formItemContext?.onControlBlurChange(props.modelValue);
    };
    return () => (
      <input {...attrs} type="text" value={props.modelValue} onInput={onInput} onBlur={onBlur}/>
    );
  }
});