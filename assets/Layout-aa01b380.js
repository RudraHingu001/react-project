import{R as m,j as e,L as i,r as v,f as y,u as j}from"./index-775980a7.js";import{i as b}from"./index-bea2a320-8c0c8ce8.js";var g={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},d=m.createContext&&m.createContext(g),o=globalThis&&globalThis.__assign||function(){return o=Object.assign||function(t){for(var r,a=1,l=arguments.length;a<l;a++){r=arguments[a];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)},p=globalThis&&globalThis.__rest||function(t,r){var a={};for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&r.indexOf(l)<0&&(a[l]=t[l]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,l=Object.getOwnPropertySymbols(t);n<l.length;n++)r.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(t,l[n])&&(a[l[n]]=t[l[n]]);return a};function f(t){return t&&t.map(function(r,a){return m.createElement(r.tag,o({key:a},r.attr),f(r.child))})}function s(t){return function(r){return m.createElement(w,o({attr:o({},t.attr)},r),f(t.child))}}function w(t){var r=function(a){var l=t.attr,n=t.size,h=t.title,u=p(t,["attr","size","title"]),c=n||a.size||"1em",x;return a.className&&(x=a.className),t.className&&(x=(x?x+" ":"")+t.className),m.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,l,u,{className:x,style:o(o({color:t.color||a.color},a.style),t.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),h&&m.createElement("title",null,h),t.children)};return d!==void 0?m.createElement(d.Consumer,null,function(a){return r(a)}):r(g)}function B(t){return s({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"}},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"}},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"}}]})(t)}function N(t){return s({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"}},{tag:"polyline",attr:{points:"10 17 15 12 10 7"}},{tag:"line",attr:{x1:"15",y1:"12",x2:"3",y2:"12"}}]})(t)}function k(t){return s({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(t)}function z(t){return s({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"}},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"}},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"}}]})(t)}function I(t){return s({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-208 0H400v-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16z"}}]})(t)}function C(t){return s({tag:"svg",attr:{viewBox:"0 0 1024 1024",fill:"currentColor",fillRule:"evenodd"},child:[{tag:"path",attr:{d:"M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"}}]})(t)}function L({onClose:t,user:r,logout:a}){return e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25",children:e.jsx("div",{className:"fixed inset-y-0 left-0 max-w-xs w-full text-white z-50",children:e.jsx("div",{className:"bg-gray-800 flex flex-col h-full justify-between",children:e.jsxs("div",{className:"p-6",children:[e.jsx("button",{onClick:t,className:"absolute top-0 right-0 mt-4 mr-4 focus:outline-none text-white text-4xl",style:{transition:"font-size 0.3s ease"},children:e.jsx(C,{className:"w-6 h-6"})}),e.jsxs("div",{className:"mt-32",children:[e.jsx(i,{to:"/shop",onClick:t,className:"block mb-8 text-gray-300 menu-item text-3xl transition-all duration-300 hover:text-white hover:text-4xl",children:"Shop"}),e.jsx(i,{to:"/look",onClick:t,className:"block mb-8 text-gray-300 menu-item text-3xl transition-all duration-300 hover:text-white hover:text-4xl",children:"Looks"}),r?e.jsx(i,{to:"/order",onClick:t,className:"block mb-8 text-gray-300 menu-item text-3xl transition-all duration-300 hover:text-white hover:text-4xl",children:"Order"}):e.jsx(i,{to:"/signup",onClick:t,className:"block mb-8 text-gray-300 menu-item text-3xl transition-all duration-300 hover:text-white hover:text-4xl",children:"Signup"}),(r==null?void 0:r.email)==="skillsuup@gmail.com"&&e.jsx(i,{to:"/dashboard",onClick:t,className:"block mb-8 text-gray-300 menu-item text-3xl transition-all duration-300 hover:text-white hover:text-4xl",children:"Admin"}),e.jsx(i,{to:"/about",onClick:t,className:"block mb-8 text-gray-300 menu-item text-3xl transition-all duration-300 hover:text-white hover:text-4xl",children:"About"}),r&&e.jsx("button",{onClick:a,className:"block mb-8 text-gray-300 text-3xl transition-all duration-300 hover:text-white hover:text-4xl",children:"LOGOUT"})]})]})})})})}function O(){const[t,r]=v.useState(!1),a=JSON.parse(localStorage.getItem("user")),l=y(),n=async()=>{try{await b().signOut(),localStorage.clear("user"),l("/login")}catch(c){console.error("Error logging out:",c.message)}},h=j(c=>c.cart),u=()=>{r(!t)};return e.jsxs("div",{className:"bg-white sticky top-0 z-50",children:[e.jsx("header",{className:"relative bg-white",children:e.jsx("nav",{"aria-label":"Top",className:"bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl",children:e.jsxs("div",{className:"flex justify-between h-16 items-center",children:[e.jsxs("div",{className:"ml-4 flex lg:ml-0",children:[a&&e.jsx("button",{onClick:u,className:"text-sm font-medium text-gray-700 mr-4 focus:outline-none",children:e.jsx(k,{className:"w-6 h-6"})}),e.jsx(i,{to:"/",className:"flex",children:e.jsxs("div",{className:"flex",children:[e.jsx("h1",{className:" text-2xl font-bold text-black  px-2 py-1 rounded",children:"HEKAWY"}),!a&&e.jsx(i,{to:"/login",className:"group -m-2 flex items-center p-2",children:e.jsx(N,{className:"w-6 h-6 mr-2"})})]})})]}),e.jsx("div",{className:"mr-4 flex items-center",children:a&&e.jsxs(i,{to:"/cart",className:"group -m-2 flex items-center p-2",children:[e.jsx(z,{className:"w-6 h-6 mr-2"}),e.jsx("span",{className:"text-sm font-medium text-gray-700 group",children:h.reduce((c,x)=>c+x.quantity,0)})]})})]})})}),t&&e.jsx(L,{onClose:u,user:a,logout:n})," "]})}function S(t){return s({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"}}]})(t)}function M(t){return s({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(t)}function H(t){return s({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"}}]})(t)}function T(t){return s({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"}}]})(t)}function W(t){return s({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"}}]})(t)}function _(t){return s({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(t)}function A(){const t=new Date().getFullYear();return e.jsx("footer",{className:"text-gray-600 body-font bg-gray-300 fixed bottom-0 w-full",style:{maxHeight:"60px",overflow:"hidden"},children:e.jsx("div",{className:"container px-5 mx-auto flex flex-col md:flex-row items-center justify-between",children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(i,{to:"/",className:"flex items-center justify-center",children:e.jsx("h1",{className:"text-lg md:text-3xl font-bold text-black px-2 mt-2 md:mt-4",children:"HEKAWY"})}),e.jsxs("a",{href:"https://www.skillsuup.com/",className:"text-gray-600 ml-1 text-xs md:text-sm self-center",children:["© ",t," HEKAWY"]}),e.jsxs("div",{className:"flex md:mt-0",children:[e.jsx("a",{href:"#",className:"text-gray-600 hover:text-gray-800 mx-1 md:mx-2",children:e.jsx(S,{})}),e.jsx("a",{href:"#",className:"text-gray-600 hover:text-gray-800 mx-1 md:mx-2",children:e.jsx(M,{})})]})]})})})}function V({children:t}){return e.jsxs("div",{children:[e.jsx(O,{}),e.jsx("div",{className:"content",children:t}),e.jsx(A,{})]})}export{I as A,_ as F,s as G,V as L,W as a,H as b,T as c,B as d};
