let cart = []
const btnaddProduct = document.querySelectorAll(".btnProduct")

let tableBody = document.querySelector("tbody")



for (const btn of btnaddProduct) {
    btn.addEventListener("click", cartaddProduct)
}

function cartaddProduct(e){   
    
    const nodoabuelo = e.target.parentNode.parentNode
    nodoabuelo.querySelector("h2").textContent

    let infoProduct = {
        title:  nodoabuelo.querySelector("h2").textContent,
        img:  nodoabuelo.querySelector("img").src,
        price:  nodoabuelo.querySelector("p").textContent,
        quantity: 1
    }
    
    let exist = cart.some(product => product.title === infoProduct.title)
    
    if(exist){
        let element = cart.map(prod =>{
            if (prod.title === infoProduct.title) {
                prod.quantity++
                console.log(prod.quantity)
                console.log(prod)
                return prod
            }else{
                return prod
            }
            
        })
        cart = [...element]
        console.log(element)
    }else{
        cart = [...cart,infoProduct]
    }
        
      
   
    /* let exist = cart.some(product => product.title === infoProduct.title);

      if(exist){
        let products = cart.map(product => {
          if(product.title === infoProduct.title){
            product.quantity++;
            return product
          }else{
            return product
          }
        })

        cart = [...products]

      }else{

        cart = [...cart, infoProduct];

      } */

    
      
      cartRender()
      
}

function cartRender(){
    
    
    let newRow = document.createElement("tr") 
    
    cart.forEach(product => {
        
        newRow.innerHTML = `
        <td><img src=${product.img}></td>
        <td>${product.title}</td>
        <td>${product.quantity}</td>
        <td>${product.price}</td>   
         `

        tableBody.append(newRow)
        
    });

   
}

