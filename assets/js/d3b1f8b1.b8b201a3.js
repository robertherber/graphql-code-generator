(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[5217],{35318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||p;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<p;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39023:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s},default:function(){return c}});var a=n(29603),r=n(50120),p=(n(27378),n(35318)),i={id:"schema-ast",title:"Schema AST"},o={unversionedId:"plugins/schema-ast",id:"plugins/schema-ast",isDocsHomePage:!1,title:"Schema AST",description:"{@import ../generated-config/schema-ast.md}",source:"@site/docs/plugins/schema-ast.md",sourceDirName:"plugins",slug:"/plugins/schema-ast",permalink:"/docs/plugins/schema-ast",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/schema-ast.md",version:"current",frontMatter:{id:"schema-ast",title:"Schema AST"},sidebar:"sidebar",previous:{title:"Introspection",permalink:"/docs/plugins/introspection"},next:{title:"JSDoc",permalink:"/docs/plugins/jsdoc"}},s=[{value:"Examples",id:"examples",children:[]}],l={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("p",{parentName:"p"},"This plugin prints the merged schema as string. If multiple schemas are provided, they will be merged and printed as one schema."),(0,p.kt)("h2",{parentName:"p"},"Installation"),(0,p.kt)("img",{alt:"schema-ast plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/schema-ast?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),(0,p.kt)("div",{parentName:"p",className:"admonition admonition-shell"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},(0,p.kt)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),(0,p.kt)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",(0,p.kt)("inlineCode",{parentName:"h5"},"yarn"))),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("pre",{parentName:"div"},(0,p.kt)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/schema-ast\n")))),(0,p.kt)("h2",{parentName:"p"},"API Reference"),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"includeDirectives")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"false")),(0,p.kt)("p",{parentName:"p"},"Include directives to Schema output."),(0,p.kt)("h4",{parentName:"p"},"Usage Examples"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"schema:\n  - './src/schema.graphql'\ngenerates:\n  path/to/file.graphql:\n    plugins:\n      - schema-ast\n    config:\n      includeDirectives: true\n")),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"commentDescriptions")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"false")),(0,p.kt)("p",{parentName:"p"},'Set to true in order to print description as comments (using # instead of """)'),(0,p.kt)("h4",{parentName:"p"},"Usage Examples"),(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-yml"},"schema: http://localhost:3000/graphql\ngenerates:\n  schema.graphql:\n    plugins:\n      - schema-ast\n    config:\n      commentDescriptions: true\n")),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"sort")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"false")),(0,p.kt)("p",{parentName:"p"},"Set to true in order get the schema lexicographically sorted before printed."),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"federation")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"boolean"))),(0,p.kt)("h2",{id:"examples"},"Examples"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\nschema:\n  - 'http://localhost:3000/graphql'\n  - './src/**/*.graphql'\n  - 'scalar MyCustomScalar'\ngenerates:\n  path/to/file.graphql:\n    plugins:\n      - schema-ast\n")))}c.isMDXComponent=!0}}]);