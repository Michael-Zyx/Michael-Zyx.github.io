const live2d_path="https://gitee.com/Michael-Zyx/image/raw/master/live2d-widget/";function loadExternalResource(e,t){return new Promise(((i,s)=>{let a;if(t==="css"){a=document.createElement("link");a.rel="stylesheet";a.href=e}else if(t==="js"){a=document.createElement("script");a.src=e}if(a){a.onload=()=>i(e);a.onerror=()=>s(e);document.head.appendChild(a)}}))}if(screen.width>=768){Promise.all([loadExternalResource(live2d_path+"waifu.css","css"),loadExternalResource(live2d_path+"live2d.min.js","js"),loadExternalResource(live2d_path+"waifu-tips.js","js")]).then((()=>{initWidget({waifuPath:live2d_path+"waifu-tips.json",cdnPath:"https://gitee.com/Michael-Zyx/image/raw/master/live2d-api/",tools:["hitokoto","asteroids","switch-model","switch-texture","photo","info","quit"]})}))}