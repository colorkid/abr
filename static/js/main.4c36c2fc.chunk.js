(this["webpackJsonpabr-task"]=this["webpackJsonpabr-task"]||[]).push([[0],{22:function(e,t,n){e.exports={selectWrapper:"Select_selectWrapper__3E8kC",select:"Select_select__1asJX",select__tag:"Select_select__tag__2jQaX"}},23:function(e,t,n){e.exports={range:"Range_range__2Z1NE",range__top:"Range_range__top__1dLRX",range__result:"Range_range__result__3PHE3"}},24:function(e,t,n){e.exports={resultItem__label:"ResultItem_resultItem__label__3BcCn",resultItem__value:"ResultItem_resultItem__value__1mfLh",resultItem:"ResultItem_resultItem__23qlo"}},29:function(e,t,n){e.exports={depositSelect:"DepositSelect_depositSelect__3QBQd",depositSelect__label:"DepositSelect_depositSelect__label__3qVaR"}},31:function(e,t,n){e.exports={resultData:"ResultData_resultData__30iaL",resultData__row:"ResultData_resultData__row__21WA4"}},32:function(e,t,n){e.exports={calculator:"Calculator_calculator__1I9IT",calculator__header:"Calculator_calculator__header__3tKTw"}},33:function(e,t,n){e.exports={button:"PdfButton_button__3TQcP",icon:"PdfButton_icon__3bCb1"}},39:function(e,t,n){e.exports={skeleton:"styles_skeleton__xblvk"}},62:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(10),a=n(17),u=n(44),o=n(39),s=n.n(o),l=n(3),i=function(){return Object(l.jsx)("div",{className:s.a.skeleton})},d=n(22),j=n.n(d),f={control:function(){return{display:"flex",height:" 100%",width:"100%",padding:"0 5px 0 10px"}},indicatorSeparator:function(){return{display:"none"}},dropdownIndicator:function(){return{display:"none"}},menuList:function(){return{borderRadius:"3px"}},option:function(e,t){var n=t.isFocused;return{backgroundColor:t.isSelected||n?"var(--main-accent)":null,padding:"15px 0 15px 20px",cursor:"pointer"}}},p=n(21),m=function(e,t){var n=Object(p.a)(t,3),r=n[0],c=n[1],a=n[2],u=Math.abs(e);return(u%=100)>=5&&u<=20?a:1===(u%=10)?r:u>=2&&u<=4?c:a},_=function(e,t){var n=e/100*t,r=e+n;return{income:Math.round(n),resultAmount:Math.round(r)}},b=function(e){return null===e||void 0===e?void 0:e.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")},v=function(e,t,n,r){var c;return r?null===e||void 0===e||null===(c=e.filter((function(e){return e[t]===n}))[0])||void 0===c?void 0:c[r]:null===e||void 0===e?void 0:e.filter((function(e){return e[t]===n}))[0]},x=function(e){var t=e.list,n=e.onChange,r=e.currentCode,c=v(t,"value",r);return Object(l.jsx)("div",{className:j.a.selectWrapper,children:t.length&&c?Object(l.jsx)("div",{className:j.a.select,children:Object(l.jsx)(u.a,{styles:f,className:j.a.select__tag,defaultValue:c,onChange:function(e){n(e.value)},options:t,isSearchable:!1})}):Object(l.jsx)(i,{})})},h=n(29),O=n.n(h),g=function(e){var t=e.depositTypeList,n=e.dispatchCurrentDeposit,r=e.currentCode;return Object(l.jsxs)("div",{className:O.a.depositSelect,children:[Object(l.jsx)("label",{className:O.a.depositSelect__label,children:"\u0412\u043a\u043b\u0430\u0434"}),Object(l.jsx)(x,{currentCode:r,list:t,onChange:n})]})},C=n(20),S=n.n(C),y=n(40),w=n(18);var I=Object(w.b)({name:"calculator",initialState:{deposits:[],depositSelectList:[],currentCode:null,currentTerm:null,currentAmount:null,currentRate:null},reducers:{loadDeposits:function(e,t){e.deposits=t.payload},createDepositSelectList:function(e,t){e.depositSelectList=t.payload.map((function(e){return{value:e.code,label:e.name}}))},setCurrentCode:function(e,t){e.currentCode=t.payload},setCurrentTerm:function(e,t){e.currentTerm=t.payload},setCurrentAmount:function(e,t){e.currentAmount=t.payload},setCurrentRate:function(e,t){e.currentRate=t.payload}}}),R=I.actions,T=R.createDepositSelectList,N=R.loadDeposits,D=R.setCurrentCode,k=R.setCurrentTerm,L=R.setCurrentAmount,A=R.setCurrentRate,E=I.reducer,P=Object(w.a)({reducer:{calculator:E},middleware:Object(w.c)({serializableCheck:!1})}),B=function(){return Object(a.b)()},M=a.c,F=P,Q=function(){var e=M((function(e){return e.calculator.currentCode})),t=M((function(e){return e.calculator.depositSelectList})),n=B();Object(r.useEffect)((function(){t.length&&n(D(t[0].value))}),[t]);return Object(l.jsx)(g,{currentCode:e,depositTypeList:t,dispatchCurrentDeposit:function(e){n(D(e))}})},W=Object(r.memo)(Q),J=n(43),X=function(e){var t=e.values,n=e.currentStepIndex,r=e.nouns;return Object(l.jsx)(l.Fragment,{children:function(){var e=b(t[n]);return n===t.length-1?"\u0431\u043e\u043b\u044c\u0448\u0435 ".concat(e," ").concat(r[3]):0===n&&t.length>2?"".concat(e," ").concat(m(t[n],r)):"\u043e\u0442 ".concat(e," \u0434\u043e ").concat(t[n+1]-1," ").concat(m(t[n+1]-1,r))}()})},q=n(23),z=n.n(q),V=(n(62),function(e){var t=e.values,n=void 0===t?[]:t,r=e.nouns,c=e.handleInputChange,a=e.currentStepIndex,u=e.label;return Object(l.jsx)("div",{className:z.a.range,children:n.length?Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:z.a.range__top,children:[Object(l.jsx)("div",{children:u}),Object(l.jsx)("span",{id:"output",className:z.a.range__result,children:Object(l.jsx)(X,{values:n,currentStepIndex:a,nouns:r})})]}),Object(l.jsx)(J.a,{min:0,max:n.length-1,onChange:c,value:a})]}):Object(l.jsx)(i,{})})}),H=function(e){var t=e.values,n=void 0===t?[]:t,c=e.nouns,a=e.onChange,u=e.label,o=Object(r.useState)(0),s=Object(p.a)(o,2),i=s[0],d=s[1];return Object(r.useEffect)((function(){d(0)}),[n]),Object(l.jsx)(V,{values:n,nouns:c,handleInputChange:function(e){d(e),a(e)},currentStepIndex:i,label:u})},K=["\u0434\u0435\u043d\u044c","\u0434\u043d\u0435\u0439","\u0434\u043d\u0435\u0439","\u0434\u043d\u044f"],Z=function(e){var t=e.period,n=e.dispatchCurrentTerm;return Object(l.jsx)(H,{values:t,nouns:K,onChange:n,label:"\u0421\u0440\u043e\u043a \u0432\u043a\u043b\u0430\u0434\u0430"})},G=function(e){var t=e.currentParams,n=null===t||void 0===t?void 0:t.map((function(e){return e.period_from})),c=B();Object(r.useEffect)((function(){(null===n||void 0===n?void 0:n.length)&&c(k(n[0]))}),[n]);return Object(l.jsx)(Z,{period:n,dispatchCurrentTerm:function(e){c(k(n[e]))}})},U=Object(r.memo)(G),Y=["\u0440\u0443\u0431\u043b\u044c","\u0440\u0443\u0431\u043b\u044f","\u0440\u0443\u0431\u043b\u0435\u0439","\u0440\u0443\u0431\u043b\u044f"],$=function(e){var t=e.period,n=e.dispatchCurrentTerm;return Object(l.jsx)(H,{values:t,nouns:Y,onChange:n,label:"\u0421\u0443\u043c\u043c\u0430 \u0432\u043a\u043b\u0430\u0434\u0430"})},ee=function(e){var t=e.currentSummsRate,n=null===t||void 0===t?void 0:t.map((function(e){return e.summ_from})),c=null===t||void 0===t?void 0:t.map((function(e){return e.rate})),a=B();Object(r.useEffect)((function(){(null===n||void 0===n?void 0:n.length)&&(a(A(c[0])),a(L(n[0])))}),[n]);return Object(l.jsx)($,{period:n,dispatchCurrentTerm:function(e){a(A(c[e])),a(L(n[e]))}})},te=n(24),ne=n.n(te),re=function(e){var t=e.result,n=e.label,r=e.type;return Object(l.jsx)(l.Fragment,{children:t?Object(l.jsxs)("div",{className:ne.a.resultItem,children:[Object(l.jsx)("div",{className:ne.a.resultItem__label,children:n}),Object(l.jsx)("div",{className:ne.a.resultItem__value,children:"".concat(b(t)," ").concat(r)})]}):Object(l.jsx)(i,{})})},ce=n(31),ae=n.n(ce),ue=["\u0434\u0435\u043d\u044c","\u0434\u043d\u044f","\u0434\u043d\u0435\u0439"],oe=function(e){var t=e.currentRate,n=e.currentTerm,r=e.resultAmount,c=e.income,a=t||n||c;return Object(l.jsx)("div",{className:ae.a.resultData,children:a?Object(l.jsxs)("div",{className:ae.a.resultData__row,children:[Object(l.jsx)(re,{result:t,label:"\u041f\u0440\u043e\u0446\u0435\u043d\u0442\u043d\u0430\u044f \u0441\u0442\u0430\u0432\u043a\u0430",type:"%"}),Object(l.jsx)(re,{result:r,label:"\u0421\u0443\u043c\u043c\u0430 \u0447\u0435\u0440\u0435\u0437 ".concat(n," ").concat(m(n,ue)),type:"\u0440."}),Object(l.jsx)(re,{result:c,label:"\u0414\u043e\u0445\u043e\u0434",type:"\u0440."})]}):Object(l.jsx)(i,{})})},se=function(){var e=M((function(e){return e.calculator.currentRate})),t=M((function(e){return e.calculator.currentAmount})),n=M((function(e){return e.calculator.currentTerm})),c=Object(r.useMemo)((function(){return _(t,e)}),[e,t]);return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(oe,{currentRate:e,income:c.income,resultAmount:c.resultAmount,currentTerm:n})})},le=Object(r.memo)(se),ie=n(32),de=n.n(ie),je=n.p+"static/media/pdfIcon.74735100.svg",fe=n(33),pe=n.n(fe),me=function(e){var t=e.downLoad;return Object(l.jsx)("button",{onClick:t,className:pe.a.button,children:Object(l.jsx)("img",{src:je,alt:"pdf icon",className:pe.a.icon})})},_e=n(34),be=n.n(_e),ve=n(42),xe=n.n(ve).a.pdfMake.vfs;be.a.vfs=xe;var he=["\u0434\u0435\u043d\u044c","\u0434\u043d\u044f","\u0434\u043d\u0435\u0439"],Oe=function(){var e=function(){var e=M((function(e){return e.calculator.currentCode})),t=M((function(e){return e.calculator.currentTerm})),n=M((function(e){return e.calculator.currentRate})),r=M((function(e){return e.calculator.currentAmount})),c=M((function(e){return e.calculator.depositSelectList})),a=v(c,"value",e,"label"),u=_(r,n),o={content:[{text:"\u0412\u043a\u043b\u0430\u0434: ".concat(a,"."),style:"row"},{text:"\u0421\u0440\u043e\u043a \u0432\u043a\u043b\u0430\u0434\u0430: ".concat(t," ").concat(m(t,he),"."),style:"row"},{text:"\u041f\u0440\u043e\u0446\u0435\u043d\u0442\u043d\u0430\u044f \u0441\u0442\u0430\u0432\u043a\u0430: ".concat(n," %."),style:"row"},{text:"\u0421\u0443\u043c\u043c\u0430 \u0432\u043a\u043b\u0430\u0434\u0430: ".concat(b(r)," \u0440\u0443\u0431\u043b\u0435\u0439."),style:"row"},{text:"\u0421\u0443\u043c\u043c\u0430 \u0447\u0435\u0440\u0435\u0437 ".concat(t," ").concat(m(t,he),": ").concat(b(u.resultAmount)," \u0440\u0443\u0431\u043b\u0435\u0439."),style:"row"},{text:"\u0414\u043e\u0445\u043e\u0434: ".concat(b(u.income)," \u0440\u0443\u0431\u043b\u0435\u0439."),style:"row"}],styles:{row:{fontSize:16,marginTop:5}}};return function(){be.a.createPdf(o).download("deposit.pdf")}}();return Object(l.jsx)(me,{downLoad:function(){e()}})},ge=function(e){var t=e.currentParams,n=e.currentSummsRate;return Object(l.jsxs)("div",{className:de.a.calculator,children:[Object(l.jsxs)("header",{className:de.a.calculator__header,children:[Object(l.jsx)("h1",{children:"\u0414\u0435\u043f\u043e\u0437\u0438\u0442\u043d\u044b\u0439 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440"}),Object(l.jsx)(Oe,{})]}),Object(l.jsx)(W,{}),Object(l.jsx)(U,{currentParams:t}),Object(l.jsx)(ee,{currentSummsRate:n}),Object(l.jsx)(le,{})]})},Ce=function(){var e=M((function(e){return e.calculator.deposits})),t=M((function(e){return e.calculator.currentCode})),n=M((function(e){return e.calculator.currentTerm})),c=B(),a=Object(r.useMemo)((function(){return v(e,"code",t,"param")}),[t]),u=v(a,"period_from",n,"summs_and_rate");return Object(r.useEffect)((function(){c(function(){var e=Object(y.a)(S.a.mark((function e(t){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./data.json").then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}));case 2:n=e.sent,t(N(n.deposits)),t(T(n.deposits));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(l.jsx)(ge,{currentParams:a,currentSummsRate:u})};n(66),n(67);c.render(Object(l.jsx)(a.a,{store:F,children:Object(l.jsx)(Ce,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.4c36c2fc.chunk.js.map
