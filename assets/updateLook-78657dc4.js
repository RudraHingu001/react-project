import{r as s,j as t}from"./index-181228b6.js";import{m as p}from"./myContext-8651e981.js";import{L as i}from"./Layout-a8eda856.js";import"./index-bea2a320-8c0c8ce8.js";function h(){const m=s.useContext(p),{look:a,updateLook:l}=m,[o,r]=s.useState({product1:"",product2:"",product3:"",product4:"",image1:"",image2:"",image3:"",image4:""});s.useEffect(()=>{a&&a.length>0&&r({product1:a[0].product1||"",product2:a[0].product2||"",product3:a[0].product3||"",product4:a[0].product4||"",image1:a[0].image1||"",image2:a[0].image2||"",image3:a[0].image3||"",image4:a[0].image4||""})},[a]);const c=e=>{r({...o,[e.target.name]:e.target.value})},d=e=>{e.preventDefault(),l(o),console.log(o)};return t.jsx(i,{children:t.jsxs("div",{className:"container mx-auto px-4 py-8",children:[t.jsx("div",{className:"flex items-center justify-between border-b pb-4 mb-4",children:t.jsx("h1",{className:"text-2xl font-bold",children:"Update Look"})}),t.jsxs("form",{onSubmit:d,className:"border p-4 overflow-auto space-y-4",style:{maxHeight:"450px"},children:[[1,2,3,4].map(e=>t.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[t.jsxs("div",{className:"flex flex-col space-y-2",children:[t.jsxs("label",{htmlFor:`product${e}`,className:"font-semibold",children:["Update Product ",e]}),t.jsx("input",{type:"text",id:`product${e}`,name:`product${e}`,value:o[`product${e}`],onChange:c,className:"border py-2 px-3 rounded-md w-3/4"})]}),t.jsxs("div",{className:"flex flex-col space-y-2",children:[t.jsxs("label",{htmlFor:`image${e}`,className:"font-semibold",children:["Update Product ",e," Image "]}),t.jsx("textarea",{id:`image${e}`,name:`image${e}`,value:o[`image${e}`],onChange:c,className:"resize-none h-24 border py-2 px-3 rounded-md w-3/4"})]})]},e)),t.jsx("button",{type:"submit",className:"bg-black text-white px-2 py-2 rounded-md hover:bg-blue-600",children:"Update"})]})]})})}export{h as default};
