import { Ref } from 'vue';

export const TabsKey = 'KTabs';

export interface TabsContext {
  modelValue?: Ref<string | undefined>

  addItem (item: TabPaneContext): void

  removeItem (id: string): void
}

export interface TabPaneContext {
  id: string
  name: string
  tab?: string
}