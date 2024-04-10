let url = "https://dog.ceo/api/breeds/image/random"

let btn = document.querySelector("button");

async function getImg(){
    try{
        let res = await fetch(url);
    let data = await res.json();
           return data;
    }
    catch(error){
        return error;
    }
}

btn.addEventListener("click",async()=>{
    let imgtag = document.querySelector("img");
    try{
        
         let data = await getImg(); 
         console.log(data.message);
        imgtag.setAttribute("src",data.message);
    }
    catch(error){
        console.log(error);
        let message ="OOps link is broken please try again";
        imgtag.setAttribute("alt",message);
    }

})