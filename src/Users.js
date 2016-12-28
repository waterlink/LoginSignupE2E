var Users = {
    users: [],

    exists: function (email, password) {
        return this.users.length > 0;
    },

    add: function (email, password, name) {
        this.users.push({
            email: email,
            password: password,
            name: name
        });
    },

    nameOf: function (email) {
        return this.users[0].name;
    },

    currentUser: function () {
        return this.users[0];
    }
};