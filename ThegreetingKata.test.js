const greet = require('./TheGreetingKata');

test('Hello, Bob.', ()=> {
  expect(greet("Bob")).toBe("Hello, Bob.");
});

test('Hello, my friend.', ()=> {
  expect(greet(null)).toBe("Hello, my friend.");
});

test('Hello JERRY', ()=> {
  expect(greet("JERRY")).toBe("Hello JERRY!");
})

test('Hello, Jill and Jane.', ()=> {
  expect(greet(["Jill", "Jane"])).toBe("Hello, Jill and Jane.");
})

test('Hello, Amy, Brian, and Charlotte.', ()=> {
  expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
})

// test('Hello, BOOM!.', ()=> {
//   expect(greet("JERRY")).toBe("Hello, JERRY!");
// });


