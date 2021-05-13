(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[8665],{35318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,h=d["".concat(l,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(h,p(p({ref:t},m),{},{components:n})):a.createElement(h,p({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37493:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return o},toc:function(){return l},default:function(){return m}});var a=n(29603),r=n(50120),i=(n(27378),n(35318)),p={id:"typescript-graphql-files-modules",title:"TypeScript GraphQL Files Modules"},o={unversionedId:"plugins/typescript-graphql-files-modules",id:"plugins/typescript-graphql-files-modules",isDocsHomePage:!1,title:"TypeScript GraphQL Files Modules",description:"If you wish to have a simpler integration in a Webpack project, use graphql-let, it uses this plugin behind the scenes, and provides simpler developer experience.",source:"@site/docs/plugins/typescript-graphql-files-modules.md",sourceDirName:"plugins",slug:"/plugins/typescript-graphql-files-modules",permalink:"/docs/plugins/typescript-graphql-files-modules",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/typescript-graphql-files-modules.md",version:"current",frontMatter:{id:"typescript-graphql-files-modules",title:"TypeScript GraphQL Files Modules"},sidebar:"sidebar",previous:{title:"TypeScript 1.0 Compatibility",permalink:"/docs/plugins/typescript-compatibility"},next:{title:"TypeScript document nodes",permalink:"/docs/plugins/typescript-document-nodes"}},l=[{value:"Pre-Requirements",id:"pre-requirements",children:[]},{value:"Example",id:"example",children:[]}],s={toc:l};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Webpack Integration")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you wish to have a simpler integration in a Webpack project, use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/piglovesyou/graphql-let"},(0,i.kt)("inlineCode",{parentName:"a"},"graphql-let")),", it uses this plugin behind the scenes, and provides simpler developer experience."))),(0,i.kt)("h2",{id:"pre-requirements"},"Pre-Requirements"),(0,i.kt)("p",null,"To use this template, make sure you are using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apollographql/graphql-tag#webpack-preprocessing-with-graphql-tagloader"},(0,i.kt)("inlineCode",{parentName:"a"},"graphql-tag/loader"))," with Webpack."),(0,i.kt)("p",null,(0,i.kt)("p",{parentName:"p"},"This plugin generates TypeScript typings for ",(0,i.kt)("inlineCode",{parentName:"p"},".graphql")," files containing GraphQL documents, which later on can be consumed using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apollographql/graphql-tag#webpack-preprocessing-with-graphql-tagloader"},(0,i.kt)("inlineCode",{parentName:"a"},"graphql-tag/loader"))," or use ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," types if you will use the operations as raw strings, and get type-check and type-safety for your imports. This means that any time you import objects from ",(0,i.kt)("inlineCode",{parentName:"p"},".graphql")," files, your IDE will provide auto-complete."),(0,i.kt)("p",{parentName:"p"},"This plugin also handles ",(0,i.kt)("inlineCode",{parentName:"p"},".graphql")," files containing multiple GraphQL documents, and name the imports according to the operation name."),(0,i.kt)("blockquote",{parentName:"p"},(0,i.kt)("p",{parentName:"blockquote"},"\u26a0 Fragments are not generated with named imports, only as default imports, due to ",(0,i.kt)("inlineCode",{parentName:"p"},"graphql-tag/loader")," behavior.")),(0,i.kt)("h2",{parentName:"p"},"Installation"),(0,i.kt)("img",{alt:"typescript-graphql-files-modules plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/typescript-graphql-files-modules?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),(0,i.kt)("div",{parentName:"p",className:"admonition admonition-shell"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),(0,i.kt)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",(0,i.kt)("inlineCode",{parentName:"h5"},"yarn"))),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/typescript-graphql-files-modules\n")))),(0,i.kt)("h2",{parentName:"p"},"API Reference"),(0,i.kt)("h3",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"h3"},"modulePathPrefix")),(0,i.kt)("p",{parentName:"p"},"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,i.kt)("p",{parentName:"p"},"Allows specifying a module definition path prefix to provide distinction\nbetween generated types."),(0,i.kt)("h4",{parentName:"p"},"Usage Examples"),(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'generates: src/api/user-service/queries.d.ts\n documents: src/api/user-service/queries.graphql\n plugins:\n   - typescript-graphql-files-modules\n config:\n   # resulting module definition path glob: "*\\/api/user-service/queries.graphql"\n   modulePathPrefix: "/api/user-service/"\n')),(0,i.kt)("h3",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"h3"},"relativeToCwd")),(0,i.kt)("p",{parentName:"p"},"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"false")),(0,i.kt)("p",{parentName:"p"},"By default, only the filename is being used to generate TS module declarations. Setting this to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," will generate it with a full path based on the CWD."),(0,i.kt)("h3",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"h3"},"prefix")),(0,i.kt)("p",{parentName:"p"},"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"*\\/")),(0,i.kt)("p",{parentName:"p"},"By default, a wildcard is being added as prefix, you can change that to a custom prefix"),(0,i.kt)("h3",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"h3"},"type")),(0,i.kt)("p",{parentName:"p"},"type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string (values: DocumentNode, string)"),"\ndefault: ",(0,i.kt)("inlineCode",{parentName:"p"},"DocumentNode")),(0,i.kt)("p",{parentName:"p"},"By default, the named exports will have a type ",(0,i.kt)("inlineCode",{parentName:"p"},"DocumentNode"),'. Change this to "string" if you only use raw strings.')),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Given that you have a query named ",(0,i.kt)("inlineCode",{parentName:"p"},"MyQuery")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"my-query.graphql")," file, this template will generate the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"declare module '*/my-query.graphql' {\n  import { DocumentNode } from 'graphql';\n  const MyQuery: DocumentNode;\n\n  export { MyQuery };\n\n  export default defaultDocument;\n}\n")),(0,i.kt)("p",null,"Accordingly, you can import the generated types and use it in your code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import myQuery from './my-query.graphql';\n\n// OR\n\nimport { myQuery } from './my-query.graphql';\n")))}m.isMDXComponent=!0}}]);