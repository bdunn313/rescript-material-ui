(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{55:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),o=(t(0),t(85)),i={title:"Any Type"},c={unversionedId:"project-structure/any-type",id:"project-structure/any-type",isDocsHomePage:!1,title:"Any Type",description:"If the type you need to pass cannot be determined you can usually insert the",source:"@site/docs/project-structure/any-type.md",permalink:"/bs-material-ui/docs/project-structure/any-type",sidebar:"docs",previous:{title:"Union Values",permalink:"/bs-material-ui/docs/project-structure/union-values"},next:{title:"Number Type",permalink:"/bs-material-ui/docs/project-structure/number-type"}},l=[],u={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If the type you need to pass cannot be determined you can usually insert the\n",Object(o.b)("inlineCode",{parentName:"p"},"Any")," type. It lives under ",Object(o.b)("inlineCode",{parentName:"p"},"MaterialUi_Types"),", but the global ",Object(o.b)("inlineCode",{parentName:"p"},"MaterialUi"),"\nmodule also includes it directly."),Object(o.b)("p",null,"Example for passing an ",Object(o.b)("inlineCode",{parentName:"p"},"Any")," value to a component:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-reason"}),'<TextField\n  _InputProps={Js.Dict.fromArray([("readOnly", Any(true))])}\n  value={TextField.Value.string(value)}\n  label={"Label"->React.string}\n  fullWidth=true\n  variant=#Outlined\n/>\n')),Object(o.b)("p",null,"Example for receiving an ",Object(o.b)("inlineCode",{parentName:"p"},"Any")," argument in a callback (The function\n",Object(o.b)("inlineCode",{parentName:"p"},"MaterialUi.anyUnpack")," will return an ",Object(o.b)("inlineCode",{parentName:"p"},"Any")," as ",Object(o.b)("inlineCode",{parentName:"p"},"'a"),"):"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-reason"}),"<MaterialUi_ToggleButtonGroup\n  value={Any(alignment)}\n  exclusive=true\n  onChange={(_event, value) => setAlignment(MaterialUi.anyUnpack(value))}\n/>\n")))}p.isMDXComponent=!0},85:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},y=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),y=r,m=s["".concat(i,".").concat(y)]||s[y]||b[y]||o;return t?a.a.createElement(m,c(c({ref:n},u),{},{components:t})):a.a.createElement(m,c({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=y;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"}}]);