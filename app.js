
let orders=[]
let bills=[]

function login(){
if(u.value=="admin" && p.value=="Kashi@123"){
document.getElementById('login').style.display="none"
document.getElementById('app').style.display="block"
}
}

function addOrder(){
orders.push("Order "+(orders.length+1))
render()
}

function bill(){
bills.push("Invoice "+(bills.length+1))
render()
}

function render(){
ordersDiv.innerHTML=orders.map(o=>"<p>"+o+"</p>").join("")
billsDiv.innerHTML=bills.map(b=>"<p>"+b+"</p>").join("")
}
