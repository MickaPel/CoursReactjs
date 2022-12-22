// class User {
//     #firstname;
//     lastname;
//     username;
//     email;
//     age;
//     role = "USER";

//     constructor(firstname, lastname, email){
//         this.#firstname = firstname;
//         this.lastname = lastname;
//         this.email = email;
//         this.username = `${firstname}${lastname}`
//     }

//     get firstname() {
//         return this.#firstname;
//     }

//     get firstname(firstname) {
//         this.#firstname = firstname;
//     }

//     sayHello() {
//         console.log(this.username + " dit bonjour");
//     }

//     sayHello2 = function () {
//         console.log(this.username + " dit bonjour 2");
//     }

//     sayHello3 = () => console.log(this.username + "dit bonjour 3");

// }

// let u = new User("Jean Michel", "Latourte", "jm@gmail.com");
// u.sayHello();

// class Employee extends User {
//     job;
//     constructor(firstname, lastname, email, job){
//         super(firstname, lastname, email);
//         this.job = job;
//     }
// }

// const e = new Employee('jane', 'doe', 'jdoe@gmail.com', 'ingenieur');
// e.sayHello();

// const isEmployee = e instanceof Employee; //true
// const isUser = e instanceof User; //true
// const isObject = e instanceof Object; //true
// const isString = e instanceof String; //false


const url = "https://jsonplaceholder.typicode.com/";
const user_url = url + "users";
let users = [];

function displayUsers() {
    users.forEach(u => {
        const li = document.createElement("li");
        li.textContent = u.name;
        document.querySelector('#ul').appendChild(li);
    })
}


//la methode fetch retourne une promesse
// les promesses representent le resultat d'une fonction asynchrone
//la reponse res qu'on obtient n'est pas du json mais un objet response
fetch(user_url)
.then((res) => res.json())
.then((res_users) => {
    users = res_users;
    displayUsers();
})

//Async Await
//retourne une promesse
async function getUsers() {
    try {
        const response = await fetch(user_url);
        users = await response.json();
        console.log(users);
        displayUsers();
    } catch (error) {
        alert(error);
    }
}

getUsers();

//axios: librairie pour faire des requetes http
//ajouter un lien CDN dans le <head> du
const post_url = url + 'posts';

//dans axios, les données de réponse sont dispo par defaut au format json
//on a juste a acceder a la prop data de l'objet response
function getPost1() {
    axios.get(post_url)
    .then(res => console.log(res))
}
getPost1();

async function getPosts2() {
    const res = await axios.get(post_url);
    const posts = res.data;
    console.log(posts)
}
getPosts2();

const new_todo = {
    userId : 2,
    title: "Comprendre Ajax",
    completed: false
}

const todo_url = url + "todos";

function createTodo1() {
    axios.post(todo_url, new_todo)
    .then(res => console.log(res))
    .catch(err => console.warn(err))
}
createTodo1();

async function createTodo2() {
    const post = await axios.post(todo_url, new_todo);
    const posts = post.data;
}
createTodo2();

async function createTodo3() {
    try {
        const response = await axios.post(todo_url, new_todo);
        console.log(response);
    } catch (error) {
        alert(error);
    }
}
createTodo3();

function createTodo4() {
    axios({
        method: 'post',
        url: todo_url,
        data: new_todo
    }).then(res => console.log(res));
}
createTodo4();