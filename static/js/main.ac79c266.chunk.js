(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{10:function(e,n,t){},12:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),o=t(5),s=t.n(o),c=(t(10),t(3)),i=function(e){if(e.bomb&&e.open){var n=["Aquamarine","AntiqueWhite","BlueViolet","Brown","Chocolate","DeepPink","Khaki","Lime"];return n[Math.floor(Math.random()*n.length)]}},u=function(e,n){return e%2===0&&n%2===0?"#aad751":e%2===0&&n%2!==0||e%2!==0&&n%2===0?"#a2d249":"#aad751"},l=t(0),f=function(e){var n,t,a,r=e.cell,o={background:r.open?r.bomb?i(r):(t=r.x,a=r.y,t%2===0&&a%2===0?"#e5c29f":t%2===0&&a%2!==0||t%2!==0&&a%2===0?"#d7b899":"#e5c29f"):u(r.x,r.y),color:(n=r.minesNear,1===n?"#1976d2":2===n?"#388d3c":3===n?"#d33030":4===n?"#7c21a2":5===n||6===n?"#1976d2":"white")};return Object(l.jsxs)("div",{className:"Cell",style:o,children:[r.bomb&&r.open&&"\ud83d\udca3",r.open&&!r.bomb&&0!==r.minesNear&&r.minesNear,r.flag&&!r.open&&"\ud83d\udea9"]})},b=t(2),m=function(e,n,t){return t=t.map((function(t){return t.map((function(t){return t.x===e&&t.y===n?Object(b.a)(Object(b.a)({},t),{},{flag:!t.flag}):t}))}))},x=function(e,n,t,a){if(!t[e][n].open){var r=[];for(r.push(t[e][n]);0!==r.length;){var o=r.pop();if(o.open||(a--,o.open=!0,o.flag=!1),0!==o.minesNear&&!o.bomb)break;o.x>0&&o.y>0&&0===t[o.x-1][o.y-1].minesNear&&!t[o.x-1][o.y-1].open&&r.push(t[o.x-1][o.y-1]),o.x<t.length-1&&o.y<t[0].length-1&&0===t[o.x+1][o.y+1].minesNear&&!t[o.x+1][o.y+1].open&&r.push(t[o.x+1][o.y+1]),o.x<t.length-1&&o.y>0&&0===t[o.x+1][o.y-1].minesNear&&!t[o.x+1][o.y-1].open&&r.push(t[o.x+1][o.y-1]),o.x>0&&o.y<t[0].length-1&&0===t[o.x-1][o.y+1].minesNear&&!t[o.x-1][o.y+1].open&&r.push(t[o.x-1][o.y+1]),o.x>0&&0===t[o.x-1][o.y].minesNear&&!t[o.x-1][o.y].open&&r.push(t[o.x-1][o.y]),o.x<t.length-1&&0===t[o.x+1][o.y].minesNear&&!t[o.x+1][o.y].open&&r.push(t[o.x+1][o.y]),o.y>0&&0===t[o.x][o.y-1].minesNear&&!t[o.x][o.y-1].open&&r.push(t[o.x][o.y-1]),o.y<t[0].length-1&&0===t[o.x][o.y+1].minesNear&&!t[o.x][o.y+1].open&&r.push(t[o.x][o.y+1]),o.x>0&&o.y>0&&!t[o.x-1][o.y-1].open&&(t[o.x-1][o.y-1].open=!0,t[o.x-1][o.y-1].flag=!1,a--),o.y>0&&!t[o.x][o.y-1].open&&(t[o.x][o.y-1].open=!0,t[o.x][o.y-1].flag=!1,a--),o.x<t.length-1&&o.y>0&&!t[o.x+1][o.y-1].open&&(t[o.x+1][o.y-1].open=!0,t[o.x+1][o.y-1].flag=!1,a--),o.x>0&&!t[o.x-1][o.y].open&&(t[o.x-1][o.y].open=!0,t[o.x-1][o.y].flag=!1,a--),o.x<t.length-1&&!t[o.x+1][o.y].open&&(t[o.x+1][o.y].open=!0,t[o.x+1][o.y].flag=!1,a--),o.x>0&&o.y<t[0].length-1&&!t[o.x-1][o.y+1].open&&(t[o.x-1][o.y+1].open=!0,t[o.x-1][o.y+1].flag=!1,a--),o.y<t[0].length-1&&!t[o.x][o.y+1].open&&(t[o.x][o.y+1].open=!0,t[o.x][o.y+1].flag=!1,a--),o.x<t.length-1&&o.y<t[0].length-1&&!t[o.x+1][o.y+1].open&&(t[o.x+1][o.y+1].open=!0,t[o.x+1][o.y+1].flag=!1,a--)}return{board:t,newNonMinesCount:a}}},y=function(e){return e=e.map((function(e){return e.map((function(e){return e.bomb&&!e.open?Object(b.a)(Object(b.a)({},e),{},{open:!0}):e}))}))},p=function(e,n){var t;return"easy"===n?t=10:"medium"===n?t=40:"hard"===n&&(t=100),t-e.reduce((function(e,n){return e+n.reduce((function(e,n){return n.flag?e+1:e}),0)}),0)},d=function(e){var n=e.board,t=e.setBoard,r=e.gameStatus,o=e.setGameStatus,s=e.emptyCellsLeft,c=e.setEmptyCellsLeft,i=e.setFlagsLeft,u=e.difficulty;return Object(a.useEffect)((function(){0===s&&(o(!1),t(y(n)))}),[s]),Object(l.jsx)("div",{className:"Board",children:n&&n.map((function(e){return Object(l.jsx)("div",{className:"Board__row",children:e.map((function(e){return Object(l.jsx)("div",{className:"Board__cell",onClick:function(){return function(e){if(r&&!e.open){if(e.bomb)return t(y(n)),void o(!1);var a=x(e.x,e.y,n,s);t(a.board),c(a.newNonMinesCount),i(p(n,u))}}(e)},onContextMenu:function(a){a.preventDefault(),function(e){if(r&&!e.open){var a=m(e.x,e.y,n);t(a)}}(e)},children:Object(l.jsx)(f,{cell:e})})}))})}))})},h=function(e){var n=e.newGame;return Object(l.jsx)("div",{className:"EndGame",children:Object(l.jsx)("button",{onClick:function(){return n()},className:"EndGame__button",children:"Start again"})})},j=function(e){var n=e.difficulty,t=e.setDifficulty,a=e.flagsLeft;return Object(l.jsxs)("div",{className:"Menu",children:[Object(l.jsxs)("select",{className:"Menu__select",value:n,onChange:function(e){return t(e.target.value)},children:[Object(l.jsx)("option",{value:"easy",children:"Easy"}),Object(l.jsx)("option",{value:"medium",children:"Medium"}),Object(l.jsx)("option",{value:"hard",children:"Hard"})]}),Object(l.jsxs)("p",{children:["\ud83d\udea9 ",a]})]})},g=function(e){var n,t,a,r=[];"easy"===e?a=(n=10)*n-(t=10):"medium"===e?a=(n=20)*n-(t=40):"hard"===e&&(a=(n=30)*n-(t=100));for(var o=0;o<n;o++){for(var s=[],c=0;c<n;c++)s.push({x:o,y:c,bomb:!1,flag:!1,open:!1,minesNear:0});r.push(s)}for(var i=t;0!==i;){var u=Math.floor(Math.random()*n),l=Math.floor(Math.random()*n);!1===r[u][l].bomb&&(r[u][l].bomb=!0,i--)}for(var f=0;f<n;f++)for(var b=0;b<n;b++)r[f][b].bomb||(f>0&&r[f-1][b].bomb&&r[f][b].minesNear++,f>0&&b<n-1&&r[f-1][b+1].bomb&&r[f][b].minesNear++,b<n-1&&r[f][b+1].bomb&&r[f][b].minesNear++,f<n-1&&b<n-1&&r[f+1][b+1].bomb&&r[f][b].minesNear++,f<n-1&&r[f+1][b].bomb&&r[f][b].minesNear++,f<n-1&&b>0&&r[f+1][b-1].bomb&&r[f][b].minesNear++,b>0&&r[f][b-1].bomb&&r[f][b].minesNear++,f>0&&b>0&&r[f-1][b-1].bomb&&r[f][b].minesNear++);return{board:r,emptyCellsLeft:a}};var v=function(){var e=Object(a.useState)("medium"),n=Object(c.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)(null),s=Object(c.a)(o,2),i=s[0],u=s[1],f=Object(a.useState)(null),b=Object(c.a)(f,2),m=b[0],x=b[1],y=Object(a.useState)(!0),v=Object(c.a)(y,2),O=v[0],N=v[1],C=Object(a.useState)(null),M=Object(c.a)(C,2),w=M[0],L=M[1];Object(a.useEffect)((function(){S()}),[t]),Object(a.useEffect)((function(){i&&L(p(i,t))}),[i]);var S=function(){var e=g(t);u(e.board),x(e.emptyCellsLeft),N(!0)};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{difficulty:t,setDifficulty:r,flagsLeft:w}),Object(l.jsx)(d,{board:i,setBoard:u,emptyCellsLeft:m,setEmptyCellsLeft:x,gameStatus:O,setGameStatus:N,setFlagsLeft:L,difficulty:t}),!O&&Object(l.jsx)(h,{newGame:S})]})};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.ac79c266.chunk.js.map