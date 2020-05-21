let inputGroupSelect01 = document.getElementById("inputGroupSelect01");
let title = document.getElementById("title");
let simbolo = document.getElementById("simbolo");
let masaAtomica = document.getElementById("masaAtomica");
let card = document.querySelector(".card-body");


async function getElementos(){
    const data = await fetch("https://neelpatel05.pythonanywhere.com");
    const datos = await data.json();
    return datos;
}



inputGroupSelect01.addEventListener("change",() => {
    let elemento = inputGroupSelect01.value;
    card.innerHTML = "";
    getElementos()
    .then(data => {   
        
        //titulo
        title.innerHTML = data.find(datos => {
            return datos.name === elemento;
        }).name;     
        
        
        let dato = data.find(datos => {
            return datos.name === elemento;
        });
        
    
        for (const property in dato) {
            let att = document.createAttribute("class");
            att.value = "card-text";
            let texto = document.createElement("p");            
            texto.textContent = `${property}: ${dato[property]}`; 
            card.style.backgroundColor = `#${dato.cpkHexColor}`;           
            card.appendChild(texto);            
          }


        // for(let i=0;i<size;i++){
        //     console.log(dato)
        //     // let att = document.createAttribute("class");
        //     // att.value = "card-text";
        //     // let texto = document.createElement("p").setAttributeNode(att);
        //     // texto.textContent = 
        // }

        
        
    });
    
});