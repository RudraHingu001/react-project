import{f as h,r as a,j as e,L as u}from"./index-181228b6.js";import f from"./Loader-d96c4c88.js";import{u as p}from"./useDispatch-06c2ac34.js";function N({products:t,showDetails:o}){const l=h(),[i,c]=a.useState(!1);return p(),a.useEffect(()=>{t&&t.length>0&&setTimeout(()=>{c(!0)},200)},[t]),e.jsx("section",{className:"text-gray-600 body-font mb-5",children:e.jsxs("div",{className:"container mx-auto px-4 py-8",style:{paddingBottom:"8rem"},children:[i?e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:t.map((d,n)=>{const{imageUrls:x,_id:s,title:r,price:m}=d,g=(n+1).toString().padStart(2,"0");return e.jsxs("div",{className:"relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer",onClick:()=>l(`/productinfo/${s}`),style:{height:"500px"},children:[e.jsx("img",{src:x[0],alt:r,className:"w-full h-full object-cover",style:{objectFit:"cover"}}),o?e.jsxs("div",{className:"absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-80 text-black flex flex-col",children:[e.jsx("h3",{className:"text-lg font-bold",children:r}),e.jsxs("div",{className:"flex mt-2 flex justify-between",children:[e.jsxs("p",{className:"text-lg font-semibold",style:{color:"#3C2A21"},children:["₹",m]}),e.jsx("button",{onClick:()=>l(`/productinfo/${s}`),className:"ml-4 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-200",style:{backgroundColor:"#3C2A21",height:"40px",width:"120px"},children:"Buy Now"})]})]}):e.jsxs("div",{className:"absolute top-0 left-0 p-4 text-white bg-gray-800 bg-opacity-75 rounded-br-lg",children:[e.jsx("span",{className:"text-lg font-bold",children:g})," "]})]},s)})}):e.jsx(f,{}),!o&&e.jsx("div",{className:"flex justify-end mt-4",children:e.jsx(u,{to:"/shop",children:e.jsx("button",{className:"bg-gray-300 px-5 py-2 rounded-xl text-lg text-white",style:{backgroundColor:"#3C2A21"},children:"See more"})})})]})})}export{N as P};
