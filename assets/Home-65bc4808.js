import{j as t,r}from"./index-4fd550b3.js";import{L as i}from"./Layout-07797d33.js";import{P as a}from"./ProductCard-b1b27d5a.js";import{m as n}from"./myContext-5750801f.js";import"./index-bea2a320-8c0c8ce8.js";import"./Loader-2a4e4de1.js";import"./useDispatch-e3148e43.js";function l(){return t.jsxs("div",{style:{position:"relative",width:"100%",height:"800px",overflow:"hidden"},children:[t.jsxs("video",{style:{width:"100%",height:"100%",objectFit:"cover"},autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:[t.jsx("source",{src:"src/assets/production_id_3917742 (2160p).mp4",type:"video/mp4"}),"Your browser does not support the video tag."]}),t.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"white"}})]})}function f(){const e=r.useContext(n),{product:s}=e,o=s.slice(0,4);return t.jsxs(i,{children:[t.jsx(l,{}),t.jsxs("div",{className:"container mx-auto px-4 py-8",children:[t.jsxs("h1",{className:"text-2xl text-center mb-8 mt-8 font-bold text-gray-600 leading-relaxed",children:[t.jsx("span",{className:"text-3xl text-gray-600",children:"Hekawy"})," indulges in the allure of rarity and exclusivity as we unveil a collection adorned in limited, unique, and luxurious fabrics, crafting an elite experience that whispers seduction through every thread."]}),t.jsx("div",{className:"flex flex-col",children:t.jsx(a,{products:o,showDetails:!1})})]})]})}export{f as default};
