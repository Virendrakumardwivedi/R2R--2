//link--https://api.unsplash.com/search/photos/?query=cat&per_page=20client_id=YOUR_ACCESS_KEY

// https://api.unsplash.com/search/photos/?query=cat&per_page=20&client_id=KV2qGFe7GN9nDSY-uc8mQH3UokUFWSYzRJOy-vztA6Y
const API = "KV2qGFe7GN9nDSY-uc8mQH3UokUFWSYzRJOy-vztA6Y"

import { navbar } from "../components/navbar.js";
let na = document.getElementById("navbar");
na.innerHTML=navbar();


import { searchImages, append } from "./fetch.js";


let search = (e)=>{
    if(e.key=="Enter"){
        let value = document.getElementById("query").value;
      searchImages(API,value).then((data)=>{
          console.log(data)
          let container=document.getElementById("container");
          container.innerHTML=null;
          append(data.results, container)
      })
    }
};


document.getElementById("query").addEventListener("keydown",search);


let categories = document.getElementById("categories").children;

//console.log(categories)


function cSearch(){
    console.log(this.id)
    searchImages(API,this.id).then((data)=>{
        console.log(data)
        let container=document.getElementById("container");
        container.innerHTML=null;
        append(data.results, container)
    })
}

for(let el of categories){
    el.addEventListener("click",cSearch)
}

// h3 = {
//     id: "nature"
//     cSearch()
// }


//let searchImages = async () =>{
// let value = document.getElementById("query").value

// try{
// let res =await fetch(
//     `https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}`
//     );

//     let data = await res.json();
//     console.log(data)
// }catch(err){
//     console.log(err)
// }

//};
