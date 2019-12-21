(this["webpackJsonpcp-problems"]=this["webpackJsonpcp-problems"]||[]).push([[0],{35:function(e,t,a){e.exports=a(51)},47:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(19),c=a.n(l),o=a(34),s=a(17),u=a(15);function i(){return n.a.createElement(s.a,{id:"navbar",fixed:"top",variant:"dark",expand:"lg",style:{backgroundColor:"#203527"}},n.a.createElement(s.a.Brand,{href:"#"},"CP Problems"),n.a.createElement(s.a.Toggle,null),n.a.createElement(s.a.Collapse,{id:"navbar-nav"},n.a.createElement(u.a,null,n.a.createElement(u.a.Link,{href:"#list"},"List"),n.a.createElement(u.a.Link,{href:"#options"},"Options"),n.a.createElement(u.a.Link,{href:"#help"},"Help"),n.a.createElement(u.a.Link,{href:"https://github.com/southball/cp-problems/"},"GitHub"))))}var m=a(12),p=n.a.createContext(null),d=a(14),f=a(18),b=a(9),h={"":{name:"Not set",abbr:"N/S"},atcoder:{name:"AtCoder",abbr:"AtC"},codeforces:{name:"Codeforces",abbr:"CF"}},E=a(6),v=a.n(E);function g(e,t){var a,r,n,l,c,o,s,u,i,m,p;return v.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:if(e=e.toLowerCase(),"difficulty"!==t){d.next=16;break}return d.next=4,v.a.awrap(fetch("https://kenkoooo.com/atcoder/resources/problem-models.json"));case 4:return a=d.sent,d.next=7,v.a.awrap(a.json());case 7:if(r=d.sent,n=function(e){return Math.round(e>=400?e:400/Math.exp(1-e/400))},!r[e]){d.next=13;break}return d.abrupt("return",n(r[e].difficulty).toFixed());case 13:return d.abrupt("return","-");case 14:d.next=55;break;case 16:return d.next=18,v.a.awrap(fetch("https://kenkoooo.com/atcoder/resources/merged-problems.json"));case 18:return l=d.sent,d.next=21,v.a.awrap(l.json());case 21:c=d.sent,o=!0,s=!1,u=void 0,d.prev=25,i=c[Symbol.iterator]();case 27:if(o=(m=i.next()).done){d.next=40;break}if((p=m.value).id!==e){d.next=37;break}d.t0=t,d.next="difficulty"===d.t0?33:"name"===d.t0?34:"url"===d.t0?35:36;break;case 33:return d.abrupt("return",p.predict?p.predict.toFixed():"-");case 34:return d.abrupt("return",p.title?p.title.replace(/^[A-Z]. /,""):"-");case 35:return d.abrupt("return","https://atcoder.jp/contests/".concat(p.contest_id,"/tasks/").concat(p.id));case 36:return d.abrupt("return","-");case 37:o=!0,d.next=27;break;case 40:d.next=46;break;case 42:d.prev=42,d.t1=d.catch(25),s=!0,u=d.t1;case 46:d.prev=46,d.prev=47,o||null==i.return||i.return();case 49:if(d.prev=49,!s){d.next=52;break}throw u;case 52:return d.finish(49);case 53:return d.finish(46);case 54:return d.abrupt("return","-");case 55:case"end":return d.stop()}}),null,null,[[25,42,46,54],[47,,49,53]])}var k="cp-problems.codeforces-cache";function x(e,t){var a,r,n,l,c,o,s,u,i;return v.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:if(e=e.toUpperCase(),null!==sessionStorage.getItem(k)){m.next=12;break}return m.next=4,v.a.awrap(fetch("https://codeforces.com/api/problemset.problems"));case 4:return r=m.sent,m.next=7,v.a.awrap(r.text());case 7:n=m.sent,a=JSON.parse(n),sessionStorage.setItem(k,n),m.next=13;break;case 12:a=JSON.parse(sessionStorage.getItem(k));case 13:l=!0,c=!1,o=void 0,m.prev=16,s=a.result.problems[Symbol.iterator]();case 18:if(l=(u=s.next()).done){m.next=31;break}if(i=u.value,e!==i.contestId.toString()+i.index){m.next=28;break}m.t0=t,m.next="difficulty"===m.t0?24:"name"===m.t0?25:"url"===m.t0?26:27;break;case 24:return m.abrupt("return",i.rating?i.rating.toFixed():"-");case 25:return m.abrupt("return",i.name?i.name:"-");case 26:return m.abrupt("return","https://codeforces.com/problemset/problem/".concat(i.contestId.toString(),"/").concat(i.index));case 27:return m.abrupt("return","-");case 28:l=!0,m.next=18;break;case 31:m.next=37;break;case 33:m.prev=33,m.t1=m.catch(16),c=!0,o=m.t1;case 37:m.prev=37,m.prev=38,l||null==s.return||s.return();case 40:if(m.prev=40,!c){m.next=43;break}throw o;case 43:return m.finish(40);case 44:return m.finish(37);case 45:return m.abrupt("return","-");case 46:case"end":return m.stop()}}),null,null,[[16,33,37,45],[38,,40,44]])}function y(e,t,a){return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if("atcoder"!==e){r.next=6;break}return r.next=3,v.a.awrap(g(t,a));case 3:return r.abrupt("return",r.sent);case 6:if("codeforces"!==e){r.next=12;break}return r.next=9,v.a.awrap(x(t,a));case 9:return r.abrupt("return",r.sent);case 12:return r.abrupt("return","-");case 13:case"end":return r.stop()}}))}var w=a(27),j=a(24);function C(e){var t=e.problem,a=e.id,l=Object(r.useContext)(p),c=Object(r.useState)(""===t.judge&&""===t.problemId),o=Object(d.a)(c,2),s=o[0],u=o[1];function i(e){return function(t){var r=l.problems.slice(),n=JSON.parse(JSON.stringify(r[a]));n[e]=t.target.value,r[a]=n,l.set({problems:r})}}var m=n.a.createElement(n.a.Fragment,null,l.options.showAbbreviation?h[t.judge].abbr:h[t.judge].name,"\xa0",t.problemId,""!==t.name&&"-"!==t.name?" - "+t.name:"");return n.a.createElement(f.a,null,n.a.createElement(f.a.Body,{style:{padding:"8px 20px"}},n.a.createElement(f.a.Title,{style:{marginBottom:s?"12px":"0px"}},""!==t.url&&"-"!==t.url?n.a.createElement("a",{href:t.url},m):m,"\xa0",l.options.showDifficulty&&""!==t.difficulty&&"-"!==t.difficulty?"(".concat(t.difficulty,") "):"",n.a.createElement(w.a,{onClick:function(){if(s&&t.judge&&t.problemId){var e=[];""===t.name&&e.push(y(t.judge,t.problemId,"name").then((function(e){return["name",e]}))),""===t.url&&e.push(y(t.judge,t.problemId,"url").then((function(e){return["url",e]}))),""===t.difficulty&&e.push(y(t.judge,t.problemId,"difficulty").then((function(e){return["difficulty",e]}))),Promise.all(e).then((function(e){var t=l.problems.slice(),r=t[a],n=!0,c=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(n=(s=u.next()).done);n=!0){var i=s.value,m=Object(d.a)(i,2),p=m[0],f=m[1];r[p]=f}}catch(b){c=!0,o=b}finally{try{n||null==u.return||u.return()}finally{if(c)throw o}}t[a]=r,l.set({problems:t})}))}u(!s)},icon:s?j.a:j.b,style:{cursor:"pointer"}}),"\xa0",n.a.createElement(w.a,{onClick:function(e){var t=l.problems.filter((function(e,t){return t!==a}));l.set({problems:t})},icon:j.c,style:{cursor:"pointer"}})),s&&n.a.createElement(f.a.Text,null,n.a.createElement("table",{className:"w-100"},n.a.createElement("tr",null,n.a.createElement("td",{style:{width:"100px"}},n.a.createElement("b",null,"Judge:")),n.a.createElement("td",null,n.a.createElement(b.a.Control,{as:"select",size:"sm",value:t.judge,onChange:i("judge")},Object.entries(h).map((function(e){var t=Object(d.a)(e,2),a=t[0],r=t[1];return n.a.createElement("option",{value:a},r.abbr," - ",r.name)}))))),n.a.createElement("tr",null,n.a.createElement("td",{style:{width:"100px"}},n.a.createElement("b",null,"Problem ID:")),n.a.createElement("td",null,n.a.createElement(b.a.Control,{size:"sm",value:t.problemId,onChange:i("problemId")}))),n.a.createElement("tr",null,n.a.createElement("td",{style:{width:"100px"}},n.a.createElement("b",null,"Name:")),n.a.createElement("td",null,n.a.createElement(b.a.Control,{size:"sm",value:t.name,placeholder:"Leave this field blank to fetch automatically.",onChange:i("name")}))),n.a.createElement("tr",null,n.a.createElement("td",{style:{width:"100px"}},n.a.createElement("b",null,"URL:")),n.a.createElement("td",null,n.a.createElement(b.a.Control,{size:"sm",value:t.url,placeholder:"Leave this field blank to fetch automatically.",onChange:i("url")}))),n.a.createElement("tr",null,n.a.createElement("td",{style:{width:"100px"}},n.a.createElement("b",null,"Difficulty:")),n.a.createElement("td",null,n.a.createElement(b.a.Control,{size:"sm",value:t.difficulty,placeholder:"Leave this field blank to fetch automatically.",onChange:i("difficulty")})))))))}function I(){var e=Object(r.useContext)(p);return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,{variant:"dark",onClick:function(){e.set({problems:e.problems.concat({judge:"",problemId:"",name:"",url:"",difficulty:""})})},style:{marginBottom:"8px"}},"Add Problem"),e.problems.map((function(e,t){return n.a.createElement(C,{problem:e,id:t,key:t})})))}var O=a(16),S=a(29),L=a.n(S);function N(){var e=Object(r.useContext)(p);function t(e,t){var a=new Blob([t]),r=URL.createObjectURL(a),n=document.createElement("a");n.href=r,n.download=e,n.click(),URL.revokeObjectURL(r)}function a(t){return function(a){var r=Object(O.a)({},e.options);r[t]=!r[t],e.set({options:r})}}return n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a.Check,{checked:e.options.showDifficulty?"checked":"",onChange:a("showDifficulty"),label:"Show Difficulty"}),n.a.createElement(b.a.Check,{checked:e.options.showAbbreviation?"checked":"",onChange:a("showAbbreviation"),label:"Show Abbreviations of Judge"}),n.a.createElement(m.a,{variant:"dark",onClick:function(){var t=document.createElement("input");t.type="file",t.addEventListener("change",(function(){var a=t.files[0],r=new FileReader;r.onload=function(){try{var t=JSON.parse(r.result);e.set({problems:t}),L.a.success("Imported data from file.")}catch(a){L.a.error("Cannot read the file chosen.")}},r.readAsText(a)})),t.click()}},"Import Data (Override)"),"\xa0",n.a.createElement(m.a,{variant:"dark",onClick:function(){t("problems.json",JSON.stringify(e.problems))}},"Export Data"),"\xa0",n.a.createElement(m.a,{variant:"dark",onClick:function(){t("problems.md",e.problems.slice().map((function(t){var a="";return a+="- [",a+=e.options.showAbbreviation?h[t.judge].abbr:h[t.judge].name,a+=" ".concat(t.problemId),""!==t.name&&"-"!==t.name&&(a+=" - ".concat(t.name)),e.options.showDifficulty&&""!==t.difficulty&&"-"!==t.difficulty&&(a+=" (".concat(t.difficulty,")")),a+="]",a+="(".concat(t.url,")")})).join("\n")+"\n")}},"Export Markdown"),"\xa0",n.a.createElement(m.a,{variant:"dark",onClick:function(){var t=e.problems.slice();t.sort((function(e,t){return e.judge!==t.judge?e.judge>t.judge:e.problemId!==t.problemId?e.problemId>t.problemId:0})),e.set({problems:t})}},"Sort Problems"),"\xa0",n.a.createElement(m.a,{variant:"dark",onClick:function(){e.set({problems:[]})}},"Clear All Data"))}function A(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"This application simplifies the task of creating and editing a list of problems. You only need to enter the judge and the problem ID, and it will automatically fetch the name, URL and difficulty of the problems. You can also import and export your list in JSON, and export your list in Markdown."),n.a.createElement("p",null,"The application currently supports the following judges:\xa0",n.a.createElement("a",{href:"https://atcoder.jp/"},"AtCoder")," and\xa0",n.a.createElement("a",{href:"https://codeforces.com/"},"CodeForces"),"."),n.a.createElement("p",null,"For ",n.a.createElement("b",null,"Codeforces"),", enter the ID shown in the ",n.a.createElement("code",null,"#"),"\xa0 field of the problemset page, e.g. ",n.a.createElement("code",null,"20C")," for\xa0",n.a.createElement("a",{href:"https://codeforces.com/problemset/problem/20/C"},"Dijkstra"),"."),n.a.createElement("p",null,"For ",n.a.createElement("b",null,"AtCoder"),", enter the ID in the last part of the URL, e.g.\xa0",n.a.createElement("code",null,"ARC084_B")," for\xa0",n.a.createElement("a",{href:"https://atcoder.jp/contests/arc084/tasks/arc084_b"},"Small Multiple"),"."))}a(47);var D=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i,null),n.a.createElement(o.a,{style:{marginTop:"70px"}},n.a.createElement("h2",null,n.a.createElement("a",{className:"anchor",id:"list"}),"Problems List"),n.a.createElement(I,null),n.a.createElement("hr",null),n.a.createElement("h2",null,n.a.createElement("a",{className:"anchor",id:"options"}),"Options"),n.a.createElement(N,null),n.a.createElement("hr",null),n.a.createElement("h2",null,n.a.createElement("a",{className:"anchor",id:"help"}),"Help"),n.a.createElement(A,null)))},F="cp-problems.app-state",J={problems:[],options:{showDifficulty:!0,showAbbreviation:!0}};a(48),a(49),a(50);c.a.render(n.a.createElement((function(e){var t=e.children,a=JSON.parse(window.localStorage.getItem(F))||J,l=Object(r.useState)(a),c=Object(d.a)(l,2),o=c[0],s=c[1];return Object(r.useEffect)((function(){window.localStorage.setItem(F,JSON.stringify(o))}),[o]),n.a.createElement(p.Provider,{value:Object(O.a)({},o,{set:function(e){s(Object(O.a)({},o,{},e))}})},t)}),null,n.a.createElement(D,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.01cea931.chunk.js.map