const para=document.querySelectorAll("p");
const section=document.querySelector("section");
const sectionHeight=section.offsetHeight;
const totalHeight=section.scrollHeight;
const scrollableHeight=totalHeight-sectionHeight;

window.addEventListener("scroll",()=>{
  const scrollTop=window.scrollY;
  const scrollPercent=(scrollTop/scrollableHeight)*100;
  para.forEach((p,index)=>{
    p.style.opacity=scrollPercent>index*20?1:0;
  });
});

// document.addEventListener("DOMContentLoaded",()=>{
//   para.forEach((p,index)=>{
//     p.style.opacity=0;
//   });
// }); 