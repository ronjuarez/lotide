const assert = require('chai').assert;
const tail = require('../tail');

describe ('#tail', () =>{
  it ('returns [ 2, 3 ] for [ 1, 2, 3 ]', () => {
    assert.deepEqual(tail([ 1, 2, 3 ]), [ 2, 3 ]);
  })
});

/*
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);*/