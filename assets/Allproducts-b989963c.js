import{r,j as e,u as x}from"./index-b1fc68e0.js";import{m as i}from"./myContext-0e3f8325.js";import{P as f}from"./ProductCard-e6d8cb76.js";import{L as h}from"./Layout-bd76f20c.js";import{u as y}from"./useDispatch-1805a0d3.js";import"./Loader-1da2dde2.js";import"./index-bea2a320-8c0c8ce8.js";function j(){const s=r.useContext(i),{searchkey:n,setSearchkey:l,product:o}=s,[a,c]=r.useState(""),d=Array.from(new Set(o.map(t=>t.category.toUpperCase()))),u=t=>{c(t.target.value)},m=()=>{c(""),l("")},g=a?o.filter(t=>t.category.toUpperCase()===a):o;return e.jsxs("div",{children:[e.jsx("div",{className:"container mx-auto px-4 mt-5",children:e.jsxs("div",{className:"p-5 rounded-lg bg-gray-50 border border-gray-200 shadow-md flex items-center justify-between",children:[e.jsx("div",{className:"flex mt-4",children:e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4",children:e.jsxs("select",{value:a,onChange:u,className:"px-4 py-3 w-full rounded-md bg-white border border-gray-300 hover:border-gray-500 focus:border-gray-500 outline-none focus:bg-white focus:ring-2 focus:ring-gray-300 text-sm transition-colors duration-300 ease-in-out",children:[e.jsx("option",{value:"",children:"Select Category"}),d.map((t,p)=>e.jsx("option",{value:t,children:t},p))]})})}),e.jsx("div",{className:"mb-4 ml-4",style:{paddingTop:"25px"},children:e.jsx("button",{onClick:m,className:"px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md transition-colors duration-300 ease-in-out",children:"Reset Filter"})})]})}),e.jsx(f,{products:g,showDetails:!0})]})}function k(){r.useContext(i),y();const s=x(n=>n.cart);return console.log(s),r.useEffect(()=>{},[s]),r.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsx(h,{children:e.jsx(j,{})})}export{k as default};
