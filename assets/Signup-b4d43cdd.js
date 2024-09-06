import{r as t,f as w,j as e,L as v,Q as a}from"./index-c6fd3470.js";import{m as k}from"./myContext-6737d4c3.js";import{c as N,G as S,b as C}from"./index-bea2a320-8c0c8ce8.js";import{a as g,T as P,c as E,f as L,b as G}from"./FirebaseConfig-83d5a7c0.js";import A from"./Loader-7b75271e.js";import{L as I,b as B,c as D}from"./Layout-8ed61690.js";function J(){const[l,d]=t.useState(""),[r,u]=t.useState(""),[o,x]=t.useState(""),[n,p]=t.useState(!1),m=w(),h=t.useContext(k),{loading:f,setLoading:i}=h,y=async()=>{if(i(!0),l===""||r===""||o==="")return a.error("All fields are required");try{const s=await N(g,r,o);localStorage.setItem("user",JSON.stringify(s.user));const c={name:l,uid:s.user.uid,email:s.user.email,time:P.now()},j=E(L,"users");await G(j,c),a.success("Signup Successfully"),d(""),u(""),x(""),i(!1),m("/")}catch(s){console.error(s),i(!1),a.error("Signup failed. Please try again later.")}},b=async()=>{try{const s=new S,c=await C(g,s);console.log("Google sign-in successful:",c),m("/")}catch(s){console.error("Google sign-in failed:",s),a.error("Google sign-in failed. Please try again later.")}};return e.jsx(I,{children:e.jsxs("div",{className:"flex justify-center items-center h-screen",children:[f&&e.jsx(A,{}),e.jsxs("div",{className:"bg-gray-800 px-10 py-16 rounded-xl w-full max-w-md",style:{backgroundColor:"#3C2A21"},children:[e.jsx("div",{className:"",children:e.jsx("h1",{className:"text-center text-white text-xl mb-4 font-bold",children:"Signup"})}),e.jsx("div",{children:e.jsx("input",{type:"text",value:l,onChange:s=>d(s.target.value),name:"name",className:"bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-black placeholder:text-black-200",placeholder:"Name",style:{backgroundColor:"#e2e0dc"}})}),e.jsx("div",{children:e.jsx("input",{type:"email",value:r,onChange:s=>u(s.target.value),name:"email",className:"bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-black placeholder:text-black-200",placeholder:"Email",style:{backgroundColor:"#e2e0dc"}})}),e.jsx("div",{children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:n?"text":"password",value:o,onChange:s=>x(s.target.value),className:"bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-black placeholder:text-black-200",placeholder:"Password",style:{backgroundColor:"#e2e0dc"}}),e.jsx("button",{type:"button",onClick:()=>p(!n),className:"absolute inset-y-0 right-0 px-4  text-black rounded-r-lg focus:outline-none flex items-center justify-center",style:{marginBottom:"15px"},children:n?e.jsx(B,{}):e.jsx(D,{})})]})}),e.jsx("div",{className:"flex justify-center mb-3",children:e.jsx("button",{onClick:y,className:"bg-black w-full text-white font-bold px-2 py-2 rounded-lg",children:"Signup"})}),e.jsx("div",{children:e.jsx("button",{onClick:b,className:"bg-black w-full text-white font-bold px-2 py-2 rounded-lg",children:"Google Signup"})}),e.jsx("div",{children:e.jsxs("h2",{className:"text-white text-lg",children:["Already have an account? ",e.jsx(v,{className:"text-black font-bold px-1",style:{transition:"transform 0.3s ease-in-out",display:"inline-block"},onMouseEnter:s=>{s.target.style.transform="scale(1.15)"},onMouseLeave:s=>{s.target.style.transform="scale(1)"},to:"/login",children:"Login"})]})})]})]})})}export{J as default};
