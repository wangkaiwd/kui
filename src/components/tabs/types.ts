import { Ref } from 'vue';

export const TabsKey = 'KTabs';

export interface TabsContext {
  modelValue?: Ref<string | undefined>

  addItem (item: TabPaneContext): void

  removeItem (name: string): void
}

export interface TabPaneContext {
  name: string
  tab?: string
}