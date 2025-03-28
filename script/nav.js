
document.addEventListener("DOMContentLoaded", function() {


    let stil = document.createElement("link");
    stil.rel = "stylesheet";         
    stil.href = "style/nav.css";           
    document.head.appendChild(stil); 
  
 
    fetch("nav.html")
      .then(function(raspuns) {
        return raspuns.text();       
      })
      .then(function(html) {
        
        let loc = document.getElementById("navbar");
  
        
        if (loc) {
          loc.innerHTML = html;
        }
      });
  
  });
  
// let nav =document.getElementById("navbar");
// let navHtml= document.createElement('nav');

// navHtml.innerHTML=`<nav>
//     <ul class="nav-list">
//         <li><a href="index.html" class="logo">NoteKeeper</a></li>
//         <li><a href="newnote.html">New Note</a></li>   
//         <li><a href="profile.html">Profile</a></li>
//     </ul>
// </nav>`;
// nav.prepend(navHtml);