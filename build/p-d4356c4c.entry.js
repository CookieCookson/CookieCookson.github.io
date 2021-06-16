import{r as o,h as i,g as e,H as t,a as n}from"./p-246650f7.js";const r=class{constructor(i){o(this,i)}render(){return i("main",null,i("cookie-section",null,i("cookie-logo",{url:"#about"})),i("cookie-section",{id:"about"},i("cookie-heading",null,"About"),i("cookie-paragraph",null,"Hey 👋, I'm Christian Cook - a front end engineer working at ",i("cookie-link",{url:"https://www.spongelearning.com"},"Sponge"),". I really enjoy building intricate web components which are accessible and versatile, and love learning about developing design systems.")),i("cookie-section",null,i("cookie-heading",null,"Creations"),i("cookie-list",null,i("cookie-list-item",null,i("cookie-link",{url:"https://www.xapijs.dev",external:!0},"xAPI.js"),"- a JavaScript library for elearning developers to communicate over the xAPI specification."),i("cookie-list-item",null,i("cookie-link",{url:"https://codepen.io/cookiecookson/pen/KKMMYjJ",external:!0},"Star Wars: Squadrons Loader"),"- a small side-project challenge to replicate the loader from the game using CSS."),i("cookie-list-item",null,i("cookie-link",{url:"https://gist.github.com/CookieCookson/5eb4f0b5e0ba82b28d2a3fd7e157f4bd",external:!0},"Cookie's Paella 🍪🥘"),"- A favoured paella recipe that I have been cooking for my friends for many years."))),i("cookie-section",null,i("cookie-heading",null,"Contact"),i("cookie-paragraph",null,"You can reach me at ",i("cookie-link",{url:"mailto:me@cookie.dev"},"me@cookie.dev"),"."),i("cookie-icon-list",null,i("cookie-icon-list-item",{url:"https://github.com/CookieCookson","accessible-label":"GitHub",icon:"logo-github"}),i("cookie-icon-list-item",{url:"https://twitter.com/Cookie_Cookson","accessible-label":"Twitter",icon:"logo-twitter"}),i("cookie-icon-list-item",{url:"https://linkedin.com/in/cookchristian","accessible-label":"LinkedIn",icon:"logo-linkedin"}))))}};r.style="html{scroll-behavior:smooth}@media screen and (prefers-reduced-motion: reduce){html{scroll-behavior:auto}}body{margin:0;font-family:Avenir, Helvetica, Arial, sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}";const c=class{constructor(i){o(this,i)}render(){return i("h2",null,i("slot",null))}};c.style="cookie-heading h2{font-size:3rem}@media (max-width: 768px){cookie-heading h2{font-size:2.25rem}}";const s=class{constructor(i){o(this,i)}render(){return i("div",{role:"list"},i("slot",null))}};s.style="cookie-icon-list>div{list-style:none;padding-left:0}cookie-icon-list>div cookie-icon-list-item{display:inline-block}cookie-icon-list>div cookie-icon-list-item+cookie-icon-list-item{margin-left:1rem}";const l=class{constructor(i){o(this,i)}render(){return i("div",{role:"listitem"},i("cookie-link",{url:this.url,external:!0,"accessible-label":this.accessibleLabel},i("ion-icon",{name:this.icon})))}};l.style="cookie-icon-list-item ion-icon{font-size:3rem}@media (max-width: 768px){cookie-icon-list-item ion-icon{font-size:2rem}}";const a=class{constructor(i){o(this,i),this.external=!1}render(){return i("a",{href:this.url,target:this.external?"_blank":"_self",rel:this.external?"noreferrer":null,"aria-label":this.accessibleLabel},i("slot",null))}};a.style="cookie-link a{color:inherit;font-weight:bold;text-decoration-color:var(--link-color);text-underline-offset:0.125em;text-decoration-thickness:0.1em;transition:text-underline 100ms}cookie-link a:hover,cookie-link a:focus{color:var(--link-color)}";const h=class{constructor(i){o(this,i)}render(){return i("div",{role:"list"},i("slot",null))}};h.style="cookie-list>div{font-size:2rem;padding-left:2rem}@media (max-width: 768px){cookie-list>div{font-size:1.5rem;padding-left:1.5rem}}cookie-list>div cookie-list-item+cookie-list-item{margin-top:1.5rem}@media (max-width: 768px){cookie-list>div cookie-list-item+cookie-list-item{margin-top:1rem}}";const d=class{constructor(i){o(this,i)}render(){return i("div",{role:"listitem"},i("slot",null))}},u=class{constructor(i){o(this,i)}render(){return i("a",{href:this.url},i("h1",null,"cookie.dev"))}};u.style='cookie-logo a{margin:0 auto;width:20rem;height:17.5rem;position:relative;display:grid;place-content:center;justify-content:stretch;text-decoration:none;color:inherit}@media (max-width: 768px){cookie-logo a{width:15rem;height:13.125rem}}cookie-logo a::before{content:"";position:absolute;inset:0;background:black;clip-path:polygon(50% 0, 100% 100%, 0 100%);transition:clip-path 100ms}cookie-logo a::after{content:"";position:absolute;inset:0;background:white;clip-path:polygon(50% 7%, 95% 97%, 5% 97%);transition:clip-path 100ms}cookie-logo a:hover::before,cookie-logo a:focus::before{background:white;clip-path:polygon(50% 100%, 0 0, 100% 0)}cookie-logo a:hover::after,cookie-logo a:focus::after{background:#ffd700;clip-path:polygon(50% 97%, 5% 3%, 95% 3%)}cookie-logo h1{margin-top:0;z-index:1;background:white;width:100%;display:block;line-height:200%;font-size:3rem;text-align:center}@media (max-width: 768px){cookie-logo h1{font-size:2rem}}cookie-logo a:hover h1,cookie-logo a:focus h1{background:black;color:white}';const k=class{constructor(i){o(this,i)}render(){return i("p",null,i("slot",null))}};k.style="cookie-paragraph p{font-size:2rem}@media (max-width: 768px){cookie-paragraph p{font-size:1.5rem}}";const m=class{constructor(i){o(this,i)}render(){return i("section",null,i("div",{class:"content"},i("slot",null)))}};let g;m.style="cookie-section section{--background-color:white;--text-color:black;--link-color:#cc00cc;min-height:100vh;display:grid;align-content:center;padding-inline:2rem;color:var(--text-color);background:var(--background-color)}cookie-section:nth-of-type(even) section{--background-color:black;--text-color:white;--link-color:#ffd700}cookie-section .content{max-width:960px;width:100%;margin:0 auto}";const f=(o,i,e,t,n)=>(e="ios"===(e&&w(e))?"ios":"md",t&&"ios"===e?o=w(t):n&&"md"===e?o=w(n):(o||!i||b(i)||(o=i),v(o)&&(o=w(o))),v(o)&&""!==o.trim()?""!==o.replace(/[a-z]|-|\d/gi,"")?null:o:null),p=o=>v(o)&&(o=o.trim(),b(o))?o:null,b=o=>o.length>0&&/(\/|\.)/.test(o),v=o=>"string"==typeof o,w=o=>o.toLowerCase(),x=o=>{if(1===o.nodeType){if("script"===o.nodeName.toLowerCase())return!1;for(let i=0;i<o.attributes.length;i++){const e=o.attributes[i].value;if(v(e)&&0===e.toLowerCase().indexOf("on"))return!1}for(let i=0;i<o.childNodes.length;i++)if(!x(o.childNodes[i]))return!1}return!0},y=new Map,_=new Map,z=class{constructor(i){o(this,i),this.iconName=null,this.isVisible=!1,this.mode=C(),this.lazy=!1,this.sanitize=!0}connectedCallback(){this.waitUntilVisible(this.el,"50px",(()=>{this.isVisible=!0,this.loadIcon()}))}disconnectedCallback(){this.io&&(this.io.disconnect(),this.io=void 0)}waitUntilVisible(o,i,e){if(this.lazy&&"undefined"!=typeof window&&window.IntersectionObserver){const t=this.io=new window.IntersectionObserver((o=>{o[0].isIntersecting&&(t.disconnect(),this.io=void 0,e())}),{rootMargin:i});t.observe(o)}else e()}loadIcon(){if(this.isVisible){const o=(o=>{let i=p(o.src);if(i)return i;if(i=f(o.name,o.icon,o.mode,o.ios,o.md),i)return t=i,(()=>{if("undefined"==typeof window)return new Map;if(!g){const o=window;o.Ionicons=o.Ionicons||{},g=o.Ionicons.map=o.Ionicons.map||new Map}return g})().get(t)||e(`svg/${t}.svg`);var t;if(o.icon){if(i=p(o.icon),i)return i;if(i=p(o.icon[o.mode]),i)return i}return null})(this);o&&(y.has(o)?this.svgContent=y.get(o):((o,i)=>{let e=_.get(o);if(!e){if("undefined"==typeof fetch||"undefined"==typeof document)return y.set(o,""),Promise.resolve();e=fetch(o).then((e=>{if(e.ok)return e.text().then((e=>{e&&!1!==i&&(e=(o=>{const i=document.createElement("div");i.innerHTML=o;for(let o=i.childNodes.length-1;o>=0;o--)"svg"!==i.childNodes[o].nodeName.toLowerCase()&&i.removeChild(i.childNodes[o]);const e=i.firstElementChild;if(e&&"svg"===e.nodeName.toLowerCase()){const o=e.getAttribute("class")||"";if(e.setAttribute("class",(o+" s-ion-icon").trim()),x(e))return i.innerHTML}return""})(e)),y.set(o,e||"")}));y.set(o,"")})),_.set(o,e)}return e})(o,this.sanitize).then((()=>this.svgContent=y.get(o))))}const o=this.iconName=f(this.name,this.icon,this.mode,this.ios,this.md);this.ariaLabel||"true"===this.ariaHidden||o&&(this.ariaLabel=o.replace(/\-/g," "))}render(){const{iconName:o}=this,e=this.mode||"md",n=this.flipRtl||o&&(o.indexOf("arrow")>-1||o.indexOf("chevron")>-1)&&!1!==this.flipRtl;return i(t,{role:"img",class:Object.assign(Object.assign({[e]:!0},I(this.color)),{[`icon-${this.size}`]:!!this.size,"flip-rtl":!!n&&"rtl"===this.el.ownerDocument.dir})},i("div",this.svgContent?{class:"icon-inner",innerHTML:this.svgContent}:{class:"icon-inner"}))}static get assetsDirs(){return["svg"]}get el(){return n(this)}static get watchers(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}}},C=()=>"undefined"!=typeof document&&document.documentElement.getAttribute("mode")||"md",I=o=>o?{"ion-color":!0,[`ion-color-${o}`]:!0}:null;z.style=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}";export{r as app_root,c as cookie_heading,s as cookie_icon_list,l as cookie_icon_list_item,a as cookie_link,h as cookie_list,d as cookie_list_item,u as cookie_logo,k as cookie_paragraph,m as cookie_section,z as ion_icon}