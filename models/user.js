class User implements Identity {
    public readonly id: Number;
    public readonly name: String;
    public friends: Array;

    constructor(id, name, friends) {
        this.id = id;
        this.name = name;
        this.friends = friends;
    }

    public async getFriends() {
        return this.friends;
    }
}

export User;