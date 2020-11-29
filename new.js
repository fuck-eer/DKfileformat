
let cmpsort=document.getElementById("cmpname");
let exesort=document.getElementById("exename");
let allshow=document.getElementById("allshow");

let allsort=document.getElementById("rightsec");
let showing=document.querySelector(".showing");






    

let show=()=>{

    fetch('../recap of js/data.json')
          .then(response => response.json())
          .then(data => {
                  data.Demo_Key_Executives_List.sort((a,b)=>{
                    let fa = a.Company.toLowerCase(),
                    fb = b.Company.toLowerCase();
            
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
                    });
        
        data.Demo_Key_Executives_List.forEach(e => {
           allsort.insertAdjacentHTML('beforeend', `<div class="cards">
        
           <h5>${e.Company}</h5>
           <h5>${e.Designation}</h5>
           <h5>${e.Profile}</h5>
           <h5>${e["Executive Name"]}</h5>
          
        </div>`); 
        });
        
        
        
        
          })
          .catch(err=>console.error(err));

}    


let showcompny=(e)=>{
    if(cmpsort.checked){
        showing.innerHTML='';


        fetch('../recap of js/data.json')
        .then(
            response => response.json()
        ).then(

data=>{

    data.Demo_Key_Executives_List.forEach(e => {
        showing.insertAdjacentHTML('beforeend', `<div class="element">
        <h5>${e.Company}</h5>       
     </div>`); 
     });
    
}

        ).catch(e=>
console.error(e)
        )




    }
}



let showexedata=(e)=>{
    if(exesort.checked){


        showing.innerHTML='';
        fetch('../recap of js/data.json')
        .then(
            response => response.json()
        ).then(
data=>{

    data.Demo_Key_Executives_List.forEach(e => {
        showing.insertAdjacentHTML('beforeend', `<div class="element">
        <h5>${e["Executive Name"]}</h5>       
     </div>`); 
     });
    
}

        ).catch(e=>
console.error(e)
        )




    }
}


  cmpsort.addEventListener('change',()=>showcompny());
  exesort.addEventListener('change',()=>showexedata());
  allshow.addEventListener('change',()=>show());
 
   