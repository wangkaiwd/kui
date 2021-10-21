export interface DataProps {
  key: string // key inherit is unique
  title: string
  children?: DataProps[]
}

export type PlainArray = (string | number)[] 