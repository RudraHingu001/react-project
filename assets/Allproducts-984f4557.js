import{r,j as e,u as j}from"./index-dd4f4c9f.js";import{m as u}from"./myContext-e65e4f51.js";import{P as b}from"./ProductCard-ca209a53.js";import{a as l}from"./axios-1779699b.js";import{L as v}from"./Layout-0311dea1.js";import{u as w}from"./useDispatch-3ae6f904.js";import"./Loader-cdb4d57f.js";function E(){const o=r.useContext(u),{searchkey:a,setSearchkey:p,products:m,setProducts:n,filterType:N,setFilterType:g,filterPrice:P,setFilterPrice:f}=o,[c,i]=r.useState(""),[d,h]=r.useState([]);r.useEffect(()=>{(async()=>{try{const s=await l.get("https://endpoints-ashy.vercel.app/api/products/categories");h(s.data.categories)}catch(s){console.error("Error fetching categories:",s)}})()},[]),r.useEffect(()=>{(async()=>{try{const s=c?`https://endpoints-ashy.vercel.app/api/products/getproducts/category/${c}`:"https://endpoints-ashy.vercel.app/api/products/getproducts",D=await l.get(s);n(D.data)}catch(s){console.error("Error fetching products:",s)}})()},[c,n]);const x=Array.from(new Set(d.map(t=>t._id)));console.log(x);const y=t=>{i(t.target.value)},C=()=>{i(""),p(""),g(""),f("")};return e.jsxs("div",{children:[e.jsx("div",{className:"container mx-auto px-4 mt-5",children:e.jsxs("div",{className:"p-5 rounded-lg bg-gray-50 shadow-md flex items-center justify-between",style:{backgroundColor:"#DDD5C9"},children:[e.jsx("div",{className:"flex mt-4",children:e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4",children:e.jsxs("select",{value:c,onChange:y,className:"px-4 py-3 w-full rounded-md bg-[#3C2A21] text-[#DDD5C9] border border-[#3C2A21] hover:border-[#DDD5C9] focus:border-[#DDD5C9] outline-none focus:bg-[#3C2A21] focus:ring-2 focus:ring-[#DDD5C9] text-sm transition-colors duration-300 ease-in-out",children:[e.jsx("option",{value:"",children:"Category"}),d.map((t,s)=>e.jsx("option",{value:t._id,children:t.name},t._id))]})})}),e.jsx("div",{className:"mb-4 ml-4",style:{paddingTop:"25px"},children:e.jsx("button",{onClick:C,className:"px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md transition-colors duration-300 ease-in-out",style:{backgroundColor:"rgb(60, 42, 33)",color:"#fff"},children:"Reset"})})]})}),e.jsx(b,{products:m,showDetails:!0})]})}function L(){r.useContext(u),w();const o=j(a=>a.cart);return console.log(o),r.useEffect(()=>{},[o]),r.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsx(v,{children:e.jsx(E,{})})}export{L as default};
