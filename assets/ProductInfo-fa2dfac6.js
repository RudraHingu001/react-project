import{j as e,r as l,h as z,f as P,Q as o,i as I}from"./index-181228b6.js";import{L as D,e as L}from"./Layout-a8eda856.js";import{m as Q}from"./myContext-8651e981.js";import{q as M,c as q,f as B,w as E,g as U}from"./FirebaseConfig-f1ddf40d.js";import F from"./Loader-d96c4c88.js";import{u as T}from"./useDispatch-06c2ac34.js";import"./index-bea2a320-8c0c8ce8.js";const $=({showModal:d,setShowModal:n})=>d?e.jsx("div",{className:"fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-black bg-opacity-75",children:e.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-lg w-80 relative",children:[e.jsx("button",{className:"absolute top-2 right-2 text-black text-lg transition duration-300 hover:text-gray-400 transform hover:scale-110",onClick:()=>n(!1),children:"Close"}),e.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Size Chart"}),e.jsxs("table",{className:"table-auto w-full text-left text-sm",style:{fontSize:"12px"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-2 py-1",children:"Size"}),e.jsx("th",{className:"px-2 py-1",children:"S"}),e.jsx("th",{className:"px-2 py-1",children:"M"}),e.jsx("th",{className:"px-2 py-1",children:"L"}),e.jsx("th",{className:"px-2 py-1",children:"XL"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"border px-2 py-1",children:"Bust"}),e.jsx("td",{className:"border px-2 py-1",children:"34-36"}),e.jsx("td",{className:"border px-2 py-1",children:"36.5-38"}),e.jsx("td",{className:"border px-2 py-1",children:"38.5-40"}),e.jsx("td",{className:"border px-2 py-1",children:"40.5-45"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border px-2 py-1",children:"Waist"}),e.jsx("td",{className:"border px-2 py-1",children:"26-28"}),e.jsx("td",{className:"border px-2 py-1",children:"28.5-30"}),e.jsx("td",{className:"border px-2 py-1",children:"30.5-32"}),e.jsx("td",{className:"border px-2 py-1",children:"32.5-37"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"border px-2 py-1",children:"Hip"}),e.jsx("td",{className:"border px-2 py-1",children:"36-38"}),e.jsx("td",{className:"border px-2 py-1",children:"38.5-40"}),e.jsx("td",{className:"border px-2 py-1",children:"40.5-42"}),e.jsx("td",{className:"border px-2 py-1",children:"42.5-47"})]})]})]})]})}):null;function K(){const d=l.useContext(Q),{loading:n,setLoading:c}=d,[t,y]=l.useState(null),[b,m]=l.useState(""),[i,g]=l.useState(""),[x,N]=l.useState(""),[p,C]=l.useState(1),[v,h]=l.useState(!1),u=z();l.useEffect(()=>{(async()=>{c(!0);try{const a=M(q(B,"products"),E("_id","==",u.id)),r=await U(a);r.empty?o.error("Product not found."):r.forEach(f=>{y(f.data()),m(f.data().imageUrls[0])}),c(!1)}catch{o.error("Failed to fetch product details."),c(!1)}})()},[u.id,c]);const w=T(),A=P(),S=()=>{if(!i){o.error("Please select a size.");return}if(!x){o.error("Please select a color.");return}w(I({...t,selectedSize:i,selectedColor:x,quantity:p})),A("/cart")},k=s=>{m(s)},j=s=>{C(a=>{const r=a+s;return r<1?1:r})};return e.jsx(D,{children:e.jsx("section",{className:"text-gray-600 body-font overflow-hidden",style:{marginBottom:"5rem"},children:e.jsxs("div",{className:"container px-6 py-12 mx-auto",children:[n?e.jsx(F,{}):t&&e.jsxs("div",{className:"flex flex-wrap lg:flex-nowrap",children:[e.jsx("div",{className:"lg:w-1/2 w-full lg:pr-10 lg:pb-0 pb-6",children:e.jsxs("div",{className:"relative flex flex-col items-center",children:[e.jsx("img",{alt:"ecommerce",className:"w-full h-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300",src:b,style:{maxHeight:"500px"}}),e.jsx("div",{className:"flex mt-4 space-x-2 overflow-x-auto",children:t.imageUrls&&t.imageUrls.map((s,a)=>e.jsx("img",{src:s,alt:`product-${a}`,className:"w-24 h-24 object-cover rounded-lg cursor-pointer",onClick:()=>k(s)},a))})]})}),e.jsxs("div",{className:"lg:w-1/2 w-full lg:pl-10 lg:py-6",children:[e.jsx("h2",{className:"text-sm title-font text-gray-500 tracking-widest mb-2 uppercase",style:{color:"#3C2A21"},children:"Brand Name"}),e.jsx("h1",{className:"text-3xl font-semibold mb-4 text-gray-900",style:{color:"#3C2A21"},children:t._id}),e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsxs("span",{className:"text-2xl font-semibold text-gray-900 mr-4",style:{color:"#3C2A21"},children:["₹",t.price]}),e.jsx("button",{onClick:S,className:"bg-[#3C2A21] text-white py-2 px-4 rounded-lg hover:bg-[#3C2A21] focus:bg-gray-700 transition-colors duration-200",children:"Add To Cart"})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("p",{className:"text-sm font-bold text-gray-700 mb-2",style:{color:"#3C2A21"},children:"Available Sizes:"}),e.jsxs("div",{className:"flex flex-wrap space-x-2 mb-4",children:[e.jsxs("button",{onClick:()=>h(!0),className:"text-[#3C2A21] cursor-pointer text-sm border border-gray-400 px-3 py-1 rounded-md flex items-center",children:[e.jsx(L,{className:"mr-1"}),"Size Chart"]}),t.sizes&&t.sizes.map((s,a)=>e.jsx("button",{onClick:()=>g(s),className:`px-4 py-2 rounded-lg ${i===s?"bg-[#3C2A21] text-[#fff]":"bg-gray-200 text-[#3C2A21]"}`,children:s.toUpperCase()},a))]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("p",{className:"text-sm text-gray-700 mb-2 font-bold",style:{color:"#3C2A21"},children:"Available Colors:"}),e.jsx("div",{className:"flex flex-wrap space-x-2",children:t.colors&&t.colors.map((s,a)=>e.jsx("button",{onClick:()=>N(s.hex),className:`w-8 h-8 rounded-full border-2 ${x===s.hex?"ring-2 ring-[#3C2A21]":""}`,style:{backgroundColor:s.hex},title:s.name},a))})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("p",{className:"text-sm font-bold text-gray-700 mb-2",style:{color:"#3C2A21"},children:"Quantity:"}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{onClick:()=>j(-1),className:"bg-gray-200 text-[#3C2A21] px-4 py-2 rounded-lg",children:"-"}),e.jsx("span",{className:"text-lg font-semibold",children:p}),e.jsx("button",{onClick:()=>j(1),className:"bg-gray-200 text-[#3C2A21] px-4 py-2 rounded-lg",children:"+"})]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsxs("div",{className:"w-full mb-4",children:[e.jsx("p",{className:"text-sm font-bold text-gray-700",style:{color:"#3C2A21"},children:"Description:"}),e.jsx("p",{className:"text-sm text-gray-800 mt-2",children:t.description})]}),e.jsxs("div",{className:"w-full mb-4",children:[e.jsx("p",{className:"text-sm font-bold text-gray-700",style:{color:"#3C2A21"},children:"Fabric:"}),e.jsx("p",{className:"text-sm text-gray-800 mt-2",children:t.fabric})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("p",{className:"text-sm font-bold text-gray-700",style:{color:"#3C2A21"},children:"Wash Care Instructions:"}),e.jsx("p",{className:"text-sm text-gray-800 mt-2",children:t.washCareInstructions})]})]})]})]}),e.jsx($,{showModal:v,setShowModal:h})," "]})})})}export{K as default};
