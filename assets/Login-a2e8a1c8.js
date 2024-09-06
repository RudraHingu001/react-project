import{r as a,f as p,j as e,L as y,Q as l}from"./index-683c6a26.js";import"./myContext-5cd9f400.js";import{a as c}from"./FirebaseConfig-83d5a7c0.js";import{L as b,b as f,c as w}from"./Layout-f9877070.js";import{s as j,a as v}from"./index-bea2a320-8c0c8ce8.js";function L(){const[t,o]=a.useState(""),[n,d]=a.useState(""),[r,x]=a.useState(!1),[u,m]=a.useState(!1),g=p(),i=async()=>{try{const s=await j(c,t,n);localStorage.setItem("user",JSON.stringify(s.user)),g("/")}catch(s){console.error(s),l.error("Login failed. Please check your email and password.")}},h=async()=>{try{await v(c,t),l.success("Password reset email sent. Check your inbox.")}catch(s){console.error(s),l.error("Failed to send password reset email.")}};return e.jsx(b,{children:e.jsx("div",{className:"flex justify-center items-center h-screen",children:e.jsxs("div",{className:"bg-gray-800 px-10 py-16 rounded-xl w-full max-w-md",style:{backgroundColor:"#3C2A21"},children:[e.jsx("div",{children:e.jsx("h1",{className:"text-center text-white text-xl mb-6 font-bold",children:"Login"})}),u?e.jsxs("div",{children:[e.jsx("input",{type:"email",value:t,onChange:s=>o(s.target.value),name:"email",className:"bg-gray-600 mb-6 px-4 py-3 w-full rounded-lg text-black placeholder-text-gray-200 outline-none",placeholder:"Email",style:{backgroundColor:"#e2e0dc"}}),e.jsx("div",{className:"flex justify-center mb-6",children:e.jsx("button",{onClick:h,className:"bg-black w-full text-white font-bold px-4 py-3 rounded-lg",children:"Reset Password"})})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("input",{type:"email",value:t,onChange:s=>o(s.target.value),name:"email",className:"bg-gray-600 mb-6 px-4 py-3 w-full rounded-lg text-black placeholder-text-gray-200 outline-none",placeholder:"Email",style:{backgroundColor:"#e2e0dc"}})}),e.jsx("div",{children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:r?"text":"password",value:n,onChange:s=>d(s.target.value),onKeyDown:s=>{s.key==="Enter"&&i()},className:"bg-gray-600 mb-6 px-4 py-3 w-full rounded-lg text-black placeholder-text-gray-200 outline-none pr-10",placeholder:"Password",style:{backgroundColor:"#e2e0dc"}}),e.jsx("button",{type:"button",onClick:()=>x(!r),className:"absolute inset-y-0 right-0 px-4 text-black rounded-r-lg focus:outline-none flex items-center justify-center",style:{marginBottom:"15px"},children:r?e.jsx(f,{}):e.jsx(w,{})})]})}),e.jsx("div",{className:"flex justify-center mb-6",children:e.jsx("button",{onClick:i,className:"bg-black w-full text-white font-bold px-4 py-3 rounded-lg",children:"Login"})}),e.jsx("div",{children:e.jsx("h2",{className:"text-white text-center text-lg cursor-pointer",onClick:()=>m(!0),children:"Forgot Password?"})})]}),e.jsx("div",{children:e.jsxs("h2",{className:"text-white text-center text-lg",children:["Don't have an account yet?",e.jsx(y,{className:"text-black font-bold px-1",to:"/signup",style:{transition:"transform 0.3s ease-in-out",display:"inline-block"},onMouseEnter:s=>{s.target.style.transform="scale(1.15)"},onMouseLeave:s=>{s.target.style.transform="scale(1)"},children:"Signup"})]})})]})})})}export{L as default};
