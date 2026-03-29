export class Subject {
    constructor(id, name, code) {
        if (!name || !code) {
            throw new Error('Name and code are required');
        }
        this.id = id;
        this.name = name;
        this.code = code;
    }
}