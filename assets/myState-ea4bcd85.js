import{r as t,j as y}from"./index-dd4f4c9f.js";import{m}from"./myContext-e65e4f51.js";function g(o){const[a,e]=t.useState(!1),[c,s]=t.useState([]),[n,i]=t.useState(""),[p,u]=t.useState(""),[d,l]=t.useState(""),f=async()=>{e(!0);try{const h=await(await fetch("https://endpoints-ashy.vercel.app/api/products/getproducts")).json();s(h),e(!1)}catch(r){console.error("Error fetching products:",r),e(!1)}};return t.useEffect(()=>{f()},[]),y.jsx(m.Provider,{value:{loading:a,setLoading:e,products:c,setProducts:s,searchkey:n,setSearchkey:i,filterType:p,setFilterType:u,filterPrice:d,setFilterPrice:l},children:o.children})}export{g as default};
