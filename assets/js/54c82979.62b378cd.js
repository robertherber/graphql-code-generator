(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[6329],{35318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,g=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72193:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(29603),a=n(50120),o=(n(27378),n(35318)),i={id:"index",title:"What is GraphQL Code Generator?"},s={unversionedId:"getting-started/index",id:"getting-started/index",isDocsHomePage:!1,title:"What is GraphQL Code Generator?",description:"GraphQL Code Generator is a CLI tool that can generate TypeScript typings out of a GraphQL schema. When we develop a GraphQL backend, there would be many instances where we would find ourselves writing the same things which are already described by the GraphQL schema, only in a different format; for example: resolver signatures, MongoDB models, Angular services etc.",source:"@site/docs/getting-started/index.md",sourceDirName:"getting-started",slug:"/getting-started/index",permalink:"/docs/getting-started/index",editUrl:"https://github.com/dotansimha/graphql-code-generator/edit/master/website/docs/getting-started/index.md",version:"current",frontMatter:{id:"index",title:"What is GraphQL Code Generator?"},sidebar:"sidebar",next:{title:"Installation",permalink:"/docs/getting-started/installation"}},l=[{value:"What&#39;s next?",id:"whats-next",children:[]}],p={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"GraphQL Code Generator is a CLI tool that can generate TypeScript typings out of a GraphQL schema. When we develop a GraphQL backend, there would be many instances where we would find ourselves writing the same things which are already described by the GraphQL schema, only in a different format; for example: resolver signatures, MongoDB models, Angular services etc."),(0,o.kt)("p",null,"GraphQL Code Generator was built to address exactly that. By analyzing the schema and parsing it, GraphQL Code Generator can output code at a wide variety of formats, based on pre-defined plugins or based on custom user-defined ones. Regardless of the language that you're using, GraphQL Code Generator got you covered."),(0,o.kt)("p",null,"For example, given the following schema:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Author {\n  id: Int!\n  firstName: String!\n  lastName: String!\n  posts(findTitle: String): [Post]\n}\n\ntype Post {\n  id: Int!\n  title: String!\n  author: Author!\n}\n\ntype Query {\n  posts: [Post]\n}\n\nschema {\n  query: Query\n}\n")),(0,o.kt)("p",null,"GraphQL Code Generator can generate the following TypeScript typings (this example is using ",(0,o.kt)("inlineCode",{parentName:"p"},"typescript")," plugin):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type Maybe<T> = T | null;\n\n/** All built-in and custom scalars, mapped to their actual values */\nexport type Scalars = {\n  ID: string,\n  String: string,\n  Boolean: boolean,\n  Int: number,\n  Float: number,\n};\n\nexport type Author = {\n  __typename?: 'Author',\n  id: Scalars['Int'],\n  firstName: Scalars['String'],\n  lastName: Scalars['String'],\n  posts?: Maybe<Array<Maybe<Post>>>,\n};\n\nexport type AuthorPostsArgs = {\n  findTitle?: Maybe<Scalars['String']>\n};\n\nexport type Post = {\n  __typename?: 'Post',\n  id: Scalars['Int'],\n  title: Scalars['String'],\n  author: Author,\n};\n\nexport type Query = {\n  __typename?: 'Query',\n  posts?: Maybe<Array<Maybe<Post>>>,\n};\n")),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"Start by ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/installation"},"installing GraphQL Code Generator")," in your project, and use the basic plugins to generate some code. "),(0,o.kt)("p",null,"You can go over ",(0,o.kt)("a",{parentName:"p",href:"/docs/plugins/index"},"the list of available plugins")," and find more plugins that matches your needs. "),(0,o.kt)("p",null,"If you are having issues, you can reach us this the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Found a bug? ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/dotansimha/graphql-code-generator"},"report it in our GitHub repo")),(0,o.kt)("li",{parentName:"ul"},"Need help or have a question? You can use the live chat box in the corner of the screen, ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/dotansimha/graphql-code-generator/discussions"},"ask it in our GitHub Discussions page")," or ",(0,o.kt)("a",{parentName:"li",href:"http://bit.ly/guild-chat"},"reach us directly in our Discord"),"."),(0,o.kt)("li",{parentName:"ul"},"We have more awesome ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/the-guild-org/Stack"},"open source tools"),"!"),(0,o.kt)("li",{parentName:"ul"},"You can ",(0,o.kt)("a",{parentName:"li",href:"http://the-guild.dev/"},"visit our website")," for more information about us and what we do")))}u.isMDXComponent=!0}}]);