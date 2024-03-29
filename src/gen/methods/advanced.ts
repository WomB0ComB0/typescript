/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Utility Type 1: Head
// Extracts the first element of an array type.
type Head<T extends Array<any>> = T extends [infer U, ...infer _Rest] ? U : never
type ExampleHead = Head<[3, 2, 1]> // Expected to be 3

// Utility Type 2: Tail
// Extracts all but the first element of an array type.
type Tail<T extends any[]> = T extends [infer _U, ...infer Rest] ? Rest : never
type ExampleTail = Tail<[1, 2, 3]> // Expected to be [2, 3]

// Utility Type 3: Zip
// Combines two arrays into a single array of pairs.
type Zip<T extends any[], U extends any[]> = T extends [infer A, ...infer RestT]
  ? U extends [infer B, ...infer RestU]
    ? [[A, B], ...Zip<RestT, RestU>]
    : []
  : []

type ExampleZip = Zip<[1, 2, 3], ['a', 'b', 'c']> // Expected to be [[1, 'a'], [2, 'b'], [3, 'c']]

// Utility Type 4: Paths
// Represents all possible paths (as string tuples) through an object's properties.
type Paths<T extends Record<string, any>> = keyof T extends never
  ? []
  : T extends object
  ? { [K in keyof T]: [K, ...Paths<T[K]>] }[keyof T]
  : []

type ExamplePaths = Paths<{ a: { b: { c: number }; d: string }; e: boolean }>
// Expected to be ['a', 'b', 'c'] | ['a', 'd'] | ['e']

// Utility Type 5: OmitByType
// Omits keys from an object where the value matches a specified type.
type OmitByType<T, U> = T extends object
  ? {
      [K in keyof T as T[K] extends U ? never : K]: T[K]
    }
  : never
type ExampleOmitByType = OmitByType<
  { a: string; b: number; c: boolean },
  number
>
// Expected to be { a: string; c: boolean }

// Utility Type 6: DeepPartial
// Makes all properties of an object (and its nested objects) optional.
type DeepPartial<T extends object> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

type ExampleDeepPartial = DeepPartial<{
  a: { b: { c: number; d: string }; e: boolean }
}>
// Expected to be { a?: { b?: { c?: number; d?: string }; e?: boolean } }

// Usage examples (should fail until types are correctly implemented)
const exampleHead: ExampleHead = 3
const exampleTail: ExampleTail = [2, 3]
const exampleZip: ExampleZip = [
  [1, 'a'],
  [2, 'b'],
  [3, 'c'],
]
const examplePaths: ExamplePaths = ['a', 'b', 'c']
const exampleOmitByType: ExampleOmitByType = { a: 'hello', c: true }
const exampleDeepPartial: ExampleDeepPartial = { a: { b: { c: 123 } } }