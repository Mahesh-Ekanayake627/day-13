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

function AddCustomerOnAction(){
    let CustomerId=document.getElementById("cutomerId").value
    let CustomerName=document.getElementById("cutomerName").value
    let CustomerAge=document.getElementById("cutomerAge").value
    let CustomerAddress=document.getElementById("cutomerAddress").value

    const Customer=  {
        custId : CustomerId,
        custName : CustomerName,
        custAge : CustomerAge,
        custAddress : CustomerAddress
    }
    
}
