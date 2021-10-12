export const TabsKey = 'KTabs';

export interface TabsContext {
  modelValue?: string

  addItem (item: TabPaneContext): void

  removeItem (id: string): void
}

export interface TabPaneContext {
  id: number
  name: string
  tab: string
}