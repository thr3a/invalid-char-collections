(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[730],{7841:function(e,o,r){"use strict";r.d(o,{z:function(){return F}});var t=r(7294),n=r(5628),i=r(8427),a=r(6817),l=(0,a.k)((e,{orientation:o,buttonBorderWidth:r})=>({root:{display:"flex",flexDirection:"vertical"===o?"column":"row","& [data-button]":{"&:first-of-type":{borderBottomRightRadius:0,["vertical"===o?"borderBottomLeftRadius":"borderTopRightRadius"]:0,["vertical"===o?"borderBottomWidth":"borderRightWidth"]:r/2},"&:last-of-type":{borderTopLeftRadius:0,["vertical"===o?"borderTopRightRadius":"borderBottomLeftRadius"]:0,["vertical"===o?"borderTopWidth":"borderLeftWidth"]:r/2},"&:not(:first-of-type):not(:last-of-type)":{borderRadius:0,["vertical"===o?"borderTopWidth":"borderLeftWidth"]:r/2,["vertical"===o?"borderBottomWidth":"borderRightWidth"]:r/2},"& + [data-button]":{["vertical"===o?"marginTop":"marginLeft"]:-r,"@media (min-resolution: 192dpi)":{["vertical"===o?"marginTop":"marginLeft"]:0}}}}})),c=r(4459),d=Object.defineProperty,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,f=(e,o,r)=>o in e?d(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,g=(e,o)=>{for(var r in o||(o={}))p.call(o,r)&&f(e,r,o[r]);if(s)for(var r of s(o))u.call(o,r)&&f(e,r,o[r]);return e},h=(e,o)=>{var r={};for(var t in e)p.call(e,t)&&0>o.indexOf(t)&&(r[t]=e[t]);if(null!=e&&s)for(var t of s(e))0>o.indexOf(t)&&u.call(e,t)&&(r[t]=e[t]);return r};let b={orientation:"horizontal",buttonBorderWidth:1},m=(0,t.forwardRef)((e,o)=>{let r=(0,n.N4)("ButtonGroup",b,e),{className:i,orientation:a,buttonBorderWidth:d,unstyled:s}=r,p=h(r,["className","orientation","buttonBorderWidth","unstyled"]),{classes:u,cx:f}=l({orientation:a,buttonBorderWidth:d},{name:"ButtonGroup",unstyled:s});return t.createElement(c.x,g({className:f(u.root,i),ref:o},p))});m.displayName="@mantine/core/ButtonGroup";var y=r(5227),k=Object.defineProperty,v=Object.defineProperties,w=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,S=(e,o,r)=>o in e?k(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,R=(e,o)=>{for(var r in o||(o={}))j.call(o,r)&&S(e,r,o[r]);if(x)for(var r of x(o))O.call(o,r)&&S(e,r,o[r]);return e},z=(e,o)=>v(e,w(o));let C={xs:{height:y.J.xs,paddingLeft:14,paddingRight:14},sm:{height:y.J.sm,paddingLeft:18,paddingRight:18},md:{height:y.J.md,paddingLeft:22,paddingRight:22},lg:{height:y.J.lg,paddingLeft:26,paddingRight:26},xl:{height:y.J.xl,paddingLeft:32,paddingRight:32},"compact-xs":{height:22,paddingLeft:7,paddingRight:7},"compact-sm":{height:26,paddingLeft:8,paddingRight:8},"compact-md":{height:30,paddingLeft:10,paddingRight:10},"compact-lg":{height:34,paddingLeft:12,paddingRight:12},"compact-xl":{height:40,paddingLeft:14,paddingRight:14}},L=e=>({display:e?"block":"inline-block",width:e?"100%":"auto"});var P=(0,a.k)((e,{color:o,size:r,radius:t,fullWidth:n,compact:i,gradient:a,variant:l,withLeftIcon:c,withRightIcon:d})=>({root:z(R(z(R(R(R(R({},function({compact:e,size:o,withLeftIcon:r,withRightIcon:t}){if(e)return C[`compact-${o}`];let n=C[o];return z(R({},n),{paddingLeft:r?n.paddingLeft/1.5:n.paddingLeft,paddingRight:t?n.paddingRight/1.5:n.paddingRight})}({compact:i,size:r,withLeftIcon:c,withRightIcon:d})),e.fn.fontStyles()),e.fn.focusStyles()),L(n)),{borderRadius:e.fn.radius(t),fontWeight:600,position:"relative",lineHeight:1,fontSize:e.fn.size({size:r,sizes:e.fontSizes}),userSelect:"none",cursor:"pointer"}),function({variant:e,theme:o,color:r,gradient:t}){let n=o.fn.variant({color:r,variant:e,gradient:t});return"gradient"===e?{border:0,backgroundImage:n.background,color:n.color,"&:hover":o.fn.hover({backgroundSize:"200%"})}:R({border:`1px solid ${n.border}`,backgroundColor:n.background,color:n.color},o.fn.hover({backgroundColor:n.hover}))}({variant:l,theme:e,color:o,gradient:a})),{"&:active":e.activeStyles,"&:disabled, &[data-disabled]":{borderColor:"transparent",backgroundColor:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[2],color:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[5],cursor:"not-allowed",backgroundImage:"none",pointerEvents:"none","&:active":{transform:"none"}},"&[data-loading]":{pointerEvents:"none","&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,backgroundColor:"dark"===e.colorScheme?e.fn.rgba(e.colors.dark[7],.5):"rgba(255, 255, 255, .5)",borderRadius:e.fn.radius(t),cursor:"not-allowed"}}}),icon:{display:"flex",alignItems:"center"},leftIcon:{marginRight:10},rightIcon:{marginLeft:10},inner:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",overflow:"visible"},label:{whiteSpace:"nowrap",height:"100%",overflow:"hidden",display:"flex",alignItems:"center"}})),I=r(966),N=r(4736),E=Object.defineProperty,_=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,T=(e,o,r)=>o in e?E(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,J=(e,o)=>{for(var r in o||(o={}))B.call(o,r)&&T(e,r,o[r]);if(_)for(var r of _(o))W.call(o,r)&&T(e,r,o[r]);return e},H=(e,o)=>{var r={};for(var t in e)B.call(e,t)&&0>o.indexOf(t)&&(r[t]=e[t]);if(null!=e&&_)for(var t of _(e))0>o.indexOf(t)&&W.call(e,t)&&(r[t]=e[t]);return r};let $={size:"sm",type:"button",variant:"filled",loaderPosition:"left"},D=(0,t.forwardRef)((e,o)=>{let r=(0,n.N4)("Button",$,e),{className:i,size:a,color:l,type:c,disabled:d,children:s,leftIcon:p,rightIcon:u,fullWidth:f,variant:g,radius:h,uppercase:b,compact:m,loading:y,loaderPosition:k,loaderProps:v,gradient:w,classNames:x,styles:j,unstyled:O}=r,S=H(r,["className","size","color","type","disabled","children","leftIcon","rightIcon","fullWidth","variant","radius","uppercase","compact","loading","loaderPosition","loaderProps","gradient","classNames","styles","unstyled"]),{classes:R,cx:z,theme:L}=P({radius:h,color:l,size:a,fullWidth:f,compact:m,gradient:w,variant:g,withLeftIcon:!!p,withRightIcon:!!u},{name:"Button",unstyled:O,classNames:x,styles:j}),E=L.fn.variant({color:l,variant:g}),_=t.createElement(I.a,J({color:E.color,size:L.fn.size({size:a,sizes:C}).height/2},v));return t.createElement(N.k,J({className:z(R.root,i),type:c,disabled:d,"data-button":!0,"data-disabled":d||void 0,"data-loading":y||void 0,ref:o,unstyled:O},S),t.createElement("div",{className:R.inner},(p||y&&"left"===k)&&t.createElement("span",{className:z(R.icon,R.leftIcon)},y&&"left"===k?_:p),t.createElement("span",{className:R.label,style:{textTransform:b?"uppercase":void 0}},s),(u||y&&"right"===k)&&t.createElement("span",{className:z(R.icon,R.rightIcon)},y&&"right"===k?_:u)))});D.displayName="@mantine/core/Button",D.Group=m;let F=(0,i.F)(D)},5227:function(e,o,r){"use strict";r.d(o,{J:function(){return f}});var t=r(6817),n=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,o,r)=>o in e?n(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,p=(e,o)=>{for(var r in o||(o={}))c.call(o,r)&&s(e,r,o[r]);if(l)for(var r of l(o))d.call(o,r)&&s(e,r,o[r]);return e},u=(e,o)=>i(e,a(o));let f={xs:30,sm:36,md:42,lg:50,xl:60};var g=(0,t.k)((e,{size:o,multiline:r,radius:t,variant:n,invalid:i,rightSectionWidth:a,withRightSection:l,iconWidth:c,offsetBottom:d,offsetTop:s,pointer:g})=>{let h=e.fn.variant({variant:"filled",color:"red"}).background,b="default"===n||"filled"===n?{minHeight:e.fn.size({size:o,sizes:f}),paddingLeft:e.fn.size({size:o,sizes:f})/3,paddingRight:l?a:e.fn.size({size:o,sizes:f})/3,borderRadius:e.fn.radius(t)}:null;return{wrapper:{position:"relative",marginTop:s?`calc(${e.spacing.xs}px / 2)`:void 0,marginBottom:d?`calc(${e.spacing.xs}px / 2)`:void 0},input:p(u(p(u(p({},e.fn.fontStyles()),{height:r?"unstyled"===n?void 0:"auto":e.fn.size({size:o,sizes:f}),WebkitTapHighlightColor:"transparent",lineHeight:r?e.lineHeight:`${e.fn.size({size:o,sizes:f})-2}px`,appearance:"none",resize:"none",boxSizing:"border-box",fontSize:e.fn.size({size:o,sizes:e.fontSizes}),width:"100%",color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,display:"block",textAlign:"left",cursor:g?"pointer":void 0}),b),{"&:disabled":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[1],color:e.colors.dark[2],opacity:.6,cursor:"not-allowed","&::placeholder":{color:e.colors.dark[2]}},"&::placeholder":{opacity:1,userSelect:"none",color:"dark"===e.colorScheme?e.colors.dark[3]:e.colors.gray[5]},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"}}),function({theme:e,variant:o}){return"default"===o?{border:`1px solid ${"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4]}`,backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.white,transition:"border-color 100ms ease","&:focus, &:focus-within":{outline:"none",borderColor:e.colors[e.primaryColor][e.fn.primaryShade()]}}:"filled"===o?{border:"1px solid transparent",backgroundColor:"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[1],"&:focus, &:focus-within":{outline:"none",borderColor:`${e.colors[e.primaryColor][e.fn.primaryShade()]} !important`}}:{borderWidth:0,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,backgroundColor:"transparent",minHeight:28,outline:0,"&:focus, &:focus-within":{outline:"none",borderColor:"transparent"},"&:disabled":{backgroundColor:"transparent","&:focus, &:focus-within":{outline:"none",borderColor:"transparent"}}}}({theme:e,variant:n})),withIcon:{paddingLeft:"number"==typeof c?c:e.fn.size({size:o,sizes:f})},invalid:{color:h,borderColor:h,"&::placeholder":{opacity:1,color:h}},disabled:{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[1],color:e.colors.dark[2],opacity:.6,cursor:"not-allowed","&::placeholder":{color:e.colors.dark[2]}},icon:{pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",width:"number"==typeof c?c:e.fn.size({size:o,sizes:f}),color:i?e.colors.red["dark"===e.colorScheme?6:7]:"dark"===e.colorScheme?e.colors.dark[2]:e.colors.gray[5]},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center",width:a}}});o.Z=g},3541:function(e,o,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/page2",function(){return r(3118)}])},3118:function(e,o,r){"use strict";r.r(o),r.d(o,{default:function(){return g}});var t=r(5893),n=r(9008),i=r.n(n),a=r(3991),l=r(4865),c=r.n(l),d=r(3505),s=function(){var e=(0,d.l)(),o=e.name,r=e.count,n=function(o){e.setName(function(){return o.target.value})},i=function(){e.setCount(function(e){return e+1})};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:[(0,t.jsx)("input",{type:"text",value:o,onChange:n}),o]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("button",{type:"button",onClick:i,children:"+1"}),r]})]})},p=function(){var e=(0,d.l)(),o=e.name,r=e.count;return(0,t.jsxs)(t.Fragment,{children:[o," ",r]})},u=r(7841),f=r(3575),g=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i(),{children:(0,t.jsx)("title",{children:"Page 2"})}),(0,t.jsx)("h1",{className:c().title,children:"Page 2"}),(0,t.jsx)(a.DjJ,{}),(0,t.jsx)(s,{}),(0,t.jsx)(s,{}),(0,t.jsx)(p,{}),(0,t.jsx)(u.z,{variant:"outline",onClick:function(){return(0,f.c0)({title:"Default notification",message:"nyaa"})},children:"Show notification"})]})}},4865:function(e){e.exports={title:"Home_title__y5DJb"}}},function(e){e.O(0,[584,774,888,179],function(){return e(e.s=3541)}),_N_E=e.O()}]);