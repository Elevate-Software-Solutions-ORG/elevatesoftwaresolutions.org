"use strict";let gstoplist=document.getElementsByClassName("gs-scrollto");for(let i=0;i<gstoplist.length;i++)gstoplist[i].addEventListener("click",function(e){e.preventDefault();let t=e.currentTarget,s=t.href.split("#")[1],l=document.getElementById(s);if(l){let r=t.closest(".gs-toc").getAttribute("data-offset")||50,c=l.getBoundingClientRect().top+window.scrollY-r;window.scroll({top:c,behavior:"smooth"})}},!1);if(null!=document.querySelector(".gs-toc-mobile")){document.querySelector(".gs-toc-mobile").addEventListener("click",function(e){e.preventDefault(),e.currentTarget.classList.toggle("open"),document.querySelector(".gs-section-sticky-nav").classList.toggle("open")});let e=document.querySelectorAll(".gs-section-sticky-nav ul li a"),t=[];e.forEach(s=>{t.push(document.querySelector(s.hash)),s.addEventListener("click",function(t){t.preventDefault();let s=t.currentTarget;e.forEach(e=>{e.classList.remove("current")}),s.classList.add("current")},!1)});let s=new IntersectionObserver(t=>{t.forEach(t=>{if(t.isIntersecting){let s=t.target.getAttribute("id");e.forEach(e=>{e.classList.remove("current")});let l=document.querySelector('.gs-section-sticky-nav ul li a[href="#'+s+'"]');l&&l.classList.add("current")}})},{threshold:1});for(let l of t)s.observe(l)}