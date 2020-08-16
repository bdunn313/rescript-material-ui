(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),r=(n(0),n(84)),l={title:"Changelog"},b={unversionedId:"changelog",id:"changelog",isDocsHomePage:!1,title:"Changelog",description:"Tags:",source:"@site/docs/changelog.md",permalink:"/bs-material-ui/docs/changelog"},o=[{value:"2.0.0",id:"200",children:[]},{value:"1.2.0",id:"120",children:[]},{value:"1.1.0",id:"110",children:[]},{value:"1.0.0",id:"100",children:[]},{value:"0.4.3",id:"043",children:[]},{value:"0.4.2",id:"042",children:[]},{value:"0.4.1",id:"041",children:[]},{value:"0.4.0",id:"040",children:[]},{value:"0.3.3",id:"033",children:[]},{value:"0.3.2",id:"032",children:[]},{value:"0.3.1",id:"031",children:[]},{value:"0.3.0",id:"030",children:[]},{value:"0.2.0",id:"020",children:[]},{value:"0.1.9",id:"019",children:[]}],c={rightToc:o};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Tags:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud83d\udca5 - Breaking Change"),Object(r.b)("li",{parentName:"ul"},"\ud83d\ude80 - New Feature"),Object(r.b)("li",{parentName:"ul"},"\ud83d\udc1b - Bug Fix"),Object(r.b)("li",{parentName:"ul"},"\ud83d\udcdd - Documentation"),Object(r.b)("li",{parentName:"ul"},"\ud83c\udfe0 - Internal"),Object(r.b)("li",{parentName:"ul"},"\ud83d\udc85 - Polish")),Object(r.b)("p",null,"(",Object(r.b)("em",{parentName:"p"},"Tags are copied from\n",Object(r.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/babel/babel/blob/master/CHANGELOG.md"}),"babel")),")"),Object(r.b)("h2",{id:"200"},"2.0.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud83d\udca5 Deprecated the pre v2 bindings for the zero cost version (pre v2 is no\nlonger supported)"),Object(r.b)("li",{parentName:"ul"},"\ud83d\ude80 Updated to MaterialUi v4.11.0")),Object(r.b)("h2",{id:"120"},"1.2.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud83d\ude80 Updated to MaterialUi v4.8.1"),Object(r.b)("li",{parentName:"ul"},"\ud83d\ude80 Hooks are now on the master branch / main npm package")),Object(r.b)("h2",{id:"110"},"1.1.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud83d\ude80 Updated to MaterialUi v3.9.2"),Object(r.b)("li",{parentName:"ul"},"\ud83c\udfe0 Moved all related repos into this one"),Object(r.b)("li",{parentName:"ul"},"\ud83d\udca5 Removed the icons from this repo, see the\n",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/jsiebern/bs-material-ui/blob/master/README.md"}),"README")," for\nmore information")),Object(r.b)("h2",{id:"100"},"1.0.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud83d\ude80 Bump to version 1.0.0 of the bindings (Because I think that the\ngeneral way of the bindings won't change much from now on)"),Object(r.b)("li",{parentName:"ul"},"\ud83d\ude80 Updated to MaterialUi v3.8.1"),Object(r.b)("li",{parentName:"ul"},"\ud83d\ude80 Added bindings to ",Object(r.b)("inlineCode",{parentName:"li"},"@material-ui/icons")," (needs to be installed\nseparately) ",Object(r.b)("strong",{parentName:"li"},"WARNING"),": Currently broken (includes the whole icons package,\nfix coming down the road)"),Object(r.b)("li",{parentName:"ul"},"\ud83d\ude80 Added properly typed theme (see examples!)"),Object(r.b)("li",{parentName:"ul"},"\ud83d\ude80 Added ",Object(r.b)("inlineCode",{parentName:"li"},"theme => ReactDOMRe.Style.t")," functionality for the ppx"),Object(r.b)("li",{parentName:"ul"},"\ud83c\udfe0 Moved the withStyles PPX into it's own repository\n(",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/jsiebern/reason-mui-withstyles-ppx"}),"https://github.com/jsiebern/reason-mui-withstyles-ppx"),")"),Object(r.b)("li",{parentName:"ul"},"\ud83d\udca5 Removed the ",Object(r.b)("inlineCode",{parentName:"li"},"render")," prop from the safe styles component (generated by\nthe ppx), it has to be used as a HOC now (please see the updated examples)")),Object(r.b)("h2",{id:"043"},"0.4.3"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud83d\ude80 Updated to MaterialUi v3.2.2"),Object(r.b)("li",{parentName:"ul"},"\ud83d\ude80 Added ",Object(r.b)("inlineCode",{parentName:"li"},"xsAuto")," ,",Object(r.b)("inlineCode",{parentName:"li"},"smAuto")," ,",Object(r.b)("inlineCode",{parentName:"li"},"mdAuto")," ,",Object(r.b)("inlineCode",{parentName:"li"},"lgAuto")," ,",Object(r.b)("inlineCode",{parentName:"li"},"xlAuto")," properties to\nthe ",Object(r.b)("inlineCode",{parentName:"li"},"Grid")," component (will override their respective set properties if\ndefined)"),Object(r.b)("li",{parentName:"ul"},"\ud83d\ude80 ",Object(r.b)("inlineCode",{parentName:"li"},"mui.withStyles")," generated components now accept a single child\n",Object(r.b)("strong",{parentName:"li"},"OR")," a render prop (no ",Object(r.b)("inlineCode",{parentName:"li"},"...")," array spread when using as a ",Object(r.b)("inlineCode",{parentName:"li"},"HOC"),")"),Object(r.b)("li",{parentName:"ul"},"\ud83c\udfe0 Added an example page: Clone the project, ",Object(r.b)("inlineCode",{parentName:"li"},"yarn install"),", then\n",Object(r.b)("inlineCode",{parentName:"li"},"yarn examples")," to start the dev server")),Object(r.b)("h2",{id:"042"},"0.4.2"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud83d\ude80 Updated to MaterialUi v3.2.0")),Object(r.b)("h2",{id:"041"},"0.4.1"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud83d\ude80 Updated to MaterialUi v3.1.1"),Object(r.b)("li",{parentName:"ul"},"\ud83d\udc1b Brought back the ",Object(r.b)("inlineCode",{parentName:"li"},"Popper")," component"),Object(r.b)("li",{parentName:"ul"},"\ud83d\udc1b Fixed ",Object(r.b)("inlineCode",{parentName:"li"},"WithStyles")," component crashing when themed argument is not passed"),Object(r.b)("li",{parentName:"ul"},"\ud83c\udfe0 Switched binding style to support both ",Object(r.b)("inlineCode",{parentName:"li"},"es6")," and ",Object(r.b)("inlineCode",{parentName:"li"},"commonjs"))),Object(r.b)("h2",{id:"040"},"0.4.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud83d\ude80 Updated to MaterialUI v1.5.1"),Object(r.b)("li",{parentName:"ul"},"\ud83d\udca5 Updated to ReasonReact v5 (using ",Object(r.b)("inlineCode",{parentName:"li"},"ReactEvent")," instead of\n",Object(r.b)("inlineCode",{parentName:"li"},"ReactEventRe"),")")),Object(r.b)("h2",{id:"033"},"0.3.3"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud83d\ude80 Updated to MaterialUI v1.4.1"),Object(r.b)("li",{parentName:"ul"},"\ud83d\udc1b Grid component sizes were converted to strings")),Object(r.b)("h2",{id:"032"},"0.3.2"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud83d\ude80 Added ",Object(r.b)("inlineCode",{parentName:"li"},"ppx_withStyles")," for ",Object(r.b)("inlineCode",{parentName:"li"},"linux")," and ",Object(r.b)("inlineCode",{parentName:"li"},"mac")),Object(r.b)("li",{parentName:"ul"},"\ud83d\ude80 Updated to MaterialUI v1.3.1"),Object(r.b)("li",{parentName:"ul"},"\ud83d\ude80 Added a postinstall hook for a platform dependant install of the\nppx_withStyles"),Object(r.b)("li",{parentName:"ul"},"\ud83d\udca5 Updated to Bucklescript v4.0.0 (abstract shapes field access switched\nfrom ",Object(r.b)("inlineCode",{parentName:"li"},"key")," to ",Object(r.b)("inlineCode",{parentName:"li"},"keyGet"),")")),Object(r.b)("h2",{id:"031"},"0.3.1"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud83d\ude80 Updated to MaterialUI v1.2.2")),Object(r.b)("h2",{id:"030"},"0.3.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud83d\ude80 Updated to MaterialUI v1.1.0"),Object(r.b)("li",{parentName:"ul"},"\ud83d\udca5 Switched to ",Object(r.b)("inlineCode",{parentName:"li"},"[bs.deriving abstract]")," to work with object shapes (see\ncomponent ",Object(r.b)("inlineCode",{parentName:"li"},"Popover")," as an example)"),Object(r.b)("li",{parentName:"ul"},"\ud83d\udca5 Switched to trailing underscores for reserved names as per\n",Object(r.b)("inlineCode",{parentName:"li"},"reason-react v0.4.2")," practice")),Object(r.b)("h2",{id:"020"},"0.2.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud83d\udc1b Fixed the ",Object(r.b)("inlineCode",{parentName:"li"},"Grid")," component so it requires numbers instead of strings")),Object(r.b)("h2",{id:"019"},"0.1.9"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\ud83d\ude80 Most of the ",Object(r.b)("inlineCode",{parentName:"li"},"onChange")," handlers should be accurate now"),Object(r.b)("li",{parentName:"ul"},"\ud83c\udfe0 The modules are now split into several files (reduces resulting bundle\nsize)"),Object(r.b)("li",{parentName:"ul"},"\ud83d\udcdd Added a changelog file")))}p.isMDXComponent=!0},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,m=d["".concat(l,".").concat(s)]||d[s]||u[s]||r;return n?i.a.createElement(m,b(b({ref:t},c),{},{components:n})):i.a.createElement(m,b({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=s;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);