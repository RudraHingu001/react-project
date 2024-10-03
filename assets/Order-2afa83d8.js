import{j as e,r as l,Q as j,R as k}from"./index-dd2784b2.js";import{m as O}from"./myContext-ad953ed0.js";import{A as D,L as E}from"./Layout-6658e8fd.js";import H from"./Loader-33a7953c.js";import{a as $,c as F,f as T,b as S}from"./FirebaseConfig-aa7fb936.js";import{r as N}from"./index-87faf242.js";import{q as w,_ as C,a as q}from"./transition-630f59cd.js";import{g as U,r as R,u as _,a as A}from"./index.esm2017-dfb43fad.js";import"./index-bea2a320-8c0c8ce8.js";function L({columns:f,data:u}){const{getTableProps:p,getTableBodyProps:i,headerGroups:x,prepareRow:g,page:h,nextPage:v,previousPage:c,canPreviousPage:b,canNextPage:y,state:{pageIndex:d,pageSize:m}}=N.useTable({columns:f,data:u,initialState:{pageIndex:0,pageSize:5}},N.useSortBy,N.usePagination);return e.jsx("div",{className:"container mx-auto bg-white rounded-lg shadow-lg overflow-hidden p-0",children:u.length===0?e.jsx("div",{className:"flex flex-col items-center justify-center my-8",children:e.jsx("p",{className:"text-gray-500 text-lg",children:"No data to display"})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{...p(),className:"min-w-full text-sm text-left text-gray-500",children:[e.jsx("thead",{className:"text-xs text-black uppercase bg-gray-200 border border-gray-600 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]",children:x.map(s=>l.createElement("tr",{...s.getHeaderGroupProps(),key:s.id},s.headers.map(o=>l.createElement("th",{...o.getHeaderProps(o.getSortByToggleProps()),className:"px-4 py-2 cursor-pointer",key:o.id},o.render("Header"),o.isSorted?o.isSortedDesc?" ▼":" ▲":""))))}),e.jsx("tbody",{...i(),className:"bg-white divide-y divide-gray-200",children:h.map(s=>(g(s),l.createElement("tr",{...s.getRowProps(),className:"hover:bg-gray-100 transition-colors duration-200",key:s.id},s.cells.map(o=>l.createElement("td",{...o.getCellProps(),className:"px-4 py-2",key:o.column.id},o.render("Cell"))))))})]})}),e.jsx("div",{className:"flex items-center justify-between mt-4 px-4 py-2 bg-gray-200",children:e.jsxs("div",{children:[e.jsx("button",{onClick:c,disabled:!b,className:`px-4 py-2 rounded-lg ${b?"bg-[#3C2A21] text-white":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:"Previous"}),e.jsxs("span",{className:"mx-4 text-gray-600",children:["Page ",e.jsx("strong",{children:d+1})," of ",e.jsx("strong",{children:Math.ceil(u.length/m)})]}),e.jsx("button",{onClick:v,disabled:!y,className:`px-4 py-2 rounded-lg ${y?"bg-[#3C2A21] text-white":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:"Next"})]})})]})})}function B({isOpen:f,onRequestClose:u,orderId:p}){const[i,x]=l.useState({name:"",email:"",phoneNumber:"",reason:"",productPhoto:null}),[g,h]=l.useState(!1),v=U(),c=d=>{const{name:m,value:s,type:o,files:t}=d.target;x(o==="file"?{...i,productPhoto:t[0]}:{...i,[m]:s})},b=async d=>{const m=R(v,`productPhotos/${d.name}`);h(!0);try{return await _(m,d),await A(m)}catch(s){return console.error("Error uploading image:",s),j.error("Error uploading image"),null}finally{h(!1)}},y=async d=>{d.preventDefault();const{name:m,email:s,phoneNumber:o,reason:t,productPhoto:a}=i;let r="";if(!(a&&(r=await b(a),!r)))try{await $(F(T,"cancelRequests"),{name:m,email:s,phoneNumber:o,reason:t,productPhoto:r,uniqueOrderId:p,createdAt:new Date}),j.success("Your cancellation request has been submitted!"),u()}catch(n){j.error("Error submitting request: "+n.message)}};return e.jsx(w,{appear:!0,show:f,as:l.Fragment,children:e.jsxs(C,{as:"div",className:"relative z-10",onClose:u,children:[e.jsx(w.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-30"})}),e.jsx("div",{className:"fixed inset-0 flex items-center justify-center p-4",children:e.jsx(w.Child,{as:l.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx(C.Panel,{className:"w-full max-w-4xl bg-[#ddd5c9] p-6 rounded-lg shadow-lg overflow-auto max-h-[90vh]",children:e.jsxs("div",{className:"flex flex-col space-y-6",style:{marginTop:"3rem"},children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h3",{className:"text-2xl font-semibold text-[rgb(60,42,33)]",children:"Cancel/Return Order"}),e.jsx("button",{type:"button",onClick:u,className:"text-gray-500 hover:text-gray-700",children:e.jsx(D,{className:"w-6 h-6"})})]}),e.jsxs("form",{onSubmit:y,className:"grid grid-cols-1 gap-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:"block mb-2 text-sm font-medium text-[rgb(60,42,33)]",children:"Full Name"}),e.jsx("input",{value:i.name,onChange:c,type:"text",name:"name",id:"name",className:"w-full border border-gray-300 rounded-lg p-2 bg-white text-gray-900",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-[rgb(60,42,33)]",children:"Email"}),e.jsx("input",{value:i.email,onChange:c,type:"email",name:"email",id:"email",className:"w-full border border-gray-300 rounded-lg p-2 bg-white text-gray-900",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"phoneNumber",className:"block mb-2 text-sm font-medium text-[rgb(60,42,33)]",children:"Phone Number"}),e.jsx("input",{value:i.phoneNumber,onChange:c,type:"text",name:"phoneNumber",id:"phoneNumber",className:"w-full border border-gray-300 rounded-lg p-2 bg-white text-gray-900",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"productPhoto",className:"block mb-2 text-sm font-medium text-[rgb(60,42,33)]",children:"Product Photo"}),e.jsx("input",{onChange:c,type:"file",name:"productPhoto",id:"productPhoto",accept:"image/*",className:"w-full border border-gray-300 rounded-lg p-2 bg-white text-gray-900",required:!0})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"reason",className:"block mb-2 text-sm font-medium text-[rgb(60,42,33)]",children:"Reason for Cancellation/Return"}),e.jsx("textarea",{value:i.reason,onChange:c,name:"reason",id:"reason",className:"w-full border border-gray-300 rounded-lg p-2 bg-white text-gray-900",required:!0})]}),e.jsx("button",{type:"submit",className:"w-full text-white bg-[rgb(60,42,33)] py-2 rounded-lg font-medium hover:bg-opacity-80 transition",disabled:g,children:g?"Submitting...":"Submit"})]})]})})})})]})})}function X(){const f=l.useContext(O),{loading:u,order:p}=f,[i,x]=l.useState([]),[g,h]=l.useState({}),[v,c]=l.useState(!1),[b,y]=l.useState(null),d=S.currentUser?S.currentUser.email:null;l.useEffect(()=>{if(d){const t=p.filter(a=>a.email===d);t.sort((a,r)=>new Date(r.date)-new Date(a.date)),x(t)}},[p,d]);const m=async t=>{var a,r;if(!t)return j.error("Shipment ID is required."),null;try{return(await q.get(`https://endpoints-ashy.vercel.app/api/track/track/${t}`)).data}catch(n){return console.error("Error tracking shipment:",n),j.error("Error tracking shipment: "+(((r=(a=n.response)==null?void 0:a.data)==null?void 0:r.message)||n.message)),null}};l.useEffect(()=>{const t=async()=>{const a={};for(const r of i)if(r.shipmentId){const n=await m(r.shipmentId);n?a[r.shipmentId]={currentStatus:n.current_status,deliveredDate:n.delivered_date}:a[r.shipmentId]={currentStatus:"Not Available",deliveredDate:null}}h(a)};i.length>0&&t()},[i]);const s=t=>{if(!t)return!1;const a=new Date(t);return(new Date-a)/(1e3*60*60)<48},o=k.useMemo(()=>[{Header:"Order Id",accessor:"uniqueOrderId"},{Header:"Name",accessor:t=>t.addressInfo.name},{Header:"Address",accessor:t=>`${t.addressInfo.roomNo||""}, ${t.addressInfo.society||""}, ${t.addressInfo.street||""}, ${t.addressInfo.city||""} , ${t.addressInfo.pincode}`},{Header:"Phone Number",accessor:t=>t.addressInfo.phoneNumber},{Header:"Email",accessor:"email"},{Header:"Date",accessor:t=>t.date},{Header:"Product Info",accessor:t=>{const a=t.cartItems.map(r=>{const n=r.colors.find(I=>I.hex===r.selectedColor),P=n?n.name:"Unknown Color";return`
              <div style="margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">
                <div style="text-align: center;">
                  <img src="${r.imageUrls[0]}" alt="${r._id}" style="max-width: 150px; height: auto; display: block; margin: 0 auto;" />
                </div>
                <div style="text-align: center;">
                  <div><strong>Product Name:</strong> ${r._id}</div>
                  <div><strong>Category:</strong> ${r.category}</div>
                  <div><strong>Color:</strong> ${P}</div>
                  <div><strong>Size:</strong> ${r.selectedSize}</div>
                  <div><strong>Quantity:</strong> ${r.quantity}</div>
                </div>
              </div>
            `}).join("<br/><br/>");return e.jsx("div",{dangerouslySetInnerHTML:{__html:a}})}},{Header:"Total",accessor:"grandTotal"},{Header:"Payment Status",accessor:t=>t.status},{Header:"Order Shipping Status",accessor:t=>{var a;return((a=g[t.shipmentId])==null?void 0:a.currentStatus)||"Pending"}},{Header:"Actions",accessor:t=>{const a=g[t.shipmentId]||{},r=a.deliveredDate,n=a.currentStatus==="shipped"&&r&&s(r);return r?n?e.jsx("button",{onClick:()=>{y(t.uniqueOrderId),c(!0)},className:"text-white bg-[rgb(60,42,33)] py-2 px-4 rounded",children:"Cancel Order"}):e.jsx("span",{className:"text-gray-500",children:"Cancel Order time is over"}):e.jsx("span",{className:"text-gray-500",children:"Order not yet delivered"})}}],[g]);return e.jsxs(E,{children:[u&&e.jsx(H,{}),e.jsxs("div",{className:"flex flex-col",style:{marginBottom:"15rem"},children:[e.jsx("div",{className:"w-full",children:e.jsx("h2",{className:"text-center text-3xl font-bold mb-4",style:{color:"#3C2A21",marginTop:"3rem"},children:"Order Details"})}),e.jsx("div",{className:"w-full overflow-x-auto items-center justify-center",children:e.jsx(L,{columns:o,data:i})})]}),e.jsx(B,{isOpen:v,onRequestClose:()=>c(!1),orderId:b})]})}export{X as default};