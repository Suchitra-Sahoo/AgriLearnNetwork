function search(){
    let box=[...document.querySelectorAll(".fcard")]
    let val=document.getElementById('input');
    
    
    let filter=val.value.toUpperCase().trim();
    console.log(filter)
    console.log(box)
    
    for(let i=0;i<box.length;i++){
      let component=box[i];
      let h2=component.querySelector('h2');
      let componentName=h2.textContent|| h2.innerText;
      console.log(componentName)
      console.log((componentName.toUpperCase().indexOf(filter)))
    
      if(componentName.toUpperCase().indexOf(filter)>-1){
        console.log(`Showing card ${i}: ${componentName}`);
        component.style.display="flex";
      
       
      }
      else{
        console.log(`Hiding card ${i}: ${componentName}`);
        component.style.display="none";
       
      }
    }
    }
    