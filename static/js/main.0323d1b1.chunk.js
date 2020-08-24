(this["webpackJsonpfront-awesome"]=this["webpackJsonpfront-awesome"]||[]).push([[0],{32:function(n,e,t){n.exports=t.p+"static/media/logo.5d5d9eef.svg"},42:function(n,e,t){n.exports=t(74)},74:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(30),o=t.n(i),c=t(2),u=t(3),l=t(31),d=t(36),s=t(5),m=t(10),g={menuVisible:!1};function f(n,e){return Object(m.b)(n,(function(n){switch(e.type){case"toggle-menu":n.menuVisible=!n.menuVisible}}))}var b=a.a.createContext({}),p=a.a.createContext({}),v=function(n){var e=n.children,t=Object(r.useReducer)(f,g),i=Object(s.a)(t,2),o=i[0],c=i[1];return a.a.createElement(b.Provider,{value:c},a.a.createElement(p.Provider,{value:o},e))};function h(){return a.a.useContext(p)}function x(){return a.a.useContext(b)}var j=t(32),y=t.n(j);function k(){var n=Object(c.a)(["\n  margin: 0;\n  font-size: 1.9rem;\n\n  @media (min-width: 768px) {\n    font-size: 2.8rem;\n  }\n"]);return k=function(){return n},n}function E(){var n=Object(c.a)(["\n  height: 6rem;\n"]);return E=function(){return n},n}function O(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  margin: 0 auto;\n\n  @media (min-width: 768px) {\n    margin: 0;\n  }\n"]);return O=function(){return n},n}function w(){var n=Object(c.a)(["\n  width: 3.2rem;\n  height: 3.2rem;\n  font-size: 2rem;\n  border-radius: 50%;\n  transition: background-color 0.2s;\n\n  :hover {\n    background: var(--indigo-700);\n  }\n  :active {\n    background: var(--indigo-900);\n  }\n\n  @media (min-width: 768px) {\n    display: none;\n  }\n"]);return w=function(){return n},n}function C(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem 1.7rem;\n  color: var(--gray-100);\n  background-color: var(--indigo-800);\n  border-bottom: 1px solid var(--indigo-900);\n  box-shadow: 0 5px 4px -3px rgba(0, 0, 0, 0.2);\n\n  @media (min-width: 768px) {\n    justify-content: flex-start;\n  }\n"]);return C=function(){return n},n}var F=u.b.header(C()),A=u.b.button(w()),z=u.b.div(O()),B=u.b.img(E()),R=u.b.h1(k()),D=function(){var n=x();return a.a.createElement(F,null,a.a.createElement(A,{type:"button",onClick:function(){n({type:"toggle-menu"})}},a.a.createElement(l.a,{icon:d.a})),a.a.createElement(z,null,a.a.createElement(B,{src:y.a,alt:"React logo"}),a.a.createElement(R,null,"Front Awesome")))},P=t(6),S=t.n(P),V=t(13),I=t(40),N=t(16),J=t.n(N),L=(t(57),t(39)),q=t.n(L).a.create({baseURL:"https://api.chucknorris.io/jokes"});function M(){var n=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 0 0.5rem;\n  color: var(--gray-100);\n  text-align: start;\n  text-transform: capitalize;\n  background: ",";\n  border: 0;\n  border-radius: 0.3rem;\n  outline: 0;\n  transition: background-color 0.2s;\n\n  :hover {\n    background: var(--indigo-700);\n  }\n  :active {\n    background: var(--indigo-900);\n  }\n"]);return M=function(){return n},n}function U(){var n=Object(c.a)(["\n  width: 100%;\n  height: 4.5rem;\n"]);return U=function(){return n},n}function _(){var n=Object(c.a)(["\n  position: fixed;\n  left: ",";\n  z-index: 10;\n  width: 90%;\n  min-height: 100%;\n  padding: 1.5rem;\n  color: var(--gray-100);\n  background: var(--indigo-800);\n  border-right: 1px solid var(--indigo-900);\n  border-top-right-radius: 1px;\n  border-bottom-right-radius: 1px;\n  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.2);\n  transition: left 0.2s;\n\n  @media (min-width: 768px) {\n    position: static;\n    width: 31rem;\n  }\n"]);return _=function(){return n},n}var G=u.b.aside(_(),(function(n){return n.visible?0:"-90%"})),H=u.b.li(U()),K=u.b.button(M(),(function(n){return n.selected&&"var(--indigo-900)"})),Q=function(n){var e=n.items,t=n.itemSelected,r=n.onItemClick,i=h(),o=function(n){return function(){r(n)}};return a.a.createElement(G,{visible:i.menuVisible},a.a.createElement("ul",{"data-testid":"items"},e.map((function(n,e){return a.a.createElement(H,{key:e},a.a.createElement(K,{type:"button",selected:n===t,onClick:o(n)},n))}))))},T={categories:[],joke:{}};function W(n,e){return Object(m.a)(n,(function(n){switch(e.type){case"fetch-categories":n.categories=e.categories;break;case"fetch-joke":n.joke=e.joke}}))}var X=a.a.createContext({}),Y=a.a.createContext({}),Z=function(n){var e=n.children,t=Object(r.useReducer)(W,T),i=Object(s.a)(t,2),o=i[0],c=i[1];return a.a.createElement(X.Provider,{value:c},a.a.createElement(Y.Provider,{value:o},e))};function $(){var n=Object(c.a)(["\n  display: block;\n  width: 100%;\n  height: 4.2rem;\n  font-weight: bold;\n  color: var(--gray-100);\n  background: var(--indigo-800);\n  border-radius: 0;\n  transition: background-color 0.2s;\n\n  :hover {\n    background: var(--indigo-700);\n  }\n  :active {\n    background: var(--indigo-900);\n  }\n"]);return $=function(){return n},n}function nn(){var n=Object(c.a)(["\n  padding-left: 0.5rem;\n  margin: 1rem;\n  border-left: 5px solid var(--indigo-900);\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n"]);return nn=function(){return n},n}function en(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  min-height: 15rem;\n  border: 1px solid var(--indigo-800);\n  border-radius: 4px;\n  box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.2);\n"]);return en=function(){return n},n}function tn(){var n=Object(c.a)(["\n  margin-bottom: 1.5rem;\n  color: var(--indigo-900);\n\n  span {\n    text-transform: capitalize;\n  }\n"]);return tn=function(){return n},n}function rn(){var n=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 1.7rem 3rem;\n"]);return rn=function(){return n},n}function an(){var n=Object(c.a)(["\n  position: relative;\n  display: flex;\n  flex: 1;\n  min-height: 100%;\n"]);return an=function(){return n},n}var on=u.b.div(an()),cn=u.b.div(rn()),un=u.b.h3(tn()),ln=u.b.div(en()),dn=u.b.blockquote(nn()),sn=u.b.button($()),mn=function(){var n=[Object(r.useContext)(Y),Object(r.useContext)(X)],e=Object(s.a)(n,2),t=e[0],i=e[1],o=x(),c=Object(r.useState)(!0),u=Object(s.a)(c,2),l=u[0],d=u[1],m=Object(r.useCallback)(function(){var n=Object(V.a)(S.a.mark((function n(e){var t;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return d(!0),n.next=3,q.get("random",{params:{category:e}});case 3:t=n.sent,i({type:"fetch-joke",joke:t.data}),d(!1);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[i]),g=Object(I.a)(m,350);Object(r.useEffect)((function(){Object(V.a)(S.a.mark((function n(){var e;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q.get("categories");case 2:e=n.sent,i({type:"fetch-categories",categories:e.data});case 4:case"end":return n.stop()}}),n)})))()}),[i]),Object(r.useEffect)((function(){m()}),[m]);var f,b=function(){var n=Object(V.a)(S.a.mark((function n(e){return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g(e);case 2:o({type:"toggle-menu"});case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return a.a.createElement(on,null,a.a.createElement(Q,{items:t.categories,itemSelected:t.joke.categories&&t.joke.categories[0],onItemClick:b}),a.a.createElement(cn,null,a.a.createElement(J.a,{type:"textRow",ready:!l,delay:1e3,style:{marginBottom:"1.5rem",width:"99%"}},a.a.createElement(un,null,"Fatos de Chuck Norris"," ",t.joke.categories&&t.joke.categories[0]&&a.a.createElement(a.a.Fragment,null,"em ",a.a.createElement("span",null,'"',t.joke.categories[0],'"')))),a.a.createElement(ln,{"data-testid":"joke-card"},a.a.createElement(J.a,{showLoadingAnimation:!0,ready:!l,delay:1e3,style:{margin:"1rem",paddingRight:"2rem",height:"5rem"}},a.a.createElement(dn,{cite:t.joke.url},a.a.createElement("p",null,t.joke.value)),a.a.createElement(sn,{type:"button",onClick:(f=t.joke.categories&&t.joke.categories[0],function(){g(f)})},"Carregar outro")))))},gn=function(){return a.a.createElement(Z,null,a.a.createElement(mn,null))};function fn(){var n=Object(c.a)(["\n  text-decoration: underline;\n"]);return fn=function(){return n},n}function bn(){var n=Object(c.a)(["\n  margin: 0;\n  font-size: 1.2rem;\n  color: var(--gray-600);\n"]);return bn=function(){return n},n}function pn(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n  background: var(--indigo-100);\n"]);return pn=function(){return n},n}var vn=u.b.footer(pn()),hn=u.b.p(bn()),xn=u.b.a(fn()),jn=function(){return a.a.createElement(vn,{className:"flex justify-center p-2"},a.a.createElement(hn,{className:"text-xs text-gray-600"},"Powered by"," ",a.a.createElement(xn,{href:"https://api.chucknorris.io",target:"_blank",rel:"noopener noreferrer"},"api.chucknorris.io")))},yn=t(41);function kn(){var n=Object(c.a)(["\n    ","\n \n    * {\n        box-sizing: border-box;\n        padding: 0;\n        margin: 0;\n    }\n\n    :root {\n        font-size: 60%;\n        --sm: 640px;\n        --md: 768px;\n        --indigo-100: #EBF4FF;\n        --indigo-200: #C3DAFE;\n        --indigo-300: #A3BFFA;\n        --indigo-400: #7F9CF5;\n        --indigo-500: #667EEA;\n        --indigo-600: #5A67D8;\n        --indigo-700: #4C51BF;\n        --indigo-800: #434190;\n        --indigo-900: #3C366B;\n        --gray-100: #F7FAFC;\n        --gray-200: #EDF2F7;\n        --gray-300: #E2E8F0;\n        --gray-400: #CBD5E0;\n        --gray-500: #A0AEC0;\n        --gray-600: #718096;\n        --gray-700: #4A5568;\n        --gray-800: #2D3748;\n        --gray-900: #1A202C;\n        --white: #FFF;\n    }\n\n    html,\n    body {\n        font-family: 'Open Sans', sans-serif;\n        font-size: 1.6rem;\n        line-height: 1.5;\n    }\n\n    body,\n    #root {\n        height: 100vh;\n        color: var(--gray-900);\n        background: var(--gray-100);\n    }\n\n    ul {\n        list-style: none;\n    }\n\n    a {\n        color: inherit;\n        text-decoration: none;\n    }\n\n    button {\n        padding: 0;\n        color: inherit;\n        cursor: pointer;\n        background: transparent;\n        border: 0;\n        outline: none;\n    }\n"]);return kn=function(){return n},n}var En=Object(u.a)(kn(),Object(yn.a)());function On(){var n=Object(c.a)(["\n  display: flex;\n  flex: 1;\n"]);return On=function(){return n},n}function wn(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n"]);return wn=function(){return n},n}var Cn=u.b.div(wn()),Fn=u.b.main(On());var An=function(){return a.a.createElement(v,null,a.a.createElement(En,null),a.a.createElement(Cn,null,a.a.createElement(D,null),a.a.createElement(Fn,null,a.a.createElement(gn,null)),a.a.createElement(jn,null)))};o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(An,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.0323d1b1.chunk.js.map