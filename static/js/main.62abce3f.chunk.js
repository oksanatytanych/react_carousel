(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{15:function(t,e,i){},17:function(t,e,i){},18:function(t,e,i){"use strict";i.r(e);var n=i(8),s=i.n(n),c=i(3),a=i(6),r=i(9),o=i(10),l=i(2),u=i(7),d=(i(15),i(0)),m=function(t){var e=t.images,i=t.params,n=t.imgLength,s=t.changeCarousel;return Object(d.jsxs)("div",{className:"Carousel",children:[Object(d.jsxs)("div",{className:"Carousel__slider",children:[Object(d.jsx)("button",{type:"button",className:"Carousel__button",onClick:function(){s("firstImg",i.firstImg-i.step)},disabled:!i.infinite&&i.firstImg-i.step<=0,children:"Prev"}),Object(d.jsx)("div",{className:"Carousel__container",style:{width:"".concat(i.frameSize*i.itemWidth,"px")},children:Object(d.jsx)("ul",{className:"Carousel__list",children:e.map((function(t){return Object(d.jsx)("li",{children:Object(d.jsx)("img",{src:t.url,alt:t.id.toString(),style:{width:i.itemWidth,height:i.itemWidth}})},t.id)}))})}),Object(d.jsx)("button",{type:"button",className:"Carousel__button","data-cy":"next",onClick:function(){s("firstImg",i.firstImg+i.step)},disabled:!i.infinite&&i.firstImg+i.step>n,children:"Next"})]}),Object(d.jsxs)("div",{className:"Carousel__props Props",children:[Object(d.jsxs)("div",{className:"Props__container",children:["Images size in pixels: ",Object(d.jsx)("button",{type:"button",className:"Props__button",onClick:function(){return s("itemWidth",i.itemWidth-10)},disabled:i.itemWidth<=50,children:"-"}),Object(d.jsx)("span",{children:" ".concat(i.itemWidth,"x").concat(i.itemWidth," ")}),Object(d.jsx)("button",{type:"button",className:"Props__button",onClick:function(){return s("itemWidth",i.itemWidth+10)},disabled:i.itemWidth>=260,children:"+"})]}),Object(d.jsxs)("div",{className:"Props__container",children:["Number of images displayed at the same time: ",Object(d.jsx)("button",{type:"button",className:"Props__button",onClick:function(){return s("frameSize",i.frameSize-1)},disabled:1===i.frameSize,children:"-"}),Object(d.jsx)("span",{children:" ".concat(i.frameSize," ")}),Object(d.jsx)("button",{type:"button",className:"Props__button",onClick:function(){return s("frameSize",i.frameSize+1)},disabled:i.frameSize===n,children:"+"})]}),Object(d.jsxs)("div",{className:"Props__container",children:[Object(d.jsx)("span",{children:"Number of images scrolled per click: "}),Object(d.jsx)("button",{type:"button",className:"Props__button",onClick:function(){return s("step",i.step-1)},disabled:1===i.step,children:"-"}),Object(d.jsx)("span",{children:" ".concat(i.step," ")}),Object(d.jsx)("button",{type:"button",className:"Props__button",onClick:function(){return s("step",i.step+1)},disabled:i.step>=n-1,children:"+"})]}),Object(d.jsxs)("div",{className:"Props__container",children:[Object(d.jsx)("span",{children:"Itime in ms to show the new portion of images: "}),Object(d.jsx)("button",{type:"button",className:"Props__button",onClick:function(){s("animationDuration",i.animationDuration-500)},disabled:i.animationDuration<=500,children:"-"}),Object(d.jsx)("span",{children:" ".concat(i.animationDuration," ")}),Object(d.jsx)("button",{type:"button",className:"Props__button",onClick:function(){s("animationDuration",i.animationDuration+500)},disabled:i.animationDuration>=4e3,children:"+"})]}),Object(d.jsxs)("div",{className:"Props__container",children:[Object(d.jsx)("span",{children:"To do the carousel cyclic "}),Object(d.jsx)("button",{type:"button",className:"Props__button",onClick:function(){s("infinite",!i.infinite)},children:i.infinite?"\u2713":"\u2718"})]})]})]})},b=(i(17),[]),p=u.length,j={firstImg:1,step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1};var h=function(){var t=Object(l.useState)(j),e=Object(r.a)(t,2),i=e[0],n=e[1];return b=function(t,e){var i=Object(o.a)(t),n=i.findIndex((function(t){return t.id===e.firstImg}));return e.infinite&&(n=(i=i.slice(n).concat(i.slice(0,n))).findIndex((function(t){return t.id===e.firstImg}))),i.slice(n,n+e.frameSize)}(u,i),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{"data-cy":"title",children:"Carousel with ".concat(b.length," images")}),Object(d.jsx)(m,{images:b,params:i,imgLength:p,changeCarousel:function(t,e){var i=e;"firstImg"===t&&"number"===typeof e&&(e>p&&(i=e-p),e<=0&&(i=e+p)),n((function(e){return Object(a.a)(Object(a.a)({},e),{},Object(c.a)({},t,i))}))}})]})};s.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))},7:function(t){t.exports=JSON.parse('[{"id":1,"url":"./img/1.png"},{"id":2,"url":"./img/2.png"},{"id":3,"url":"./img/3.png"},{"id":4,"url":"./img/4.png"},{"id":5,"url":"./img/5.png"},{"id":6,"url":"./img/6.png"},{"id":7,"url":"./img/7.png"},{"id":8,"url":"./img/8.png"},{"id":9,"url":"./img/9.png"},{"id":10,"url":"./img/10.png"}]')}},[[18,1,2]]]);
//# sourceMappingURL=main.62abce3f.chunk.js.map