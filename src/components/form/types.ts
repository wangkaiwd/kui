// https://github.com/SharePoint/sp-dev-docs/issues/5550#issuecomment-609897959
import { RuleItem } from 'async-validator';

export const FormItemKey = 'formItemKey';

export interface FormItemContext {
  onControlInputChange (value: any): void

  onControlBlurChange (value: any): void
}

export type KRuleTrigger = 'change' | 'blur'

export interface KRuleItem extends RuleItem {
  trigger?: KRuleTrigger
}

export type KRules = KRuleItem | KRuleItem[]