(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),c=n.n(r),s=n(10),o=n.n(s),i=n(11),u=n(3),l=n.p+"static/media/header__logo.c2821b38.svg",p=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{src:l,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e",className:"header__logo"})})},d=c.a.createContext(),f=function(e){var t=e.card,n=e.onCardClick,r=e.onDeleteButtonClick,s=e.onCardLike,o=c.a.useContext(d),i=o._id===t.owner._id,u=t.likes.some((function(e){return o._id===e._id}));return Object(a.jsxs)("li",{className:"elements__item",onClick:function(){n(t)},children:[Object(a.jsx)("button",{className:"elements__delete-card ".concat(i?"":"elements__delete-card_hidden"),onClick:function(e){e.stopPropagation(),r(t)}}),Object(a.jsx)("img",{src:t.link,alt:t.name,className:"elements__img"}),Object(a.jsxs)("div",{className:"elements__container",children:[Object(a.jsx)("h2",{className:"elements__title",children:t.name}),Object(a.jsxs)("div",{className:"elements__group",children:[Object(a.jsx)("button",{className:"elements__like-button ".concat(u?"elements__like-button_active":""),onClick:function(e){e.stopPropagation(),s(t)}}),Object(a.jsx)("span",{className:"elements__like-count",children:t.likes.length})]})]})]})},h=function(e){var t=e.onEditProfile,n=e.onAddPlace,c=e.onEditAvatar,s=e.onCardClick,o=e.onDeleteButtonClick,i=e.cards,u=e.onCardLike,l=Object(r.useContext)(d);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile content__profile",children:[Object(a.jsxs)("div",{className:"profile__avatar-container",children:[Object(a.jsx)("img",{src:l.avatar,alt:l.name,className:"profile__avatar"}),Object(a.jsx)("button",{className:"profile__update-button",type:"button",onClick:c})]}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsx)("h1",{className:"profile__title",children:l.name}),Object(a.jsx)("button",{className:"profile__edit-button",onClick:t}),Object(a.jsx)("p",{className:"profile__subtitle",children:l.about})]}),Object(a.jsx)("button",{className:"profile__add-button",onClick:n})]}),Object(a.jsx)("section",{className:"elements content__elements",children:Object(a.jsx)("ul",{className:"elements__list",children:i.map((function(e){return Object(a.jsx)(f,{card:e,onCardClick:s,onDeleteButtonClick:o,onCardLike:u},e._id)}))})})]})},b=function(){return Object(a.jsx)("footer",{className:"footer page__footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})},m=function(e){var t=e.card,n=e.onClose,r=e.onScreenClickClose;return Object(a.jsx)("section",{className:"popup popup_type_image ".concat(t?"popup_opened":""),onClick:r,children:Object(a.jsxs)("div",{className:"popup__wrapper",children:[Object(a.jsx)("button",{className:t&&"popup__close-button button",onClick:n}),Object(a.jsxs)("figure",{className:"popup__img-container",children:[Object(a.jsx)("img",{src:t&&t.link,alt:t&&t.name,className:"popup__card-img"}),Object(a.jsx)("figcaption",{className:"popup__title-img",children:t&&t.name})]})]})})},j=c.a.memo((function(e){return Object(a.jsx)("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),onClick:e.onScreenClickClose,children:Object(a.jsxs)("div",{className:"popup__wrapper",children:[Object(a.jsx)("button",{className:"popup__close-button button",onClick:e.onClose,type:"button"}),Object(a.jsxs)("form",{action:"#",id:e.name,className:"popup__form",name:"popup-".concat(e.name),onSubmit:e.onSubmit,noValidate:!0,children:[Object(a.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(a.jsx)("button",{className:"popup__save-button button",type:"submit",children:e.buttonText})]})]})})})),_=function(e){var t=e.name,n=e.link,r=e.handleNameChange,c=e.handleLinkChange;return Object(a.jsxs)("fieldset",{className:"popup__info",children:[Object(a.jsxs)("label",{className:"popup__form-field",children:[Object(a.jsx)("input",{value:t,onChange:r,type:"text",id:"place-input",className:"popup__input",name:"place",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,maxLength:"30"}),Object(a.jsx)("span",{className:"popup__error",id:"place-input-error"})]}),Object(a.jsxs)("label",{className:"popup__form-field",children:[Object(a.jsx)("input",{value:n,onChange:c,type:"url",id:"link-input",className:"popup__input",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(a.jsx)("span",{className:"popup__error",id:"link-input-error"})]})]})},v=function(e){var t=e.inputRef;return Object(a.jsx)("fieldset",{className:"popup__info",children:Object(a.jsxs)("label",{className:"popup__form-field",children:[Object(a.jsx)("input",{ref:t,type:"url",id:"link-input",className:"popup__input",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(a.jsx)("span",{className:"popup__error",id:"link-input-error"})]})})},O=function(e){var t=e.name,n=e.description,r=e.handleNameChange,c=e.handleDescriptionChange;return Object(a.jsxs)("fieldset",{className:"popup__info",children:[Object(a.jsxs)("label",{className:"popup__form-field",children:[Object(a.jsx)("input",{type:"text",id:"name-input",className:"popup__input",name:"name",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40",value:t,onChange:r}),Object(a.jsx)("span",{className:"popup__error",id:"name-input-error"})]}),Object(a.jsxs)("label",{className:"popup__form-field",children:[Object(a.jsx)("input",{type:"text",id:"job-input",className:"popup__input",name:"about",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,minLength:"2",maxLength:"200",value:n,onChange:c}),Object(a.jsx)("span",{className:"popup__error",id:"job-input-error"})]})]})},x=function(e){var t=e.isOpen,n=e.onClose,c=e.onScreenClickClose,s=e.onUpdateUser,o=Object(r.useContext)(d),i=Object(r.useState)(o.name),l=Object(u.a)(i,2),p=l[0],f=l[1],h=Object(r.useState)(o.about),b=Object(u.a)(h,2),m=b[0],_=b[1];Object(r.useEffect)((function(){f(o.name),_(o.about)}),[o]);return Object(a.jsx)(j,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:O({name:p,description:m,handleNameChange:function(e){f(e.target.value)},handleDescriptionChange:function(e){_(e.target.value)}}),isOpen:t,onClose:n,onScreenClickClose:c,onSubmit:function(e){e.preventDefault(),s({name:p,about:m})}})},k=function(e){var t=e.isOpen,n=e.onClose,c=e.onScreenClickClose,s=e.onUpdateAvatar,o=Object(r.useRef)(),i=function(){o.current.value=""};return Object(a.jsx)(j,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"update-avatar",buttonText:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",children:v({inputRef:o}),isOpen:t,onClose:n,onScreenClickClose:c,onSubmit:function(e){e.preventDefault(),s({avatar:o.current.value,resetInputValue:i})}})},C=function(e){var t=e.isOpen,n=e.onClose,c=e.onScreenClickClose,s=e.onAddPlace,o=Object(r.useState)(""),i=Object(u.a)(o,2),l=i[0],p=i[1],d=Object(r.useState)(""),f=Object(u.a)(d,2),h=f[0],b=f[1],m=function(){p(""),b("")};return Object(a.jsx)(j,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add-card",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:_({name:l,link:h,handleNameChange:function(e){p(e.target.value)},handleLinkChange:function(e){b(e.target.value)}}),isOpen:t,onClose:n,onScreenClickClose:c,onSubmit:function(e){e.preventDefault(),s({name:l,link:h,resetInputValue:m})}})},g=function(e){var t=e.isOpen,n=e.onClose,r=e.onScreenClickClose,c=e.onDeleteCard,s=e.card;return Object(a.jsx)(j,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"confirm",buttonText:"\u0414\u0430",children:null,isOpen:t,onClose:n,onScreenClickClose:r,onSubmit:function(e){e.preventDefault(),c(s)}})},y=n(2),N=n.n(y),S=n(4),w=n(7),E=n(8),I=new(function(){function e(t,n){Object(w.a)(this,e),this._baseUrl=t,this._headers=n}return Object(E.a)(e,[{key:"_checkResponceStatus",value:function(){var e=Object(S.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.ok){e.next=5;break}return e.next=3,t.json();case 3:return n=e.sent,e.abrupt("return",n);case 5:throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(t.status," - ").concat(t.statusText));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var e=Object(S.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers});case 3:return t=e.sent,e.next=6,this._checkResponceStatus(t);case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"getInitialCards",value:function(){var e=Object(S.a)(N.a.mark((function e(){var t,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers});case 3:return t=e.sent,e.next=6,this._checkResponceStatus(t);case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"getValidInitialData",value:function(){var e=Object(S.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([this.getUserInfo(),this.getInitialCards()]);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getAllInitialData",value:function(){var e=Object(S.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.allSettled([this.getUserInfo(),this.getInitialCards()]);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setUserInfo",value:function(){var e=Object(S.a)(N.a.mark((function e(t){var n,a,r,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,a=t.about,e.prev=1,e.next=4,fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:n,about:a})});case 4:return r=e.sent,e.next=7,this._checkResponceStatus(r);case 7:return c=e.sent,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,this,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"addCard",value:function(){var e=Object(S.a)(N.a.mark((function e(t){var n,a,r,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,a=t.link,e.prev=1,e.next=4,fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:n,link:a})});case 4:return r=e.sent,e.next=7,this._checkResponceStatus(r);case 7:return c=e.sent,e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,this,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteCard",value:function(){var e=Object(S.a)(N.a.mark((function e(t){var n,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers});case 3:return n=e.sent,e.next=6,this._checkResponceStatus(n);case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"changeLikeCardStatus",value:function(){var e=Object(S.a)(N.a.mark((function e(t,n){var a,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(this._baseUrl,"/cards/likes/").concat(t),{method:n,headers:this._headers});case 3:return a=e.sent,e.next=6,this._checkResponceStatus(a);case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"updateUserAvatar",value:function(){var e=Object(S.a)(N.a.mark((function e(t){var n,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})});case 3:return n=e.sent,e.next=6,this._checkResponceStatus(n);case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()}]),e}())("https://mesto.nomoreparties.co/v1/cohort-16",{authorization:"f1f27dcb-4c71-4cd5-a34d-2e8f5fd4811e","Content-Type":"application/json"}),L=new(function(){function e(t){Object(w.a)(this,e),this._config=t}return Object(E.a)(e,[{key:"_showInputError",value:function(e,t,n){var a=e.querySelector("#".concat(t.id,"-error"));a.textContent=n,a.classList.add("".concat(this._config.errorMessage,"_visible"))}},{key:"_hideInputError",value:function(e,t){var n=e.querySelector("#".concat(t.id,"-error"));n.classList.remove("".concat(this._config.errorMessage,"_visible")),n.textContent=""}},{key:"_handleCheckInputValidity",value:function(e,t){t.validity.valid?this._hideInputError(e,t):this._showInputError(e,t,t.validationMessage)}},{key:"_hasInvalidInput",value:function(e){return Array.from(e).some((function(e){return!e.validity.valid}))}},{key:"_handleToggleButtonSubmit",value:function(e,t){this._hasInvalidInput(e)?(t.setAttribute("disabled",""),t.classList.add(this._config.buttonInactive)):(t.removeAttribute("disabled"),t.classList.remove(this._config.buttonInactive))}},{key:"_setEventListeners",value:function(e,t,n){var a=this;this._handleToggleButtonSubmit(t,n),t.forEach((function(r){r.addEventListener("input",(function(){a._handleCheckInputValidity(e,r),a._handleToggleButtonSubmit(t,n)}))}))}},{key:"enableValidation",value:function(){var e=this;document.querySelectorAll(this._config.formSelector).forEach((function(t){var n=t.querySelectorAll(e._config.inputSelector),a=t.querySelector(e._config.submitButtonSelector);t.addEventListener("submit",(function(t){t.preventDefault(),e._handleToggleButtonSubmit(n,a)})),e._setEventListeners(t,n,a)}))}}]),e}())({formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",errorMessage:"popup__error",buttonInactive:"button_inactive"}),U=c.a.memo((function(){return Object(a.jsx)("div",{className:"animation animation_type_loader"})})),A=n.p+"static/media/profile__avatar.74c3c0fb.jpg",T=function(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(!1),o=Object(u.a)(s,2),l=o[0],f=o[1],j=Object(r.useState)(!1),_=Object(u.a)(j,2),v=_[0],O=_[1],y=Object(r.useState)(!1),N=Object(u.a)(y,2),S=N[0],w=N[1],E=Object(r.useState)(null),T=Object(u.a)(E,2),D=T[0],P=T[1],R=Object(r.useState)([]),B=Object(u.a)(R,2),q=B[0],V=B[1],M=Object(r.useState)(null),J=Object(u.a)(M,2),G=J[0],H=J[1],z=Object(r.useState)(!0),F=Object(u.a)(z,2),K=F[0],Q=F[1],W=Object(r.useState)({avatar:A,name:"Name",about:"Information about you"}),X=Object(u.a)(W,2),Y=X[0],Z=X[1],$=function(){c(!1),f(!1),O(!1),w(!1),P(null)},ee=function(e){e.target.classList.contains("popup")&&$()};return Object(r.useEffect)((function(){I.getAllInitialData().then((function(e){return e.map((function(e){return e.value}))})).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];n&&Z(n),a&&V(a)})).catch((function(e){return console.error(e)})).finally((function(){return Q(!1)}))}),[]),Object(r.useEffect)((function(){var e=function(e){"Escape"===e.key&&$()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]),Object(r.useEffect)((function(){return L.enableValidation()}),[]),Object(a.jsx)(d.Provider,{value:Y,children:Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)(p,{}),Object(a.jsx)(h,{onEditProfile:function(){c(!0)},onAddPlace:function(){f(!0)},onEditAvatar:function(){O(!0)},onCardClick:function(e){P(e)},onDeleteButtonClick:function(e){w(!0),H(e)},cards:q,onCardLike:function(e){var t=e.likes.some((function(e){return Y._id===e._id}));I.changeLikeCardStatus(e._id,t?"DELETE":"PUT").then((function(t){var n=q.map((function(n){return n._id===e._id?t:n}));V(n)})).catch((function(e){return console.error(e)}))}}),Object(a.jsx)(b,{}),Object(a.jsx)(x,{isOpen:n,onClose:$,onScreenClickClose:ee,onUpdateUser:function(e){var t=e.name,n=e.about;I.setUserInfo({name:t,about:n}).then((function(e){Z(e),$()})).catch((function(e){return console.error(e)}))}}),Object(a.jsx)(k,{isOpen:v,onClose:$,onScreenClickClose:ee,onUpdateAvatar:function(e){var t=e.avatar,n=e.resetInputValue;I.updateUserAvatar(t).then((function(e){$(),Q(!0),Z(e)})).catch((function(e){return console.error(e)})).finally((function(){Q(!1),n()}))}}),Object(a.jsx)(C,{isOpen:l,onClose:$,onScreenClickClose:ee,onAddPlace:function(e){var t=e.name,n=e.link,a=e.resetInputValue;I.addCard({name:t,link:n}).then((function(e){$(),Q(!0),V([e].concat(Object(i.a)(q)))})).catch((function(e){return console.error(e)})).finally((function(){Q(!1),a()}))}}),Object(a.jsx)(g,{isOpen:S,onClose:$,onScreenClickClose:ee,onDeleteCard:function(e){I.deleteCard(e._id).then((function(){$(),Q(!0);var t=q.filter((function(t){return t._id!==e._id}));V(t)})).catch((function(e){return console.error(e)})).finally((function(){return Q(!1)}))},card:G}),Object(a.jsx)(m,{card:D,onClose:$,onScreenClickClose:ee}),K&&Object(a.jsx)(U,{})]})})})};n(18);o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.99db54ac.chunk.js.map