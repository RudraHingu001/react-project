import{r as n,j as t,L as z,Q as d}from"./index-a9367179.js";import{L as A}from"./Layout-3ea1fd0a.js";import{m as E}from"./myContext-6d38728e.js";import{g as D,r as _,u as B,a as q}from"./index.esm2017-dfb43fad.js";import{c as g,f as p,a as h}from"./FirebaseConfig-aa7fb936.js";import{S as F}from"./Google-0c1262e7.js";import L from"./Loader-d4399127.js";import"./index-bea2a320-8c0c8ce8.js";function O(){var u;const b=n.useContext(E),{looks:e,setLooks:s}=b,[f,o]=n.useState(!1),[Q,m]=n.useState(!1),[y,j]=n.useState([]),[i,x]=n.useState(""),N=D();n.useEffect(()=>{s(a=>({...a,colors:(a==null?void 0:a.colors)||[],sizes:(a==null?void 0:a.sizes)||[]}))},[s]);const w=a=>{j([...a.target.files])},C=async a=>{const l=_(N,`images/${a.name}`);return await B(l,a),await q(l)},v=async()=>{m(!0);try{const a=await Promise.all(y.map(l=>C(l)));s(l=>({...l,imageUrls:a}))}catch{d.error("Error uploading images")}finally{m(!1)}},S=()=>{var a;i&&!((a=e==null?void 0:e.colors)!=null&&a.includes(i))&&(s(l=>({...l,colors:[...l.colors,i]})),x(""))},I=async()=>{var a;if(!(e!=null&&e._id)||!(e!=null&&e.price)||!((a=e==null?void 0:e.imageUrls)!=null&&a.length)||!(e!=null&&e.category)||!(e!=null&&e.description)||!(e!=null&&e.fabric)||!(e!=null&&e.washCareInstructions))return d.error("All fields are required");o(!0);try{const l=g(p,"products");await h(l,e);const c=g(p,"looks");await h(c,e),d.success("Look added successfully"),s({_id:"",price:"",imageUrls:[],category:"",description:"",fabric:"",washCareInstructions:"",colors:[],sizes:[]})}catch(l){console.error("Error adding look:",l),d.error("Error adding look")}finally{o(!1)}},r=a=>{const{name:l,value:c}=a.target;s(R=>({...R,[l]:c}))},U=a=>{e!=null&&e.sizes&&s(l=>({...l,sizes:l.sizes.includes(a)?l.sizes.filter(c=>c!==a):[...l.sizes,a]}))},P=async a=>{a.preventDefault(),await v(),I()};return t.jsxs(A,{children:[t.jsx("div",{className:"flex justify-center items-center min-h-screen bg-gray-100",children:t.jsx("div",{className:"w-full max-w-3xl",children:t.jsxs("div",{className:"bg-white shadow-lg rounded-lg px-10 py-10",children:[t.jsx("div",{className:"mb-8",children:t.jsx("h1",{className:"text-center text-black text-2xl mb-4 font-bold",children:"Add Look"})}),t.jsxs("form",{onSubmit:P,children:[t.jsx("div",{className:"mb-4",children:t.jsx("input",{type:"text",name:"_id",value:(e==null?void 0:e._id)||"",onChange:r,className:"bg-gray-200 mb-4 px-4 py-2 w-full rounded-lg text-black placeholder:text-gray-700 outline-none",placeholder:"Product Title"})}),t.jsx("div",{className:"mb-4",children:t.jsx("input",{type:"text",name:"price",value:(e==null?void 0:e.price)||"",onChange:r,className:"bg-gray-200 mb-4 px-4 py-2 w-full rounded-lg text-black placeholder:text-gray-700 outline-none",placeholder:"Product Price"})}),t.jsxs("div",{className:"mb-4",children:[t.jsx("label",{className:"text-black mb-2 block",children:"Choose multiple images"}),t.jsx("input",{type:"file",multiple:!0,onChange:w,className:"bg-gray-200 px-4 py-2 w-full rounded-lg text-black placeholder:text-gray-700 outline-none"})]}),t.jsx("div",{className:"mb-4",children:t.jsx("input",{type:"text",name:"category",value:(e==null?void 0:e.category)||"",onChange:r,className:"bg-gray-200 mb-4 px-4 py-2 w-full rounded-lg text-black placeholder:text-gray-700 outline-none",placeholder:"Product Category"})}),t.jsx("div",{className:"mb-4",children:t.jsx("textarea",{cols:"30",rows:"5",name:"description",value:(e==null?void 0:e.description)||"",onChange:r,className:"bg-gray-200 mb-4 px-4 py-2 w-full rounded-lg text-black placeholder:text-gray-700 outline-none",placeholder:"Product Description"})}),t.jsx("div",{className:"mb-4",children:t.jsx("input",{type:"text",name:"fabric",value:(e==null?void 0:e.fabric)||"",onChange:r,className:"bg-gray-200 mb-4 px-4 py-2 w-full rounded-lg text-black placeholder:text-gray-700 outline-none",placeholder:"Fabric"})}),t.jsx("div",{className:"mb-4",children:t.jsx("textarea",{cols:"30",rows:"3",name:"washCareInstructions",value:(e==null?void 0:e.washCareInstructions)||"",onChange:r,className:"bg-gray-200 mb-4 px-4 py-2 w-full rounded-lg text-black placeholder:text-gray-700 outline-none",placeholder:"Wash Care Instructions"})}),t.jsxs("div",{className:"mb-4",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx(F,{color:i,onChangeComplete:a=>x(a.hex)}),t.jsx("button",{type:"button",onClick:S,className:"bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg ml-4",children:"Add Color"})]}),t.jsx("div",{className:"flex flex-wrap mt-4",children:(u=e==null?void 0:e.colors)==null?void 0:u.map((a,l)=>t.jsxs("div",{className:"flex items-center mr-4 mb-2",children:[t.jsx("div",{className:"w-6 h-6 rounded-full",style:{backgroundColor:a}}),t.jsx("span",{className:"text-black ml-2",children:a})]},l))})]}),t.jsxs("div",{className:"flex flex-col mb-4",children:[t.jsx("label",{className:"text-black mb-2",children:"Add Size"}),t.jsx("div",{className:"flex flex-wrap items-center px-4",children:["s","m","l","xl"].map(a=>{var l;return t.jsxs("label",{className:"flex items-center text-black mr-2 mb-2",children:[t.jsx("input",{type:"checkbox",checked:(l=e==null?void 0:e.sizes)==null?void 0:l.includes(a),onChange:()=>U(a),className:"mr-2"}),a.toUpperCase()]},a)})})]}),t.jsxs("div",{className:"flex justify-center mb-8",children:[t.jsx("button",{type:"submit",className:"bg-yellow-500 text-black font-bold px-6 py-2 rounded-lg mr-4",children:"Add Look"}),t.jsx(z,{to:"/dashboard",className:"bg-yellow-500 text-black font-bold px-6 py-2 rounded-lg",children:"Back"})]})]})]})})}),f&&t.jsx(L,{})]})}export{O as default};