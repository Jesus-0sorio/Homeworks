const resolve = () => {
  const data = Array.from({length: 10}, (_, i) => i+1)
  methods(data);
};

const methods = (arr) => {
  logMethod("at(5)", arr.at(5));
  logMethod("concat([11,12,13])", arr.concat([11, 12, 13]));
  logMethod("copyWithin(3,5)", arr.copyWithin(3, 5));
  logMethod("entries()", [...arr.entries()]);
  logMethod(
    "every(num => num%2 === 0)",
    arr.every((num) => num % 2 === 0)
  );
  logMethod("fill(7, 3, 6)", arr.fill(7, 3, 6));
  logMethod(
    "filter(num => num%2 !== 0)",
    arr.filter((num) => num % 2 !== 0)
  );
  logMethod(
    "find(num => num > 3)",
    arr.find((num) => num > 3)
  );
  logMethod(
    "findIndex(num => num/2 === 5)",
    arr.findIndex((num) => num / 2 === 5)
  );
  logMethod(
    "findLast(num => num < 9)",
    arr.findLast((num) => num < 9)
  );
  logMethod(
    "findLastIndex(num => num < 5)",
    arr.findLastIndex((num) => num < 5)
  );
  logMethod("[3,4,5,6,[7,8,9]].flat()", [3, 4, 5, 6, [7, 8, 9]].flat());
  logMethod(
    "[3,4,5,6,[7,8,9],[[[10,11,12]]]].flatMap()",
    [3, 4, 5, 6, [7, 8, 9], [[[10, 11, 12]]]].flatMap(num => num)
  );
  logMethod("includes(5)", arr.includes(5));
  logMethod("indexOf(14)", arr.indexOf(14));
  logMethod("join()", arr.join());
  logMethod(
    "map(value => value*2)",
    arr.map((value) => value * 2)
  );
  const arrObject = arr.reduce((total, element, i) => {
    return { ...total, [i]: element };
  }, {});
  logMethod(
    "reduce((total, element, i) => {return {...total, [i]: element}}, {})",
    arrObject
  );
  logMethod("keys()", [...arr.keys()]);
  logMethod("values()", [...arr.values()]);
  logMethod("lastIndexOf(3)", arr.lastIndexOf(3));
  logMethod("length", arr.length);
  logMethod("pop()", arr.pop());
  logMethod("reverse()", arr.reverse());
  logMethod("shift()", arr.shift());
  logMethod("slice(0,3)", arr.slice(0, 3));
  logMethod(
    "some(num => num%5 === 0)",
    arr.some((num) => num % 5 === 0)
  );
  logMethod("sort()", arr.sort());
  logMethod("splice(6, 1, 15)", arr.splice(6, 1, 15));
  logMethod("toLocaleString()", arr.toLocaleString());
  logMethod("toString()", arr.toString());
  logMethod("unshift(2)", arr.unshift(3));
};

const logMethod = (method, result) => {
  console.log(`${method}: ${result}`);
};

resolve();
