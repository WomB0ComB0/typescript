/* eslint-disable @typescript-eslint/no-unused-vars */

type Prettify<T> = {
  [K in keyof T]: T[K];
} & [];

// @ts-expect-error (ignore duplicate variable error)
type Split<S extends string, D extends string> =
  string extends S ? string[] :
  S extends '' ? [] :
  S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S];

type Join<T> = T extends [infer F, ...infer R]
  ? R["length"] extends 0
  ? `${F & string}`
  : `${F & string}${Join<R>}`
  : never;

type ParseInt<T> = T extends `${infer N extends number}` ? N : never

type FilterArrayToObject<T, I> = {
  [K in keyof T  as T[K] extends I ? K : never]: T[K];
}

type ArrayOfLength<Length extends number, T extends unknown[] = []> = T["length"] extends Length
  ? T
  : ArrayOfLength<Length, [...T, T["length"]]>;

type Fill<T, Length extends number, Arr extends readonly T[] = []>
  = Arr["length"] extends Length ? Arr : Fill<T, Length, [T, ...Arr]>

type GetIndex<Arr extends readonly unknown[], Index>
  = Index extends keyof Arr
  ? Arr[Index]
  : GetIndex<[...Arr, ...Arr], Index>;

// @ts-expect-error (ignore duplicate variable error)
type Flatten<T>
  = T extends [
    infer First extends unknown[],
    ...infer Rest extends unknown[][]
  ]
  ? [...First, ...Flatten<Rest>]
  : [];