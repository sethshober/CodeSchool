var transform = require("../../transform");


//testing myTransformFunction to make sure correct values are returned
describe("myTransformFunction", function() {

  var array = [null, undefined, true, false, 50, "hello", "world", [1,2,3,4,5], {name: "Seth"}];

  it("should return array with specified typeof values", function() {
    expect( array.myTransformFunction("string") ).toEqual(["hello", "world"]);
    expect( array.myTransformFunction("string", false) ).toEqual(["hello", "world"]);
    expect( array.myTransformFunction("string", true) ).toEqual(["hello", "world"]);
    expect( array.myTransformFunction("number") ).toEqual([50]);
    expect( array.myTransformFunction("number", false) ).toEqual([50]);
    expect( array.myTransformFunction("number", true) ).toEqual([50]);
    expect( array.myTransformFunction("undefined") ).toEqual([undefined]);
    expect( array.myTransformFunction("undefined", false) ).toEqual([undefined]);
    expect( array.myTransformFunction("undefined", true) ).toEqual([undefined]);
    expect( array.myTransformFunction("boolean") ).toEqual([true, false]);
    expect( array.myTransformFunction("boolean", false) ).toEqual([true, false]);
    expect( array.myTransformFunction("boolean", true) ).toEqual([true, false]);
    expect( array.myTransformFunction("array") ).toEqual([[1,2,3,4,5]]);
    expect( array.myTransformFunction("array", false) ).toEqual([[1,2,3,4,5]]);
    expect( array.myTransformFunction("array", true) ).toEqual([[1,2,3,4,5]]);
    expect( array.myTransformFunction("object") ).toEqual([null, [1,2,3,4,5], {name: "Seth"}]);
    expect( array.myTransformFunction("object", false) ).toEqual([null, [1,2,3,4,5], {name: "Seth"}]);
    expect( array.myTransformFunction("object", true) ).toEqual([null, {name: "Seth"}]);
  });
});