!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("react")):"function"==typeof define&&define.amd?define(["classnames","react"],t):"object"==typeof exports?exports.ReactNumerSpinner=t(require("classnames"),require("react")):e.ReactNumerSpinner=t(e.classnames,e.react)}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={exports:{},id:r,loaded:!1};return e[r].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),i=r(s);t.default=i.default},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u,p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(6);var l=n(8),c=r(l),f=n(7),d=r(f),h=n(4),b=r(h),m=function(t){function n(e){i(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={value:e.value,readOnly:e.readOnly,disabled:e.disabled},t}return a(n,t),p(n,[{key:"_click",value:function(e,t){this[e](),t.preventDefault()}},{key:"_inputChange",value:function(e){var t=e.target.value;this.change(t),this.change(t,"input")}},{key:"plus",value:function(){var e=parseFloat(this.state.value)+this.props.step;this.change(e,"plus")}},{key:"minus",value:function(){var e=parseFloat(this.state.value)-this.props.step;this.change(e,"minus")}},{key:"change",value:function(e,t){var n=this,r=this.checkValue(e);this.setState({value:r},function(){n.props.onChange({value:r,action:t})})}},{key:"componentWillReceiveProps",value:function(e){this.setState(e)}},{key:"checkValue",value:function(e){var t=this.props.max,n=this.props.min;return e>t?t:e<n?n:e}},{key:"processValue",value:function(e){var t=parseFloat(e).toFixed(this.props.precision);return this.props.showThousand?(0,d.default)(t):t}},{key:"render",value:function(){return e.createElement("div",{style:{width:this.props.width,fontSize:this.props.size},className:(0,c.default)("react-number-spinner",this.props.cssClass)},e.createElement("button",{disabled:this.state.value==this.props.max,className:"plus",onClick:this._click.bind(this,"plus")},e.createElement("span",null,this.props.pulsText)),e.createElement("button",{disabled:this.state.value==this.props.min,className:"minus",onClick:this._click.bind(this,"minus")},e.createElement("span",null,this.props.minusText)),e.createElement("input",{className:"input",pattern:"[0-9]*",readOnly:this.state.readOnly,disabled:this.state.disabled,onClick:this.props.onInputClick,value:this.processValue(this.state.value),onChange:this._inputChange.bind(this)}))}}]),n}(e.Component);m.propTypes=(u={cssClass:e.PropTypes.string,min:e.PropTypes.number,max:e.PropTypes.number,step:e.PropTypes.number,value:e.PropTypes.string,precision:e.PropTypes.number,readOnly:e.PropTypes.bool,disabled:e.PropTypes.bool,onInputClick:e.PropTypes.func,onChange:e.PropTypes.func,pulsText:e.PropTypes.string,minusText:e.PropTypes.string,size:e.PropTypes.string,width:e.PropTypes.string},s(u,"value",e.PropTypes.string),s(u,"showThousand",e.PropTypes.bool),u),m.defaultProps=s({min:0,max:100,step:10,precision:2,value:"",readOnly:!1,disabled:!1,showThousand:!1,onInputClick:b.default,onChange:b.default,pulsText:"+",minusText:"-",size:"18px",width:"100%"},"value","0.00"),t.default=m}).call(t,n(9))},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,".react-number-spinner{position:relative;height:2em;line-height:2em;display:inline-block}.react-number-spinner>*{text-align:center;box-sizing:border-box;position:absolute;-webkit-appearance:none}.react-number-spinner>:focus{outline:none}.react-number-spinner>.minus,.react-number-spinner>.plus{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:100%;background:none;top:0;width:2em;height:2em;line-height:2em;border:1px solid #ececec}.react-number-spinner>.minus[disabled],.react-number-spinner>.plus[disabled]{opacity:.8}.react-number-spinner>.minus[disabled]>span,.react-number-spinner>.plus[disabled]>span{color:#999}.react-number-spinner>.minus>span,.react-number-spinner>.plus>span{color:#3cc51f;font-size:24px;line-height:20px}.react-number-spinner>.plus{left:0;border-top-left-radius:3px;border-bottom-left-radius:3px}.react-number-spinner>.minus{right:0;border-top-right-radius:3px;border-bottom-right-radius:3px}.react-number-spinner>.input{font:100% Helvetica neue,Verdana,Geneva,sans-serif;border-radius:0;border:1px solid #ececec;border-width:1px 0;padding:0 .6em;width:calc(100% - 4em);left:2em;right:2em;top:0;bottom:0}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},s=0;s<this.length;s++){var i=this[s][0];"number"==typeof i&&(r[i]=!0)}for(s=0;s<t.length;s++){var o=t[s];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(e,t){e.exports=function(){}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],s=d[r.id];if(s){s.refs++;for(var i=0;i<s.parts.length;i++)s.parts[i](r.parts[i]);for(;i<r.parts.length;i++)s.parts.push(p(r.parts[i],t))}else{for(var o=[],i=0;i<r.parts.length;i++)o.push(p(r.parts[i],t));d[r.id]={id:r.id,refs:1,parts:o}}}}function s(e){for(var t=[],n={},r=0;r<e.length;r++){var s=e[r],i=s[0],o=s[1],a=s[2],u=s[3],p={css:o,media:a,sourceMap:u};n[i]?n[i].parts.push(p):t.push(n[i]={id:i,parts:[p]})}return t}function i(e,t){var n=m(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function u(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function p(e,t){var n,r,s;if(t.singleton){var i=y++;n=v||(v=a(t)),r=l.bind(null,n,i,!1),s=l.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=f.bind(null,n),s=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=c.bind(null,n),s=function(){o(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else s()}}function l(e,t,n,r){var s=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,s);else{var i=document.createTextNode(s),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function c(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function f(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(s),i&&URL.revokeObjectURL(i)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=h(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,y=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=s(e);return r(n,t),function(e){for(var i=[],o=0;o<n.length;o++){var a=n[o],u=d[a.id];u.refs--,i.push(u)}if(e){var p=s(e);r(p,t)}for(var o=0;o<i.length;o++){var u=i[o];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete d[u.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.id,r,""]]);n(5)(r,{});r.locals&&(e.exports=r.locals)},function(e,t){var n=/\d{1,3}(?=(\d{3})+$)/g,r=/^(\d+)((\.\d+)?)$/;e.exports=function(e,t){var s="$&"+(t||","),i=1*e,o=i>=0?String(e):String(e).slice(1),a=o.replace(r,function(e,t,r){return t.replace(n,s)+r});return i>=0?a:"-"+a}},function(t,n){t.exports=e},function(e,n){e.exports=t}])});
//# sourceMappingURL=react-numer-spinner.js.map