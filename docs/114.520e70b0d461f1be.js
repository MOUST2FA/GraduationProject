"use strict";(self.webpackChunkfreshCart=self.webpackChunkfreshCart||[]).push([[114],{5114:(y,x,c)=>{c.r(x),c.d(x,{ProductComponent:()=>G});var C=c(1120),g=c(6814),e=c(4769);function h(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const r=e.MAs(1);return e.KtG(r.previous())})("click",function(){e.CHM(t),e.oxw(3);const r=e.MAs(1);return e.KtG(r.previous())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function _(i,a){if(1&i&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.previousLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function p(i,a){if(1&i&&(e.TgZ(0,"li",9),e.YNc(1,h,4,2,"a",10),e.YNc(2,_,4,2,"span",11),e.qZA()),2&i){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isFirstPage()),e.xp6(1),e.Q6J("ngIf",1<t.getCurrent()),e.xp6(1),e.Q6J("ngIf",t.isFirstPage())}}function l(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t);const r=e.oxw().$implicit;e.oxw(2);const s=e.MAs(1);return e.KtG(s.setCurrent(r.value))})("click",function(){e.CHM(t);const r=e.oxw().$implicit;e.oxw(2);const s=e.MAs(1);return e.KtG(s.setCurrent(r.value))}),e.TgZ(1,"span",13),e._uU(2),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"number"),e.qZA()()}if(2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(2),e.hij("",n.screenReaderPageLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(5,2,t.label,""))}}function f(i,a){if(1&i&&(e.ynx(0),e.TgZ(1,"span",16)(2,"span",13),e._uU(3),e.qZA(),e.TgZ(4,"span"),e._uU(5),e.ALo(6,"number"),e.qZA()(),e.BQk()),2&i){const t=e.oxw().$implicit,n=e.oxw(2);e.xp6(3),e.hij("",n.screenReaderCurrentLabel," "),e.xp6(2),e.Oqu("..."===t.label?t.label:e.xi3(6,2,t.label,""))}}function M(i,a){if(1&i&&(e.TgZ(0,"li"),e.YNc(1,l,6,5,"a",10),e.YNc(2,f,7,5,"ng-container",15),e.qZA()),2&i){const t=a.$implicit;e.oxw(2);const n=e.MAs(1);e.ekj("current",n.getCurrent()===t.value)("ellipsis","..."===t.label),e.xp6(1),e.Q6J("ngIf",n.getCurrent()!==t.value),e.xp6(1),e.Q6J("ngIf",n.getCurrent()===t.value)}}function Z(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",12),e.NdJ("keyup.enter",function(){e.CHM(t),e.oxw(3);const r=e.MAs(1);return e.KtG(r.next())})("click",function(){e.CHM(t),e.oxw(3);const r=e.MAs(1);return e.KtG(r.next())}),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()}if(2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function S(i,a){if(1&i&&(e.TgZ(0,"span",14),e._uU(1),e.TgZ(2,"span",13),e._uU(3),e.qZA()()),2&i){const t=e.oxw(3);e.xp6(1),e.hij(" ",t.nextLabel," "),e.xp6(2),e.Oqu(t.screenReaderPageLabel)}}function D(i,a){if(1&i&&(e.TgZ(0,"li",17),e.YNc(1,Z,4,2,"a",10),e.YNc(2,S,4,2,"span",11),e.qZA()),2&i){e.oxw(2);const t=e.MAs(1);e.ekj("disabled",t.isLastPage()),e.xp6(1),e.Q6J("ngIf",!t.isLastPage()),e.xp6(1),e.Q6J("ngIf",t.isLastPage())}}function N(i,a){if(1&i&&(e.TgZ(0,"ul",4),e.YNc(1,p,3,4,"li",5),e.TgZ(2,"li",6),e._uU(3),e.qZA(),e.YNc(4,M,3,6,"li",7),e.YNc(5,D,3,4,"li",8),e.qZA()),2&i){const t=e.oxw(),n=e.MAs(1);e.ekj("responsive",t.responsive),e.xp6(1),e.Q6J("ngIf",t.directionLinks),e.xp6(2),e.AsE(" ",n.getCurrent()," / ",n.getLastPage()," "),e.xp6(1),e.Q6J("ngForOf",n.pages)("ngForTrackBy",t.trackByIndex),e.xp6(1),e.Q6J("ngIf",t.directionLinks)}}class L{constructor(){this.change=new e.vpe,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}defaultId(){return this.DEFAULT_ID}register(a){return null==a.id&&(a.id=this.DEFAULT_ID),this.instances[a.id]?this.updateInstance(a):(this.instances[a.id]=a,!0)}updateInstance(a){let t=!1;for(let n in this.instances[a.id])a[n]!==this.instances[a.id][n]&&(this.instances[a.id][n]=a[n],t=!0);return t}getCurrentPage(a){return this.instances[a]?this.instances[a].currentPage:1}setCurrentPage(a,t){if(this.instances[a]){let n=this.instances[a];t<=Math.ceil(n.totalItems/n.itemsPerPage)&&1<=t&&(this.instances[a].currentPage=t,this.change.emit(a))}}setTotalItems(a,t){this.instances[a]&&0<=t&&(this.instances[a].totalItems=t,this.change.emit(a))}setItemsPerPage(a,t){this.instances[a]&&(this.instances[a].itemsPerPage=t,this.change.emit(a))}getInstance(a=this.DEFAULT_ID){return this.instances[a]?this.clone(this.instances[a]):{}}clone(a){var t={};for(var n in a)a.hasOwnProperty(n)&&(t[n]=a[n]);return t}}const E=Number.MAX_SAFE_INTEGER;let F=(()=>{class i{constructor(t){this.service=t,this.state={}}transform(t,n){if(!(t instanceof Array)){let v=n.id||this.service.defaultId();return this.state[v]?this.state[v].slice:t}let u,d,r=n.totalItems&&n.totalItems!==t.length,s=this.createInstance(t,n),o=s.id,m=s.itemsPerPage,I=this.service.register(s);if(!r&&t instanceof Array){if(m=+m||E,u=(s.currentPage-1)*m,d=u+m,this.stateIsIdentical(o,t,u,d))return this.state[o].slice;{let T=t.slice(u,d);return this.saveState(o,t,T,u,d),this.service.change.emit(o),T}}return I&&this.service.change.emit(o),this.saveState(o,t,t,u,d),t}createInstance(t,n){return this.checkConfig(n),{id:null!=n.id?n.id:this.service.defaultId(),itemsPerPage:+n.itemsPerPage||0,currentPage:+n.currentPage||1,totalItems:+n.totalItems||t.length}}checkConfig(t){const r=["itemsPerPage","currentPage"].filter(s=>!(s in t));if(0<r.length)throw new Error(`PaginatePipe: Argument is missing the following required properties: ${r.join(", ")}`)}saveState(t,n,r,s,o){this.state[t]={collection:n,size:n.length,slice:r,start:s,end:o}}stateIsIdentical(t,n,r,s){let o=this.state[t];return!(!o||o.size!==n.length||o.start!==r||o.end!==s)&&o.slice.every((d,m)=>d===n[r+m])}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(L,16))},i.\u0275pipe=e.Yjl({name:"paginate",type:i,pure:!1}),i})(),B=(()=>{class i{constructor(t,n){this.service=t,this.changeDetectorRef=n,this.maxSize=7,this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this.pages=[],this.changeSub=this.service.change.subscribe(r=>{this.id===r&&(this.updatePageLinks(),this.changeDetectorRef.markForCheck(),this.changeDetectorRef.detectChanges())})}ngOnInit(){void 0===this.id&&(this.id=this.service.defaultId()),this.updatePageLinks()}ngOnChanges(t){this.updatePageLinks()}ngOnDestroy(){this.changeSub.unsubscribe()}previous(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)}next(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)}isFirstPage(){return 1===this.getCurrent()}isLastPage(){return this.getLastPage()===this.getCurrent()}setCurrent(t){this.pageChange.emit(t)}getCurrent(){return this.service.getCurrentPage(this.id)}getLastPage(){let t=this.service.getInstance(this.id);return t.totalItems<1?1:Math.ceil(t.totalItems/t.itemsPerPage)}getTotalItems(){return this.service.getInstance(this.id).totalItems}checkValidId(){null==this.service.getInstance(this.id).id&&console.warn(`PaginationControlsDirective: the specified id "${this.id}" does not match any registered PaginationInstance`)}updatePageLinks(){let t=this.service.getInstance(this.id);const n=this.outOfBoundCorrection(t);n!==t.currentPage?setTimeout(()=>{this.pageBoundsCorrection.emit(n),this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}):this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)}outOfBoundCorrection(t){const n=Math.ceil(t.totalItems/t.itemsPerPage);return n<t.currentPage&&0<n?n:t.currentPage<1?1:t.currentPage}createPageArray(t,n,r,s){s=+s;let o=[];const u=Math.max(Math.ceil(r/n),1),d=Math.ceil(s/2),m=t<=d,I=u-d<t,v=!m&&!I;let T=s<u,P=1;for(;P<=u&&P<=s;){let A,w=this.calculatePageNumber(P,t,s,u);A=T&&(2===P&&(v||I)||P===s-1&&(v||m))?"...":w,o.push({label:A,value:w}),P++}return o}calculatePageNumber(t,n,r,s){let o=Math.ceil(r/2);return t===r?s:1===t?t:r<s?s-o<n?s-r+t:o<n?n-o+t:t:t}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(L),e.Y36(e.sBO))},i.\u0275dir=e.lG2({type:i,selectors:[["pagination-template"],["","pagination-template",""]],inputs:{id:"id",maxSize:"maxSize"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},exportAs:["paginationApi"],features:[e.TTD]}),i})();function k(i){return!!i&&"false"!==i}let H=(()=>{class i{constructor(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new e.vpe,this.pageBoundsCorrection=new e.vpe,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}get directionLinks(){return this._directionLinks}set directionLinks(t){this._directionLinks=k(t)}get autoHide(){return this._autoHide}set autoHide(t){this._autoHide=k(t)}get responsive(){return this._responsive}set responsive(t){this._responsive=k(t)}trackByIndex(t){return t}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["pagination-controls"]],inputs:{id:"id",maxSize:"maxSize",directionLinks:"directionLinks",autoHide:"autoHide",responsive:"responsive",previousLabel:"previousLabel",nextLabel:"nextLabel",screenReaderPaginationLabel:"screenReaderPaginationLabel",screenReaderPageLabel:"screenReaderPageLabel",screenReaderCurrentLabel:"screenReaderCurrentLabel"},outputs:{pageChange:"pageChange",pageBoundsCorrection:"pageBoundsCorrection"},decls:4,vars:4,consts:[[3,"id","maxSize","pageChange","pageBoundsCorrection"],["p","paginationApi"],["role","navigation"],["class","ngx-pagination",3,"responsive",4,"ngIf"],[1,"ngx-pagination"],["class","pagination-previous",3,"disabled",4,"ngIf"],[1,"small-screen"],[3,"current","ellipsis",4,"ngFor","ngForOf","ngForTrackBy"],["class","pagination-next",3,"disabled",4,"ngIf"],[1,"pagination-previous"],["tabindex","0",3,"keyup.enter","click",4,"ngIf"],["aria-disabled","true",4,"ngIf"],["tabindex","0",3,"keyup.enter","click"],[1,"show-for-sr"],["aria-disabled","true"],[4,"ngIf"],["aria-live","polite"],[1,"pagination-next"]],template:function(t,n){if(1&t&&(e.TgZ(0,"pagination-template",0,1),e.NdJ("pageChange",function(s){return n.pageChange.emit(s)})("pageBoundsCorrection",function(s){return n.pageBoundsCorrection.emit(s)}),e.TgZ(2,"nav",2),e.YNc(3,N,6,8,"ul",3),e.qZA()()),2&t){const r=e.MAs(1);e.Q6J("id",n.id)("maxSize",n.maxSize),e.xp6(2),e.uIk("aria-label",n.screenReaderPaginationLabel),e.xp6(1),e.Q6J("ngIf",!(n.autoHide&&r.pages.length<=1))}},dependencies:[B,g.O5,g.sg,g.JJ],styles:['.ngx-pagination{margin-left:0;margin-bottom:1rem}.ngx-pagination:before,.ngx-pagination:after{content:" ";display:table}.ngx-pagination:after{clear:both}.ngx-pagination li{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;margin-right:.0625rem;border-radius:0}.ngx-pagination li{display:inline-block}.ngx-pagination a,.ngx-pagination button{color:#0a0a0a;display:block;padding:.1875rem .625rem;border-radius:0}.ngx-pagination a:hover,.ngx-pagination button:hover{background:#e6e6e6}.ngx-pagination .current{padding:.1875rem .625rem;background:#2199e8;color:#fefefe;cursor:default}.ngx-pagination .disabled{padding:.1875rem .625rem;color:#cacaca;cursor:default}.ngx-pagination .disabled:hover{background:transparent}.ngx-pagination a,.ngx-pagination button{cursor:pointer}.ngx-pagination .pagination-previous a:before,.ngx-pagination .pagination-previous.disabled:before{content:"\\ab";display:inline-block;margin-right:.5rem}.ngx-pagination .pagination-next a:after,.ngx-pagination .pagination-next.disabled:after{content:"\\bb";display:inline-block;margin-left:.5rem}.ngx-pagination .show-for-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.ngx-pagination .small-screen{display:none}@media screen and (max-width: 601px){.ngx-pagination.responsive .small-screen{display:inline-block}.ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next){display:none}}\n'],encapsulation:2,changeDetection:0}),i})(),O=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[L],imports:[[g.ez]]}),i})(),U=(()=>{class i{transform(t,n){return t.filter(r=>r.title.toLowerCase().includes(n.toLowerCase()))}static#e=this.\u0275fac=function(n){return new(n||i)};static#t=this.\u0275pipe=e.Yjl({name:"search",type:i,pure:!0,standalone:!0})}return i})();var b=c(95),J=c(2709),z=c(1288),R=c(2425),Y=c(6286);function q(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"i",17),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().$implicit,s=e.oxw();return e.KtG(s.addWishlist(r._id))}),e.qZA()}}function j(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"i",18),e.NdJ("click",function(){e.CHM(t);const r=e.oxw().$implicit,s=e.oxw();return e.KtG(s.removeWishlist(r._id))}),e.qZA()}}const $=function(i){return["/details",i]};function Q(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",7)(1,"div",8),e.YNc(2,q,1,0,"i",9),e.YNc(3,j,1,0,"i",10),e.TgZ(4,"div",11)(5,"div"),e._UZ(6,"img",12),e.qZA(),e.TgZ(7,"h5",13),e._uU(8),e.qZA(),e.TgZ(9,"h6"),e._uU(10),e.qZA(),e.TgZ(11,"div",14)(12,"span"),e._uU(13),e.qZA(),e.TgZ(14,"span"),e._UZ(15,"i",15),e._uU(16),e.qZA()()(),e.TgZ(17,"button",16),e.NdJ("click",function(){const s=e.CHM(t).$implicit,o=e.oxw();return e.KtG(o.addProduct(s._id))}),e._uU(18,"Add To Cart"),e.qZA()()()}if(2&i){const t=a.$implicit,n=e.oxw();e.xp6(2),e.Q6J("ngIf",!n.wishlistId.includes(t._id)),e.xp6(1),e.Q6J("ngIf",n.wishlistId.includes(t._id)),e.xp6(1),e.Q6J("routerLink",e.VKq(8,$,t._id)),e.xp6(2),e.Q6J("src",t.imageCover,e.LSH),e.xp6(2),e.Oqu(t.category.name),e.xp6(2),e.Oqu(t.title.split(" ",2).join(" ")),e.xp6(3),e.hij("",t.price," EGP"),e.xp6(3),e.hij(" ",t.ratingsAverage,"")}}const W=function(i,a,t){return{id:"productPagination",itemsPerPage:i,currentPage:a,totalItems:t}};let G=(()=>{class i{constructor(t,n,r,s){this._BlankService=t,this._CartService=n,this._ToastrService=r,this._WishlistService=s,this.term="",this.productItem=[],this.pageSize=0,this.p=1,this.total=0,this.wishlistId=[]}ngOnInit(){this._BlankService.getProduct().subscribe({next:t=>{this.productItem=t.data,this.pageSize=t.metadata.limit,this.p=t.metadata.currentPage,this.total=t.results}}),this._WishlistService.getToWishlist().subscribe({next:t=>{const n=t.data.map(r=>r._id);this.wishlistId=n}})}addProduct(t){this._CartService.addToCart(t).subscribe({next:n=>{this._ToastrService.success(n.message),this._CartService.cartNumber.next(n.numOfCartItems)}})}pageChanged(t){this._BlankService.getProduct(t).subscribe({next:n=>{this.productItem=n.data,this.pageSize=n.metadata.limit,this.p=n.metadata.currentPage,this.total=n.results}})}addWishlist(t){this._WishlistService.addToWishlist(t).subscribe({next:n=>{this.wishlistId=n.data,this._ToastrService.success("\u2764",n.message)}})}removeWishlist(t){this._WishlistService.removeToWishlist(t).subscribe({next:n=>{this.wishlistId=n.data,this._ToastrService.success("\u274c",n.message)}})}static#e=this.\u0275fac=function(n){return new(n||i)(e.Y36(J.X),e.Y36(z.N),e.Y36(R._W),e.Y36(Y.M))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-product"]],standalone:!0,features:[e.jDz],decls:10,vars:16,consts:[[1,"pt-3"],["type","text","placeholder","Search...",1,"form-control","w-50","m-auto","my-4",3,"ngModel","ngModelChange"],[1,"container-fluid"],[1,"row","justify-content-center","g-4"],["class","col-md-2",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","mt-5"],["id","productPagination","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"maxSize","directionLinks","autoHide","responsive","pageChange","pageBoundsCorrection"],[1,"col-md-2"],[1,"product","p-2"],["role","button","class","fa-regular fa-heart fs-1 heart",3,"click",4,"ngIf"],["role","button","class","fa-solid fa-heart fs-1 heart text-danger",3,"click",4,"ngIf"],["role","button",3,"routerLink"],["alt","",1,"w-100","mb-3",3,"src"],[1,"text-main"],[1,"d-flex","justify-content-between"],[1,"fas","fa-star","rating-color"],[1,"add-btn","btn","bg-main","text-white","w-100","mt-3",3,"click"],["role","button",1,"fa-regular","fa-heart","fs-1","heart",3,"click"],["role","button",1,"fa-solid","fa-heart","fs-1","heart","text-danger",3,"click"]],template:function(n,r){1&n&&(e.TgZ(0,"section",0)(1,"div")(2,"input",1),e.NdJ("ngModelChange",function(o){return r.term=o}),e.qZA()(),e.TgZ(3,"div",2)(4,"div",3),e.YNc(5,Q,19,10,"div",4),e.ALo(6,"paginate"),e.ALo(7,"search"),e.qZA()(),e.TgZ(8,"div",5)(9,"pagination-controls",6),e.NdJ("pageChange",function(o){return r.pageChanged(o)})("pageBoundsCorrection",function(o){return r.pageChanged(o)}),e.qZA()()()),2&n&&(e.xp6(2),e.Q6J("ngModel",r.term),e.xp6(3),e.Q6J("ngForOf",e.xi3(6,6,e.xi3(7,9,r.productItem,r.term),e.kEZ(12,W,r.pageSize,r.p,r.total))),e.xp6(4),e.Q6J("maxSize",9)("directionLinks",!0)("autoHide",!0)("responsive",!0))},dependencies:[g.ez,g.sg,g.O5,C.rH,O,F,H,b.u5,b.Fj,b.JJ,b.On,U]})}return i})()},2709:(y,x,c)=>{c.d(x,{X:()=>e});var C=c(4769),g=c(9862);let e=(()=>{class h{constructor(p){this._HttpClient=p}getProduct(p=1){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?page=${p}`)}getDetails(p){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${p}`)}getCategories(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/categories")}addToCategoriesId(p){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${p}`)}getBrands(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/brands")}addToBrandsId(p){return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products?brand=${p}`)}static#e=this.\u0275fac=function(l){return new(l||h)(C.LFG(g.eN))};static#t=this.\u0275prov=C.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()},1288:(y,x,c)=>{c.d(x,{N:()=>h});var C=c(5619),g=c(4769),e=c(9862);let h=(()=>{class _{constructor(l){this._HttpClient=l,this.cartNumber=new C.X(0)}addToCart(l){return this._HttpClient.post("https://ecommerce.routemisr.com/api/v1/cart",{productId:l})}getToCart(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/cart")}removeToCart(l){return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${l}`)}upDataToCart(l,f){return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${l}`,{count:f})}clearToCart(){return this._HttpClient.delete("https://ecommerce.routemisr.com/api/v1/cart")}checkOut(l,f){return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${l}?url=https://moust2fa.github.io/GraduationProject/`,{shippingAddress:f})}AllOlder(){return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/orders")}static#e=this.\u0275fac=function(f){return new(f||_)(g.LFG(e.eN))};static#t=this.\u0275prov=g.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()}}]);