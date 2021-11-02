import { DataProps, PlainArray, PlainObject } from '@/components/tree/types';

interface IResult {
  [K: string]: PlainObject
}

// must to careful: it will update object reference
export const flattenTree = (root: DataProps[], key: string, parent?: DataProps) => {
  let result: IResult = {};
  root.forEach(node => {
    const token = node[key];
    result[token] = { ...node, parent };
    if (node.children?.length) {
      result = { ...result, ...flattenTree(node.children, key, node) };
    }
  });
  return result;
};