const expect = require('expect');

const { Users, User } = require('./users')

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        var user1 = new User('1', 'u1', 'A');
        var user2 = new User('2', 'u2', 'B');
        var user3 = new User('3', 'u3', 'A');
        users.userList = [user1, user2, user3];
    });

    it ('should add new user', () => {
        var users = new Users();
        var user = new User('123', 'Lyn', 'A');
        var resUser = users.addUser(user);

        expect(users.userList).toEqual([user]);
    });

    it ('should return names for node courses', () => {
        var userList = users.getUserList('A');
        expect(userList).toEqual(['u1', 'u3']);
    });

    it ('should find user', () => {
        var userId = '2';
        var user = users.getUserById(userId);
        expect(user.id).toBe(userId);
    });

    it ('should not find user', () => {
        var userId = '11';
        var user = users.getUserById(userId);
        expect(user).toNotExist();
    });

    it ('shoud remove user', () => {
        var userId = '2';
        var user = users.removeUserById(userId);
        expect(user.id).toBe(userId);
        expect(users.userList).toNotInclude(user);
    });

    it ('should not remove user', () => {
        var userId = '12';
        var user = users.removeUserById(userId);
        expect(user).toNotExist();
        expect(users.userList.length).toBe(3);
    });
});
