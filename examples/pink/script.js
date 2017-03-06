"use strict";function initMap(){var e={lat:59.936352,lng:30.32109699999999},t={lat:59.936955,lng:30.32109699999999},l=void 0,s="img/_mapMarker.png";l=window.matchMedia("(max-width: 950px)").matches?new google.maps.Map(document.getElementById("map"),{center:e,zoom:16,mapTypeControlOptions:{mapTypeIds:[]},scrollwheel:!1}):new google.maps.Map(document.getElementById("map"),{center:t,zoom:17,mapTypeControlOptions:{mapTypeIds:[]},scrollwheel:!1}),new google.maps.Marker({map:l,position:e,icon:s})}!function(){var e=document.querySelector(".page-nav"),t=e.querySelector(".page-nav_menu"),l=e.querySelector("#menuOpen"),s=document.querySelector("#menuClose"),i=window.matchMedia("(max-width: 600px)");e.addEventListener("click",function(o){var n=[l,l.childNodes[1],l.childNodes[1].childNodes[1]],c=[s,s.childNodes[1],s.childNodes[1].childNodes[1]];o.target!=n[0]&&o.target!=n[1]&&o.target!=n[2]||(l.style.cssText="display: none; visibility: hidden; opacity: 0;",s.style.cssText="visibility: visible; opacity: 1;",e.classList.add("page-nav--js"),i.matches?t.style.cssText="visibility: visible; opacity: 1; top: 67px; z-index: 100;":t.style.cssText="visibility: visible; opacity: 1; top: 111px; z-index: 100;"),o.target!=c[0]&&o.target!=c[1]&&o.target!=c[2]||(s.style.cssText="",l.style.cssText="",t.style.cssText="",e.classList.remove("page-nav--js"))})}(),function(){var e=document.querySelector("#slider"),t=e.querySelector("#sliderPrev"),l=e.querySelector("#sliderNext"),s=e.querySelector("#sliderRadio-1"),i=e.querySelector("#sliderRadio-2"),o=e.querySelector("#sliderRadio-3"),n=e.querySelector("#sliderBlock"),c=document.querySelectorAll(".js_sliderBlock"),a={width:c[0].offsetWidth,mainLeftPos:e.getBoundingClientRect().left,mainRightPos:e.getBoundingClientRect().right};e.addEventListener("click",function(e){e.target===l&&(setTimeout(function(){n.getBoundingClientRect().right===a.mainRightPos&&l.classList.add("disabled")},400),t.classList.contains("disabled")&&t.classList.remove("disabled")),e.target===t&&(setTimeout(function(){n.getBoundingClientRect().left===a.mainLeftPos&&t.classList.add("disabled")},400),l.classList.contains("disabled")&&l.classList.remove("disabled"))}),l.addEventListener("click",function(e){n.getBoundingClientRect().right!=a.mainRightPos&&(""===n.style.left&&(n.style.left="0"),n.style.left=parseFloat(n.style.left)+-100+"%")}),t.addEventListener("click",function(e){n.getBoundingClientRect().left!=a.mainLeftPos&&(""===n.style.left&&(n.style.left="0"),n.style.left=parseFloat(n.style.left)+100+"%")});var d=void 0,r=void 0;e.addEventListener("touchstart",function(e){d=e.targetTouches[0].pageX}),e.addEventListener("touchmove",function(e){r=e.targetTouches[0].pageX}),e.addEventListener("touchend",function(e){var t=void 0;t=r<d?-100:100,""===n.style.left&&(n.style.left="0"),parseFloat(n.style.left)+t<=0&&parseFloat(n.style.left)+t>=-200&&(n.style.left=parseFloat(n.style.left)+t+"%"),"0%"===n.style.left?s.checked=!0:"-200%"===n.style.left?o.checked=!0:i.checked=!0}),document.querySelector("main").addEventListener("touchend",function(){setTimeout(function(){n.style.left=s.checked?n.style.left="0":i.checked?n.style.left="-100%":o.checked?n.style.left="-200%":n.style.left},50)})}(),function(){var e=document.querySelector("#tableSlider"),t=document.querySelector("#tableRadio-1"),l=document.querySelector("#tableRadio-2"),s=document.querySelector("#tableRadio-3"),i=(document.querySelector("#tableControls"),document.querySelector(".b-price")),o=void 0,n=void 0;e.addEventListener("touchstart",function(e){o=e.targetTouches[0].pageX}),e.addEventListener("touchmove",function(e){n=e.targetTouches[0].pageX}),e.addEventListener("touchend",function(i){var c=void 0;c=n<o?-100:100,""===e.style.left&&(e.style.left="-100%"),parseFloat(e.style.left)+c<=0&&parseFloat(e.style.left)+c>=-200&&(e.style.left=parseFloat(e.style.left)+c+"%"),"0%"===e.style.left?t.checked=!0:"-200%"===e.style.left?s.checked=!0:l.checked=!0}),i.addEventListener("touchend",function(){setTimeout(function(){e.style.left=t.checked?e.style.left="0":l.checked?e.style.left="-100%":s.checked?e.style.left="-200%":e.style.left},50)})}(),function(){var e=document.querySelectorAll(".ieHidden"),t=window.clientInformation.userAgent;e=Array.prototype.slice.call(e),(t.indexOf("re:11.0")>=0||t.indexOf(".NET4.0E")>=0||t.indexOf(".NET4.0C")>=0||t.indexOf("Trident/7.0")>=0)&&e.forEach(function(e){e.style.display="none"})}(),function(){var e="ontouchstart"in document.documentElement||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0;if(e)try{for(var t in document.styleSheets){var l=document.styleSheets[t];if(l.rules)for(var s=l.rules.length-1;s>=0;s--)l.rules[s].selectorText&&l.rules[s].selectorText.match(":hover")&&l.deleteRule(s)}}catch(e){}}();