"use strict";var loadedspline=!1;const onGSSplineInteraction=()=>{if(!0===loadedspline)return;loadedspline=!0;let e=document.createElement("script");e.src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js",e.type="module",document.body.appendChild(e),e.onload=()=>{let e=document.getElementsByClassName("gs-splineloader");e.length>0&&Array.from(e).forEach(e=>{e.classList.add("gs-splineloaded"),setTimeout(()=>{e.querySelector("spline-viewer").shadowRoot.querySelector("#logo").style.display="none"},1e3)})}};document.body.addEventListener("mouseover",onGSSplineInteraction,{once:!0}),document.body.addEventListener("touchmove",onGSSplineInteraction,{once:!0}),window.addEventListener("scroll",onGSSplineInteraction,{once:!0}),document.body.addEventListener("keydown",onGSSplineInteraction,{once:!0});var requestIdleCallback=window.requestIdleCallback||function(e){let n=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})},1)};let gspbspline=document.getElementsByClassName("gs-splineloader");for(let i=0;i<gspbspline.length;i++){let e=gspbspline[i];e.classList.contains("gs-loadnow")&&requestIdleCallback(function(){onGSSplineInteraction()},{timeout:300})}