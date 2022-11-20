function init(){create_gallery(),scroll_nav(),fix_header()}function fix_header(){const e=document.querySelector(".header"),t=document.querySelector(".festival"),i=document.querySelector("body");window.addEventListener("scroll",()=>{t.getBoundingClientRect().bottom<0?(e.classList.add("fixed"),i.classList.add("scrollfix")):(e.classList.remove("fixed"),i.classList.remove("scrollfix"))})}function scroll_nav(){document.querySelectorAll(".header__nav a").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();const t=e.target.attributes.href.value;document.querySelector(t).scrollIntoView({behavior:"smooth"})})})}function create_gallery(){const e=document.querySelector(".galeria__imagenes");for(let t=1;t<=12;t++){const i=document.createElement("picture");i.innerHTML=`<source srcset="/build/img/thumbs/${t}.avif" type="image/avif" />\n        <source srcset="/build/img/thumbs/${t}.webp" type="image/webp" />\n        <img width="200" height="300" src="/build/img/thumbs/${t}.png" alt="imagen galeria" loading="lazy" />\n        `,i.onclick=()=>show_image(t),e.appendChild(i)}}function show_image(e){const t=document.createElement("picture");t.innerHTML=`<source srcset="/build/img/grandle/${e}.avif" type="image/avif" />\n    <source srcset="/build/img/grandle/${e}.webp" type="image/webp" />\n    <img width="200" height="300" src="/build/img/grandle/${e}.png" alt="imagen galeria" loading="lazy" />\n    `;const i=document.createElement("div");i.appendChild(t),i.classList.add("overlay"),i.onclick=()=>{i.remove();document.querySelector("body").classList.remove("fixed")};const n=document.createElement("button");n.textContent="X",n.classList.add("overlay__boton"),n.addEventListener("click",()=>{i.remove();document.querySelector("body").classList.remove("fixed")}),i.appendChild(n);const o=document.querySelector("body");o.classList.add("fixed"),o.appendChild(i)}document.addEventListener("DOMContentLoaded",()=>{init()});
//# sourceMappingURL=script.js.map