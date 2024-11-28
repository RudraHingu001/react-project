import{r as n,j as t,L as U,Q as i}from"./index-dd4f4c9f.js";import{L as D}from"./Layout-0311dea1.js";import{m as P}from"./myContext-e65e4f51.js";import{S as R}from"./Google-268d10b0.js";import z from"./Loader-cdb4d57f.js";function L(){var u;const g=n.useContext(P),{looks:e,setLooks:s}=g,[h,o]=n.useState(!1),[A,m]=n.useState(!1),[p,b]=n.useState([]),[d,x]=n.useState(""),f=getStorage();n.useEffect(()=>{s(a=>({...a,colors:(a==null?void 0:a.colors)||[],sizes:(a==null?void 0:a.sizes)||[]}))},[s]);const y=a=>{b([...a.target.files])},j=async a=>{const l=ref(f,`images/${a.name}`);return await uploadBytes(l,a),await getDownloadURL(l)},N=async()=>{m(!0);try{const a=await Promise.all(p.map(l=>j(l)));s(l=>({...l,imageUrls:a}))}catch{i.error("Error uploading images")}finally{m(!1)}},w=()=>{var a;d&&!((a=e==null?void 0:e.colors)!=null&&a.includes(d))&&(s(l=>({...l,colors:[...l.colors,d]})),x(""))},C=async()=>{var a;if(!(e!=null&&e._id)||!(e!=null&&e.price)||!((a=e==null?void 0:e.imageUrls)!=null&&a.length)||!(e!=null&&e.category)||!(e!=null&&e.description)||!(e!=null&&e.fabric)||!(e!=null&&e.washCareInstructions))return i.error("All fields are required");o(!0);try{const l=collection(fireDB,"products");await addDoc(l,e);const c=collection(fireDB,"looks");await addDoc(c,e),i.success("Look added successfully"),s({_id:"",price:"",imageUrls:[],category:"",description:"",fabric:"",washCareInstructions:"",colors:[],sizes:[]})}catch(l){console.error("Error adding look:",l),i.error("Error adding look")}finally{o(!1)}},r=a=>{const{name:l,value:c}=a.target;s(I=>({...I,[l]:c}))},v=a=>{e!=null&&e.sizes&&s(l=>({...l,sizes:l.sizes.includes(a)?l.sizes.filter(c=>c!==a):[...l.sizes,a]}))},S=async a=>{a.preventDefault(),await N(),C()};return t.jsxs(D,{children:[t.jsx("div",{className:"flex justify-center items-center min-h-screen bg-gray-100",children:t.jsx("div",{className:"w-full max-w-3xl",children:t.jsxs("div",{className:"bg-white shadow-lg rounded-lg px-10 py-10",children:[t.jsx("div",{className:"mb-8",children:t.jsx("h1",{className:"text-center text-black text-2xl mb-4 font-bold",children:"Add Look"})}),t.jsxs("form",{onSubmit:S,children:[t.jsx("div",{className:"mb-4",children:t.jsx("input",{type:"text",name:"_id",value:(e==null?void 0:e._id)||"",onChange:r,className:"bg-gray-200 mb-4 px-4 py-2 w-full rounded-lg text-black placeholder:text-gray-700 outline-none",placeholder:"Product Title"})}),t.jsx("div",{className:"mb-4",children:t.jsx("input",{type:"text",name:"price",value:(e==null?void 0:e.price)||"",onChange:r,className:"bg-gray-200 mb-4 px-4 py-2 w-full rounded-lg text-black placeholder:text-gray-700 outline-none",placeholder:"Product Price"})}),t.jsxs("div",{className:"mb-4",children:[t.jsx("label",{className:"text-black mb-2 block",children:"Choose multiple images"}),t.jsx("input",{type:"file",multiple:!0,onChange:y,className:"bg-gray-200 px-4 py-2 w-full rounded-lg text-black placeholder:text-gray-700 outline-none"})]}),t.jsx("div",{className:"mb-4",children:t.jsx("input",{type:"text",name:"category",value:(e==null?void 0:e.category)||"",onChange:r,className:"bg-gray-200 mb-4 px-4 py-2 w-full rounded-lg text-black placeholder:text-gray-700 outline-none",placeholder:"Product Category"})}),t.jsx("div",{className:"mb-4",children:t.jsx("textarea",{cols:"30",rows:"5",name:"description",value:(e==null?void 0:e.description)||"",onChange:r,className:"bg-gray-200 mb-4 px-4 py-2 w-full rounded-lg text-black placeholder:text-gray-700 outline-none",placeholder:"Product Description"})}),t.jsx("div",{className:"mb-4",children:t.jsx("input",{type:"text",name:"fabric",value:(e==null?void 0:e.fabric)||"",onChange:r,className:"bg-gray-200 mb-4 px-4 py-2 w-full rounded-lg text-black placeholder:text-gray-700 outline-none",placeholder:"Fabric"})}),t.jsx("div",{className:"mb-4",children:t.jsx("textarea",{cols:"30",rows:"3",name:"washCareInstructions",value:(e==null?void 0:e.washCareInstructions)||"",onChange:r,className:"bg-gray-200 mb-4 px-4 py-2 w-full rounded-lg text-black placeholder:text-gray-700 outline-none",placeholder:"Wash Care Instructions"})}),t.jsxs("div",{className:"mb-4",children:[t.jsxs("div",{className:"flex items-center",children:[t.jsx(R,{color:d,onChangeComplete:a=>x(a.hex)}),t.jsx("button",{type:"button",onClick:w,className:"bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg ml-4",children:"Add Color"})]}),t.jsx("div",{className:"flex flex-wrap mt-4",children:(u=e==null?void 0:e.colors)==null?void 0:u.map((a,l)=>t.jsxs("div",{className:"flex items-center mr-4 mb-2",children:[t.jsx("div",{className:"w-6 h-6 rounded-full",style:{backgroundColor:a}}),t.jsx("span",{className:"text-black ml-2",children:a})]},l))})]}),t.jsxs("div",{className:"flex flex-col mb-4",children:[t.jsx("label",{className:"text-black mb-2",children:"Add Size"}),t.jsx("div",{className:"flex flex-wrap items-center px-4",children:["s","m","l","xl"].map(a=>{var l;return t.jsxs("label",{className:"flex items-center text-black mr-2 mb-2",children:[t.jsx("input",{type:"checkbox",checked:(l=e==null?void 0:e.sizes)==null?void 0:l.includes(a),onChange:()=>v(a),className:"mr-2"}),a.toUpperCase()]},a)})})]}),t.jsxs("div",{className:"flex justify-center mb-8",children:[t.jsx("button",{type:"submit",className:"bg-yellow-500 text-black font-bold px-6 py-2 rounded-lg mr-4",children:"Add Look"}),t.jsx(U,{to:"/dashboard",className:"bg-yellow-500 text-black font-bold px-6 py-2 rounded-lg",children:"Back"})]})]})]})})}),h&&t.jsx(z,{})]})}export{L as default};
