let cart = []
let newCart = []
const btnaddProduct = document.querySelectorAll(".btnProduct")
let newContent 
let tableBody = document.querySelector("tbody")
let tdTitles = document.querySelector(".tdTitles")
let newRow 
let node 
let sumaTotal = 0
let price = 0
let quant = 0
let divCart = document.querySelector(".divCart")
let spanAbuelo


for (const btn of btnaddProduct) {
    btn.addEventListener("click", cartaddProduct)   
}

function cartaddProduct(e){   
  
    tableBody.innerHTML = ""
    
    const nodoabuelo = e.target.parentNode.parentNode
    nodoabuelo.querySelector("h2").textContent
    
    node = nodoabuelo.querySelector("h2").textContent
    
    spanAbuelo = parseInt(nodoabuelo.querySelector("span").textContent)


    console.log(spanAbuelo)
   
  
    let infoProduct = {
        title:  nodoabuelo.querySelector("h2").textContent,
        img:  nodoabuelo.querySelector("img").src,
        price:  nodoabuelo.querySelector("span").textContent,
        quantity: 1
    }
    

     let verify = !!cart.some(product => product.title === node )
    
  
     if (verify) {
      for (const prod of cart) {
        if(prod.title == node){
          console.log("aqui bobo")
           prod.quantity++
           cartRender()
           divCart.innerHTML = sumaTotal
         }
      }
       
    }else{      
      divCart.innerHTML = sumaTotal
      console.log(verify)
      cart.push(infoProduct)
      cartRender()
     
     }  
    
    console.log(cart)
    
    sumaTotal += price * quant  
    console.log(sumaTotal)
   
}

function cartRender(){

  Toastify({

    text: "Agregado Al Carrito",
    position: "left",
    style: {
      background: "green",
      fontSize: "15px",
    },
    duration: 7000

    }).showToast();

      cart.forEach(product => {
      newRow = document.createElement("tr") 
      
        newContent = `
        <tr>
        <td><img src=${product.img}></td>
        <td class="tdTitles">${product.title}</td>  
        <td>${product.quantity}</td>
        <td>${product.price}</td>
        </tr>
         `
        newRow.innerHTML = newContent
        tableBody.append(newRow)
          
        price = parseInt(product.price)
        quant = product.quantity
        
        
    },
   
    
   )}

   

  