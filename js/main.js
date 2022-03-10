//consumo
const introducirBill = document.querySelector("#bill")
const numberOfPeople = document.querySelector("#people")

//botones
const cincoPorciento = document.querySelector("#cinco")
const diezPorciento = document.querySelector("#diez")
const quincePorciento = document.querySelector("#quince")
const veinticincoPorciento = document.querySelector("#veinticinco")
const cincuentaPorciento = document.querySelector("#cincuenta")

//custom propina
const customPorciento = document.querySelector("#custom")

//resultados
const tipAmount = document.querySelector("#tipamount")
const totalAmount = document.querySelector("#total")

//boton reset
const btnReset = document.querySelector("#reset")

//errores
const errorNumberOfPeople = document.querySelector("#peopleError")
const errorBill = document.querySelector("#billErr")

eventListeners()

function eventListeners(){
    introducirBill.addEventListener("input", guardarBill)
    numberOfPeople.addEventListener("input", guardarBill)

    cincoPorciento.addEventListener("click", cincoDePropina)
    diezPorciento.addEventListener("click", diezDePropina)
    quincePorciento.addEventListener("click", quinceDePropina)
    veinticincoPorciento.addEventListener("click", veinticincoDePropina)
    cincuentaPorciento.addEventListener("click", cincuentaDePropina)

    customPorciento.addEventListener("input", customPropina)

    btnReset.addEventListener("click", resetAmounts)


}



const obj = {
    Bill: "",
    People: ""
}



function guardarBill(e){
    
    if(!numberOfPeople.value){
        numberOfPeople.classList.remove("inputBill")
        numberOfPeople.classList.add("inputBillDanger")
        errorNumberOfPeople.classList.remove("d-none")
    }else{
        numberOfPeople.classList.remove("inputBillDanger")
        numberOfPeople.classList.add("inputBill")
        errorNumberOfPeople.classList.add("d-none")
    }
    if(!introducirBill.value){
        introducirBill.classList.remove("inputBill")
        introducirBill.classList.add("inputBillDanger")
        errorBill.classList.remove("d-none")
    }else{
        introducirBill.classList.remove("inputBillDanger")
        introducirBill.classList.add("inputBill")
        errorBill.classList.add("d-none")
    }
    
    //se bloquea el custom al poner 2 numeros
    if(introducirBill.value && !numberOfPeople.value){
        customPorciento.disabled = true
    }else if(!introducirBill.value && numberOfPeople.value){
        customPorciento.disabled = true
    }else if(!introducirBill.value && !numberOfPeople.value){
        customPorciento.disabled = true
    }else{
        customPorciento.disabled = false
    }
    
    obj[e.target.name] = e.target.value
        console.log(obj)
}

const regex=/(\d*.\d{0,2})/;
function cincoDePropina(){
    const amounTip = ((obj.Bill/obj.People)*0.05).toString()
    const amountPerson = ((obj.Bill/obj.People)*0.05+(obj.Bill/obj.People)).toString()
    document.getElementById("tipamount").innerHTML = "$" + amounTip.match(regex)[0];
    document.getElementById("total").innerHTML = "$" + amountPerson.match(regex)[0];
}

function diezDePropina(){
    const amounTip = ((obj.Bill/obj.People)*0.10).toString()
    const amountPerson = ((obj.Bill/obj.People)*0.10+(obj.Bill/obj.People)).toString()
    document.getElementById("tipamount").innerHTML = "$" + amounTip.match(regex)[0];
    document.getElementById("total").innerHTML = "$" + amountPerson.match(regex)[0];
}

function quinceDePropina(){
    const amounTip = ((obj.Bill/obj.People)*0.15).toString()
    const amountPerson = ((obj.Bill/obj.People)*0.15+(obj.Bill/obj.People)).toString()
    document.getElementById("tipamount").innerHTML = "$" + amounTip.match(regex)[0];
    document.getElementById("total").innerHTML = "$" + amountPerson.match(regex)[0];
}


function veinticincoDePropina(){
    const amounTip = ((obj.Bill/obj.People)*0.25).toString()
    const amountPerson = ((obj.Bill/obj.People)*0.25+(obj.Bill/obj.People)).toString()
    document.getElementById("tipamount").innerHTML = "$" + amounTip.match(regex)[0];
    document.getElementById("total").innerHTML = "$" + amountPerson.match(regex)[0];
}

function cincuentaDePropina(){
    const amounTip = ((obj.Bill/obj.People)*0.50).toString()
    const amountPerson = ((obj.Bill/obj.People)*0.50+(obj.Bill/obj.People)).toString()
    document.getElementById("tipamount").innerHTML = "$" + amounTip.match(regex)[0];
    document.getElementById("total").innerHTML = "$" + amountPerson.match(regex)[0];
}

function customPropina(){
    const amounTip = ((obj.Bill/obj.People)*(customPorciento.value/100)).toString()
    const amountPerson = ((obj.Bill/obj.People)*(customPorciento.value/100)+(obj.Bill/obj.People)).toString()
    document.getElementById("tipamount").innerHTML = "$" + amounTip.match(regex)[0];
    document.getElementById("total").innerHTML = "$" + amountPerson.match(regex)[0];
    if(customPorciento.value == ""){
        document.getElementById("tipamount").innerHTML = 0.00
        document.getElementById("total").innerHTML = 0.00
    }
}

function resetAmounts(){
    document.getElementById("tipamount").innerHTML = "$0.00"
    document.getElementById("total").innerHTML = "$0.00"
    obj.Bill = ""
    obj.People = ""
    console.log(obj)
    document.getElementById("bill").value = ""
    document.getElementById("people").value = "" 
    document.getElementById("custom").value = ""
    errorNumberOfPeople.classList.add("d-none")
    errorBill.classList.add("d-none")
    numberOfPeople.classList.remove("inputBillDanger")
    numberOfPeople.classList.add("inputBill")
    introducirBill.classList.remove("inputBillDanger")
    introducirBill.classList.add("inputBill")
    customPorciento.disabled = true
    
}


window.onload = customPorciento.disabled = true