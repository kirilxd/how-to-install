(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/b8u":function(t,e,n){var r=n("STAE");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"33Wh":function(t,e,n){var r=n("yoRg"),a=n("eDl+");t.exports=Object.keys||function(t){return r(t,a)}},"6LWA":function(t,e,n){var r=n("xrYK");t.exports=Array.isArray||function(t){return"Array"==r(t)}},A2ZE:function(t,e,n){var r=n("HAuM");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,a){return t.call(e,n,r,a)}}return function(){return t.apply(e,arguments)}}},"G+Rx":function(t,e,n){var r=n("0GbY");t.exports=r("document","documentElement")},"N+g0":function(t,e,n){var r=n("g6v/"),a=n("m/L8"),o=n("glrk"),u=n("33Wh");t.exports=r?Object.defineProperties:function(t,e){o(t);for(var n,r=u(e),i=r.length,c=0;i>c;)a.f(t,n=r[c++],e[n]);return t}},O5Q1:function(t,e,n){"use strict";n("XbcX"),n("c9m3");var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),u=function(t){var e=t.item,n=t.isActive;return a.a.createElement(o.Link,{to:e.slug,className:"suggestion"},n?a.a.createElement("b",null,e.title):e.title)},i=function(t){var e=t.items,n=Object(r.useState)(-1),o=n[0];n[1];return a.a.createElement("div",{className:"suggestions",id:"suggestions"},e.map((function(t,e){return a.a.createElement(u,{key:t.slug,item:t,isActive:e===o})})))},c="Maybe this...",l="THIS",s="YES!";e.a=function(t){var e=t.pages,n=void 0===e?[]:e,u=t.query,f=void 0===u?"":u,p=t.className,v=void 0===p?"":p,m=Object(r.useState)(l),d=m[0],g=m[1],y=Object(r.useState)(c),h=y[0],b=y[1],w=Object(r.useState)(f),E=w[0],S=w[1],O=Object(r.useState)(""),A=O[0],x=O[1],j=Object(r.useState)([]),M=j[0],k=j[1],N=Object(r.useMemo)((function(){return n.flatMap((function(t){var e=t.keywords.split(",").map((function(t){return t.trim()}));return e.length>1?[]:e}))}),[n]),T=function(t){var e=n.filter((function(e){return e.keywords.split(",").some((function(e){return e.trim().indexOf(t)>-1}))&&e.slug!=="/"+f}));return e.length=Math.min(e.length,5),e};return a.a.createElement("div",{className:"header-wrapper "+v},a.a.createElement("div",{className:"header"},a.a.createElement("h1",null,"What do you want to install?"),a.a.createElement("h2",null,"I want to install..."),a.a.createElement("form",{className:"input-wrapper",onSubmit:function(t){t.preventDefault();var e=E||A;if(e){var n=T(e);1===n.length&&Object(o.navigate)(n[0].slug)}}},a.a.createElement("input",{type:"text",value:E,placeholder:h,autoComplete:"off",onFocus:function(t){if(E){var e=T(t.target.value);k(e)}else{var n=N[Math.floor(Math.random()*N.length)];x(n),b(n+"?"),g(s)}},onBlur:function(t){g(l),!E||t.relatedTarget&&"suggestion"===t.relatedTarget.className?t.relatedTarget&&"find"===t.relatedTarget.id||(x(""),b(c)):k([])},onChange:function(t){if(S(t.target.value),t.target.value){var e=T(t.target.value);k(e),g(l)}else k([]),g(h===c?l:s)}}),a.a.createElement("input",{type:"submit",value:d,id:"find"})),a.a.createElement(i,{items:M})))}},RNIs:function(t,e,n){var r=n("tiKp"),a=n("fHMY"),o=n("m/L8"),u=r("unscopables"),i=Array.prototype;null==i[u]&&o.f(i,u,{configurable:!0,value:a(null)}),t.exports=function(t){i[u][t]=!0}},RXBc:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return i}));var r=n("q1tI"),a=n.n(r),o=n("vpQ9"),u=n("O5Q1"),i="615551328";e.default=function(t){var e=t.data.allMarkdownRemark.edges.map((function(t){return t.node.frontmatter}));return a.a.createElement(o.a,null,a.a.createElement(u.a,{pages:e}))}},STAE:function(t,e,n){var r=n("0Dky");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},XbcX:function(t,e,n){"use strict";var r=n("I+eb"),a=n("or9q"),o=n("ewvW"),u=n("UMSQ"),i=n("HAuM"),c=n("ZfDv");r({target:"Array",proto:!0},{flatMap:function(t){var e,n=o(this),r=u(n.length);return i(t),(e=c(n,0)).length=a(e,n,n,r,0,1,t,arguments.length>1?arguments[1]:void 0),e}})},ZfDv:function(t,e,n){var r=n("hh1v"),a=n("6LWA"),o=n("tiKp")("species");t.exports=function(t,e){var n;return a(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!a(n.prototype)?r(n)&&null===(n=n[o])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},c9m3:function(t,e,n){n("RNIs")("flatMap")},fHMY:function(t,e,n){var r,a=n("glrk"),o=n("N+g0"),u=n("eDl+"),i=n("0BK2"),c=n("G+Rx"),l=n("zBJ4"),s=n("93I0"),f=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},m=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(a){}var t,e;m=r?function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=l("iframe")).style.display="none",c.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var n=u.length;n--;)delete m.prototype[u[n]];return m()};i[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=a(t),n=new p,p.prototype=null,n[f]=t):n=m(),void 0===e?n:o(n,e)}},or9q:function(t,e,n){"use strict";var r=n("6LWA"),a=n("UMSQ"),o=n("A2ZE"),u=function(t,e,n,i,c,l,s,f){for(var p,v=c,m=0,d=!!s&&o(s,f,3);m<i;){if(m in n){if(p=d?d(n[m],m,e):n[m],l>0&&r(p))v=u(t,e,p,a(p.length),v,l-1)-1;else{if(v>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[v]=p}v++}m++}return v};t.exports=u},tiKp:function(t,e,n){var r=n("2oRo"),a=n("VpIT"),o=n("UTVS"),u=n("kOOl"),i=n("STAE"),c=n("/b8u"),l=a("wks"),s=r.Symbol,f=c?s:s&&s.withoutSetter||u;t.exports=function(t){return o(l,t)||(i&&o(s,t)?l[t]=s[t]:l[t]=f("Symbol."+t)),l[t]}},vpQ9:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r);e.a=function(t){var e=t.children;return a.a.createElement("div",{className:"page-wrapper light"},e)}}}]);
//# sourceMappingURL=component---src-pages-index-js-613d5d3b18c1d425b41a.js.map