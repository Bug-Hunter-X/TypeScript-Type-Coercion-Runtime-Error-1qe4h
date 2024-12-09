# TypeScript Type Coercion Runtime Error

This example demonstrates a common issue in TypeScript where type coercion can lead to runtime errors that are not caught by the compiler.

The `add` function is declared to accept two numbers and return a number. However, the code calls `add` with a number and a string. TypeScript does not throw a compiler error because the string can be coerced to a number. However this leads to runtime errors which are harder to debug.

The solution demonstrates how to enforce stricter type checking to avoid such runtime errors.  This involves using type guards or other techniques that force type checking at compile time.