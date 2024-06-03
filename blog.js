
// document.addEventListener('DOMContentLoaded', () => {
//   gsap.from(".fcard", {
//     opacity: 0,
//     y: 50,
//     duration: 1,
//     stagger: 0.2
//   });

//   // Optional: Animate search bar focus
//   const searchBar = document.querySelector('.search-bar');
//   searchBar.addEventListener('focus', () => {
//     gsap.to(searchBar, { scale: 1.05, duration: 0.3 });
//   });
//   searchBar.addEventListener('blur', () => {
//     gsap.to(searchBar, { scale: 1, duration: 0.3 });
//   });
// });

// function search() {
//   let box = [...document.querySelectorAll(".fcard")];
//   let val = document.getElementById('input');
//   let filter = val.value.toUpperCase().trim();

//   for (let i = 0; i < box.length; i++) {
//     let component = box[i];
//     let h2 = component.querySelector('h2');
//     let componentName = h2.textContent || h2.innerText;

//     if (componentName.toUpperCase().indexOf(filter) > -1) {
//       component.style.display = "flex";
//     } else {
//       component.style.display = "none";
//     }
//   }
// }
// function search() {
//     let box=[...document.querySelectorAll(".fcard")]
//     let val=document.getElementById('input');
    
    
//     let filter=val.value.toUpperCase().trim();
//     console.log(filter)
//     console.log(box)
    
//     for(let i=0;i<box.length;i++){
//       let component=box[i];
//       let h2=component.querySelector('h2');
//       let componentName=h2.textContent|| h2.innerText;
//       console.log(componentName)
//       console.log((componentName.toUpperCase().indexOf(filter)))
    
//       if(componentName.toUpperCase().indexOf(filter)>-1){
//         console.log(`Showing card ${i}: ${componentName}`);
//         component.style.display="flex";
      
       
//       }
//       else{
//         console.log(`Hiding card ${i}: ${componentName}`);
//         component.style.display="none";
       
//       }
//     }
//     }
document.addEventListener('DOMContentLoaded', () => {
  gsap.from(".fcard", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
  });

  // Animate search bar focus
  const searchBar = document.querySelector('.search-bar');
  searchBar.addEventListener('focus', () => {
    gsap.to(searchBar, { scale: 1.05, duration: 0.3 });
  });
  searchBar.addEventListener('blur', () => {
    gsap.to(searchBar, { scale: 1, duration: 0.3 });
  });

  // Add hover effect to blog cards
  const cards = document.querySelectorAll('.fcard');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { scale: 1.05, duration: 0.3 });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { scale: 1, duration: 0.3 });
    });
  });
});

function search() {
  let box = [...document.querySelectorAll(".fcard")];
  let val = document.getElementById('input');
  let filter = val.value.toUpperCase().trim();
  console.log(filter);
  console.log(box);

  for (let i = 0; i < box.length; i++) {
    let component = box[i];
    let h2 = component.querySelector('h2');
    let componentName = h2.textContent || h2.innerText;
    console.log(componentName);
    console.log((componentName.toUpperCase().indexOf(filter)));

    if (componentName.toUpperCase().indexOf(filter) > -1) {
      console.log(`Showing card ${i}: ${componentName}`);
      component.style.display = "flex";
    } else {
      console.log(`Hiding card ${i}: ${componentName}`);
      component.style.display = "none";
    }
  }
}
