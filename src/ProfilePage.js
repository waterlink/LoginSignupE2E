var ProfilePage = {
    render: function () {
        var profileContainer = document.createElement("div");
        profileContainer.id = "profile_page";
        container.appendChild(profileContainer);

        var title = document.createElement("h1");
        title.id = "title";
        title.textContent = Users.currentUser().name;
        profileContainer.appendChild(title);
    }
};