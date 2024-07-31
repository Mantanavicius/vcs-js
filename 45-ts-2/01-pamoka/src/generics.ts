interface HasID {
    id: number
}

function addIdToValue<T>(value:T): T&HasID{
    const id = Math.random()
    return {...value, id}
}

interface Post {
    title: string
    likes: number
}

const post = addIdToValue<Post>({title: 'TypeScript valdo!', likes:2})
console.log(post.id, post.title, post.likes)


class DataCollection<T> {
    constructor(private data: T[]){}
    loadOne(): T {
        const i = Math.floor(Math.random() * this.data.length)
        return this.data[i]
    }
    loadAll(): T[] {
        return this.data
    }
    add(value:T):T[]{
        this.data.push(value)
        return this.data
    }
}

interface User {
    name:string
    score:number
}

const users = new DataCollection<User>([
    {name: "Inga", score: 125},
    {name: "Aurelija", score: 100},
    {name: "Laura", score: 150}
])

users.add({name: "Rita", score: 500})

console.log('load one - ', users.loadOne())
console.log('load all - ', users.loadAll())