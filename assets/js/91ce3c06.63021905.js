(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[5399],{35318:function(e,a,t){"use strict";t.d(a,{Zo:function(){return m},kt:function(){return u}});var n=t(27378);function p(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){p(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,p=function(e,a){if(null==e)return{};var t,n,p={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(p[t]=e[t]);return p}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var s=n.createContext({}),l=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},m=function(e){var a=l(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,p=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=l(t),u=p,k=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return t?n.createElement(k,i(i({ref:a},m),{},{components:t})):n.createElement(k,i({ref:a},m))}));function u(e,a){var t=arguments,p=a&&a.mdxType;if("string"==typeof e||p){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:p,i[1]=o;for(var l=2;l<r;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3192:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s},default:function(){return m}});var n=t(29603),p=t(50120),r=(t(27378),t(35318)),i={id:"java",title:"Java"},o={unversionedId:"plugins/java",id:"plugins/java",isDocsHomePage:!1,title:"Java",description:"{@import ../generated-config/java.md}",source:"@site/docs/plugins/java.md",sourceDirName:"plugins",slug:"/plugins/java",permalink:"/docs/plugins/java",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/plugins/java.md",version:"current",frontMatter:{id:"java",title:"Java"},sidebar:"sidebar",previous:{title:"Kotlin",permalink:"/docs/plugins/kotlin"},next:{title:"Java Resolvers",permalink:"/docs/plugins/java-resolvers"}},s=[{value:"How to use",id:"how-to-use",children:[]}],l={toc:s};function m(e){var a=e.components,t=(0,p.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("h2",{parentName:"p"},"Installation"),(0,r.kt)("img",{alt:"java plugin version",src:"https://img.shields.io/npm/v/@graphql-codegen/java?color=%23e15799&label=plugin\xa0version&style=for-the-badge"}),(0,r.kt)("div",{parentName:"p",className:"admonition admonition-shell"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16pt",height:"16pt",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",d:"M0 0v16h16V0zm15.063 15.063H.937v-11h14.126zm0-11.938H.937V.937h14.126zm0 0"}),(0,r.kt)("path",{parentName:"svg",d:"M1.875 1.563h.938V2.5h-.938zm0 0M3.438 1.563h.937V2.5h-.938zm0 0M5 1.563h.938V2.5H5zm0 0M1.875 5.074v1.348l.988.637-.988.578V9.05l2.828-1.668v-.586zm0 0M5.34 7.559h1.027v1.226H5.34zm0 0M5.34 5.32h1.027v1.23H5.34zm0 0M6.8 8.785h2.356v1.137H6.801zm0 0"}))),"Using ",(0,r.kt)("inlineCode",{parentName:"h5"},"yarn"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre"},"yarn add -D @graphql-codegen/java\n")))),(0,r.kt)("h2",{parentName:"p"},"API Reference"),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"package")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",{parentName:"p"},"Customize the Java package name. The default package name will be generated according to the output file path."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      package: custom.package.name\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"mappers")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",{parentName:"p"},"Allow you to replace specific GraphQL types with your custom model classes. This is useful when you want to make sure your resolvers returns the correct class.\nThe default value is the values set by ",(0,r.kt)("inlineCode",{parentName:"p"},"defaultMapper")," configuration.\nYou can use a direct path to the package, or use ",(0,r.kt)("inlineCode",{parentName:"p"},"package#class")," syntax to have it imported."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      mappers:\n        User: com.app.models#UserObject\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"defaultMapper")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("p",{parentName:"p"},"Sets the default mapper value in case it's not specified by ",(0,r.kt)("inlineCode",{parentName:"p"},"mappers"),".\nYou can use a direct path to the package, or use ",(0,r.kt)("inlineCode",{parentName:"p"},"package#class")," syntax to have it imported.\nThe default mapper is Java's ",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),"."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      defaultMapper: my.app.models.BaseEntity\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"className")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"Resolvers")),(0,r.kt)("p",{parentName:"p"},"Allow you to customize the parent class name."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      className: MyResolvers\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"listType")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"Iterable")),(0,r.kt)("p",{parentName:"p"},"Allow you to customize the list type."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"generates:\n  src/main/java/my-org/my-app/Resolvers.java:\n    plugins:\n      - java-resolvers\n    config:\n      listType: Map\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"strictScalars")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Makes scalars strict."),(0,r.kt)("p",{parentName:"p"},"If scalars are found in the schema that are not defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"scalars"),"\nan error will be thrown during codegen."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  strictScalars: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"defaultScalarType")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"any")),(0,r.kt)("p",{parentName:"p"},"Allows you to override the type that unknown scalars will have."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  defaultScalarType: unknown\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"scalars")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"ScalarsMap")),(0,r.kt)("p",{parentName:"p"},"Extends or overrides the built-in scalars and custom GraphQL scalars to a custom type."),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"namingConvention")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"NamingConvention"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"change-case-all#pascalCase")),(0,r.kt)("p",{parentName:"p"},"Allow you to override the naming convention of the output.\nYou can either override all namings, or specify an object with specific custom naming convention per output.\nThe format of the converter must be a valid ",(0,r.kt)("inlineCode",{parentName:"p"},"module#method"),".\nAllowed values for specific output are: ",(0,r.kt)("inlineCode",{parentName:"p"},"typeNames"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"enumValues"),'.\nYou can also use "keep" to keep all GraphQL names as-is.\nAdditionally you can set ',(0,r.kt)("inlineCode",{parentName:"p"},"transformUnderscore")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if you want to override the default behavior,\nwhich is to preserves underscores."),(0,r.kt)("p",{parentName:"p"},"Available case functions in ",(0,r.kt)("inlineCode",{parentName:"p"},"change-case-all")," are ",(0,r.kt)("inlineCode",{parentName:"p"},"camelCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"capitalCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"constantCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"dotCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"headerCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"noCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"paramCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pascalCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pathCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sentenceCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"snakeCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lowerCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"localeLowerCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"lowerCaseFirst"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"spongeCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"titleCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"upperCase"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"localeUpperCase")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"upperCaseFirst"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/btxtiger/change-case-all"},"See more")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"typesPrefix")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,r.kt)("p",{parentName:"p"},"Prefixes all the generated types."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesPrefix: I\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"typesSuffix")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"\ndefault: ``"),(0,r.kt)("p",{parentName:"p"},"Suffixes all the generated types."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  typesSuffix: I\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"skipTypename")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Does not add __typename to the generated types, unless it was specified in the selection set."),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  skipTypename: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"nonOptionalTypename")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Automatically adds ",(0,r.kt)("inlineCode",{parentName:"p"},"__typename")," field to the generated types, even when they are not specified\nin the selection set, and makes it non-optional"),(0,r.kt)("h4",{parentName:"p"},"Usage Examples"),(0,r.kt)("pre",{parentName:"p"},(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"config:\n  nonOptionalTypename: true\n")),(0,r.kt)("h3",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"h3"},"useTypeImports")),(0,r.kt)("p",{parentName:"p"},"type: ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\ndefault: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",{parentName:"p"},"Will use ",(0,r.kt)("inlineCode",{parentName:"p"},"import type {}")," rather than ",(0,r.kt)("inlineCode",{parentName:"p"},"import {}"),' when importing only types. This gives\ncompatibility with TypeScript\'s "importsNotUsedAsValues": "error" option')),(0,r.kt)("h2",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"You can use it directly to transform your ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," in your resolvers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n  user(id: ID!): User!\n}\n\ntype User {\n  id: ID\n}\n")),(0,r.kt)("p",null,"Then, in your resolver:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import com.my.app.generated.Types;\nimport com.my.app.models.User;\nimport graphql.schema.DataFetcher;\n\nexport class QueryResolvers {\n  public DataFetcher<User> user() {\n        return env -> {\n            Types.QueryUserArgs args = new Types.QueryUserArgs(env.getArguments());\n            String userId = args.getId();\n\n            // rest of the code\n        };\n    }\n}\n")))}m.isMDXComponent=!0}}]);