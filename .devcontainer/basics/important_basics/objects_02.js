// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "1233ab"
tinderUser.name = "Hero"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "regular@gmail.com",
    fullname: {
        userfullname: {
        firstname: "Aakansha",
        lastname: "Thakur"
    }
}
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1,obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id:1,
        email: "m@gmail.com"
    },
    {
        id:1,
        email: "m@gmail.com"
    },
    {
        id:1,
        email: "m@gmail.com"
    },
    {
        id:1,
        email: "m@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "Hitesh Sir"
}

// course Instructor

const {courseInstructor: instructor} = course

console.log(instructor);

// {
//     "name": "ART",
//     "coursename": "js",
//     "price": "free"

// }

[{},
{},
{}
]
