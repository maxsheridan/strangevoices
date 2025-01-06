document.querySelectorAll(".audio-player").forEach((e=>{const t=e.querySelector("audio"),n=e.querySelector(".play-pause"),r=e.querySelector(".progress input"),i=e.querySelector(".progress-filled");function o(){t.paused?(n.classList.remove("pause"),n.classList.add("play"),n.innerHTML='\n<svg class="icon" viewBox="0 0 30 30">\n<polygon points="10,6.9 10,23.1 24,15" fill="currentColor"></polygon>\n</svg>'):(n.classList.remove("play"),n.classList.add("pause"),n.innerHTML='\n<svg class="icon" viewBox="0 0 30 30">\n <rect x="10" y="8" width="3" height="14" fill="currentColor"></rect>\n<rect x="17" y="8" width="3" height="14" fill="currentColor"></rect>\n</svg>')}function s(){const e=t.currentTime/t.duration*100;i.style.width=`${e}%`,r.value=e}n.addEventListener("click",(function(){t.paused?(document.querySelectorAll("audio").forEach((e=>{e!==t&&e.pause()})),t.play()):t.pause()})),t.addEventListener("play",o),t.addEventListener("pause",o),t.addEventListener("timeupdate",s),r.addEventListener("input",(function(){const e=r.value/100*t.duration;t.currentTime=e,s()})),r.addEventListener("change",s),r.addEventListener("touchstart",(e=>{const n=(e.touches[0].clientX-r.getBoundingClientRect().left)/r.offsetWidth*t.duration;t.currentTime=n,s()})),r.addEventListener("touchmove",(e=>{const n=(e.touches[0].clientX-r.getBoundingClientRect().left)/r.offsetWidth*t.duration;t.currentTime=n,s()}))}));