//
// A trivial example of automated testing with Jest.
//

const { square } = require("./math");

describe("square function", () => {
  test("can square two", () => {
    const result = square(2);
    expect(result).toBe(4);
  });

  test("can square minus one", () => {
    const result = square(-1);
    expect(result).toBe(1);
  });
});
