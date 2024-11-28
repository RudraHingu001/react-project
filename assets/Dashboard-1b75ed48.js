import{r as o,R as O,a as pe,j as e,Q,L as Ce}from"./index-e9894fe2.js";import{G as we,a as de,F as Se,b as Pe,c as Te,L as ke,d as G}from"./Layout-c30396e7.js";import{m as xe}from"./myContext-ac5c88f2.js";import"./index-e474ef3a.js";import _e from"./Loader-25a1f6f5.js";import{a as D}from"./axios-1779699b.js";function X(s){return n=>!!n.type&&n.type.tabsRole===s}const F=X("Tab"),Y=X("TabList"),Z=X("TabPanel");function De(s){return F(s)||Y(s)||Z(s)}function W(s,n){return o.Children.map(s,t=>t===null?null:De(t)?n(t):t.props&&t.props.children&&typeof t.props.children=="object"?o.cloneElement(t,{...t.props,children:W(t.props.children,n)}):t)}function fe(s,n){return o.Children.forEach(s,t=>{t!==null&&(F(t)||Z(t)?n(t):t.props&&t.props.children&&typeof t.props.children=="object"&&(Y(t)&&n(t),fe(t.props.children,n)))})}function me(s){var n,t,d="";if(typeof s=="string"||typeof s=="number")d+=s;else if(typeof s=="object")if(Array.isArray(s)){var l=s.length;for(n=0;n<l;n++)s[n]&&(t=me(s[n]))&&(d&&(d+=" "),d+=t)}else for(t in s)s[t]&&(d&&(d+=" "),d+=t);return d}function z(){for(var s,n,t=0,d="",l=arguments.length;t<l;t++)(s=arguments[t])&&(n=me(s))&&(d&&(d+=" "),d+=n);return d}function he(s){let n=0;return fe(s,t=>{F(t)&&n++}),n}function be(s){return s&&"getAttribute"in s}function ie(s){return be(s)&&s.getAttribute("data-rttab")}function $(s){return be(s)&&s.getAttribute("aria-disabled")==="true"}let M;function Ee(s){const n=s||(typeof window<"u"?window:void 0);try{M=!!(typeof n<"u"&&n.document&&n.document.activeElement)}catch{M=!1}}const Ie={className:"react-tabs",focus:!1},ge=s=>{let n=o.useRef([]),t=o.useRef([]);const d=o.useRef();function l(a,u){if(a<0||a>=g())return;const{onSelect:w,selectedIndex:H}=s;w(a,H,u)}function h(a){const u=g();for(let w=a+1;w<u;w++)if(!$(p(w)))return w;for(let w=0;w<a;w++)if(!$(p(w)))return w;return a}function c(a){let u=a;for(;u--;)if(!$(p(u)))return u;for(u=g();u-- >a;)if(!$(p(u)))return u;return a}function b(){const a=g();for(let u=0;u<a;u++)if(!$(p(u)))return u;return null}function x(){let a=g();for(;a--;)if(!$(p(a)))return a;return null}function g(){const{children:a}=s;return he(a)}function p(a){return n.current[`tabs-${a}`]}function N(){let a=0;const{children:u,disabledTabClassName:w,focus:H,forceRenderTabPanel:S,selectedIndex:k,selectedTabClassName:_,selectedTabPanelClassName:re,environment:ae}=s;t.current=t.current||[];let je=t.current.length-g();const Ne=o.useId();for(;je++<0;)t.current.push(`${Ne}${t.current.length}`);return W(u,R=>{let q=R;if(Y(R)){let I=0,ne=!1;M==null&&Ee(ae);const oe=ae||(typeof window<"u"?window:void 0);M&&oe&&(ne=O.Children.toArray(R.props.children).filter(F).some((ce,K)=>oe.document.activeElement===p(K))),q=o.cloneElement(R,{children:W(R.props.children,ce=>{const K=`tabs-${I}`,le=k===I,B={tabRef:ve=>{n.current[K]=ve},id:t.current[I],selected:le,focus:le&&(H||ne)};return _&&(B.selectedClassName=_),w&&(B.disabledClassName=w),I++,o.cloneElement(ce,B)})})}else if(Z(R)){const I={id:t.current[a],selected:k===a};S&&(I.forceRender=S),re&&(I.selectedClassName=re),a++,q=o.cloneElement(R,I)}return q})}function P(a){const{direction:u,disableUpDownKeys:w,disableLeftRightKeys:H}=s;if(y(a.target)){let{selectedIndex:S}=s,k=!1,_=!1;(a.code==="Space"||a.keyCode===32||a.code==="Enter"||a.keyCode===13)&&(k=!0,_=!1,i(a)),!H&&(a.keyCode===37||a.code==="ArrowLeft")||!w&&(a.keyCode===38||a.code==="ArrowUp")?(u==="rtl"?S=h(S):S=c(S),k=!0,_=!0):!H&&(a.keyCode===39||a.code==="ArrowRight")||!w&&(a.keyCode===40||a.code==="ArrowDown")?(u==="rtl"?S=c(S):S=h(S),k=!0,_=!0):a.keyCode===35||a.code==="End"?(S=x(),k=!0,_=!0):(a.keyCode===36||a.code==="Home")&&(S=b(),k=!0,_=!0),k&&a.preventDefault(),_&&l(S,a)}}function i(a){let u=a.target;do if(y(u)){if($(u))return;const w=[].slice.call(u.parentNode.children).filter(ie).indexOf(u);l(w,a);return}while((u=u.parentNode)!=null)}function y(a){if(!ie(a))return!1;let u=a.parentElement;do{if(u===d.current)return!0;if(u.getAttribute("data-rttabs"))break;u=u.parentElement}while(u);return!1}const{children:v,className:r,disabledTabClassName:m,domRef:f,focus:E,forceRenderTabPanel:C,onSelect:j,selectedIndex:T,selectedTabClassName:se,selectedTabPanelClassName:Be,environment:Qe,disableUpDownKeys:Ge,disableLeftRightKeys:Ve,...ye}={...Ie,...s};return O.createElement("div",Object.assign({},ye,{className:z(r),onClick:i,onKeyDown:P,ref:a=>{d.current=a,f&&f(a)},"data-rttabs":!0}),N())};ge.propTypes={};const Re=0,U=1,$e={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},He=s=>s.selectedIndex===null?U:Re,ee=s=>{const{children:n,defaultFocus:t,defaultIndex:d,focusTabOnClick:l,onSelect:h,...c}={...$e,...s},[b,x]=o.useState(t),[g]=o.useState(He(c)),[p,N]=o.useState(g===U?d||0:null);if(o.useEffect(()=>{x(!1)},[]),g===U){const y=he(n);o.useEffect(()=>{if(p!=null){const v=Math.max(0,y-1);N(Math.min(p,v))}},[y])}const P=(y,v,r)=>{typeof h=="function"&&h(y,v,r)===!1||(l&&x(!0),g===U&&N(y))};let i={...s,...c};return i.focus=b,i.onSelect=P,p!=null&&(i.selectedIndex=p),delete i.defaultFocus,delete i.defaultIndex,delete i.focusTabOnClick,O.createElement(ge,i,n)};ee.propTypes={};ee.tabsRole="Tabs";const Ae={className:"react-tabs__tab-list"},te=s=>{const{children:n,className:t,...d}={...Ae,...s};return O.createElement("ul",Object.assign({},d,{className:z(t),role:"tablist"}),n)};te.tabsRole="TabList";te.propTypes={};const V="react-tabs__tab",Le={className:V,disabledClassName:`${V}--disabled`,focus:!1,id:null,selected:!1,selectedClassName:`${V}--selected`},A=s=>{let n=o.useRef();const{children:t,className:d,disabled:l,disabledClassName:h,focus:c,id:b,selected:x,selectedClassName:g,tabIndex:p,tabRef:N,...P}={...Le,...s};return o.useEffect(()=>{x&&c&&n.current.focus()},[x,c]),O.createElement("li",Object.assign({},P,{className:z(d,{[g]:x,[h]:l}),ref:i=>{n.current=i,N&&N(i)},role:"tab",id:`tab${b}`,"aria-selected":x?"true":"false","aria-disabled":l?"true":"false","aria-controls":`panel${b}`,tabIndex:p||(x?"0":null),"data-rttab":!0}),t)};A.propTypes={};A.tabsRole="Tab";const ue="react-tabs__tab-panel",Oe={className:ue,forceRender:!1,selectedClassName:`${ue}--selected`},L=s=>{const{children:n,className:t,forceRender:d,id:l,selected:h,selectedClassName:c,...b}={...Oe,...s};return O.createElement("div",Object.assign({},b,{className:z(t,{[c]:h}),role:"tabpanel",id:`panel${l}`,"aria-labelledby":`tab${l}`}),d||h?n:null)};L.tabsRole="TabPanel";L.propTypes={};function Ue(s){return we({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M13 10h-2V8h2v2zm0-4h-2V1h2v5zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21 4.96 19.25 4l-3.7 7H8.53L4.27 2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2z"}}]})(s)}function Me(){const[s,n]=o.useState([]),[t,d]=o.useState("date"),[l,h]=o.useState(!1),[c,b]=o.useState(0),x=5,[g,p]=o.useState([]);o.useEffect(()=>{(async()=>{try{const m=await D.get("https://endpoints-ashy.vercel.app/api/order/getorders");n(m.data.orders)}catch(m){console.error("Error fetching orders:",m),Q.error("Failed to fetch orders")}})()},[]);const N=o.useMemo(()=>[{Header:"Payment Id",accessor:"uniqueOrderId"},{Header:"Total",accessor:"grandTotal"},{Header:"Name",accessor:r=>r.addressInfo.name},{Header:"Address",accessor:r=>`${r.addressInfo.roomNo||""}, ${r.addressInfo.society||""}, ${r.addressInfo.street||""}, ${r.addressInfo.city||""}, ${r.addressInfo.pincode}`},{Header:"Phone Number",accessor:r=>r.addressInfo.phoneNumber},{Header:"Email",accessor:"email"},{Header:"Product Info",accessor:r=>{const m=r.cartItems.map(f=>`
            <div style="margin-bottom: 20px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">
              <div style="text-align: center;">
                <img src="${`https://endpoints-ashy.vercel.app${f.imageUrls[0]}`}" alt="${f.name}" style="max-width: 150px; height: auto; display: block; margin: 0 auto;" />
              </div>
              <div style="text-align: center;">
                <div><strong>Product Name:</strong> ${f.name}</div>
                <div><strong>Price:</strong> ₹${f.price}</div>
                <div><strong>Category:</strong> ${f.category.name||"N/A"}</div>
                <div><strong>Color:</strong> ${f.selectedColor}</div>
                <div><strong>Size:</strong> ${f.selectedSize}</div>
                <div><strong>Quantity:</strong> ${f.quantity}</div>
              </div>
            </div>
          `).join("<br/><br/>");return e.jsx("div",{dangerouslySetInnerHTML:{__html:m}})}},{Header:"Current Payment Status",accessor:r=>r.status||"Pending"},{Header:"Edit Payment Status",accessor:(r,m)=>e.jsxs("select",{value:g[m]||r.status||"pending",onChange:async f=>{const E=f.target.value,C=r.uniqueOrderId,j=[...g];j[m]=E,p(j);try{const T=await D.put(`https://endpoints-ashy.vercel.app/api/order/updatestatus/${C}/payment-status`,{status:E});Q.success(T.data.message)}catch{Q.error("Error updating payment status"),j[m]=r.paymentStatus,p(j)}},children:[e.jsx("option",{value:"Pending",children:"Pending"}),e.jsx("option",{value:"Received",children:"Received"})]})},{Header:"Shipping Status",accessor:r=>r.shippingStatus||"Pending"},{Header:"Date",accessor:r=>new Date(r.orderDate).toLocaleString()}],[g]),P=r=>{r===t?h(!l):(d(r),h(!1))},i=o.useMemo(()=>[...s].sort((m,f)=>m[t]<f[t]?l?1:-1:m[t]>f[t]?l?-1:1:0),[s,t,l]),y=i.slice(c*x,(c+1)*x),v=Math.ceil(i.length/x);return e.jsxs("div",{className:"px-4 md:px-0 mb-16",style:{marginBottom:"10rem"},children:[e.jsx("h1",{className:"text-center mb-5 text-3xl font-semibold underline",children:"Order Details"}),e.jsxs("div",{className:"relative overflow-x-auto",children:[e.jsxs("table",{className:"min-w-full text-sm text-left text-gray-500",children:[e.jsx("thead",{className:"text-xs text-black uppercase bg-gray-200 border border-gray-600 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]",children:e.jsx("tr",{children:N.map(r=>e.jsxs("th",{onClick:()=>P(r.accessor),className:"px-4 py-2 cursor-pointer",children:[r.Header,t===r.accessor?l?" ▼":" ▲":""]},r.Header))})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:y.map((r,m)=>e.jsx("tr",{className:"hover:bg-gray-100 transition-colors duration-200",children:N.map((f,E)=>e.jsx("td",{className:"px-4 py-2",children:f.accessor instanceof Function?f.accessor(r,m):r[f.accessor]},E))},m))})]}),e.jsxs("div",{className:"flex items-center justify-between mt-4 px-4 py-2 bg-gray-200",children:[e.jsx("button",{onClick:()=>b(r=>Math.max(r-1,0)),disabled:c===0,className:`px-4 py-2 rounded-lg ${c>0?"bg-[#3C2A21] text-white":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:"Previous"}),e.jsxs("span",{className:"mx-4 text-gray-600",children:["Page ",e.jsx("strong",{children:c+1})," of ",e.jsx("strong",{children:v})]}),e.jsx("button",{onClick:()=>b(r=>Math.min(r+1,v-1)),disabled:c>=v-1,className:`px-4 py-2 rounded-lg ${c<v-1?"bg-[#3C2A21] text-white":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:"Next"})]})]})]})}function Fe(){const[s,n]=o.useState([]),[t,d]=o.useState("name"),[l,h]=o.useState(!1),[c,b]=o.useState(0),[x,g]=o.useState(0),p=5;o.useEffect(()=>{(async()=>{try{const y=await D.get("https://endpoints-ashy.vercel.app/api/user/getusers",{params:{sortBy:t,sortDesc:l,pageIndex:c,pageSize:p}});n(y.data.users),g(y.data.totalPages)}catch(y){console.error("Error fetching users:",y)}})()},[t,l,c]);const N=o.useMemo(()=>[{Header:"User Id",accessor:"_id"},{Header:"Name",accessor:"name"},{Header:"Email",accessor:"email"}],[]),P=i=>{i===t?h(!l):(d(i),h(!1))};return e.jsxs("div",{className:"px-4 md:px-0 mb-16",children:[e.jsx("h1",{className:"text-center mb-5 text-3xl font-semibold underline",children:"User Details"}),e.jsxs("div",{className:"relative overflow-x-auto",children:[e.jsxs("table",{className:"min-w-full text-sm text-left text-gray-500",children:[e.jsx("thead",{className:"text-xs text-black uppercase bg-gray-200 border border-gray-600 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]",children:e.jsx("tr",{children:N.map(i=>e.jsxs("th",{onClick:()=>P(i.accessor),className:"px-4 py-2 cursor-pointer",children:[i.Header,t===i.accessor?l?" ▼":" ▲":""]},i.Header))})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:s.map((i,y)=>e.jsx("tr",{className:"hover:bg-gray-100 transition-colors duration-200",children:N.map(v=>e.jsx("td",{className:"px-4 py-2",children:i[v.accessor]},v.Header))},y))})]}),e.jsxs("div",{className:"flex items-center justify-between mt-4 px-4 py-2 bg-gray-200",children:[e.jsx("button",{onClick:()=>b(i=>Math.max(i-1,0)),disabled:c===0,className:`px-4 py-2 rounded-lg ${c>0?"bg-[#3C2A21] text-white":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:"Previous"}),e.jsxs("span",{className:"mx-4 text-gray-600",children:["Page ",e.jsx("strong",{children:c+1})," of ",e.jsx("strong",{children:x})]}),e.jsx("button",{onClick:()=>b(i=>Math.min(i+1,x-1)),disabled:c>=x-1,className:`px-4 py-2 rounded-lg ${c<x-1?"bg-[#3C2A21] text-white":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:"Next"})]})]})]})}function ze(){const[s,n]=o.useState([]),[t,d]=o.useState("title"),[l,h]=o.useState(!1),[c,b]=o.useState(0),[x,g]=o.useState(!1),p=5,N=pe();o.useEffect(()=>{(async()=>{try{const j=await D.get("https://endpoints-ashy.vercel.app/api/products/getproducts");n(j.data)}catch(j){console.error("Error fetching products:",j)}})()},[]);const P=C=>C.sort((j,T)=>j[t]<T[t]?l?1:-1:j[t]>T[t]?l?-1:1:0),i=C=>{const j=c*p;return C.slice(j,j+p)},y=C=>{C===t?h(!l):(d(C),h(!1))},v=async C=>{try{await D.delete(`https://endpoints-ashy.vercel.app/api/products/${C}`),n(s.filter(j=>j._id!==C))}catch(j){console.error("Error deleting product:",j)}},r=()=>{const C=P(s);return i(C).map((T,se)=>e.jsxs("tr",{className:"bg-gray-50 border-b dark:border-gray-700",children:[e.jsx("td",{className:"px-6 py-4 text-black",children:T.name}),e.jsx("td",{className:"px-6 py-4 font-medium text-black whitespace-nowrap",children:e.jsx("img",{className:"w-16",src:`https://endpoints-ashy.vercel.app${T.imageUrls[0]}`,alt:"Product"})}),e.jsxs("td",{className:"px-6 py-4 text-black",children:["₹",T.price]}),e.jsx("td",{className:"px-6 py-4",children:e.jsxs("div",{className:"flex gap-2 cursor-pointer text-black",children:[e.jsx("div",{onClick:()=>v(T._id),children:e.jsx(Pe,{size:20})}),e.jsx("div",{onClick:()=>N(`/updateproduct/${T._id}`),children:e.jsx(Ce,{to:`/updateproduct/${T._id}`,children:e.jsx(Te,{size:20})})})]})})]},se))},m=Math.ceil(s.length/p),f=()=>{c>0&&b(C=>C-1)},E=()=>{c<m-1&&b(C=>C+1)};return e.jsxs("div",{className:"px-4 md:px-0 mb-16",children:[e.jsx("h1",{className:"text-center mb-2 text-3xl font-semibold underline",children:"Product Details"}),x&&e.jsx(_e,{}),e.jsx("div",{className:"flex justify-center text-center ",children:e.jsx("button",{onClick:()=>N("/addproduct"),className:"focus:outline-none text-white bg-black shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border hover:bg-pink-700 outline-0 font-medium rounded-lg text-sm px-5 py-2.5 mb-2",children:"Add Product"})}),e.jsxs("div",{className:"relative overflow-x-auto",children:[e.jsxs("table",{className:"w-full text-sm text-left text-gray-500 dark:text-gray-400",children:[e.jsx("thead",{className:"text-xs border border-gray-600 text-black uppercase bg-gray-200",children:e.jsxs("tr",{children:[e.jsxs("th",{className:"px-6 py-3 cursor-pointer",onClick:()=>y("title"),children:["Title ",t==="title"&&e.jsx("span",{children:l?"▼":"▲"})]}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Image"}),e.jsxs("th",{className:"px-6 py-3 cursor-pointer",onClick:()=>y("price"),children:["Price ",t==="price"&&e.jsx("span",{children:l?"▼":"▲"})]}),e.jsx("th",{scope:"col",className:"px-6 py-3",children:"Action"})]})}),e.jsx("tbody",{children:r()})]}),e.jsxs("div",{className:"flex justify-center mt-4",children:[e.jsx("button",{onClick:f,disabled:c===0,className:"bg-gray-200 text-gray-700 px-4 py-2 rounded-l-md mr-2",children:"Prev"}),e.jsx("button",{onClick:E,disabled:c===m-1,className:"bg-gray-200 text-gray-700 px-4 py-2 rounded-r-md",children:"Next"})]})]})]})}function qe(){const[s,n]=o.useState([]),[t,d]=o.useState(!0),[l,h]=o.useState(null),[c,b]=o.useState("createdAt"),[x,g]=o.useState(!1),[p,N]=o.useState(0),P=5;o.useEffect(()=>{(async()=>{try{const m=await D.get("https://endpoints-ashy.vercel.app/api/order/getcancel-requests",{params:{page:p+1,pageSize:P,sortBy:c,sortDesc:x.toString()}});n(m.data.data)}catch(m){h(m)}finally{d(!1)}})()},[p,c,x]);const i=o.useMemo(()=>[{Header:"Order ID",accessor:"uniqueOrderId"},{Header:"Reason for Cancellation/Return",accessor:"reason"},{Header:"Product Photo",accessor:r=>e.jsx("img",{src:`https://endpoints-ashy.vercel.app${r.productPhoto}`,alt:"Product",style:{width:"100px",height:"auto"}})},{Header:"Full Name",accessor:"name"},{Header:"Email",accessor:"email"},{Header:"Phone Number",accessor:"phoneNumber"},{Header:"Date",accessor:r=>new Date(r.createdAt).toLocaleString()}],[]),y=r=>{r===c?g(!x):(b(r),g(!1))},v=10;return t?e.jsx("p",{children:"Loading..."}):l?e.jsxs("p",{children:["Error: ",l.message]}):e.jsxs("div",{className:"px-4 md:px-0 mb-16",children:[e.jsx("h1",{className:"text-center mb-5 text-3xl font-semibold underline",children:"Cancellation Requests"}),e.jsxs("div",{className:"relative overflow-x-auto",children:[e.jsxs("table",{className:"min-w-full text-sm text-left text-gray-500",children:[e.jsx("thead",{className:"text-xs text-black uppercase bg-gray-200 border border-gray-600 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]",children:e.jsx("tr",{children:i.map(r=>e.jsxs("th",{onClick:()=>y(r.accessor),className:"px-4 py-2 cursor-pointer",children:[r.Header,c===r.accessor?x?" ▼":" ▲":""]},r.Header))})}),e.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:s.map((r,m)=>e.jsx("tr",{className:"hover:bg-gray-100 transition-colors duration-200",children:i.map(f=>e.jsx("td",{className:"px-4 py-2",children:f.accessor instanceof Function?f.accessor(r):r[f.accessor]},f.Header))},m))})]}),e.jsxs("div",{className:"flex items-center justify-between mt-4 px-4 py-2 bg-gray-200",children:[e.jsx("button",{onClick:()=>N(r=>Math.max(r-1,0)),disabled:p===0,className:`px-4 py-2 rounded-lg ${p>0?"bg-[#3C2A21] text-white":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:"Previous"}),e.jsxs("span",{className:"mx-4 text-gray-600",children:["Page ",e.jsx("strong",{children:p+1})," of ",e.jsx("strong",{children:v})]}),e.jsx("button",{onClick:()=>N(r=>Math.min(r+1,v-1)),disabled:p>=v-1,className:`px-4 py-2 rounded-lg ${p<v-1?"bg-[#3C2A21] text-white":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:"Next"})]})]})]})}function Ke(){const s=o.useContext(xe),{mode:n,product:t,edithandle:d,deleteProduct:l,order:h,user:c,look:b,deleteLook:x}=s;return o.useState(!1),pe(),e.jsx(e.Fragment,{children:e.jsx("div",{className:"container mx-auto",children:e.jsx("div",{className:"tab container mx-auto ",children:e.jsxs(ee,{defaultIndex:0,className:" ",children:[e.jsxs(te,{className:"md:flex md:space-x-8 bg-  grid grid-cols-2 text-center gap-4   md:justify-center mb-10 ",children:[e.jsx(A,{children:e.jsx("button",{type:"button",className:"font-medium border-b-2 hover:shadow-purple-700 border-purple-500 text-purple-500 rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]  px-5 py-1.5 text-center bg-[#605d5d12] ",children:e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(Ue,{}),"Products"]})})}),e.jsx(A,{children:e.jsx("button",{type:"button",className:"font-medium border-b-2 border-pink-500 bg-[#605d5d12] text-pink-500  hover:shadow-pink-700  rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]    px-5 py-1.5 text-center ",children:e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(de,{})," Order"]})})}),e.jsx(A,{children:e.jsx("button",{type:"button",className:"font-medium border-b-2 border-pink-500 bg-[#605d5d12] text-pink-500  hover:shadow-pink-700  rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]    px-5 py-1.5 text-center ",children:e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(de,{})," Cancel Request"]})})}),e.jsx(A,{children:e.jsx("button",{type:"button",className:"font-medium border-b-2 border-green-500 bg-[#605d5d12] text-green-500 rounded-lg text-xl  hover:shadow-green-700 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]   px-5 py-1.5 text-center ",children:e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsx(Se,{})," Users"]})})})]}),e.jsx(L,{children:e.jsx(ze,{product:t,deleteProduct:l,edithandle:d})}),e.jsx(L,{children:e.jsx(Me,{order:h})}),e.jsx(L,{children:e.jsx(qe,{})}),e.jsx(L,{children:e.jsx(Fe,{user:c})})]})})})})}function tt(){o.useContext(xe);const[s,n]=o.useState({totalProducts:0,totalOrders:0,totalUsers:0});o.useEffect(()=>{(async()=>{try{const c=await D.get("https://endpoints-ashy.vercel.app/api/products/getproducts"),b=await D.get("https://endpoints-ashy.vercel.app/api/order/getorderscount"),x=await D.get("https://endpoints-ashy.vercel.app/api/user/getusers");n({totalProducts:c.data.length,totalOrders:b.data.length,totalUsers:x.data.totalUsers})}catch(c){console.error("Error fetching data:",c)}})()},[]);const{totalProducts:t,totalOrders:d,totalUsers:l}=s;return e.jsx(ke,{children:e.jsxs("section",{className:"text-gray-600 body-font flex flex-col justify-center items-center",children:[e.jsx("div",{className:"container mx-auto px-4 mb-10",children:e.jsxs("div",{className:"flex flex-wrap -m-4 text-center",children:[e.jsx(J,{icon:e.jsx(G,{size:50}),count:t,label:"Total Products"}),e.jsx(J,{icon:e.jsx(G,{size:50}),count:d,label:"Total Orders"}),e.jsx(J,{icon:e.jsx(G,{size:50}),count:l,label:"Total Users"})]})}),e.jsx(Ke,{})]})})}const J=({icon:s,count:n,label:t})=>e.jsx("div",{className:"p-4 md:w-1/3 sm:w-1/2 w-full",children:e.jsxs("div",{className:"border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300 px-4 py-3 rounded-xl",children:[e.jsx("div",{className:"text-purple-500 w-12 h-12 mb-3 inline-block",viewBox:"0 0 24 24",children:s}),e.jsx("h2",{className:"title-font font-medium text-3xl text-black",children:n}),e.jsx("p",{className:" text-purple-500 font-bold",children:t})]})});export{tt as default};