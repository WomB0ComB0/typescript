// Utility Types:
// Problem: Working with complex array types often requires repetitive and verbose type manipulations, leading to code duplication and decreased maintainability.
// Solution: Utility types (Head, Tail, Zip) streamline array type transformations, reducing boilerplate code and improving code clarity by encapsulating common array manipulation patterns into reusable type definitions.

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
type ExampleZip = Zip<[1, 2], ['a', 'b']> // Expected to be [[1, 'a'], [2, 'b']]
// Usage:
const zipped = [[1, 'a'], [2, 'b']] as const

export { Head, Tail, Zip, ExampleHead, ExampleTail, ExampleZip, zipped }