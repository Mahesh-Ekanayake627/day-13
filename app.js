//console.log("hi");
// localStorage.setItem("name","Mahesh");

// let name=localStorage.getItem("name");

// console.log(name);

// const customerList=[
//     {
//         name : "mahesh",
//         age :22,
//         address:"Panadura"
//     },
//     {
//         name : "Kumara",
//         age :25,
//         address:"Kurunegala"
//     },
//     {
//         name : "Nimal",
//         age :32,
//         address:"Colombo"
//     },
//     {
//         name : "Kumara",
//         age :28,
//         address:"Maho"
//     }
// ]
// let arCustomer=JSON.stringify(customerList);
// localStorage.setItem("customerList",arCustomer);
// let listCustomer = localStorage.getItem("customerList");
// console.log(JSON.parse(listCustomer));

// function AddCustomerOnAction(){
//     let CustomerId=document.getElementById("cutomerId").value
//     let CustomerName=document.getElementById("cutomerName").value
//     let CustomerAge=document.getElementById("cutomerAge").value
//     let CustomerAddress=document.getElementById("cutomerAddress").value

//     const Customer = {
//         custId : CustomerId,
//         custName : CustomerName,
//         custAge : CustomerAge,
//         custAddress : CustomerAddress
//     }
//    saveCustomerLocalDB(Customer);
// }

// function saveCustomerLocalDB(customer) {
//     if(localStorage.getItem('customerList')){
//         console.log(true);
//         let arOfCustomers=JSON.parse(localStorage.getItem("customerList"));
//         arOfCustomers.push(customer);
//         localStorage.setItem("customerList",JSON.stringify(arOfCustomers));
//     }else{
//         console.log(false);
//         const customerList=[];
//         customerList.push(customer);
//         let arCustomers=JSON.stringify(customerList);
//         localStorage.setItem("customerList",arCustomers);
//     }
// }
import Customer from "./Customer.js";
import  Item  from "./item.js";


let customer = new Customer("C001","Saman","Panadura",25);
console.log(customer);

let item = new Item();
console.log(item);

//import { customerList, getSum } from "./module/Example.js";
import { CustomerList, getSum } from "./Example.js";

console.log(CustomerList);

let sum = getSum(10 , 20);
console.log(sum);




