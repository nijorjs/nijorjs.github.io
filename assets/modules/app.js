var e=new Proxy({},{set:(e,t,o)=>(e[t]=o,document.querySelectorAll(`nirev[var="${t}"]`).forEach((e=>{e.innerHTML=o})),!0)});async function t(e){if("/"===e)return;let o=e.split("/");return"404"===o[o.length-1]&&o.pop(),o.pop(),o.push("404"),(e=o.join("/")).endsWith("/")&&"/"!=e&&(e=e.substring(0,e.length-1)),window.nijor.routes.has(e)?await window.nijor.routes.get(e)():await t(e)}window.nijor={component:class{constructor(e,t){this.template=e,this.cb=t}init(e){this.name=e}run=async function(e){let t=new RegExp(`(<${this.name}[^>]+>|<${this.name}>)`),o=document.getElementsByTagName(this.name)[0];if(0===document.getElementsByTagName(this.name).length)return;let n=function(e){let t=[],o=[];for(let n,i=0,r=e.attributes,s=r.length;i<s;i++)n=r[i],t.push(n.nodeName),o.push(n.nodeValue);t.push("_text_"),o.push(e.innerHTML);let n=o,i={};return t.forEach(((e,t)=>i[e]=n[t])),i}(o);null!=e&&(n=e);try{o.innerHTML=""}catch(e){}try{let e=await this.template(n);o.parentElement.innerHTML=o.parentElement.innerHTML.replace(t,e),await this.cb(n),await this.run()}catch(e){let o=await this.template(n);document.body.innerHTML=document.body.innerHTML.replace(t,o),await this.cb(n),await this.run()}}},reactiveVars:e},window.nijor.hashRouterActivated=!1,window.nijorfunc={},window.location.query=function(){let e={},t=document.createElement("a");t.href=window.location.href;let o=t.search.substring(1).split("&");for(let t=0;t<o.length;t++){let n=o[t].split("=");e[n[0]]=decodeURIComponent(n[1])}return e},window.nijor.emitEvent=async function(e,t={}){document.querySelectorAll("[on"+e+"]").forEach((o=>{null===o.getAttribute("id")&&o.setAttribute("id","id_"+function(e,t){let o=Math.floor(Math.random()*(t-e+1)+e),n="",i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=i.length;for(let e=0;e<o;e++)n+=i.charAt(Math.floor(Math.random()*r));return n}(4,6));let n=o.getAttribute("on"+e),i=n.split("(")[0],r=n.match(/\((.*)\)/)[1];r=r.replace("$data",JSON.stringify(t)),r=r.replace("this","_this"),new Function(`\n        let _this = document.getElementById('${o.id}');\n        ${i}(${r});\n        `)()}))},window.nijor.reload=async function(e){await window.nijor.emitEvent("reload"+e,null)},window.nijor.routes=new Map,window.nijor.routes.set("/",(()=>{})),window.nijor.slots=new Map,window.nijor.slots.set("/",(()=>{})),window.nijor.redirect=function(e){window.nijor.previousRoute=window.location.pathname;try{history.pushState(null,null,e),history.pushState(null,null,e),history.back()}catch(t){window.location.href=e}return!1},window.addEventListener("popstate",(async e=>{let t=e.target.location.pathname;await window.nijor.renderRoute(t),window.nijor.previousRoute=t,window.nijor.emitEvent("route",window.location.pathname)})),window.nijor.setRoute=function(e,t,o){window.nijor.routes.set(e,(async e=>{try{let{default:n}=await t(),i=document.getElementById(`routes-slot-${o}`);i?i.innerHTML="<app></app>":(await window.nijor.slots.get(`${o}`)(),document.getElementById(`routes-slot-${o}`).innerHTML="<app></app>"),n.init("app"),await n.run(e)}catch(e){}}))},window.nijor.addSlot=function(e,t){window.nijor.slots.set(e,(async()=>{try{let{default:e}=await t(),o=document.getElementById("routes-slot-/");o&&(o.innerHTML="<app></app>"),e.init("app"),await e.run()}catch(e){console.log(e)}}))},window.nijor.renderRoute=async function(e){return e.endsWith("/")&&"/"!=e&&(e=e.substring(0,e.length-1)),window.nijor.routes.has(e)?await window.nijor.routes.get(e)():await async function(e,o){for(const[t,n]of o.entries())if(t instanceof RegExp){const o=t.exec(e);if(!o)continue;let i=o.slice(1,o.length);if(i[0].indexOf("/")>-1)continue;return await n(i)}await t(e)}(e,window.nijor.routes)},window.nijor.renderSlots=async function(e){if(e.endsWith("/")&&"/"!=e&&(e=e.substring(0,e.length-1)),window.nijor.slots.has(e))return await window.nijor.slots.get(e)()},(()=>{if(null===window.localStorage.getItem("theme")||"auto"===window.localStorage.getItem("theme")){window.matchMedia("(prefers-color-scheme: dark)").matches&&document.body.classList.toggle("dark-mode")}else{if("dark"===window.localStorage.getItem("theme"))return document.body.classList.add("dark-mode"),void window.localStorage.setItem("theme","dark");document.body.classList.remove("light-mode"),window.localStorage.setItem("theme","light")}})(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(()=>{if(null===window.localStorage.getItem("theme")||"auto"===window.localStorage.getItem("theme")){window.matchMedia("(prefers-color-scheme: dark)").matches?document.body.classList.toggle("dark-mode"):document.body.classList.remove("dark-mode")}}));window.nijor.setTheme=function(e){if("light"===e)return document.body.classList.remove("dark-mode"),void window.localStorage.setItem("theme","light");if("dark"===e)return document.body.classList.add("dark-mode"),void window.localStorage.setItem("theme","dark");if("auto"===e){window.localStorage.setItem("theme","auto"),window.matchMedia("(prefers-color-scheme: dark)").matches?document.body.classList.add("dark-mode"):document.body.classList.remove("dark-mode")}},window.nijor.getTheme=()=>window.localStorage.getItem("theme")||"auto",window.nijor.getColorScheme=()=>!0===window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";var o="data:image/svg+xml,%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 20010904//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='150px' height='150px' viewBox='0 0 1500 1500' preserveAspectRatio='xMidYMid meet'%3e%3cg id='layer101' fill='%2300a2e8' stroke='none'%3e %3cpath d='M150 1397 c0 -8 -5 -17 -11 -19 -7 -2 21 -200 80 -567 50 -310 91 -568 91 -572 0 -5 6 -9 12 -9 7 0 178 165 380 367 l368 368 1 -360 1 -360 99 -94 c55 -52 102 -91 105 -88 10 10 -157 1131 -169 1139 -7 4 -16 8 -22 8 -5 0 -175 -165 -377 -367 l-368 -368 -1 380 -1 380 -94 89 c-54 51 -94 82 -94 73z'/%3e %3c/g%3e%3cg id='layer102' fill='%230ec4f8' stroke='none'%3e %3cpath d='M703 838 l-363 -363 0 -120 0 -120 365 365 366 366 -3 117 -3 117 -362 -362z'/%3e %3c/g%3e%3c/svg%3e";function n(){document.body.style.transition="0.5s";let e=window.nijor.getTheme();"auto"!==e&&null!==e||(e=window.nijor.getColorScheme()),"dark"===e&&window.nijor.setTheme("light"),"light"===e&&window.nijor.setTheme("dark")}let i={"/docs":"docs","/examples":"examples","/blog":"blog"};window.nijorfunc._t4OpenCloseMenu=function(e){let t=document.getElementById("docs-sidenav-mobile");if("menu"===e.innerHTML)return t.style.width="75%",void(e.innerHTML="close");t.style.width="0%",e.innerHTML="menu"},window.nijorfunc._t4ChangeRoute=function(e,t){e.style.display="flex",e.querySelectorAll(".nav-link").forEach((e=>{e.style.color="white",e.getAttribute("tab")===i["/"+t.split("/")[1]]&&(e.style.color="#07b0ff")})),screen.width<600&&("/docs"!=window.location.pathname?(document.getElementById("header-nijor-logo").style.display="block",document.getElementById("header-nijor-menu").style.display="none"):(document.getElementById("header-nijor-logo").style.display="none",document.getElementById("header-nijor-menu").style.display="block",document.getElementById("header-nijor-menu").innerHTML="menu"))},window.nijorfunc._t4ChangeTheme=n,window.nijorfunc._t4ChangeTheme=n;var r=new window.nijor.component((async function(){return`<div class="container" n-scope="qo9NVwxN2i">\n        <span class="material-symbols-sharp menu" id="header-nijor-menu" n-scope="qo9NVwxN2i" onclick="window.nijorfunc._t4OpenCloseMenu(this)">menu</span>\n        <a class="logo" id="header-nijor-logo" n-scope="qo9NVwxN2i" onclick="return window.nijor.redirect(this.href)" href="/"><img src="${o}" n-scope="qo9NVwxN2i"></a>\n        <div class="nav-bar" n-scope="qo9NVwxN2i" onroute="window.nijorfunc._t4ChangeRoute(this,$data)">\n            <a tab="docs" class="nav-link" n-scope="qo9NVwxN2i" onclick="return window.nijor.redirect(this.href)" href="/docs">Docs</a>\n            <a href="https://github.com/nijorjs" class="nav-link" n-scope="qo9NVwxN2i">Github</a>\n            <a tab="blog" class="nav-link" n-scope="qo9NVwxN2i" onclick="return window.nijor.redirect(this.href)" href="/blog">Blog</a>\n            <button class="material-symbols-sharp theme-dark-btn" n-scope="qo9NVwxN2i" onclick="window.nijorfunc._t4ChangeTheme()">dark_mode</button>\n            <button class="material-symbols-sharp theme-light-btn" n-scope="qo9NVwxN2i" onclick="window.nijorfunc._t4ChangeTheme()">light_mode</button>\n        </div>\n    </div>\n`}),(async function(){})),s=new window.nijor.component((async function(){return'<headerq8wyq n-scope="WXMfu9"></headerq8wyq>\n    <div style="margin-top: 5rem;" id="routes-slot-/" n-scope="WXMfu9"></div>\n'}),(async function(){r.init("headerq8wyq"),await r.run()}));window.nijor.addSlot("/blog",(()=>import("./.nijor-9fe7e791.js"))),window.nijor.addSlot("/docs",(()=>import("./.nijor-964bf8dd.js"))),window.nijor.setRoute("/404",(()=>import("./404-e95f1c8c.js")),"/"),window.nijor.setRoute("/blog/enei",(()=>import("./enei-bd7a24f4.js")),"/blog"),window.nijor.setRoute("/blog",(()=>import("./index-a9d60090.js")),"/blog"),window.nijor.setRoute("/docs/code-splitting",(()=>import("./code-splitting-6a58652b.js")),"/docs"),window.nijor.setRoute("/docs/components",(()=>import("./components-f70a8f19.js")),"/docs"),window.nijor.setRoute("/docs/custom-events",(()=>import("./custom-events-dd5afc83.js")),"/docs"),window.nijor.setRoute("/docs/dark-mode",(()=>import("./dark-mode-7143e2bd.js")),"/docs"),window.nijor.setRoute("/docs/examples",(()=>import("./examples-c08dca61.js")),"/docs"),window.nijor.setRoute("/docs/functional-attributes",(()=>import("./functional-attributes-1515639d.js")),"/docs"),window.nijor.setRoute("/docs",(()=>import("./index-63d3c9fe.js")),"/docs"),window.nijor.setRoute("/docs/installation",(()=>import("./installation-396c0a88.js")),"/docs"),window.nijor.setRoute("/docs/nijor-cli",(()=>import("./nijor-cli-246f7cd7.js")),"/docs"),window.nijor.setRoute("/docs/reactivity",(()=>import("./reactivity-b15d0ef9.js")),"/docs"),window.nijor.setRoute("/docs/routing",(()=>import("./routing-da27b5c1.js")),"/docs"),window.nijor.setRoute("/docs/routing.old",(()=>import("./routing.old-5b9b6e55.js")),"/docs"),window.nijor.setRoute("/docs/structure",(()=>import("./structure-1b7fd196.js")),"/docs"),window.nijor.setRoute("/",(()=>import("./index-7eddb8d6.js")),"/"),window.nijor.setRoute("/internet-error",(()=>import("./internet-error-4260a19a.js")),"/"),s.init("app"),s.run();let a=window.location.pathname;window.nijor.renderRoute(a),setTimeout((()=>window.nijor.emitEvent("route",window.location.pathname)),1);export{o as i};
