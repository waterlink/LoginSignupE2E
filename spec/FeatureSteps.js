function givenUserExists(email, password, name) {
    expect(Users.exists(email, password)).toEqual(false);

    Users.add(email, password, name);

    expect(Users.exists(email, password)).toEqual(true);
    expect(Users.nameOf(email)).toEqual(name);
}

function givenIAmAtTheLoginPage() {
    var container = document.querySelector("#page");
    expect(container).not.toEqual(null);
    expect(container.innerHTML).toEqual("");

    LoginPage.render();

    var emailInput = container.querySelector("#email");
    expect(emailInput.tagName).toEqual("INPUT");
    expect(emailInput.type).toEqual("email");

    var passwordInput = container.querySelector("#password");
    expect(passwordInput.tagName).toEqual("INPUT");
    expect(passwordInput.type).toEqual("password");

    var loginButton = container.querySelector("#do_login");
    expect(loginButton.tagName).toEqual("BUTTON");
    expect(loginButton.textContent).toEqual("Login");
}

function whenIEnterInTheField(selector, value) {
    var element = document.querySelector(selector);
    expect(element).not.toEqual(null);
    expect(element.value).toEqual("");

    element.value = value;

    var elementAfterChange = document.querySelector(selector);
    expect(element.value).toEqual(value);
}

function whenIClickOn(selector) {
    var element = document.querySelector(selector);
    expect(element).not.toEqual(null);

    element.click();
}

function thenISeeTheProfilePage() {
    // assert login page is gone
    expect(document.querySelector("#email")).toEqual(null);
    expect(document.querySelector("#password")).toEqual(null);
    expect(document.querySelector("#do_login")).toEqual(null);

    // assert profile page is present
    expect(document.querySelector("#page #profile_page")).not.toEqual(null);
    expect(document.querySelector("#profile_page #title")).not.toEqual(null);
}

function thenISeeTextAt(selector, text) {
    var element = document.querySelector(selector);
    expect(element.textContent).toEqual(text);
}