class Credential {

    user;
    #key;

    constructor(user, key) {
        this.user = user;
        this.#key = key;


    }

    shubhamAuthHeader() {
        return "Bearer " + this.#key;

    }
}

let cred = new Credential("Sachin", "secret_key_111");
console.log(cred.user);
console.log(cred.key);
