"use strict";(self.webpackChunkfreshCart=self.webpackChunkfreshCart||[]).push([[159],{159:(A,l,n)=>{n.r(l),n.d(l,{HomeComponent:()=>D});var m=n(1120),c=n(6814),_=n(756),t=n(4769),g=n(2709),d=n(1288),p=n(2425),u=n(6286);function h(s,a){1&s&&t._UZ(0,"img",14)}function f(s,a){1&s&&t._UZ(0,"img",15)}function v(s,a){1&s&&t._UZ(0,"img",16)}function x(s,a){if(1&s&&(t._UZ(0,"img",17),t.TgZ(1,"h5",18),t._uU(2),t.qZA()),2&s){const e=t.oxw().$implicit;t.Q6J("src",e.image,t.LSH)("title",e.name),t.xp6(2),t.Oqu(e.name)}}function T(s,a){1&s&&(t.ynx(0),t.YNc(1,x,3,3,"ng-template",4),t.BQk())}function C(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"i",29),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit,r=t.oxw();return t.KtG(r.addWishlist(o._id))}),t.qZA()}}function Z(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"i",30),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit,r=t.oxw();return t.KtG(r.removeWishlist(o._id))}),t.qZA()}}const O=function(s){return["/details",s]};function E(s,a){if(1&s){const e=t.EpF();t.TgZ(0,"div",19)(1,"div",20),t.YNc(2,C,1,0,"i",21),t.YNc(3,Z,1,0,"i",22),t.TgZ(4,"div",23)(5,"div"),t._UZ(6,"img",24),t.qZA(),t.TgZ(7,"h5",25),t._uU(8),t.qZA(),t.TgZ(9,"h6"),t._uU(10),t.qZA(),t.TgZ(11,"div",26)(12,"span"),t._uU(13),t.qZA(),t.TgZ(14,"span"),t._UZ(15,"i",27),t._uU(16),t.qZA()()(),t.TgZ(17,"button",28),t.NdJ("click",function(){const r=t.CHM(e).$implicit,w=t.oxw();return t.KtG(w.addCart(r._id))}),t._uU(18,"Add To Cart"),t.qZA()()()}if(2&s){const e=a.$implicit,i=t.oxw();t.xp6(2),t.Q6J("ngIf",!i.wishlistId.includes(e._id)),t.xp6(1),t.Q6J("ngIf",i.wishlistId.includes(e._id)),t.xp6(1),t.Q6J("routerLink",t.VKq(8,O,e._id)),t.xp6(2),t.Q6J("src",e.imageCover,t.LSH),t.xp6(2),t.Oqu(e.category.name),t.xp6(2),t.Oqu(e.title.split(" ",2).join(" ")),t.xp6(3),t.hij("",e.price," EGP"),t.xp6(3),t.hij(" ",e.ratingsAverage,"")}}let D=(()=>{class s{constructor(e,i,o,r){this._BlankService=e,this._CartService=i,this._ToastrService=o,this._WishlistService=r,this.productData=[],this.categories=[],this.wishlistId=[],this.customOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!1,navSpeed:1e3,navText:["",""],autoplay:!0,responsive:{0:{items:1},400:{items:3},740:{items:4},940:{items:6}},nav:!0},this.categoriesOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!1,navSpeed:1e3,navText:["",""],items:1,nav:!0,autoplay:!0}}ngOnInit(){this._BlankService.getProduct().subscribe({next:e=>{this.productData=e.data}}),this._BlankService.getCategories().subscribe({next:e=>{this.categories=e.data}}),this._WishlistService.getToWishlist().subscribe({next:e=>{const i=e.data.map(o=>o._id);this.wishlistId=i}})}addCart(e){this._CartService.addToCart(e).subscribe({next:i=>{this._ToastrService.success(i.message),this._CartService.cartNumber.next(i.numOfCartItems)},error:i=>{}})}addWishlist(e){this._WishlistService.addToWishlist(e).subscribe({next:i=>{console.log(i),this.wishlistId=i.data,this._ToastrService.success("\u2764",i.message)}})}removeWishlist(e){this._WishlistService.removeToWishlist(e).subscribe({next:i=>{this.wishlistId=i.data,this._ToastrService.success("\u274c",i.message)}})}static#t=this.\u0275fac=function(i){return new(i||s)(t.Y36(g.X),t.Y36(d.N),t.Y36(p._W),t.Y36(u.M))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-home"]],standalone:!0,features:[t.jDz],decls:17,vars:4,consts:[[1,"pt-2"],[1,"row","g-0"],[1,"col-md-8"],[3,"options"],["carouselSlide",""],[1,"col-md-4"],["height","200","src","./assets/images/slide-1.jpeg","alt","",1,"w-100"],["height","200","src","./assets/images/slide-2.jpeg","alt","",1,"w-100"],[1,"mt-4","mb-3"],[4,"ngFor","ngForOf"],[1,"my-3"],[1,"container-fluid"],[1,"row","justify-content-center","g-4"],["class","col-md-2",4,"ngFor","ngForOf"],["height","400","src","./assets/images/main-slider-1.jpeg","alt","",1,"w-100"],["height","400","src","./assets/images/main-slider-2.jpeg","alt","",1,"w-100"],["height","400","src","./assets/images/main-slider-3.jpeg","alt","",1,"w-100"],["height","300",1,"w-100",3,"src","title"],[1,"text-center","mt-2","text-main"],[1,"col-md-2"],[1,"product","p-2"],["role","button","class","fa-regular fa-heart fs-1 heart",3,"click",4,"ngIf"],["role","button","class","fa-solid fa-heart fs-1 heart text1",3,"click",4,"ngIf"],["role","button",3,"routerLink"],["alt","",1,"w-100","mb-3",3,"src"],[1,"text-main"],[1,"d-flex","justify-content-between"],[1,"fas","fa-star","rating-color"],[1,"add-btn","btn","bg-main","text-white","w-100","mt-3",3,"click"],["role","button",1,"fa-regular","fa-heart","fs-1","heart",3,"click"],["role","button",1,"fa-solid","fa-heart","fs-1","heart","text1",3,"click"]],template:function(i,o){1&i&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"owl-carousel-o",3),t.YNc(4,h,1,0,"ng-template",4),t.YNc(5,f,1,0,"ng-template",4),t.YNc(6,v,1,0,"ng-template",4),t.qZA()(),t.TgZ(7,"div",5),t._UZ(8,"img",6)(9,"img",7),t.qZA()()(),t.TgZ(10,"div",8)(11,"owl-carousel-o",3),t.YNc(12,T,2,0,"ng-container",9),t.qZA()(),t.TgZ(13,"div",10)(14,"div",11)(15,"div",12),t.YNc(16,E,19,10,"div",13),t.qZA()()()),2&i&&(t.xp6(3),t.Q6J("options",o.categoriesOptions),t.xp6(8),t.Q6J("options",o.customOptions),t.xp6(1),t.Q6J("ngForOf",o.categories),t.xp6(4),t.Q6J("ngForOf",o.productData))},dependencies:[c.ez,c.sg,c.O5,m.rH,_.bB,_.Fy,_.Mp],styles:[".text1[_ngcontent-%COMP%]{color:red}"]})}return s})()}}]);