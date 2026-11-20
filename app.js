console.log("hi");
// localStorage.setItem("name","Mahesh");

// let name=localStorage.getItem("name");

// console.log(name);

const customerList=[
    {
        name : "mahesh",
        age :22,
        address:"Panadura"
    },
    {
        name : "Kumara",
        age :25,
        address:"Kurunegala"
    },
    {
        name : "Nimal",
        age :32,
        address:"Colombo"
    },
    {
        name : "Kumara",
        age :28,
        address:"Maho"
    }
]
let arCustomer=JSON.stringify(customerList);
localStorage.setItem("customerList",arCustomer);
let listCustomer = localStorage.getItem("customerList");
console.log(JSON.parse(listCustomer));
