// https://github.com/SharePoint/sp-dev-docs/issues/5550#issuecomment-609897959
import { RuleItem } from 'async-validator';

export const FormItemKey = 'formItemKey';
export const FormKey = 'formKey';

export interface FormContext {
  model: object
  rules: KRules

  addItem (item: Partial<FormItemContext>): void

  removeItem (id: string): void

  validate (): Promise<boolean>
}

export interface FormItemContext {
  id: string
  label: string
  prop: string
  help: string
  rules: KRule

  validate (value: any, rules?: KRule): Promise<boolean>

  onControlInputChange (value: any): void

  onControlBlurChange (value: any): void
}

export type KRuleTrigger = 'change' | 'blur'

export interface KRuleItem extends RuleItem {
  trigger?: KRuleTrigger
}

export type KRule = KRuleItem | KRuleItem[]

export type KRules = Record<string, KRule>