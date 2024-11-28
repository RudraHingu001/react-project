import{r as m,j as e,u as Ae,a as ke,Q as y,d as Te,b as ue,c as he}from"./index-9a376f55.js";import{A as Fe,L as De}from"./Layout-7696fe45.js";import{q as Y,_ as G}from"./transition-90432b32.js";import{P as xe,S as X,r as v}from"./PDFButton-596e9418.js";import{a as H}from"./axios-1779699b.js";import{u as Se}from"./useDispatch-f0733e73.js";function Ee({name:o,address:s,pincode:b,phoneNumber:u,roomNo:k,street:E,society:U,city:W,setName:ee,setAddress:te,setPincode:P,setPhoneNumber:ae,setRoomNo:I,setStreet:B,setSociety:$,setCity:M,buyNow:O,onPhoneNumberChange:_,previousAddress:L,showAddressConfirmation:se,confirmAddress:K,cancelAddress:re}){const[q,z]=m.useState(!1),[S,R]=m.useState("RazorPay"),N=()=>{z(!1)},Q=()=>{z(!0)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-center mb-4",children:e.jsx("button",{type:"button",onClick:Q,className:"w-40 bg-[rgb(60,42,33)] text-white py-2 rounded-lg font-bold hover:bg-opacity-80 transition",children:"Buy Now"})}),e.jsx(Y,{appear:!0,show:q,as:m.Fragment,children:e.jsxs(G,{as:"div",className:"relative z-10",onClose:()=>{},children:[e.jsx(Y.Child,{as:m.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-30"})}),e.jsx("div",{className:"fixed inset-0 flex items-center justify-center p-4",children:e.jsx(Y.Child,{as:m.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx(G.Panel,{className:"w-full max-w-4xl bg-[#ddd5c9] p-6 rounded-lg shadow-lg overflow-auto max-h-[90vh]",children:e.jsxs("div",{className:"flex flex-col space-y-6",style:{marginTop:"3rem"},children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h3",{className:"text-2xl font-semibold text-[rgb(60,42,33)]",children:"Order Details"}),e.jsx("button",{type:"button",onClick:N,className:"text-gray-500 hover:text-gray-700",children:e.jsx(Fe,{className:"w-6 h-6"})})]}),e.jsxs("form",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block mb-2 text-sm font-medium text-[rgb(60,42,33)]",children:"Full Name"}),e.jsx("input",{value:o,onChange:g=>ee(g.target.value),type:"text",name:"name",id:"name",className:"w-full border border-gray-300 rounded-lg p-2 bg-white text-gray-900",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"mobileNumber",className:"block mb-2 text-sm font-medium text-[rgb(60,42,33)]",children:"Mobile Number"}),e.jsx("input",{value:u,onChange:g=>_(g.target.value),type:"text",name:"mobileNumber",id:"mobileNumber",className:"w-full border border-gray-300 rounded-lg p-2 bg-white text-gray-900",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"address",className:"block mb-2 text-sm font-medium text-[rgb(60,42,33)]",children:"Address"}),e.jsx("input",{value:s,onChange:g=>te(g.target.value),type:"text",name:"address",id:"address",className:"w-full border border-gray-300 rounded-lg p-2 bg-white text-gray-900",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"roomNo",className:"block mb-2 text-sm font-medium text-[rgb(60,42,33)]",children:"Flat Number"}),e.jsx("input",{value:k,onChange:g=>I(g.target.value),type:"text",name:"roomNo",id:"roomNo",className:"w-full border border-gray-300 rounded-lg p-2 bg-white text-gray-900",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"street",className:"block mb-2 text-sm font-medium text-[rgb(60,42,33)]",children:"Land Mark"}),e.jsx("input",{value:E,onChange:g=>B(g.target.value),type:"text",name:"street",id:"street",className:"w-full border border-gray-300 rounded-lg p-2 bg-white text-gray-900",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"society",className:"block mb-2 text-sm font-medium text-[rgb(60,42,33)]",children:"Society"}),e.jsx("input",{value:U,onChange:g=>$(g.target.value),type:"text",name:"society",id:"society",className:"w-full border border-gray-300 rounded-lg p-2 bg-white text-gray-900",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"city",className:"block mb-2 text-sm font-medium text-[rgb(60,42,33)]",children:"City, State"}),e.jsx("input",{value:W,onChange:g=>M(g.target.value),type:"text",name:"city",id:"city",className:"w-full border border-gray-300 rounded-lg p-2 bg-white text-gray-900",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"pincode",className:"block mb-2 text-sm font-medium text-[rgb(60,42,33)]",children:"Pincode"}),e.jsx("input",{value:b,onChange:g=>P(g.target.value),type:"text",name:"pincode",id:"pincode",className:"w-full border border-gray-300 rounded-lg p-2 bg-white text-gray-900",required:!0})]})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"radio",id:"razorpay",name:"paymentMethod",value:"RazorPay",checked:S==="RazorPay",onChange:()=>R("RazorPay")}),e.jsx("label",{htmlFor:"razorpay",className:"ml-2 text-sm font-medium text-[rgb(60,42,33)]",children:"Pay Online"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{type:"radio",id:"cod",name:"paymentMethod",value:"COD",checked:S==="COD",onChange:()=>R("COD")}),e.jsx("label",{htmlFor:"cod",className:"ml-2 text-sm font-medium text-[rgb(60,42,33)]",children:"Cash on Delivery"})]})]}),e.jsx("button",{type:"button",onClick:()=>{O(S),N()},className:"w-40 text-white bg-[rgb(60,42,33)] py-2 rounded-lg font-medium hover:bg-opacity-80 transition",children:"Order Now"})]})]})})})})]})})]})}function Pe({showAddressConfirmation:o,confirmAddress:s,cancelAddress:b,previousAddress:u}){return e.jsx(Y,{appear:!0,show:o,as:m.Fragment,children:e.jsxs(G,{as:"div",className:"relative z-10",onClose:b,children:[e.jsx(Y.Child,{as:m.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-30"})}),e.jsx("div",{className:"fixed inset-0 flex items-center justify-center p-4",children:e.jsxs(G.Panel,{className:"w-full max-w-md bg-[#ddd5c9] p-6 rounded-lg shadow-lg",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Use Previous Address?"}),e.jsx("p",{children:"Do you want to use this address?"}),u&&e.jsxs(e.Fragment,{children:[e.jsx("p",{children:u.name}),e.jsx("p",{children:u.address}),e.jsx("p",{children:u.roomNo}),e.jsx("p",{children:u.street}),e.jsx("p",{children:u.city}),e.jsx("p",{children:u.pincode})]}),e.jsxs("div",{className:"flex justify-between mt-4",children:[e.jsx("button",{onClick:s,className:"bg-[rgb(60,42,33)] text-white px-8 py-2 rounded",children:"Yes"}),e.jsx("button",{onClick:b,className:"bg-[rgb(60,42,33)] text-white px-8 py-2 rounded",children:"No"})]})]})})]})})}const Ie=async o=>{try{const s=await fetch(`https://endpoints-ashy.vercel.app/api/order/getPreviousAddress?phoneNumber=${o}`);if(!s.ok)throw new Error("Failed to fetch address");const b=await s.json();return b.success?b.address:(console.log(b.message),null)}catch(s){return console.error("Error fetching previous address:",s),null}};var f=[];for(var me=0;me<256;++me)f.push((me+256).toString(16).slice(1));function $e(o,s=0){return(f[o[s+0]]+f[o[s+1]]+f[o[s+2]]+f[o[s+3]]+"-"+f[o[s+4]]+f[o[s+5]]+"-"+f[o[s+6]]+f[o[s+7]]+"-"+f[o[s+8]]+f[o[s+9]]+"-"+f[o[s+10]]+f[o[s+11]]+f[o[s+12]]+f[o[s+13]]+f[o[s+14]]+f[o[s+15]]).toLowerCase()}var Z,Oe=new Uint8Array(16);function qe(){if(!Z&&(Z=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Z))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Z(Oe)}var ze=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const ye={randomUUID:ze};function Re(o,s,b){if(ye.randomUUID&&!s&&!o)return ye.randomUUID();o=o||{};var u=o.random||(o.rng||qe)();if(u[6]=u[6]&15|64,u[8]=u[8]&63|128,s){b=b||0;for(var k=0;k<16;++k)s[b+k]=u[k];return s}return $e(u)}function _e(){const o=Se(),s=Ae(r=>r.cart),[b,u]=m.useState(0),k=100,E=k+b,U=ke(),W=r=>{y.dismiss(),o(Te({id:r}))};m.useEffect(()=>{localStorage.setItem("cart",JSON.stringify(s))},[s]),m.useEffect(()=>{const r=s.reduce((t,l)=>t+l.price*l.quantity,0);u(r)},[s]);const ee=r=>{o(ue({id:r._id,quantity:r.quantity+1}))},te=r=>{r.quantity>1?o(ue({id:r._id,quantity:r.quantity-1})):W(r)},[P,ae]=m.useState(""),[I,B]=m.useState(""),[$,M]=m.useState(""),[O,_]=m.useState(""),[L,se]=m.useState(""),[K,re]=m.useState(""),[q,z]=m.useState(""),[S,R]=m.useState(""),[N,Q]=m.useState(null),[g,V]=m.useState(!1),ge=async r=>{if(console.log("Phone number input:",r),_(r),r.length===10){const t=await Ie(r);console.log("Fetched address:",t),t?(Q(t),V(!0)):Q(null)}else V(!1)},fe=()=>{N&&(ae(N.name||""),B(N.address||""),M(N.pincode||""),se(N.roomNo||""),re(N.street||""),z(N.society||""),R(N.city||"")),V(!1)},be=()=>{V(!1)},we=()=>{const r=JSON.parse(localStorage.getItem("user"));return r?{email:r.email,uid:r.userId,token:r.token}:null},ve=async r=>{if(s.length===0)return y.error("Your cart is empty. Add items to proceed.");if(P===""||I===""||$===""||O===""||L===""||S===""||K===""||q==="")return y.error("All fields are required");const t=we();if(!t)return y.error("User not authenticated.");const l={name:P,address:I,roomNo:L,street:K,society:q,city:S,pincode:$,phoneNumber:O,date:new Date().toLocaleString("en-US",{month:"short",day:"2-digit",year:"numeric"})},h=Re();if(r==="COD"){je("COD",t,l,h);return}const x={key:"rzp_test_bwr7lu5d6bdZUu",amount:parseInt(E*100),currency:"INR",order_receipt:"order_rcptid_"+t.uid,name:"HEKAWY",description:"Fashion & style",handler:async function(c){const T=c.razorpay_payment_id,i={cartItems:s,addressInfo:l,grandTotal:E,date:new Date().toLocaleString("en-US",{month:"short",day:"2-digit",year:"numeric"}),email:t.email,userid:t.uid,paymentMethod:"Online",paymentId:T,status:"received",uniqueOrderId:h,shipmentId:""};try{const a=await pe(i);i.shipmentId=a,(await H.post("https://endpoints-ashy.vercel.app/api/order/create",i)).data.success?y.success("Order placed successfully"):y.error("Error placing order"),o(he()),y.success("Payment Successful"),await Ne(t.email,i),U("/thank-you")}catch(a){console.error("Error saving order:",a),y.error("Error placing the order. Please try again.")}},theme:{color:"#3399cc"},prefill:{name:l.name,email:t.email,contact:l.phoneNumber},notes:{address:l.address},modal:{ondismiss:function(){y.info("Payment process was canceled.")}}};var d=new window.Razorpay(x);d.open()},je=async(r,t,l,h)=>{const x={cartItems:s,addressInfo:l,grandTotal:E,date:new Date().toLocaleString("en-US",{month:"short",day:"2-digit",year:"numeric"}),email:t.email,userid:t.uid,paymentMethod:r,status:"pending",uniqueOrderId:h,shipmentId:""};try{const d=await pe(x);x.shipmentId=d,(await H.post("https://endpoints-ashy.vercel.app/api/order/create",x)).data.success?y.success("Order placed successfully"):y.error("Error placing order"),o(he()),y.success("Order placed successfully. Payment will be collected on delivery."),await Ce(t.email,x),U("/thank-you")}catch(d){console.error("Error processing order:",d),y.error("Error processing your order.")}},pe=async r=>{var t,l;try{const h=await H.post("https://endpoints-ashy.vercel.app/api/shipment/create-shipment",r);if(h.data.shipmentId)return y.success("Shipment created successfully!"),h.data.shipmentId;y.error("Failed to create shipment: "+h.data.message)}catch(h){console.error("Error creating shipment:",h),y.error("Error creating shipment. "+(((l=(t=h.response)==null?void 0:t.data)==null?void 0:l.message)||h.message))}},Ne=async(r,t)=>{try{const l=t.cartItems.map(p=>`Product Name: ${p._id}, Quantity: ${p.quantity}, Price: ${p.price} Rs.`).join("<br>"),h=`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #f4f4f4;
                    }
                    .container {
                        max-width: 600px;
                        margin: 20px auto;
                        background-color: #ffffff;
                        border-radius: 8px;
                        overflow: hidden;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    .header {
                        background-color: #3C2A21;
                        padding: 20px;
                        text-align: center;
                    }
                    .header img {
                        max-width: 150px;
                        height: auto;
                    }
                    .content {
                        padding: 20px;
                    }
                    .content h1 {
                        color: #3C2A21;
                        font-size: 24px;
                        margin-bottom: 10px;
                    }
                    .content p {
                        color: #555555;
                        line-height: 1.6;
                    }
                    .content a {
                        color: #3C2A21;
                        text-decoration: none;
                    }
                    .footer {
                        background-color: #DDD5C9;
                        padding: 10px;
                        text-align: center;
                        font-size: 14px;
                        color: #777777;
                    }
                    .footer a {
                        color: #3C2A21;
                        text-decoration: none;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1 style="color:#ffffff">HEKAWY</h1>
                    </div>
                    <div class="content">
                        <h1>Thank You for Your Order!</h1>
                        <p>Dear ${t.addressInfo.name},</p>
                        <p>Thank you for your order with HEKAWY. We have received your order and are processing it.</p>
                        <p>Here are the details of your order:</p>
                        <p>${l}</p>
                        <p>Total Amount(Rs.): ${t.grandTotal}</p>
                        <p>Payment ID: ${t.paymentId}</p>
                        <p>Order ID: ${t.uniqueOrderId}</p>
                        <p>In the meantime, feel free to <a href="https://hekawy.com">visit our website</a> for more information.</p>
                        <p>If you have any queries, contact us at <a href="mailto:info@hekawy.com">info@hekawy.com</a>.</p>
                        <p>Best regards,<br>The HEKAWY Team</p>
                    </div>
                    <div class="footer">
                        <p>&copy; 2024 HEKAWY. All rights reserved.</p>
                        <p><a href="https://hekawy.com">Visit our website</a> | <a href="mailto:info@hekawy.com">Email us</a></p>
                    </div>
                </div>
            </body>
            </html>
        `,x=await xe.create(),d=x.addPage([600,800]),c=await x.embedFont(X.HelveticaBold),T=await x.embedFont(X.TimesRoman),i=50;let a=d.getHeight()-50;d.drawText("HEKAWY Invoice",{x:i,y:a,size:30,font:c,color:v(0,0,0)}),a-=40,d.drawText(`Customer: ${t.addressInfo.name}`,{x:i,y:a,size:12,font:c,color:v(0,0,0)}),a-=20;const J=`${t.addressInfo.roomNo}, ${t.addressInfo.society}, ${t.addressInfo.street}, ${t.addressInfo.city}, ${t.addressInfo.pincode}`;d.drawText(`Address: ${J}`,{x:i,y:a,size:12,font:c,color:v(0,0,0)}),a-=20,d.drawText(`Order ID: ${t.userid}`,{x:i,y:a,size:12,font:c,color:v(0,0,0)}),a-=20,d.drawText(`Payment ID: ${t.paymentId}`,{x:i,y:a,size:12,font:c,color:v(0,0,0)}),a-=40;const w=(p,C,A,ie,de,ce,le)=>{d.drawText(p,{x:C+5,y:A+5,size:le,font:ce,color:v(0,0,0)}),d.drawRectangle({x:C,y:A,width:ie,height:de,borderColor:v(0,0,0),borderWidth:1})},F=20,j=20,n=[300,100,100];w("Product Name",i,a,n[0],F,c,12),w("Quantity",i+n[0],a,n[1],F,c,12),w("Price (Rs.)",i+n[0]+n[1],a,n[2],F,c,12),a-=F,t.cartItems.forEach(p=>{var C,A;w(p.name||"N/A",i,a,n[0],j,T,12),w(((C=p.quantity)==null?void 0:C.toString())||"0",i+n[0],a,n[1],j,T,12),w(((A=p.price)==null?void 0:A.toString())||"0.00",i+n[0]+n[1],a,n[2],j,T,12),a-=j}),a-=j,w(`Total Amount (Rs.): ${t.grandTotal}`,i,a,n[0]+n[1]+n[2],j,c,14);const oe=await x.save(),ne=new Blob([oe],{type:"application/pdf"}),D=new FormData;D.append("to",r),D.append("html",h),D.append("invoice",ne,"invoice.pdf"),await H.post("https://endpoints-ashy.vercel.app/api/send-email",D,{headers:{"Content-Type":"multipart/form-data"}}),console.log("Email sent successfully")}catch(l){console.error("Error sending email:",l),y.error("Error sending confirmation email.")}},Ce=async(r,t)=>{try{const l=t.cartItems.map(p=>`Product Name: ${p._id}, Quantity: ${p.quantity}, Price: ${p.price} Rs.`).join("<br>"),h=`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                        background-color: #f4f4f4;
                    }
                    .container {
                        max-width: 600px;
                        margin: 20px auto;
                        background-color: #ffffff;
                        border-radius: 8px;
                        overflow: hidden;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    .header {
                        background-color: #3C2A21;
                        padding: 20px;
                        text-align: center;
                    }
                    .header img {
                        max-width: 150px;
                        height: auto;
                    }
                    .content {
                        padding: 20px;
                    }
                    .content h1 {
                        color: #3C2A21;
                        font-size: 24px;
                        margin-bottom: 10px;
                    }
                    .content p {
                        color: #555555;
                        line-height: 1.6;
                    }
                    .content a {
                        color: #3C2A21;
                        text-decoration: none;
                    }
                    .footer {
                        background-color: #DDD5C9;
                        padding: 10px;
                        text-align: center;
                        font-size: 14px;
                        color: #777777;
                    }
                    .footer a {
                        color: #3C2A21;
                        text-decoration: none;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1 style="color:#ffffff">HEKAWY</h1>
                    </div>
                    <div class="content">
                        <h1>Thank You for Your Order!</h1>
                        <p>Dear ${t.addressInfo.name},</p>
                        <p>Thank you for your order with HEKAWY. We have received your order and are processing it.</p>
                        <p>Here are the details of your order:</p>
                        <p>${l}</p>
                        <p>Total Amount(Rs.): ${t.grandTotal}</p>
                        <p>Order ID: ${t.uniqueOrderId}</p>
                        <p>In the meantime, feel free to <a href="https://hekawy.com">visit our website</a> for more information.</p>
                        <p>If you have any queries, contact us at <a href="mailto:info@hekawy.com">info@hekawy.com</a>.</p>
                        <p>Best regards,<br>The HEKAWY Team</p>
                    </div>
                    <div class="footer">
                        <p>&copy; 2024 HEKAWY. All rights reserved.</p>
                        <p><a href="https://hekawy.com">Visit our website</a> | <a href="mailto:info@hekawy.com">Email us</a></p>
                    </div>
                </div>
            </body>
            </html>
        `,x=await xe.create(),d=x.addPage([600,800]),c=await x.embedFont(X.HelveticaBold),T=await x.embedFont(X.TimesRoman),i=50;let a=d.getHeight()-50;d.drawText("HEKAWY Invoice",{x:i,y:a,size:30,font:c,color:v(0,0,0)}),a-=40,d.drawText(`Customer: ${t.addressInfo.name}`,{x:i,y:a,size:12,font:c,color:v(0,0,0)}),a-=20;const J=`${t.addressInfo.roomNo}, ${t.addressInfo.society}, ${t.addressInfo.street}, ${t.addressInfo.city}, ${t.addressInfo.pincode}`;d.drawText(`Address: ${J}`,{x:i,y:a,size:12,font:c,color:v(0,0,0)}),a-=20,d.drawText(`Order ID: ${t.userid}`,{x:i,y:a,size:12,font:c,color:v(0,0,0)}),a-=20,d.drawText("Payment Method : COD",{x:i,y:a,size:12,font:c,color:v(0,0,0)}),a-=40;const w=(p,C,A,ie,de,ce,le)=>{d.drawText(p,{x:C+5,y:A+5,size:le,font:ce,color:v(0,0,0)}),d.drawRectangle({x:C,y:A,width:ie,height:de,borderColor:v(0,0,0),borderWidth:1})},F=20,j=20,n=[300,100,100];w("Product Name",i,a,n[0],F,c,12),w("Quantity",i+n[0],a,n[1],F,c,12),w("Price (Rs.)",i+n[0]+n[1],a,n[2],F,c,12),a-=F,t.cartItems.forEach(p=>{var C,A;w(p.name||"N/A",i,a,n[0],j,T,12),w(((C=p.quantity)==null?void 0:C.toString())||"0",i+n[0],a,n[1],j,T,12),w(((A=p.price)==null?void 0:A.toString())||"0.00",i+n[0]+n[1],a,n[2],j,T,12),a-=j}),a-=j,w(`Total Amount (Rs.): ${t.grandTotal}`,i,a,n[0]+n[1]+n[2],j,c,14);const oe=await x.save(),ne=new Blob([oe],{type:"application/pdf"}),D=new FormData;D.append("to",r),D.append("html",h),D.append("invoice",ne,"invoice.pdf"),await H.post("https://endpoints-ashy.vercel.app/api/COD/codemail",D,{headers:{"Content-Type":"multipart/form-data"}}),console.log("Email sent successfully")}catch(l){console.error("Error sending email:",l),y.error("Error sending confirmation email.")}};return e.jsx(De,{children:e.jsx("div",{className:"h-screen pt-5 mb-[60%]",children:s.length===0?e.jsx("div",{className:"text-black text-center text-xl",style:{color:"#3C2A21"},children:"Your cart is empty. Add items to proceed."}):e.jsxs("div",{className:"mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0",children:[e.jsxs("div",{className:"mb-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3",children:[e.jsxs("div",{className:"mb-2 flex justify-between",children:[e.jsx("p",{className:"text-gray-700",style:{color:"#3C2A21"},children:"Subtotal"}),e.jsxs("p",{className:"text-gray-700",style:{color:"#3C2A21"},children:["₹",b]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("p",{className:"text-gray-700",style:{color:"#3C2A21"},children:"Shipping"}),e.jsxs("p",{className:"text-gray-700",style:{color:"#3C2A21"},children:["₹",k]})]}),e.jsx("hr",{className:"my-4"}),e.jsxs("div",{className:"flex justify-between mb-3",children:[e.jsx("p",{className:"text-lg font-bold",style:{color:"#3C2A21"},children:"Total"}),e.jsxs("p",{className:"mb-1 text-lg font-bold",style:{color:"#3C2A21"},children:["₹",E]})]}),e.jsx(Ee,{name:P,address:I,pincode:$,phoneNumber:O,roomNo:L,street:K,society:q,city:S,setName:ae,setAddress:B,setPincode:M,setPhoneNumber:_,setRoomNo:se,setStreet:re,setSociety:z,setCity:R,buyNow:ve,onPhoneNumberChange:ge}),e.jsx(Pe,{showAddressConfirmation:g,confirmAddress:fe,cancelAddress:be,previousAddress:N})]}),e.jsx("div",{className:"rounded-lg md:w-2/3",children:s.map(r=>{const{id:t,name:l,price:h,description:x,imageUrls:d,quantity:c}=r;return e.jsxs("div",{className:"justify-between mb-6 rounded-lg border drop-shadow-xl bg-white p-6 sm:flex sm:justify-start",children:[e.jsx("img",{src:`https://endpoints-ashy.vercel.app${d[0]}`,alt:"product",className:"w-full rounded-lg sm:w-40",style:{width:"140px"}}),e.jsxs("div",{className:"sm:ml-4 sm:flex sm:w-full sm:justify-between",children:[e.jsxs("div",{className:"mt-5 sm:mt-0",children:[e.jsx("h2",{className:"text-lg font-bold text-gray-900",style:{color:"#3C2A21"},children:l}),e.jsx("h2",{className:"text-sm text-gray-900",style:{color:"#3C2A21"},children:x}),e.jsxs("p",{className:"mt-1 text-xs font-semibold text-gray-700",style:{color:"#3C2A21"},children:["₹",h]}),e.jsxs("div",{className:"mt-2 flex items-center",style:{color:"#3C2A21"},children:[e.jsx("button",{className:"text-xs px-2 py-1 bg-gray-200 rounded-full mr-2",onClick:()=>te(r),children:"-"}),e.jsx("span",{className:"text-xs font-semibold",children:c}),e.jsx("button",{className:"text-xs px-2 py-1 bg-gray-200 rounded-full ml-2",onClick:()=>ee(r),children:"+"})]})]}),e.jsx("div",{onClick:()=>W(r),className:"mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})})})]})]},t)})})]})})})}export{_e as default};
