var container = document.querySelector("#page");

var LoginPage = {
    render: function () {
        var emailInput = document.createElement("input");
        emailInput.id = "email";
        emailInput.type = "email";
        container.appendChild(emailInput);

        var passwordInput = document.createElement("input");
        passwordInput.id = "password";
        passwordInput.type = "password";
        container.appendChild(passwordInput);

        var loginButton = document.createElement("button");
        loginButton.id = "do_login";
        loginButton.textContent = "Login";
        container.appendChild(loginButton);

        loginButton.addEventListener("click", LoginPage.onLogin);
    },

    onLogin: function () {
        container.innerHTML = "";
        ProfilePage.render();
    }
};