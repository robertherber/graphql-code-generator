(self.webpackChunk_graphql_codegen_website=self.webpackChunk_graphql_codegen_website||[]).push([[1842],{91842:function(e,n,t){"use strict";t.r(n),t.d(n,{plugin:function(){return p},validate:function(){return l}});var i=t(41476),r=t(57135),o=t.n(r),c=t(93067),u=t(67425),p=function(e,n,t){var i=[];return i.push(function(e,n){var t,i,r,o=e.getTypeMap(),u=[],p=Object.keys(o).reduce((function(e,t){var i=o[t];if(!t.startsWith("__")&&((0,c.lp)(i)||(0,c.oT)(i))){var r,p=Object.keys(i.getFields()).filter((function(e){return!e.startsWith("__")})),l=t+"KeySpecifier",a=t+"FieldPolicy";return u.push("export type "+l+" = ("+p.map((function(e){return"'"+e+"'"})).join(" | ")+" | "+l+")[];"),u.push("export type "+a+" = {\n"+p.map((function(e){return"\t"+e+"?: FieldPolicy<any> | FieldReadFunction<any>"})).join(",\n")+"\n};"),Object.assign({},e,((r={})[t]='Omit<TypePolicy, "fields" | "keyFields"> & {\n\t\tkeyFields'+(n.requireKeyFields?"":"?")+": false | "+l+" | (() => undefined | "+l+"),\n\t\tfields?: "+a+",\n\t}",r))}return e}),{}),l=[null===(t=e.getQueryType())||void 0===t?void 0:t.name,null===(i=e.getMutationType())||void 0===i?void 0:i.name,null===(r=e.getSubscriptionType())||void 0===r?void 0:r.name].filter(Boolean),a="export type TypedTypePolicies = TypePolicies & {"+Object.keys(p).map((function(e){return"\n\t"+e+(n.requirePoliciesForAllTypes&&!l.includes(e)?"":"?")+": "+p[e]})).join(",")+"\n};";return{prepend:["import "+(n.useTypeImports?"type ":"")+"{ FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';"],content:[].concat(u,[a]).join("\n")}}(e,t)),{prepend:i.reduce((function(e,n){return[].concat(e,n.prepend||[])}),[]),append:i.reduce((function(e,n){return[].concat(e,n.append||[])}),[]),content:i.map((function(e){return e.content})).join("\n")}};var l=function(){var e=(0,i.Z)(o().mark((function e(n,t,i,r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(".ts"===(0,u.extname)(r)||".tsx"===(0,u.extname)(r)){e.next=2;break}throw new Error('Plugin "apollo-client-helpers" requires extension to be ".ts" or ".tsx"!');case 2:case"end":return e.stop()}}),e)})));return function(n,t,i,r){return e.apply(this,arguments)}}()}}]);