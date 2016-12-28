describe("Login Feature", function () {

    it("allows to login with correct credentials", function () {
        // ARRANGE
        var email = "john@example.org";
        var password = "welcome";
        var name = "John Smith";
        givenUserExists(email, password, name);
        givenIAmAtTheLoginPage();

        // ACT
        whenIEnterInTheField("#email", email);
        whenIEnterInTheField("#password", password);
        whenIClickOn("#do_login");

        // ASSERT
        thenISeeTheProfilePage();
        thenISeeTextAt("#title", name);
    });

    xdescribe("when user has different credentials", function () {
        it("does not allow to login with wrong credentials", function () {

        });
    });

    xdescribe("when there are more than one user", function () {
        it("allows to login with correct credentials", function () {

        });
    });

});