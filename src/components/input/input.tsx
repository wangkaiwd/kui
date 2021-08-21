import { computed, defineComponent, ref } from 'vue';

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
    const onInput = (e: Event) => {
      const value = (e.target as HTMLInputElement).value;
      emit('update:modelValue', value);
    };
    return () => (
      <input {...attrs} type="text" value={props.modelValue} onInput={onInput}/>
    );
  }
});