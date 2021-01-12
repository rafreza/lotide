# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by Rafin Reza as part of his learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rafreza/lotide`

**Require it:**

`const _ = require('@rafreza/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: Checks to see if two values are equal and prints out if the assertion has either passed or failed. Used in tandem with other functions to validate that they work as expected.
* `assertArraysEqual(actual, expected)`: Checks to see if two arrays are equal and prints out if the assertion has either passed or failed. Used in tandem with other functions to validate that they work as expected.
* `eqArrays(array1, array2)`: Returns a boolean value depending on if two arrays are equal or not. Used in tandem with other functions to validate that they work as expected.
* `eqObjects(object1, object2)`: Returns a boolean value depending on if two objects are equal or not. Used in tandem with other functions to validate that they work as expected.
* `head(array)`: Returns the firstmost index of any given array.
* `tail(array)`: Returns the all array elements not including the first in a new array.
* `middle(array)`: Return the middlemost array elements into a new array. If the array length is even, it will return an array with two elements. If it is odd, it will return an array with only one element.
* `countLetters(phrase)`: Returns an object with a count of all letters used in a given word, phrase or sentence. Also note that uppercase and lowercase use of the same letters are distinguised.
* `countOnly(Object, itemsToCount)`: Returns the number of times a given item is mentioned in an object (can also be an array).
* `findKey(Object, KeyValue)`: Returns the very first key of a given object that shares the same key value given.
* `findKeyByValue(Object, Key)`: Similar functionaiilty as findKey, but returns the key name instead of the key.
* `letterPositions(phrase)`: Returns the the index positions of any word or phrase.
* `map(array, callback)`: Returns a new array of a modified given array based on the parameters given.
* `takeUntil(array, condition)`: Returns a new array and adds item from the given until a certain condition is met.
* `without(array, condition)`: Returns a new array which takes a given array and removes any elements that meet a condition (normally another array with the items to remove).
