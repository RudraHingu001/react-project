import{f as g,r as a,j as e,L as p}from"./index-683c6a26.js";import f from"./Loader-944806c8.js";import{u as h}from"./useDispatch-40d038c2.js";function N({products:s,showDetails:t}){const o=g(),[c,i]=a.useState(!1);return h(),a.useEffect(()=>{s&&s.length>0&&setTimeout(()=>{i(!0)},200)},[s]),e.jsx("section",{className:"text-gray-600 body-font mb-5",children:e.jsxs("div",{className:"container px-5 py-8 md:py-16 mx-auto",children:[c?e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[" ",s.map((n,r)=>{const{imageUrls:d,_id:l,title:x,price:m}=n,u=(r+1).toString().padStart(2,"0");return e.jsxs("div",{className:"p-4 drop-shadow-lg",style:{marginBottom:"20px"},children:[" ",e.jsxs("div",{className:"flex flex-col h-full",children:[e.jsxs("div",{onClick:()=>o(`/productinfo/${l}`),className:"flex justify-center cursor-pointer h-96",children:[" ",e.jsx("img",{className:"object-cover rounded-lg w-full h-full hover:scale-110 transition-scale-180 duration-300 ease-in-out",src:d[0],alt:"product"})," "]}),e.jsx("div",{className:"text-center mt-2 text-gray-600",children:e.jsx("p",{className:"text-lg font-bold",style:{color:"#3C2A21"},children:u})}),t&&e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"text-lg font-bold",children:x}),e.jsxs("div",{className:"flex",children:[e.jsxs("p",{className:"text-lg font-semibold text-gray-700 py-4 px-4",style:{color:"#3C2A21"},children:["₹",m]}),e.jsx("button",{onClick:()=>o(`/productinfo/${l}`),className:"bg-black text-white py-2 px-4 rounded-lg mt-2 hover:bg-gray-600 focus:bg-gray-600 focus:ring focus:ring-black focus:ring-opacity-0 focus:outline-none transition-colors duration-200",style:{cursor:"pointer",backgroundColor:"#3C2A21"},children:"Buy Now"})]})]})]})]},r)})]}):e.jsx(f,{}),!t&&e.jsx(p,{to:"/shop",children:e.jsx("button",{className:"bg-gray-300 px-5 py-2 rounded-xl text-lg text-white mt-4",style:{position:"relative",bottom:"30px",left:"0",backgroundColor:"#3C2A21"},children:"See more"})})]})})}export{N as P};