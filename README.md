# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @ronjuarez/lotide`

**Require it:**

`const _ = require('@ronjuarez/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `_.middle`: returns the middle portion of an array, one integer for odd arrays and two integers for even
* `_.head`: returns the first element of an array
* `_.assertEqual`: asserts whether two results are equal to eachother