describe("Arithmetics", function () {

    describe("#add(a, b)", function () {
        it("calculates the sum of two numbers", function () {
            // ARRANGE
            var a = 3;
            var b = 4;
            var expected = 7;

            // ACT
            var actual = Arithmetics.add(a, b);

            // ASSERT
            expect(actual).toEqual(expected);
        });

        it("calculates the sum of two other numbers", function () {
            // ARRANGE
            var a = 73;
            var b = 89;
            var expected = 162;

            // ACT
            var actual = Arithmetics.add(a, b);

            // ASSERT
            expect(actual).toEqual(expected);
        });
    });

});