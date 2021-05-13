(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[7522],{35318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=l(n),c=r,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||p;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<p;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21354:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s},default:function(){return m}});var a=n(29603),r=n(50120),p=(n(27378),n(35318)),o={id:"graphql-modules",title:"graphql-modules"},i={unversionedId:"presets/graphql-modules",id:"presets/graphql-modules",isDocsHomePage:!1,title:"graphql-modules",description:"The @graphql-codegen/graphql-modules-preset generates .ts file with TypeScript types, per each GraphQL-Modules module definition.",source:"@site/docs/presets/graphql-modules.md",sourceDirName:"presets",slug:"/presets/graphql-modules",permalink:"/docs/presets/graphql-modules",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/presets/graphql-modules.md",version:"current",frontMatter:{id:"graphql-modules",title:"graphql-modules"},sidebar:"sidebar",previous:{title:"import-types",permalink:"/docs/presets/import-types"},next:{title:"Apollo Local State",permalink:"/docs/integrations/apollo-local-state"}},s=[{value:"Configuration",id:"configuration",children:[]},{value:"Usage Example",id:"usage-example",children:[]}],l={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"@graphql-codegen/graphql-modules-preset")," generates ",(0,p.kt)("inlineCode",{parentName:"p"},".ts")," file with TypeScript types, per each ",(0,p.kt)("a",{parentName:"p",href:"http://graphql-modules.com/"},"GraphQL-Modules")," module definition."),(0,p.kt)("p",null,"The generates files will be generated based on each module definition, and based on the GraphQL schema defined in that specific module, allowing you to write type-safe resolvers, while keeping modules types boundaries."),(0,p.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,p.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Usage Requirements")),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("p",{parentName:"div"},"This preset generates code for ",(0,p.kt)("inlineCode",{parentName:"p"},"graphql-modules")," @ ",(0,p.kt)("inlineCode",{parentName:"p"},"v1"),". Previous versions are not supported."))),(0,p.kt)("h2",{id:"configuration"},"Configuration"),(0,p.kt)("p",null,(0,p.kt)("h2",{parentName:"p"},"Installation"),(0,p.kt)("img",{alt:"graphql-modules-preset plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/graphql-modules-preset?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),(0,p.kt)("div",{parentName:"p",className:"admonition admonition-shell"},(0,p.kt)("div",{parentName:"div",className:"admonition-heading"},(0,p.kt)("h5",{parentName:"div"},(0,p.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,p.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},(0,p.kt)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),(0,p.kt)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",(0,p.kt)("inlineCode",{parentName:"h5"},"yarn"))),(0,p.kt)("div",{parentName:"div",className:"admonition-content"},(0,p.kt)("pre",{parentName:"div"},(0,p.kt)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/graphql-modules-preset\n")))),(0,p.kt)("h2",{parentName:"p"},"API Reference"),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"baseTypesPath")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"p"},"Required, should point to the base schema types file.\nThe key of the output is used a the base path for this file."),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"importBaseTypesFrom")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"p"},"Overrides the package import for the base types. Use this if you are within a monorepo and you wish\nto import the base types directly from a different package, and not from a relative path."),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"cwd")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"process.cwd()")),(0,p.kt)("p",{parentName:"p"},"Optional, override the ",(0,p.kt)("inlineCode",{parentName:"p"},"cwd")," of the execution. We are using ",(0,p.kt)("inlineCode",{parentName:"p"},"cwd")," to figure out the imports between files. Use this if your execuion path is not your project root directory."),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"importTypesNamespace")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"Types")),(0,p.kt)("p",{parentName:"p"},"Optional, override the name of the import namespace used to import from the ",(0,p.kt)("inlineCode",{parentName:"p"},"baseTypesPath")," file."),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"filename")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"string")),(0,p.kt)("p",{parentName:"p"},"Required, sets the file name for the generated files."),(0,p.kt)("h3",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"h3"},"encapsulateModuleTypes")),(0,p.kt)("p",{parentName:"p"},"type: ",(0,p.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,p.kt)("inlineCode",{parentName:"p"},"namespace")),(0,p.kt)("p",{parentName:"p"},"Configure how to encapsulate the module types, to avoid confusion."),(0,p.kt)("p",{parentName:"p"},(0,p.kt)("inlineCode",{parentName:"p"},"namespace")," (default): will wrap all types in a TypeScript namespace, using the module name.\n",(0,p.kt)("inlineCode",{parentName:"p"},"prefix"),": will prefix all types from a specific module with the module name.\n",(0,p.kt)("inlineCode",{parentName:"p"},"none"),": will skip encapsulation, and generate type as-is.")),(0,p.kt)("h2",{id:"usage-example"},"Usage Example"),(0,p.kt)("p",null,"Here's a short example for generating types and resolvers for 2 modules:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-yaml"},"schema: './src/modules/**/typedefs/*.graphql'\ngenerates:\n  ./server/src/modules/:\n    preset: graphql-modules\n    presetConfig:\n      baseTypesPath: ../generated-types/graphql.ts # Where to create the complete schema types\n      filename: generated-types/module-types.ts # Where to create each module types\n    plugins:\n      - add:\n          content: '/* eslint-disable */'\n      - typescript\n      - typescript-resolvers\n")),(0,p.kt)("p",null,"This will generate a file called ",(0,p.kt)("inlineCode",{parentName:"p"},"module-types.ts")," under each module you have."),(0,p.kt)("p",null,"To use the generates resolvers, you can use ",(0,p.kt)("inlineCode",{parentName:"p"},"Resolvers")," signature and apply it to your resolvers object within the module:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"// src/modules/user/resolvers.ts\nimport { MyModule } from './generated-types/module-types';\n\nexport const resolvers: MyModule.Resolvers = {\n  // Here you can implement only the types and fields defined in your module!\n};\n")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"You can find ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/dotansimha/graphql-code-generator/tree/master/dev-test/modules"},"an example project here"),".")))}m.isMDXComponent=!0}}]);