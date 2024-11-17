interface Node<T = unknown, Nodes extends Node<any, any>[] = Node<any, any>[]> {
  value: T;
  neighbors: Nodes;
}

type A = Node<1, [B, C]>
type B = Node<2, [A, D]>
type C = Node<3, [A, B]>
type D = Node<4, [B, C]>

type FilterOut<Arr extends any[], Target> = 
  Arr extends [
    infer Head,
    ...infer Tail
  ]
    ? Head extends Target
      ? FilterOut<Tail, Target>
      : [Head, ...FilterOut<Tail, Target>]
    : [];

type BFS<
  Root extends Node<any, any[]>,
  ToFind,
  Searched extends Node<any, any>[] = []
> = Root extends (Searched['length'] extends 0 ? never : Searched[number])
  ? FilterOut<Root['neighbors'], Searched[number]> extends [
        infer Current extends Node<any, any>
    ]
    ? BFS<Current, ToFind, [...Searched, Root]>
    : never
  : Root['value'] extends ToFind
    ? Root & { __order: Searched }
    : Root['neighbors'] extends [
              infer Current extends Node<any, any>,
              ...infer Rest extends Node<any, any>[]
          ]
        ? Current['value'] extends ToFind
          ? Current
          : Rest extends [infer Next extends Node<any, any>]
            ? BFS<Next, ToFind, [...Searched, Root]>
            : never
        : never;

type Result = BFS<A, 4> // Node<4, [Node<2>, Node<3>]>