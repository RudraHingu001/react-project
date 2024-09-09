import{r as a,f as p,j as e,L as y,Q as o}from"./index-562eb1bb.js";import"./myContext-57a073bc.js";import{a as c}from"./FirebaseConfig-83d5a7c0.js";import{L as b,b as f,c as w}from"./Layout-e34cfa25.js";import{s as j,a as C}from"./index-bea2a320-8c0c8ce8.js";function E(){const[t,l]=a.useState(""),[n,d]=a.useState(""),[r,u]=a.useState(!1),[x,m]=a.useState(!1),g=p(),i=async()=>{try{const s=await j(c,t,n);localStorage.setItem("user",JSON.stringify(s.user)),g("/")}catch(s){console.error(s),o.error("Login failed. Please check your email and password.")}},h=async()=>{try{await C(c,t),o.success("Password reset email sent. Check your inbox.")}catch(s){console.error(s),o.error("Failed to send password reset email.")}};return e.jsx(b,{children:e.jsx("div",{className:"flex justify-center items-center",style:{marginTop:"5rem",padding:"10px"},children:e.jsxs("div",{className:"bg-gray-800 px-10 py-16 rounded-xl w-full max-w-md",style:{backgroundColor:"#3C2A21"},children:[e.jsx("div",{children:e.jsx("h1",{className:"text-center text-white text-xl mb-6 font-bold",children:"Login"})}),x?e.jsxs("div",{children:[e.jsx("input",{type:"email",value:t,onChange:s=>l(s.target.value),name:"email",className:"bg-gray-600 mb-6 px-4 py-3 w-full rounded-lg text-black placeholder-text-gray-200 outline-none",placeholder:"Email",style:{backgroundColor:"#DDD5C9"}}),e.jsx("div",{className:"flex justify-center mb-6",children:e.jsx("button",{onClick:h,className:"bg-black w-full text-white font-bold px-4 py-3 rounded-lg",style:{backgroundColor:"#DDD5C9",color:"#3C2A21"},children:"Reset Password"})})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx("input",{type:"email",value:t,onChange:s=>l(s.target.value),name:"email",className:"bg-gray-600 mb-6 px-4 py-3 w-full rounded-lg text-black placeholder-text-gray-200 outline-none",placeholder:"Email",style:{backgroundColor:"#DDD5C9"}})}),e.jsx("div",{children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{ba:!0,type:r?"text":"password",value:n,onChange:s=>d(s.target.value),onKeyDown:s=>{s.key==="Enter"&&i()},className:"bg-gray-600 mb-6 px-4 py-3 w-full rounded-lg text-black placeholder-text-gray-200 outline-none pr-10",placeholder:"Password",style:{backgroundColor:"#DDD5C9"}}),e.jsx("button",{type:"button",onClick:()=>u(!r),className:"absolute inset-y-0 right-0 px-4 text-black rounded-r-lg focus:outline-none flex items-center justify-center",style:{marginBottom:"15px"},children:r?e.jsx(f,{}):e.jsx(w,{})})]})}),e.jsx("div",{className:"flex justify-center mb-6",children:e.jsx("button",{onClick:i,className:"bg-black w-full text-white font-bold px-4 py-3 rounded-lg",style:{backgroundColor:"#DDD5C9",color:"#3C2A21"},children:"Login"})}),e.jsx("div",{children:e.jsx("h2",{className:"text-white text-center text-sm cursor-pointer",onClick:()=>m(!0),style:{marginTop:"1rem"},children:"Forgot Password?"})})]}),e.jsx("div",{children:e.jsx("h2",{className:"text-white text-center text-sm",style:{marginTop:"1rem"},children:e.jsx(y,{className:"text-black font-bold px-1",to:"/signup",style:{transition:"transform 0.3s ease-in-out",display:"inline-block"},onMouseEnter:s=>{s.target.style.transform="scale(1.15)"},onMouseLeave:s=>{s.target.style.transform="scale(1)"},style:{color:"#DDD5C9"},children:e.jsx("u",{children:"Don't have an account yet? Signup"})})})})]})})})}export{E as default};