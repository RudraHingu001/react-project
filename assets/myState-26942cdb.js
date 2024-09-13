import{r as c,j as X,Q as i}from"./index-b566968a.js";import{m as Y}from"./myContext-99f98be9.js";import{T as k,c as n,f as a,b as E,q as y,o as h,d,s as Z,e as tt,g as p,h as U}from"./FirebaseConfig-f1ddf40d.js";import"./index-bea2a320-8c0c8ce8.js";function ct(q){const[v,e]=c.useState(!1),[u,g]=c.useState({id_:null,title:null,quantity:1,price:null,imageUrl:null,category:null,description:null,time:k.now(),date:new Date().toLocaleString("en-US",{month:"short",day:"2-digit",year:"numeric"})}),[P,x]=c.useState({id_:null,title:null,quantity:1,price:null,imageUrl:null,imageUrl2:null,imageUrl3:null,imageUrl4:null,category:null,description:null,time:k.now(),date:new Date().toLocaleString("en-US",{month:"short",day:"2-digit",year:"numeric"})}),R=async()=>{if(u._id==null||u.price==null||u.imageUrl==null||u.category==null||u.description==null)return i.error("all fields are required");e(!0);try{const t=n(a,"products");await E(t,u),i.success("Add product successfully"),f(),e(!1)}catch{e(!1)}},[b,A]=c.useState([]),[L,T]=c.useState([]),[j,_]=c.useState([]),m=async()=>{try{const t=y(n(a,"looks")),o=h(t,s=>{let r=[];s.forEach(l=>{r.push({...l.data(),id:l.id})}),T(r)});return()=>o}catch(t){console.log(t),e(!1)}},w=()=>{const t=y(n(a,"productReviews"));return h(t,s=>{let r=[];s.forEach(l=>{r.push({...l.data(),id:l.id})}),_(r),console.log(r)},s=>{console.error("Error fetching reviews:",s),e(!1)})},F=async t=>{e(!0);try{const o=d(a,"looks","look1");await Z(o,t),Object.keys(t).forEach(async s=>{if(s.startsWith("product")){const r=t[s],l=s.replace("product","image"),S=t[l],D=d(a,"products",r);(await tt(D)).exists()?await updateDoc(D,{imageUrl:S}):await E(n(a,"products"),{id_:r,imageUrl:S})}}),i.success("Look updated successfully"),e(!1)}catch(o){console.error("Error updating look:",o),i.error("Failed to update look"),e(!1)}},f=async()=>{e(!0),w();try{const t=y(n(a,"products")),o=h(t,s=>{let r=[];s.forEach(l=>{r.push({...l.data(),id:l.id})}),A(r),console.log(r),e(!1)});return()=>o}catch(t){console.log(t),e(!1)}},O=t=>{g(t)},Q=async t=>{e(!0);try{(await p(n(a,"products"))).size===1&&console.log("This is the last document in the collection"),await U(d(a,"products",t.id)),console.log(`Document with ID ${t.id} deleted`),await f(),(await p(n(a,"products"))).empty&&console.log("The collection is now empty"),e(!1)}catch(o){console.log(o),i.error("Error deleting product"),e(!1)}},I=async t=>{e(!0);try{await U(d(a,"looks",t.id)),m(),e(!1)}catch(o){console.log(o),e(!1)}},[z,B]=c.useState([]),C=async()=>{e(!0);try{const t=await p(n(a,"order")),o=[];t.forEach(s=>{o.push(s.data()),e(!1)}),B(o),e(!1)}catch(t){console.log(t),e(!1)}},[K,W]=c.useState([]),$=async()=>{e(!0);try{const t=await p(n(a,"users")),o=[];t.forEach(s=>{o.push(s.data()),e(!1)}),W(o),e(!1)}catch(t){console.log(t),e(!1)}};c.useEffect(()=>{C(),$(),w(),m(),f()},[]);const[G,H]=c.useState(""),[J,M]=c.useState(""),[N,V]=c.useState("");return X.jsx(Y.Provider,{value:{loading:v,setLoading:e,products:u,setProducts:g,addProduct:R,product:b,look:L,updateLook:F,edithandle:O,deleteProduct:Q,order:z,reviews:j,user:K,searchkey:G,setSearchkey:H,filterType:J,setFilterType:M,filterPrice:N,setFilterPrice:V,looks:P,setLooks:x,deleteLook:I},children:q.children})}export{ct as default};