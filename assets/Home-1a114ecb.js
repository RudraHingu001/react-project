import{j as e,r}from"./index-91e4566e.js";import{L as i}from"./Layout-87ba07b9.js";import{P as n}from"./ProductCard-8108c750.js";import{m as a}from"./myContext-58528e02.js";import"./index-bea2a320-8c0c8ce8.js";import"./Loader-d3f9bc3d.js";import"./useDispatch-d2b2e5cb.js";function l(){return e.jsxs("div",{style:{position:"relative",width:"100%",height:"600px",overflow:"hidden"},children:[e.jsxs("video",{style:{width:"100%",height:"100%",objectFit:"cover"},autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:[e.jsx("source",{src:"./banner_vedio.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]}),e.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center",color:"#fff",fontSize:"2rem",fontWeight:"bold",padding:"10px"},children:e.jsx("p",{style:{margin:0}})})]})}function f(){const t=r.useContext(a),{product:o}=t,s=o.slice(0,8);return e.jsxs(i,{children:[e.jsx(l,{}),e.jsxs("div",{className:"container mx-auto px-4 py-8",children:[e.jsx("h1",{className:"text-2xl text-center mb-8 mt-8 font-bold text-gray-600 leading-relaxed",style:{color:"#3C2A21"},children:"Hekawy is devoted to curating more than just exquisite pieces. Through our designs, we guide personalized styling that elevates elegance and whispers seduction through every thread."}),e.jsx("div",{className:"flex flex-col",children:e.jsx(n,{products:s,showDetails:!1})})]})]})}export{f as default};
