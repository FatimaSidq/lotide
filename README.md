# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @fatimasidq/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(result, expected)`: Determine if two values are equal
* `assertArraysEqual(result, expected)`: AssertEqual for arrays
* `assertObjectsEqual(result, expected)`: AssertEqual for objects
* `eqArrays(arr1, arr2)`: Returns true or false if both arrays are equal
* `eqObjects(obj1, obj2)`: Returns true or false if both objects are equal
* `findKey(obj, callback)`: Iterates over object and returns the key of the first value that returns true
* `findKeyByValue(obj, target)`: Iterate over object and return the key of the first value that's equal to target 
* `head(arr)`: Returns first value of array
* `letterPositions(string)`: Returns a dict of each letter, and their occurences in the string
* `map(arr, callback)`: Returns an array with each value of the original array passed  through the callback
* `middle(arr)`: Returns the middle or middle two values of an array
* `min(arr)`: Returns the smallest value in an array
* `tail(arr)`: Returns an array minus the first element
* `takeUntil(arr, callback)`: Returns an array with each value of the original until one of the values returns true from the callback