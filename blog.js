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

    document.addEventListener('DOMContentLoaded', () => {
      fetch('blog-posts.json')
        .then(response => response.json())
        .then(data => {
          const servicesBox = document.getElementById('services-box');
          data.forEach(post => {
            const fcard = document.createElement('div');
            fcard.classList.add('fcard');
            fcard.onclick = () => window.location.href = post.link;
    
            const img = document.createElement('img');
            img.classList.add('agrblg');
            img.src = post.image;
            fcard.appendChild(img);
    
            const articleDiv = document.createElement('div');
            articleDiv.classList.add('article');
    
            const blogLink = document.createElement('a');
            blogLink.href = "#";
            blogLink.textContent = "Blog";
            articleDiv.appendChild(blogLink);
    
            const title = document.createElement('h2');
            title.textContent = post.title;
            articleDiv.appendChild(title);
    
            const content = document.createElement('p');
            content.textContent = post.content.substring(0, 100) + '...'; // Shorten content for preview
            articleDiv.appendChild(content);
    
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('day');
    
            const ul = document.createElement('ul');
    
            const dateLi = document.createElement('li');
            dateLi.classList.add('date');
            const dateP = document.createElement('p');
            dateP.classList.add('tim');
            dateP.textContent = post.date;
            dateLi.appendChild(dateP);
            ul.appendChild(dateLi);
    
            const timeLi = document.createElement('li');
            timeLi.classList.add('time');
            const timeP = document.createElement('p');
            timeP.classList.add('tim');
            timeP.textContent = post.time;
            timeLi.appendChild(timeP);
            ul.appendChild(timeLi);
    
            dayDiv.appendChild(ul);
            articleDiv.appendChild(dayDiv);
    
            fcard.appendChild(articleDiv);
            servicesBox.appendChild(fcard);
          });
        })
        .catch(error => {
          console.error('Error fetching or parsing blog posts:', error);
        });
    });