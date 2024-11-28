import{r as c,j as e,L as m,Q as r}from"./index-e9894fe2.js";import{L as x}from"./Layout-c30396e7.js";import{a as u}from"./axios-1779699b.js";import p from"./Loader-25a1f6f5.js";const b=()=>{const[a,l]=c.useState(""),[t,o]=c.useState(!1),d=s=>{l(s.target.value)},i=async s=>{if(s.preventDefault(),!a)return r.error("Category name is required");o(!0);try{const n=await u.post("https://endpoints-ashy.vercel.app/api/products/addcategory",{name:a});r.success(n.data.message),l("")}catch{r.error("Error adding category")}finally{o(!1)}};return e.jsx(x,{children:e.jsx("div",{className:"flex justify-center items-center h-screen",children:e.jsx("div",{className:"w-full max-w-4xl",children:e.jsxs("div",{className:"px-10 py-10 rounded-xl",style:{backgroundColor:"#f5f5dc",maxHeight:"90vh",overflowY:"auto"},children:[t&&e.jsx(p,{})," ",!t&&e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"text-center text-black text-xl mb-4 font-bold",children:"Add Category"}),e.jsxs("form",{onSubmit:i,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-black",children:"Category Name"}),e.jsx("input",{type:"text",value:a,onChange:d,className:"bg-gray-300 px-2 py-2 w-full rounded-lg",placeholder:"Enter category name",required:!0})]}),e.jsx("div",{className:"flex justify-center mb-3",children:e.jsx("button",{type:"submit",className:"bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg w-full",children:t?"Loading...":"Add Category"})})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx(m,{to:"/dashboard",className:"bg-yellow-500 text-black font-bold px-4 py-2 mx-2 rounded-lg",children:"Back"})})]})]})})})})};export{b as default};
