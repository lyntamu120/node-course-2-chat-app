class Users {
    constructor() {
        this.userList = [];
    }

    addUser(user) {
        this.userList.push(user);
        return user;
    }
    getUserById(id) {
        var validUser = this.userList.filter(user => user.id === id);
        return validUser[0];
    }
    removeUserById(id) {
        var user = this.getUserById(id);
        if (user) {
            this.userList = this.userList.filter(user => user.id !== id);
        }
        return user;
    }
    getUserList(room) {
        var users = this.userList.filter(user => user.room === room);
        var namesArray = users.map(user => user.name);
        return namesArray;
    }
}

class User {
    constructor(id, name, room) {
        this.id = id;
        this.name = name;
        this.room = room;
    }
}

module.exports = {Users, User};
