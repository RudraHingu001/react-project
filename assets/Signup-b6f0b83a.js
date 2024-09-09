import{r as t,f as w,j as e,L as v,Q as a}from"./index-90546ebf.js";import{m as k}from"./myContext-878179b9.js";import{c as N,G as C,b as S}from"./index-bea2a320-8c0c8ce8.js";import{a as x,T as P,c as E,f as L,b as A}from"./FirebaseConfig-f1ddf40d.js";import G from"./Loader-cd8b54f7.js";import{L as T,b as I,c as B}from"./Layout-67be547f.js";function J(){const[l,d]=t.useState(""),[r,u]=t.useState(""),[o,g]=t.useState(""),[n,p]=t.useState(!1),m=w(),b=t.useContext(k),{loading:f,setLoading:i}=b,y=async()=>{if(i(!0),l===""||r===""||o==="")return a.error("All fields are required");try{const s=await N(x,r,o);localStorage.setItem("user",JSON.stringify(s.user));const c={name:l,uid:s.user.uid,email:s.user.email,time:P.now()},j=E(L,"users");await A(j,c),a.success("Signup Successfully"),d(""),u(""),g(""),i(!1),m("/")}catch(s){console.error(s),i(!1),a.error("Signup failed. Please try again later.")}},h=async()=>{try{const s=new C,c=await S(x,s);console.log("Google sign-in successful:",c),m("/")}catch(s){console.error("Google sign-in failed:",s),a.error("Google sign-in failed. Please try again later.")}};return e.jsx(T,{children:e.jsxs("div",{className:"flex justify-center items-center",style:{marginTop:"3rem",padding:"10px"},children:[f&&e.jsx(G,{}),e.jsxs("div",{className:"bg-gray-800 px-10 py-16 rounded-xl w-full max-w-md",style:{backgroundColor:"#3C2A21"},children:[e.jsx("div",{className:"",children:e.jsx("h1",{className:"text-center text-white text-xl mb-4 font-bold",children:"Signup"})}),e.jsx("div",{children:e.jsx("input",{type:"text",value:l,onChange:s=>d(s.target.value),name:"name",className:"bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-black placeholder:text-black-200",placeholder:"Name",style:{backgroundColor:"rgb(221, 213, 201)"}})}),e.jsx("div",{children:e.jsx("input",{type:"email",value:r,onChange:s=>u(s.target.value),name:"email",className:"bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-black placeholder:text-black-200",placeholder:"Email",style:{backgroundColor:"rgb(221, 213, 201)"}})}),e.jsx("div",{children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:n?"text":"password",value:o,onChange:s=>g(s.target.value),className:"bg-gray-600 mb-4 px-2 py-2 w-full rounded-lg text-black placeholder:text-black-200",placeholder:"Password",style:{backgroundColor:"rgb(221, 213, 201)"}}),e.jsx("button",{type:"button",onClick:()=>p(!n),className:"absolute inset-y-0 right-0 px-4  text-black rounded-r-lg focus:outline-none flex items-center justify-center",style:{marginBottom:"15px"},children:n?e.jsx(I,{}):e.jsx(B,{})})]})}),e.jsx("div",{className:"flex justify-center mb-3",children:e.jsx("button",{onClick:y,className:"bg-black w-full text-white font-bold px-2 py-2 rounded-lg",style:{backgroundColor:"rgb(221, 213, 201)",color:"#3C2A21"},children:"Signup"})}),e.jsx("div",{children:e.jsx("button",{onClick:h,className:"bg-black w-full text-white font-bold px-2 py-2 rounded-lg",style:{backgroundColor:"rgb(221, 213, 201)",color:"#3C2A21"},children:"Google Signup"})}),e.jsx("div",{children:e.jsxs("h2",{className:"text-white text-sm flex justify-center items-center",style:{marginTop:"2rem"},children:["Already have an account? ",e.jsx(v,{className:"text-black font-bold px-1",style:{transition:"transform 0.3s ease-in-out",display:"inline-block",color:"rgb(221, 213, 201)"},onMouseEnter:s=>{s.target.style.transform="scale(1.15)"},onMouseLeave:s=>{s.target.style.transform="scale(1)"},to:"/login",children:"Login"})]})})]})]})})}export{J as default};
