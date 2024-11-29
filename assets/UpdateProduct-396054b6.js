import{i as S,a as U,r as n,j as e,Q as f}from"./index-5fd673c1.js";import{a as u}from"./axios-1779699b.js";import{L as q}from"./Layout-30cd21a8.js";import z from"./Loader-96d0f6a9.js";import{S as E}from"./Google-862040e4.js";import{n as D}from"./index-cdd1c66d.js";const O=()=>{const{productId:p}=S();U();const[r,i]=n.useState({name:"",price:"",category:"",description:"",sizes:[],fabric:"",washCareInstructions:"",colors:[],imageFiles:[]}),[y,j]=n.useState([]),[x,h]=n.useState(!1),[d,g]=n.useState(""),[N,b]=n.useState("");n.useEffect(()=>{u.get("https://endpoints-ashy.vercel.app/api/products/categories").then(a=>{j(a.data.categories)}).catch(a=>{console.error("Error fetching categories:",a)}),u.get(`https://endpoints-ashy.vercel.app/api/products/getproducts/${p}`).then(a=>{const s=a.data,t=s.sizes,l=s.colors.map(o=>({hex:o.hex,name:o.name,imageUrls:o.imageUrls||[]}));i({name:s.name,price:s.price,category:s.category,description:s.description,sizes:t,fabric:s.fabric,washCareInstructions:s.washCareInstructions,colors:l,imageFiles:[]})}).catch(a=>{console.error("Error fetching product details:",a)})},[p]);const c=a=>{const{name:s,value:t}=a.target;i(l=>({...l,[s]:t}))},C=a=>{const{name:s,files:t}=a.target,l=s.split("-")[1];i(o=>{const P=o.colors.map(m=>m.hex===l?{...m,imageUrls:[...m.imageUrls,...Array.from(t)]}:m);return{...o,colors:P}})},v=a=>{g(a.hex);const s=D(a.hex);b(s.basic[0].name)},k=()=>{d&&!r.colors.some(a=>a.hex===d)&&(i({...r,colors:[...r.colors,{hex:d,name:N,imageUrls:[]}]}),g(""),b(""))},w=a=>{i({...r,colors:r.colors.filter(s=>s.hex!==a)})},I=async a=>{a.preventDefault(),h(!0);const s=new FormData;s.append("name",r.name),s.append("price",r.price),s.append("category",r.category),s.append("description",r.description),s.append("sizes",JSON.stringify(r.sizes)),s.append("fabric",r.fabric),s.append("washCareInstructions",r.washCareInstructions),s.append("colors",JSON.stringify(r.colors));for(let t of r.colors)if(t.imageUrls.length>0)for(let l of t.imageUrls)s.append(`images-${t.hex}`,l);try{const t=await u.put(`https://endpoints-ashy.vercel.app/api/products/updateproduct/${p}`,s,{headers:{"Content-Type":"multipart/form-data"}});f.success(t.data.message)}catch{f.error("Error updating product")}finally{h(!1)}};return e.jsx(q,{children:e.jsx("div",{className:"flex justify-center items-center h-screen",style:{marginBottom:"5rem"},children:e.jsx("div",{className:"w-full max-w-4xl",children:e.jsxs("div",{className:"px-10 py-10 rounded-xl",style:{backgroundColor:"#f5f5dc",maxHeight:"90vh",overflowY:"auto"},children:[x&&e.jsx(z,{}),e.jsx("h1",{className:"text-center text-black text-xl mb-4 font-bold",children:"Update Product"}),e.jsxs("form",{onSubmit:I,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-black",children:"Product Name"}),e.jsx("input",{type:"text",name:"name",value:r.name,onChange:c,className:"bg-gray-300 px-2 py-2 w-full rounded-lg",placeholder:"Product Name",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-black",children:"Price"}),e.jsx("input",{type:"number",name:"price",value:r.price,onChange:c,className:"bg-gray-300 px-2 py-2 w-full rounded-lg",placeholder:"Product Price",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-black",children:"Category"}),e.jsxs("select",{name:"category",value:r.category,onChange:c,className:"bg-gray-300 px-2 py-2 w-full rounded-lg",required:!0,children:[e.jsx("option",{value:"",children:"Select a category"}),y.map(a=>e.jsx("option",{value:a._id,children:a.name},a._id))]})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-black",children:"Description"}),e.jsx("textarea",{name:"description",value:r.description,onChange:c,className:"bg-gray-300 px-2 py-2 w-full rounded-lg",placeholder:"Product Description",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-black",children:"Fabric"}),e.jsx("input",{type:"text",name:"fabric",value:r.fabric,onChange:c,className:"bg-gray-300 px-2 py-2 w-full rounded-lg",placeholder:"Fabric",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-black",children:"Wash Care Instructions"}),e.jsx("textarea",{name:"washCareInstructions",value:r.washCareInstructions,onChange:c,className:"bg-gray-300 px-2 py-2 w-full rounded-lg",placeholder:"Wash Care Instructions",required:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-black",children:"Product Images"}),r.colors.map((a,s)=>e.jsxs("div",{children:[e.jsxs("label",{className:"block text-black",children:[a.name," Images"]}),e.jsx("input",{type:"file",name:`images-${a.hex}`,onChange:C,multiple:!0,className:"bg-gray-300 px-2 py-2 w-full rounded-lg mb-5"})]},s))]}),e.jsx("div",{className:"mb-4",children:e.jsxs("center",{children:[e.jsx("label",{className:"block text-black",children:"Select Colors"}),e.jsx(E,{color:d,onChangeComplete:v}),e.jsx("button",{type:"button",onClick:k,className:"bg-yellow-500 text-black font-bold px-2 py-1 rounded-lg mt-3",children:"Add Color"})]})}),e.jsxs("div",{className:"mb-4 flex justify-center items-center",children:[e.jsx("label",{className:"block text-black",children:"Colors Selected:"}),r.colors.map((a,s)=>e.jsxs("div",{className:"flex items-center mr-4 mb-2",children:[e.jsx("div",{className:"w-6 h-6 rounded-full",style:{backgroundColor:a.hex}}),e.jsx("span",{className:"text-black ml-2",children:a.name}),e.jsx("button",{type:"button",onClick:()=>w(a.hex),className:"bg-red-500 text-white font-bold px-2 py-1 rounded-lg ml-2",children:"Remove"})]},s))]}),e.jsx("button",{type:"submit",className:"bg-yellow-500 text-black font-bold px-2 py-2 rounded-lg w-full",children:x?"Loading...":"Update Product"})]})]})})})})};export{O as default};
