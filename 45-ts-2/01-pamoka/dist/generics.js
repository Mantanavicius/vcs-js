"use strict";
function addIdToValue(value) {
    const id = Math.random();
    return Object.assign(Object.assign({}, value), { id });
}
const post = addIdToValue({ title: 'TypeScript valdo!', likes: 2 });
console.log(post.id, post.title, post.likes);
class DataCollection {
    constructor(data) {
        this.data = data;
    }
    loadOne() {
        const i = Math.floor(Math.random() * this.data.length);
        return this.data[i];
    }
    loadAll() {
        return this.data;
    }
    add(value) {
        this.data.push(value);
        return this.data;
    }
}
const users = new DataCollection([
    { name: "Inga", score: 125 },
    { name: "Aurelija", score: 100 },
    { name: "Laura", score: 150 }
]);
users.add({ name: "Rita", score: 500 });
console.log('load one - ', users.loadOne());
console.log('load all - ', users.loadAll());
