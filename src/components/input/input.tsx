import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KInput',
  setup () {
    return () => <input type="text"/>;
  }
});