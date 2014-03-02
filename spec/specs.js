describe("factorial", function() {
  it("Takes a number and multiplies it by number-1 until it reaches 0", function() {
    factorial(5).should.equal(120);
  });
  it("Return 1 if input is 0", function() {
    factorial(0).should.equal(1);
  });
});
