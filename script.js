
// array created 
var itemsarray = []

// addproduct function start
function addproduct() {
    let item = document.getElementById("additem").value
    if(itemsarray.includes(item)){
        console.log("Item Already Exist")
        document.getElementById("addalert").innerHTML="Item Already Exist"
        setTimeout(() => {
            document.getElementById("addalert").innerHTML = ""
        }, 1000)
    }
    else{
        itemsarray.push(item)
        let items = document.createElement("option")
        items.setAttribute("id", item)
        document.getElementById("items").appendChild(items)
        items.innerHTML = item
        document.getElementById("addalert").innerHTML = `Product - ${item} Added in List`
        setTimeout(() => {
            document.getElementById("addalert").innerHTML = ""
        }, 1000)
        
    }
    document.getElementById("additem").value=""

}
// add product function end 

// array of objects created 
var items_arrofobj = []
var i = 0
// add price function start 
function addprice() {
    let prices = document.getElementById("price").value
    let addproducts = document.getElementById("items").value
    items_arrofobj.push({ product: addproducts, price: prices })
    document.getElementById("addalert").innerHTML = `Successfully set ${items_arrofobj[i].product} price to ${items_arrofobj[i].price}`
    setTimeout(() => {
        document.getElementById("addalert").innerHTML = ""
    }, 1000)
    i++
    document.getElementById("price").value=""
}
// add price function end 


// new transaction function start 
function newtransaction() {
    for (let x in items_arrofobj) {
        let items = document.createElement("option")
        items.setAttribute("id", items_arrofobj[x].product)
        document.getElementById("transaction-items").appendChild(items)
        items.innerHTML = `${items_arrofobj[x].product} $${items_arrofobj[x].price}/Unit`
    }
}
// new transaction function end 

// add unit function start 
function addunit(x) {

    document.getElementById("addunit").value = x
}
// add unit function end 


// new array of objects created 
var newitems_arrofobj = []
var j = 0

// add to cart function start 
function addtocart() {
    alert("Added to cart")

    let unit = document.getElementById("addunit").value
    let values = document.getElementById("transaction-items").value
    let product = items_arrofobj[j].product
    let price = items_arrofobj[j].price
    newitems_arrofobj.push({ products: product, prices: price, units: unit })
    j++
    document.getElementById("addunit").value=0
}
// add to cart function end 

var totalprice = 0
// pay function start 
function pay() {
    // 1st row - date and time functionality start 
    let fulldate = new Date()
    let date = fulldate.getDate()
    let time = fulldate.getTime()
    let fullyear = fulldate.getFullYear()
    let month = fulldate.getMonth()
    let hour = fulldate.getHours()
    let minute = fulldate.getMinutes()
    var ampm = hour >= 12 ? "PM" : "AM"

    document.getElementById("mini-navbar").innerHTML = ""

    document.getElementById("date").innerHTML += `Date ${date}/${month}/${fullyear}`
    document.getElementById("time").innerHTML += `Time ${hour}:${minute} ${ampm}`
    // 1st row - date and time functionality end 

    // table creation start 
    let td1 = document.createElement("td")
    document.getElementById("row1").appendChild(td1)
    td1.innerHTML += "Product"
    let td2 = document.createElement("td")
    document.getElementById("row1").appendChild(td2)
    td2.innerHTML += "$/unit"
    let td3 = document.createElement("td")
    document.getElementById("row1").appendChild(td3)
    td3.innerHTML += "Units"
    let td4 = document.createElement("td")
    document.getElementById("row1").appendChild(td4)
    td4.innerHTML += "Price"


    for (let i = 0; i < newitems_arrofobj.length; i++) {
        let tr = document.createElement("tr")
        tr.setAttribute("id", `row${i + 2}`)
        document.getElementById("receipt-table").appendChild(tr)

        let td1 = document.createElement("td")
        document.getElementById(`row${i + 2}`).appendChild(td1)
        td1.innerHTML += newitems_arrofobj[i].products
        let td2 = document.createElement("td")
        document.getElementById(`row${i + 2}`).appendChild(td2)
        let price = newitems_arrofobj[i].prices
        td2.innerHTML += price
        let td3 = document.createElement("td")
        document.getElementById(`row${i + 2}`).appendChild(td3)
        let unit = newitems_arrofobj[i].units
        td3.innerHTML += unit
        let td4 = document.createElement("td")
        document.getElementById(`row${i + 2}`).appendChild(td4)
        td4.innerHTML += price * unit
        totalprice += price * unit
    }
    // table creation end 

    // 3rd row - calculation start 

    document.getElementById("totalprice").innerHTML = `<strong>Total Price:</strong> ${totalprice.toFixed(2)}`
    let taxes = (totalprice * 0.18)
    document.getElementById("taxes").innerHTML = `<strong>Taxes:</strong> ${taxes.toFixed(2)}`
    let amountdue = taxes + totalprice
    document.getElementById("amountdue").innerHTML = `<strong>Amount Due:</strong> ${amountdue.toFixed(2)}`
    // 3rd row - calculation end 
}
// pay function end 

