import { square } from "./module2.mjs";

export function power4 (num) {
  return num ** 4;
}

// 1st Way for exporting a function from other file
// export { square };

// 2nd file
export * as m2 from "./module2.mjs";

