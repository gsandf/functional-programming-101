// pipeline operator

// This proposal introduces a new operator |> similar to F#, OCaml, Elixir, Elm, Julia, Hack,
// and LiveScript, as well as UNIX pipes. It's a backwards-compatible way of streamlining chained
// function calls in a readable, functional manner, and provides a practical alternative to
// extending built-in prototypes.
let result = exclaim(capitalize(doubleSay("hello")));
result //=> "Hello, hello!"

let result = "hello"
  |> doubleSay
  |> capitalize
  |> exclaim;

result //=> "Hello, hello!"

const result =
  postId
    |> updateNewsPost
    |> toJSON
    |> sendToServer
    |> await
    |> getResult
    |> catch








// partial application

// Partial function application allows you to fix a number of arguments to a function call,
// returning a new function. Partial application is supported after a fashion in ECMAScript
// today through the use of either Function#bind or arrow functions:
function add(x, y) { return x + y; }

const addOne = add.bind(null, 1);
addOne(2); // 3

const addTen = x => add(x, 10);
addTen(2); // 12


// proposal
const addOne = add(1, ?); // apply from the left
addOne(2); // 3

const addTen = add(?, 10); // apply from the right
addTen(2); // 12

const maxGreaterThanZero = Math.max(0, ...);
maxGreaterThanZero(1, 2); // 2
maxGreaterThanZero(-1, -2); // 0










// pattern matching (stage-0)

// Pattern matching is a way to select behaviors based on the structure of a value
// in a similar way to destructuring. For example, you can trivially match objects with
// certain properties and bind the values of those properties in the match leg. Pattern
// matching enables very terse and highly readable functional patterns and is found in a
// number of languages. This proposal draws heavy inspiration from Rust and F#.
let getLength = vector => match (vector) {
    { x, y, z }: Math.sqrt(x ** 2 + y ** 2 + z ** 2),
    { x, y }:    Math.sqrt(x ** 2 + y ** 2),
    [...]:       vector.length,
    else: {
        throw new Error("Unknown vector type");
    }
}
