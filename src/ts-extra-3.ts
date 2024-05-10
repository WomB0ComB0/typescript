// String Filtering and Replacement:
// Problem: String manipulation tasks, such as filtering or replacing substrings based on patterns, are common in many applications but can be error-prone and cumbersome to implement manually.
// Solution: The stringFilter and stringReplace functions provide efficient and reusable solutions for such tasks, enabling developers to perform string operations with ease while maintaining code readability and reliability.

/**
 * @param {string | string[]} strings
 * @param {RegExp} regex
 * @returns {string | string[]}
*/
const stringFilter = (
  strings: string | string[],
  regex: RegExp
): string | string[] => {
  if (Array.isArray(strings)) {
    return strings.filter((string) => string.match(regex));
  }
  return strings.match(regex) ? strings : '';
}


console.log(stringFilter('hello', /h/)); // hello
console.log(stringFilter('hello', /z/)); // ''
console.log(stringFilter(['hello', 'world'], /o/)); // [ 'hello', 'world' ]
console.log(stringFilter(['hello', 'world'], /z/)); // []


/**
 * @param {string | string[]} strings
 * @param {RegExp} regex
 * @param {string} replace
 * @returns {string | string[]}
*/
const stringReplace = (
  strings: string | string[],
  regex: RegExp,
  replace: string
): string | string[] => {
  if (Array.isArray(strings)) {
    return strings.map((string) => string.replace(regex, replace));
  }
  return strings.replace(regex, replace);
}


console.log(stringReplace('hello', /h/, 'z')); // zello
console.log(stringReplace('hello', /z/, 'z')); // hello
console.log(stringReplace(['hello', 'world'], /o/, 'a')); // [ 'hella', 'warld' ]
console.log(stringReplace(['hello', 'world'], /z/, 'a')); // [ 'hello', 'world' ]


export { stringFilter, stringReplace };