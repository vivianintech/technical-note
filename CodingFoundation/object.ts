// How to create an object in JS-TS

// Method 1
let obj: { [key: string]: number } = {};

const newKey = "key 1";
obj[newKey] = 0;

const newKey2 = "key 2";
obj[newKey2] = 1;

const newKey3 = "key 3";
if (!(newKey3 in obj)) {
  obj[newKey3] = 2;
}

// Method 2
let obj2 = new Map<string, number>();
// map has this format
// const map1 = {[key1: value1], [key2: value2], [key3: value3]}

// Method 3
let obj3 = new Object();
