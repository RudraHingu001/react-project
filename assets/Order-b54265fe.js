import{r as a,R as p,j as s}from"./index-514b9b96.js";import{m as v}from"./myContext-21782fdd.js";import{L as y}from"./Layout-ce74dda3.js";import h from"./Loader-f6cb6366.js";import{a as c}from"./FirebaseConfig-f1ddf40d.js";import{T as b}from"./table-6690f617.js";import"./index-bea2a320-8c0c8ce8.js";function O(){const i=a.useContext(v),{loading:l,order:d}=i,[m,u]=a.useState([]),t=c.currentUser?c.currentUser.email:null;a.useEffect(()=>{if(t){const e=d.filter(o=>o.email===t);u(e)}},[d,t]);const f=p.useMemo(()=>[{Header:"Payment Id",accessor:"paymentId"},{Header:"Total",accessor:"grandTotal"},{Header:"Name",accessor:e=>e.addressInfo.name},{Header:"Address",accessor:e=>`${e.addressInfo.roomNo||""}, ${e.addressInfo.society||""}, ${e.addressInfo.street||""}, ${e.addressInfo.pincode}`},{Header:"Phone Number",accessor:e=>e.addressInfo.phoneNumber},{Header:"Email",accessor:"email"},{Header:"Date",accessor:e=>e.date},{Header:"Product Info",accessor:e=>{const o=e.cartItems.map(r=>{const n=r.colors.find(g=>g.hex===r.selectedColor),x=n?n.name:"Unknown Color";return`
              <div style="margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">
                <div style="text-align: center;">
                  <img src="${r.imageUrls[0]}" alt="${r._id}" style="max-width: 150px; height: auto; display: block; margin: 0 auto;" />
                </div>
                <div style="text-align: center;">
                  <div><strong>Product Name:</strong> ${r._id}</div>
                  <div><strong>Category:</strong> ${r.category}</div>
                  <div><strong>Color:</strong> ${x}</div>
                  <div><strong>Size:</strong> ${r.selectedSize}</div>
                  <div><strong>Quantity:</strong> ${r.quantity}</div>
                </div>
              </div>
            `}).join("<br/><br/>");return s.jsx("div",{dangerouslySetInnerHTML:{__html:o}})}},{Header:"Payment Status",accessor:e=>e.status}],[]);return s.jsxs(y,{children:[l&&s.jsx(h,{}),s.jsxs("div",{className:"flex flex-col",style:{marginBottom:"15rem"},children:[s.jsx("div",{className:"w-full",children:s.jsx("h2",{className:"text-center text-3xl font-bold mb-4",style:{color:"#3C2A21",marginTop:"3rem"},children:"Order Details"})}),s.jsx("div",{className:"w-full overflow-x-auto items-center justify-center",children:s.jsx(b,{columns:f,data:m})})]})]})}export{O as default};
