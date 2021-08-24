// https://github.com/SharePoint/sp-dev-docs/issues/5550#issuecomment-609897959
export const FormItemKey = 'formItemKey';

export interface FormItemContext {
  onControlInputChange (value: any): void

  onControlBlurChange (value: any): void
}
