"use strict";(self.webpackChunkfreshCart=self.webpackChunkfreshCart||[]).push([[290],{5290:(p,_,c)=>{c.r(_),c.d(_,{CartComponent:()=>n});var m=c(6814),l=c(1120),t=c(4769),d=c(1288);function s(r,h){if(1&r){const e=t.EpF();t.TgZ(0,"div",9)(1,"div",10),t._UZ(2,"img",11),t.qZA(),t.TgZ(3,"div",12)(4,"div",2)(5,"div")(6,"h4"),t._uU(7),t.qZA(),t.TgZ(8,"h5",13),t._uU(9),t.qZA(),t.TgZ(10,"span",14),t.NdJ("click",function(){const a=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.removeId(a.product._id))}),t._UZ(11,"i",15),t._uU(12," Remove"),t.qZA()(),t.TgZ(13,"div")(14,"button",16),t.NdJ("click",function(){const a=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.upDataId(a.product._id,a.count+1))}),t._uU(15,"+"),t.qZA(),t.TgZ(16,"span",17),t._uU(17),t.qZA(),t.TgZ(18,"button",16),t.NdJ("click",function(){const a=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.upDataId(a.product._id,a.count-1))}),t._uU(19,"-"),t.qZA()()()(),t._UZ(20,"hr",18),t.qZA()}if(2&r){const e=h.$implicit;t.xp6(2),t.Q6J("src",e.product.imageCover,t.LSH),t.xp6(5),t.Oqu(e.product.title),t.xp6(2),t.hij("",e.price," EGP"),t.xp6(8),t.Oqu(e.count)}}const C=function(r){return["/payment",r]};let n=(()=>{class r{constructor(e){this._CartService=e,this.getCartId={}}ngOnInit(){this._CartService.getToCart().subscribe({next:e=>{this.getCartId=e.data}})}removeId(e){this._CartService.removeToCart(e).subscribe({next:i=>{this.getCartId=i.data,this._CartService.cartNumber.next(i.numOfCartItems)}})}upDataId(e,i){i>=1&&this._CartService.upDataToCart(e,i).subscribe({next:o=>{this.getCartId=o.data}})}clearAll(){this._CartService.clearToCart().subscribe({next:e=>{"success"===e.message&&(this.getCartId={},this._CartService.cartNumber.next(0))}})}static#t=this.\u0275fac=function(i){return new(i||r)(t.Y36(d.N))};static#e=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-cart"]],standalone:!0,features:[t.jDz],decls:15,vars:5,consts:[[1,"pt-4"],[1,"container","bg-main-light","p-3","shadow"],[1,"d-flex","justify-content-between"],[1,"text-main","my-3","mb-5"],[1,"m-3"],[1,"btn","btn-outline-danger",3,"click"],["class","row align-items-center ",4,"ngFor","ngForOf"],[1,"btn","bg-main","text-white","w-100",3,"routerLink"],["src","./assets/images/visa-1.svg","alt",""],[1,"row","align-items-center"],[1,"col-md-2"],["alt","",1,"w-100","mb-2",3,"src"],[1,"col-md-9"],[1,"text-main"],["role","button",1,"text-danger",3,"click"],[1,"fa-solid","fa-trash-can"],[1,"btn","btn-outline-success","btn-sm",3,"click"],[1,"mx-2"],[1,"mt-3"]],template:function(i,o){1&i&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div")(4,"h4"),t._uU(5,"Shop Cart"),t.qZA(),t.TgZ(6,"h5",3),t._uU(7),t.qZA()(),t.TgZ(8,"div",4)(9,"button",5),t.NdJ("click",function(){return o.clearAll()}),t._uU(10,"Clear All"),t.qZA()()(),t.YNc(11,s,21,4,"div",6),t.TgZ(12,"button",7),t._uU(13,"Online Payment "),t._UZ(14,"img",8),t.qZA()()()),2&i&&(t.xp6(7),t.hij("Total Price : ",o.getCartId.totalCartPrice," EGP"),t.xp6(4),t.Q6J("ngForOf",o.getCartId.products),t.xp6(1),t.Q6J("routerLink",t.VKq(3,C,o.getCartId._id)))},dependencies:[m.ez,m.sg,l.rH]})}return r})()},1288:(p,_,c)=>{c.d(_,{N:()=>d});var m=c(5619),l=c(4769),t=c(9862);let d=(()=>{class s{constructor(n){this._HttpClient=n,this.cartNumber=new m.X(0)}addToCart(n){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/cart",{productId:n})}getToCart(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/cart")}removeToCart(n){return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${n}`)}upDataToCart(n,r){return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${n}`,{count:r})}clearToCart(){return this._HttpClient.delete("https://ecommerce.routemisr.com/api/v1/cart")}checkOut(n,r){return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${n}?url=https://moust2fa.github.io/GraduationProject/`,{shippingAddress:r})}AllOlder(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/orders")}static#t=this.\u0275fac=function(r){return new(r||s)(l.LFG(t.eN))};static#e=this.\u0275prov=l.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()}}]);