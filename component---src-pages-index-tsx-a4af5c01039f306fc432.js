(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{7091:function(e){"use strict";var t="%[a-f0-9]{2}",r=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(a){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function a(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},o=n.exec(e);o;){try{r[o[0]]=decodeURIComponent(o[0])}catch(t){var i=a(o[0]);i!==o[0]&&(r[o[0]]=i)}o=n.exec(e)}r["%C2"]="�";for(var c=Object.keys(r),l=0;l<c.length;l++){var u=c[l];e=e.replace(new RegExp(u,"g"),r[u])}return e}(e)}}},8616:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),a=0;a<n.length;a++){var i=n[a],c=e[i];(o?-1!==t.indexOf(i):t(i,c,e))&&(r[i]=c)}return r}},2203:function(e,t,r){"use strict";var n=r(8416),o=r(7424),a=r(861);function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=r(8936),u=r(7091),s=r(4734),f=r(8616),p=Symbol("encodeFragmentIdentifier");function d(e){if("string"!=typeof e||1!==e.length)throw new TypeError("arrayFormatSeparator must be single character string")}function g(e,t){return t.encode?t.strict?l(e):encodeURIComponent(e):e}function y(e,t){return t.decode?u(e):e}function m(e){return Array.isArray(e)?e.sort():"object"==typeof e?m(Object.keys(e)).sort((function(e,t){return Number(e)-Number(t)})).map((function(t){return e[t]})):e}function b(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function x(e){var t=(e=b(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function k(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function v(e,t){d((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"colon-list-separator":return function(e,r,n){t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":case"separator":return function(t,r,n){var o="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!o&&y(r,e).includes(e.arrayFormatSeparator);r=a?y(r,e):r;var i=o||a?r.split(e.arrayFormatSeparator).map((function(t){return y(t,e)})):null===r?r:y(r,e);n[t]=i};case"bracket-separator":return function(t,r,n){var o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),o){var a=null===r?[]:r.split(e.arrayFormatSeparator).map((function(t){return y(t,e)}));void 0!==n[t]?n[t]=[].concat(n[t],a):n[t]=a}else n[t]=r?y(r,e):r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;var a,c=i(e.split("&"));try{for(c.s();!(a=c.n()).done;){var l=a.value;if(""!==l){var u=s(t.decode?l.replace(/\+/g," "):l,"="),f=o(u,2),p=f[0],g=f[1];g=void 0===g?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?g:y(g,t),r(y(p,t),g,n)}}}catch(j){c.e(j)}finally{c.f()}for(var b=0,x=Object.keys(n);b<x.length;b++){var v=x[b],h=n[v];if("object"==typeof h&&null!==h)for(var w=0,F=Object.keys(h);w<F.length;w++){var Z=F[w];h[Z]=k(h[Z],t)}else n[v]=k(h,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=m(r):e[t]=r,e}),Object.create(null))}t.extract=x,t.parse=v,t.stringify=function(e,t){if(!e)return"";d((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var r=function(r){return t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r]},n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(r,n){var o=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[g(t,e),"[",o,"]"].join("")]:[[g(t,e),"[",g(o,e),"]=",g(n,e)].join("")])}};case"bracket":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[g(t,e),"[]"].join("")]:[[g(t,e),"[]=",g(n,e)].join("")])}};case"colon-list-separator":return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[[g(t,e),":list="].join("")]:[[g(t,e),":list=",g(n,e)].join("")])}};case"comma":case"separator":case"bracket-separator":var t="bracket-separator"===e.arrayFormat?"[]=":"=";return function(r){return function(n,o){return void 0===o||e.skipNull&&null===o||e.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[g(r,e),t,g(o,e)].join("")]:[[n,g(o,e)].join(e.arrayFormatSeparator)])}};default:return function(t){return function(r,n){return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:[].concat(a(r),null===n?[g(t,e)]:[[g(t,e),"=",g(n,e)].join("")])}}}}(t),o={},i=0,c=Object.keys(e);i<c.length;i++){var l=c[i];r(l)||(o[l]=e[l])}var u=Object.keys(o);return!1!==t.sort&&u.sort(t.sort),u.map((function(r){var o=e[r];return void 0===o?"":null===o?g(r,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?g(r,t)+"[]":o.reduce(n(r),[]).join("&"):g(r,t)+"="+g(o,t)})).filter((function(e){return e.length>0})).join("&")},t.parseUrl=function(e,t){t=Object.assign({decode:!0},t);var r=s(e,"#"),n=o(r,2),a=n[0],i=n[1];return Object.assign({url:a.split("?")[0]||"",query:v(x(e),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:y(i,t)}:{})},t.stringifyUrl=function(e,r){r=Object.assign(n({encode:!0,strict:!0},p,!0),r);var o=b(e.url).split("?")[0]||"",a=t.extract(e.url),i=t.parse(a,{sort:!1}),c=Object.assign(i,e.query),l=t.stringify(c,r);l&&(l="?".concat(l));var u=function(e){var t="",r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(u="#".concat(r[p]?g(e.fragmentIdentifier,r):e.fragmentIdentifier)),"".concat(o).concat(l).concat(u)},t.pick=function(e,r,o){o=Object.assign(n({parseFragmentIdentifier:!0},p,!1),o);var a=t.parseUrl(e,o),i=a.url,c=a.query,l=a.fragmentIdentifier;return t.stringifyUrl({url:i,query:f(c,r),fragmentIdentifier:l},o)},t.exclude=function(e,r,n){var o=Array.isArray(r)?function(e){return!r.includes(e)}:function(e,t){return!r(e,t)};return t.pick(e,o,n)}},4734:function(e){"use strict";e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},8936:function(e){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())}))}},1684:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return $}});var n=r(1008),o=r(7294),a=r(3366),i=r(1597),c=r(3431),l=["active"];var u=(0,n.Z)("div",{target:"e1kn8q5k1"})({name:"7on4i6",styles:"display:flex;flex-wrap:wrap;width:768px;margin:100px auto 0;@media (max-width: 768px){width:100%;margin-top:50px;padding:0 20px;}"}),s=(0,n.Z)((function(e){e.active;var t=(0,a.Z)(e,l);return(0,c.tZ)(i.rU,t)}),{target:"e1kn8q5k0"})("margin-right:20px;padding:5px 0;font-size:18px;font-weight:",(function(e){return e.active?"800":"400"}),";cursor:pointer;&:last-of-type{margin-right:0;}@media (max-width: 768px){font-size:15px;}"),f=function(e){var t=e.selectedCategory,r=e.categoryList;return(0,c.tZ)(u,null,Object.entries(r).map((function(e){var r=e[0],n=e[1];return(0,c.tZ)(s,{to:"/?category="+r,active:r===t,key:r},"#",r,"(",n,")")})))},p=r(7059);var d=(0,n.Z)(p.G,{target:"e1n1u3tj0"})({name:"1on2x4e",styles:"width:120px;height:120px;margin-bottom:30px;border-radius:50%;@media (max-width: 768px){width:80px;height:80px;}"}),g=function(e){var t=e.profileImage;return(0,c.tZ)(d,{image:t,alt:"Profile Image"})},y=r.p+"static/banner-efe5d4906e434ad2ade6115e163ec996.png",m=r(3201),b=r(9463);var x=(0,n.Z)("div",{target:"e160b013"})("width:100%;background-image:url(",y,");background-repeat:no-repeat;background-size:cover;color:#fff;"),k=(0,n.Z)("div",{target:"e160b012"})({name:"1kisa53",styles:"display:flex;flex-direction:column;justify-content:center;align-items:flex-start;width:768px;height:400px;margin:0 auto;@media (max-width: 768px){width:100%;height:300px;padding:0 20px;}"}),v=(0,n.Z)("div",{target:"e160b011"})({name:"kkjltc",styles:"font-size:20px;font-weight:800;color:#000;@media (max-width: 768px){font-size:15px;}"}),h=(0,n.Z)("div",{target:"e160b010"})({name:"hhgtt0",styles:"margin-top:5px;font-size:35px;font-weight:900;color:#000;@media (max-width: 768px){font-size:25px;}margin-bottom:20px"}),w=function(e){"github"==e?window.open("https://github.com/shinsj4653","_blank"):"notion"===e?window.open("https://forested-dive-1ea.notion.site/Welcome-to-my-Notion-Page-0fda5a0b60d94c0bbd0ea579a226fc31","_blank"):"gmail"===e&&window.open("mailto:shinsj4653@gmail.com","_blank")},F=function(e){var t=e.profileImage;return(0,c.tZ)(x,null,(0,c.tZ)(k,null,(0,c.tZ)(g,{profileImage:t}),(0,c.tZ)("div",null,(0,c.tZ)(v,null,"Nice to Meet You,"),(0,c.tZ)(h,null,"I'm Junior Frontend Developer Shin.")),(0,c.tZ)("div",{style:{display:"flex"}},(0,c.tZ)(m.hJX,{size:"30",color:"black",style:{cursor:"pointer",marginRight:"15px"},title:"Visit Github",onClick:function(){w("github")}}),(0,c.tZ)(b.WTS,{size:"30",color:"black",style:{cursor:"pointer",marginRight:"15px"},title:"Visit Notion",onClick:function(){w("notion")}}),(0,c.tZ)(b.IeF,{size:"30",color:"black",style:{cursor:"pointer"},title:"shinsj4653@gmail.com",onClick:function(){w("gmail")}}))))},Z=r(7462);var j=(0,n.Z)(p.G,{target:"e1eg5kak7"})({name:"1axbq5h",styles:"width:100%;height:200px;border-radius:10px 10px 0 0"}),C=(0,n.Z)(i.rU,{target:"e1eg5kak6"})({name:"m7gxp6",styles:"display:flex;flex-direction:column;border-radius:10px;box-shadow:0 0 8px rgba(0, 0, 0, 0.15);transition:0.3s box-shadow;cursor:pointer;&:hover{box-shadow:0 0 10px rgba(0, 0, 0, 0.3);}"}),I=(0,n.Z)("div",{target:"e1eg5kak5"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),S=(0,n.Z)("div",{target:"e1eg5kak4"})({name:"kw2b4d",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700"}),E=(0,n.Z)("div",{target:"e1eg5kak3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),A=(0,n.Z)("div",{target:"e1eg5kak2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),O=(0,n.Z)("div",{target:"e1eg5kak1"})({name:"votzk9",styles:"margin:2.5px 5px;padding:3px 5px;border-radius:3px;font-size:14px;font-weight:700;color:white"}),R=(0,n.Z)("div",{target:"e1eg5kak0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"}),N=function(e){var t=e.title,r=e.date,n=e.categories,o=e.summary,a=e.thumbnail.childImageSharp.gatsbyImageData,i=e.link;return(0,c.tZ)(C,{to:i},(0,c.tZ)(j,{image:a,alt:"Post Item Image"}),(0,c.tZ)(I,null,(0,c.tZ)(S,null,t),(0,c.tZ)(E,null,r),(0,c.tZ)(A,null,n.map((function(e){switch(e){case"MarkDown":return(0,c.tZ)(O,{style:{backgroundColor:"#000"},key:e},e);case"FastCampus":return(0,c.tZ)(O,{style:{backgroundColor:"#E62249"},key:e},e);case"JavaScript":return(0,c.tZ)(O,{style:{backgroundColor:"#FFE300",color:"#000"},key:e},e);case"NodeJS":return(0,c.tZ)(O,{style:{backgroundColor:"#85BD6F",color:"#FFF"},key:e},e);case"CSS":return(0,c.tZ)(O,{style:{backgroundColor:"#2794CD",color:"#FFF"},key:e},e);case"HTML":return(0,c.tZ)(O,{style:{backgroundColor:"#F1672B",color:"#FFF"},key:e},e);case"Github":return(0,c.tZ)(O,{style:{backgroundColor:"#E4E4E4",color:"#000"},key:e},e);case"WebProgramming":return(0,c.tZ)(O,{style:{backgroundColor:"#000",color:"#FFF"},key:e},e);case"KU":return(0,c.tZ)(O,{style:{backgroundColor:"#046B3F",color:"#FFF"},key:e},e);case"Redux":return(0,c.tZ)(O,{style:{backgroundColor:"#8041C4",color:"#FFF"},key:e},e);case"TypeScript":return(0,c.tZ)(O,{style:{backgroundColor:"#3178C6",color:"#FFF"},key:e},e);case"MobX":return(0,c.tZ)(O,{style:{backgroundColor:"#e25f13",color:"#FFF"},key:e},e);case"Gatsby":return(0,c.tZ)(O,{style:{backgroundColor:"#663399",color:"#FFF"},key:e},e);case"Velopert":return(0,c.tZ)(O,{style:{backgroundColor:"#f7f7f7",color:"#000"},key:e},e);case"React":return(0,c.tZ)(O,{style:{backgroundColor:"#00D8FF",color:"#000"},key:e},e);case"CodingAngma":return(0,c.tZ)(O,{style:{backgroundColor:"#1E1E1E",color:"#fff"},key:e},e);case"React Native":return(0,c.tZ)(O,{style:{backgroundColor:"#04A6CF",color:"#fff"},key:e},e)}}))),(0,c.tZ)(R,null,o)))},U=function(e,t){var r=(0,o.useRef)(null),n=(0,o.useRef)(null),a=(0,o.useState)(1),i=a[0],c=a[1],l=(0,o.useMemo)((function(){return t.filter((function(t){var r=t.node.frontmatter.categories;return"All"===e||r.includes(e)}))}),[e]);return(0,o.useEffect)((function(){n.current=new IntersectionObserver((function(e,t){e[0].isIntersecting&&(c((function(e){return e+1})),t.unobserve(e[0].target))}))}),[]),(0,o.useEffect)((function(){return c(1)}),[e]),(0,o.useEffect)((function(){10*i>=l.length||null===r.current||0===r.current.children.length||null===n.current||n.current.observe(r.current.children[r.current.children.length-1])}),[i,e]),{containerRef:r,postList:l.slice(0,10*i)}};var z=(0,n.Z)("div",{target:"es8e92y0"})({name:"11grurp",styles:"display:grid;grid-template-columns:1fr 1fr;grid-gap:20px;width:768px;margin:0 auto;padding:50px 0 100px;@media (max-width: 768px){grid-template-columns:1fr;width:100%;padding:50px 20px;}"}),_=function(e){var t=e.selectedCategory,r=e.posts,n=U(t,r),o=n.containerRef,a=n.postList;return(0,c.tZ)(z,{ref:o},a.map((function(e){var t=e.node,r=t.id,n=t.fields.slug,o=t.frontmatter;return(0,c.tZ)(N,(0,Z.Z)({},o,{link:n,key:r}))})))},M=r(2203),L=r(4021);var $=function(e){var t=e.location.search,r=e.data,n=r.site.siteMetadata,a=n.title,i=n.description,l=n.siteUrl,u=r.allMarkdownRemark.edges,s=r.file,p=s.childImageSharp.gatsbyImageData,d=s.publicURL,g=M.parse(t),y="string"==typeof g.category&&g.category?g.category:"All",m=(0,o.useMemo)((function(){return u.reduce((function(e,t){return t.node.frontmatter.categories.forEach((function(t){void 0===e[t]?e[t]=1:e[t]++})),e.All++,e}),{All:0})}),[]);return(0,c.tZ)(L.Z,{title:a,description:i,url:l,image:d},(0,c.tZ)(F,{profileImage:p}),(0,c.tZ)(f,{selectedCategory:y,categoryList:m}),(0,c.tZ)(_,{selectedCategory:y,posts:u}))}},3405:function(e,t,r){var n=r(3897);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,r){var n=r(3405),o=r(9498),a=r(6116),i=r(2281);e.exports=function(e){return n(e)||o(e)||a(e)||i()},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a4af5c01039f306fc432.js.map