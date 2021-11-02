export interface DataProps extends PlainObject {
  key: string // key inherit is unique
  title: string
  children?: DataProps[]
}

export type PlainArray = (string | number)[]
export type PlainObject = Record<string, any> 