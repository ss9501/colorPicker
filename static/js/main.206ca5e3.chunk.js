(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n.p+"static/media/testpic.23efb93b.jpg"},17:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},20:function(e,t,n){e.exports=n(46)},25:function(e,t,n){},29:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(15),o=n.n(r),c=(n(25),n(2)),s=n(3),l=n(6),u=n(5),h=n(7),p=n(16),d=n(4),m=n.n(d),f=n(8),v=n(17),g=n.n(v),b=n(10),w=n.n(b),_=(n(29),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={fetchingDemo:!1},n._resetFileInput=function(){n.fileInput.current&&(n.fileInput.current.value="")},n._onButtonClick=function(){n.fileInput.current&&n.fileInput.current.click()},n._onFileChange=function(e){var t=e.target,i=t.files&&t.files[0];i&&(n._resetFileInput(),n.props.onFile(i))},n._onDemoClick=Object(f.a)(m.a.mark(function e(){var t,i,a;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.setState({fetchingDemo:!0}),e.next=4,fetch(w.a).then(function(e){return e.blob()});case 4:t=e.sent,i=/[^;]*/.exec(t.type)&&/[^;]*/.exec(t.type)[0],a=new Blob([t],{type:i}),n.props.onFile(a),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),n.setState({fetchingDemo:!1}),alert("Couldn't fetch demo image");case 14:case"end":return e.stop()}},e,null,[[0,10]])})),n.fileInput=Object(i.createRef)(),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"intro"},a.a.createElement("img",{src:g.a,className:"App-logo",alt:"logo"}),a.a.createElement("p",{className:"open-image-guide"},a.a.createElement("span",null," Drag & drop or")," ",a.a.createElement("button",{className:"select-button",onClick:this._onButtonClick},"select an image"),a.a.createElement("input",{ref:this.fileInput,style:{display:"none"},type:"file",accept:"image/*",onChange:this._onFileChange})),a.a.createElement("div",{className:"demo-tip"},"Or try this"),a.a.createElement("div",{className:"demo-pic",onClick:this._onDemoClick},a.a.createElement("img",{src:w.a,alt:"test"})))}}]),t}(a.a.Component)),y=n(19),S=n(30),E="Copy to clipboard: #{key}, Enter";function x(e,t){var n,i,a,r,o,c,s=!1;t||(t={}),n=t.debug||!1;try{if(a=S(),r=document.createRange(),o=document.getSelection(),(c=document.createElement("span")).textContent=e,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",document.body.appendChild(c),r.selectNode(c),o.addRange(r),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(l){n&&console.error("unable to copy using execCommand: ",l),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData("text",e),s=!0}catch(l){n&&console.error("unable to copy using clipboardData: ",l),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:E),window.prompt(i,e)}}finally{o&&("function"==typeof o.removeRange?o.removeRange(r):o.removeAllRanges()),c&&document.body.removeChild(c),a()}return s}function k(e,t){var n=e.getContext("2d");if(!n)throw Error("Canvas not initialized");n.clearRect(0,0,e.width,e.height),n.putImageData(t,0,0)}function O(e){return j.apply(this,arguments)}function j(){return(j=Object(f.a)(m.a.mark(function e(t){var n,i;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((n=new Image).decoding="async",n.src=t,i=new Promise(function(e,t){n.onload=function(){return e()},n.onerror=function(){return t(Error("Image loading error"))}}),!n.decode){e.next=7;break}return e.next=7,n.decode().catch(function(){return null});case 7:return e.next=9,i;case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}},e)}))).apply(this,arguments)}function C(e){return P.apply(this,arguments)}function P(){return(P=Object(f.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=URL.createObjectURL(t),e.prev=1,e.next=4,O(n);case 4:return e.abrupt("return",e.sent);case 5:return e.prev=5,URL.revokeObjectURL(n),e.finish(5);case 8:case"end":return e.stop()}},e,null,[[1,,5,8]])}))).apply(this,arguments)}function H(e){return new Response(e).text()}function V(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.width,i=void 0===n?e.width:n,a=t.height,r=void 0===a?e.height:a,o=t.sx,c=void 0===o?0:o,s=t.sy,l=void 0===s?0:s,u=t.sw,h=void 0===u?e.width:u,p=t.sh,d=void 0===p?e.height:p,m=document.createElement("canvas");m.width=i,m.height=r;var f=m.getContext("2d");if(!f)throw new Error("Could not create canvas context");return f.drawImage(e,c,l,h,d,0,0,i,r),f.getImageData(0,0,i,r)}function M(e){return N.apply(this,arguments)}function N(){return(N=Object(f.a)(m.a.mark(function e(t){var n;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!("createImageBitmap"in self)){e.next=6;break}return e.next=3,createImageBitmap(t);case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,C(t);case 8:e.t0=e.sent;case 9:return n=e.t0,e.abrupt("return",V(n));case 11:case"end":return e.stop()}},e)}))).apply(this,arguments)}var R=n(18),D=n.n(R),I=n(12),z=(n(41),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={orientation:""},n._positionH=0,n._relativePositionH=.5,n._positionOnPointerStartH=0,n._positionHS=0,n._relativePositionHS=.75,n._positionOnPointerStartHS=0,n._positionV=0,n._relativePositionV=.5,n._positionOnPointerStartV=0,n._positionVS=0,n._relativePositionVS=.75,n._positionOnPointerStartVS=0,n._setHorizontal=function(){n.horizontal.current&&(n.horizontal.current.style.transform="translateY(".concat(n._positionH,"px)"),n.props.setY&&n.props.setY(n._positionH))},n._setHorizontalScrubber=function(){n.scrubber1.current&&(n.scrubber1.current.style.transform="translate(".concat(n._positionHS,"px, -50%)"))},n._setVertical=function(){n.vertical.current&&(n.vertical.current.style.transform="translateX(".concat(n._positionV,"px)"),n.props.setX&&n.props.setX(n._positionV))},n._setVerticalScrubber=function(){n.scrubber2.current&&(n.scrubber2.current.style.transform="translate(-50%, ".concat(n._positionVS,"px)"))},n.container=Object(i.createRef)(),n.horizontal=Object(i.createRef)(),n.vertical=Object(i.createRef)(),n.scrubber1=Object(i.createRef)(),n.scrubber2=Object(i.createRef)(),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.scrubber1.current,n=this.scrubber2.current,i=new I.a(t,{start:function(t,n){return 1!==i.currentPointers.length&&(n.preventDefault(),e._positionOnPointerStartH=e._positionH,e._positionOnPointerStartHS=e._positionHS,!0)},move:function(){e._pointerChangeH(i.startPointers[0],i.currentPointers[0])}}),a=new I.a(n,{start:function(t,n){return 1!==a.currentPointers.length&&(n.preventDefault(),e._positionOnPointerStartV=e._positionV,e._positionOnPointerStartVS=e._positionVS,!0)},move:function(){e._pointerChangeV(a.startPointers[0],a.currentPointers[0])}});"ResizeObserver"in window&&this.container.current?new ResizeObserver(function(){return e._resetPosition()}).observe(this.container.current):window.addEventListener("resize",this._resetPosition),this._resetPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this._resetPosition)}},{key:"_resetPosition",value:function(){var e=this;requestAnimationFrame(function(){if(e.container&&e.container.current){var t=e.container.current.getBoundingClientRect();e._positionH=t.height*e._relativePositionH,e._positionHS=t.width*e._relativePositionHS,e._positionV=t.width*e._relativePositionV,e._positionVS=t.height*e._relativePositionVS,e._setHorizontal(),e._setHorizontalScrubber(),e._setVertical(),e._setVerticalScrubber()}})}},{key:"_pointerChangeH",value:function(e,t){var n=this.container.current.getBoundingClientRect();this._positionHS=this._positionOnPointerStartHS+(t.clientX-e.clientX),this._positionHS=Math.max(0,Math.min(this._positionHS,n.width-30)),this._relativePositionHS=this._positionHS/n.width,this._setHorizontalScrubber(),this._positionH=this._positionOnPointerStartH+(t.clientY-e.clientY),this._positionH=Math.max(0,Math.min(this._positionH,n.height)),this._relativePositionH=this._positionH/n.height,this._setHorizontal()}},{key:"_pointerChangeV",value:function(e,t){var n=this.container.current.getBoundingClientRect();this._positionVS=this._positionOnPointerStartVS+(t.clientY-e.clientY),this._positionVS=Math.max(0,Math.min(this._positionVS,n.height-30)),this._relativePositionVS=this._positionVS/n.height,this._setVerticalScrubber(),this._positionV=this._positionOnPointerStartV+(t.clientX-e.clientX),this._positionV=Math.max(0,Math.min(this._positionV,n.width)),this._relativePositionH=this._positionV/n.width,this._setVertical()}},{key:"render",value:function(){var e=a.a.createElement("svg",{className:"icon","aria-hidden":"true"},a.a.createElement("use",{xlinkHref:"#icon-shangxiahuakuai"}));return a.a.createElement("div",{ref:this.container,className:"panel"},this.props.children,a.a.createElement("div",{className:"horizontal",ref:this.horizontal},a.a.createElement("div",{className:"scrubber",ref:this.scrubber1},e)),a.a.createElement("div",{className:"vertical",ref:this.vertical},a.a.createElement("div",{className:"scrubber",ref:this.scrubber2},e)))}}]),t}(a.a.Component)),B=(n(42),{attributes:!0,childList:!0,subtree:!0}),F=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={posX:0,posY:0,left:0,top:0,scale:1,showMagnifier:!0},n._observer=new MutationObserver(function(e){var t=!0,i=!1,a=void 0;try{for(var r,o=e[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var c=r.value;switch(c.type){case"attributes":if(n.canvas.current){var s=n.canvas.current.width,l=n.canvas.current.getBoundingClientRect(),u=l.left,h=void 0===u?0:u,p=l.top,d=void 0===p?0:p,m=l.width/s;n.setState({left:h,top:d,scale:m},function(){return n._drawMagnifier()})}console.log("The ".concat(c.attributeName," attribute was modified."))}}}catch(f){i=!0,a=f}finally{try{t||null==o.return||o.return()}finally{if(i)throw a}}}),n._drawMagnifier=function(){if(n.canvas.current&&n.magnifier.current){var e=n.state,t=e.posX,i=e.posY,a=e.left,r=e.top,o=e.scale;!function(e,t,n,i,a,r){var o=t.getContext("2d"),c=t.width,s=t.height;o.imageSmoothingEnabled=!1,o.mozImageSmoothingEnabled=!1,o.webkitImageSmoothingEnabled=!1,o.msImageSmoothingEnabled=!1,o.drawImage(e,n-a,i-r,10,10,0,0,c,s),o.beginPath(),o.strokeStyle="red",o.moveTo(c/2-5,s/2-5),o.lineTo(c/2+5,s/2-5),o.lineTo(c/2+5,s/2+5),o.lineTo(c/2-5,s/2+5),o.lineTo(c/2-5,s/2-5),o.stroke(),o.closePath()}(n.canvas.current,n.magnifier.current,Math.round((t-a)/o),Math.round((i-r)/o),4.5,4.5);var c=function(e){var t=e.getContext("2d").getImageData(e.width/2,e.height/2,1,1).data;return[t[0],t[1],t[2],t[3]/255]}(n.magnifier.current);n.props.onResult(c)}},n._toggleMagnifier=function(){n.setState({showMagnifier:!n.state.showMagnifier})},n.canvas=Object(i.createRef)(),n.magnifier=Object(i.createRef)(),n.magnifierGrid=Object(i.createRef)(),n.pinchZoomPan=Object(i.createRef)(),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.getDrawable();this.canvas.current&&e&&k(this.canvas.current,e)}},{key:"componentDidUpdate",value:function(e,t){var n=this.getDrawable(e),i=this.getDrawable();i&&i!==n&&this.canvas.current&&(k(this.canvas.current,i),this._observer.observe(this.canvas.current,B))}},{key:"componentWillUnmount",value:function(){this._observer.disconnect()}},{key:"getDrawable",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props;return e.source&&e.source.decoded}},{key:"render",value:function(){var e=this,t=this.getDrawable();if(!t)return null;var n=this.state.showMagnifier,i=a.a.createElement("div",{className:"side-bar"},a.a.createElement("button",{className:"item scale-btn"},Math.round(100*this.state.scale)),a.a.createElement("button",{className:"item scale-btn active",onClick:this._toggleMagnifier},a.a.createElement("svg",{className:"icon","aria-hidden":"true"},a.a.createElement("use",{xlinkHref:"#icon-radar"}))));return a.a.createElement("div",{className:"panel-wrapper"},a.a.createElement("button",{className:"back-btn btn",onClick:this.props.onBack},a.a.createElement("svg",{className:"icon","aria-hidden":"true"},a.a.createElement("use",{xlinkHref:"#icon-back"}))),i,a.a.createElement(z,{setX:function(t){return e.setState({posX:t},function(){return e._drawMagnifier()})},setY:function(t){return e.setState({posY:t},function(){return e._drawMagnifier()})}},a.a.createElement(D.a,{position:"center",zoomButtons:!1,ref:this.pinchZoomPan},a.a.createElement("canvas",{ref:this.canvas,width:t&&t.width,height:t&&t.height}))),a.a.createElement("div",{className:"magnifier ".concat(n?"":"hidden")},a.a.createElement("canvas",{ref:this.magnifier,width:110,height:110})))}}]),t}(a.a.Component);n(43);var L=function(e){function t(){var e,n;Object(c.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={expand:!1},n._toggleExpand=function(){n.setState({expand:!n.state.expand})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"copyContent",value:function(e){x(e)&&(window.navigator.vibrate?window.navigator.vibrate([80,30,80]):alert("copy success"))}},{key:"render",value:function(){var e=this,t=this.props.rgba,n=void 0===t?[]:t,i=this.state.expand;if(n.length<1)return null;var r,o,c,s="rgb(".concat(n[0],", ").concat(n[1],", ").concat(n[2],")"),l=function(e,t,n){e/=255,t/=255,n/=255;var i=Math.min(e,t,n),a=Math.max(e,t,n),r=a-i,o=0,c=0;return o=0===r?0:a===e?(t-n)/r%6:a===t?(n-e)/r+2:(e-t)/r+4,(o=Math.round(60*o))<0&&(o+=360),c=(a+i)/2,"hsl("+o+", "+ +(100*(0===r?0:r/(1-Math.abs(2*c-1)))).toFixed(1)+"%, "+(c=+(100*c).toFixed(1))+"%)"}(n[0],n[1],n[2]),u=(r=n[0],o=n[1],c=n[2],r=r.toString(16),o=o.toString(16),c=c.toString(16),1===r.length&&(r="0"+r),1===o.length&&(o="0"+o),1===c.length&&(c="0"+c),"#"+r+o+c),h=i?"active":"";return a.a.createElement("div",{className:"result"},a.a.createElement("div",{className:"result-main ".concat(h)},a.a.createElement("div",{className:"color-item"},u,a.a.createElement("svg",{className:"icon","aria-hidden":"true",onClick:function(){return e.copyContent(u)}},a.a.createElement("use",{xlinkHref:"#icon-copy"}))),a.a.createElement("div",{className:"color-item"},l,a.a.createElement("svg",{className:"icon","aria-hidden":"true",onClick:function(){return e.copyContent(l)}},a.a.createElement("use",{xlinkHref:"#icon-copy"})))),a.a.createElement("div",{className:"result-bar"},a.a.createElement("div",{className:"expand-btn ".concat(h),onClick:this._toggleExpand},a.a.createElement("svg",{className:"icon","aria-hidden":"true"},a.a.createElement("use",{xlinkHref:"#icon-up"}))),a.a.createElement("div",{className:"preview-area"},s,a.a.createElement("svg",{className:"icon","aria-hidden":"true",onClick:function(){return e.copyContent(s)}},a.a.createElement("use",{xlinkHref:"#icon-copy"})))))}}]),t}(a.a.Component),A=(n(44),document.title);function U(e){return X.apply(this,arguments)}function X(){return(X=Object(f.a)(m.a.mark(function e(t){var n,i,a,r,o,c,s,l;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new DOMParser,e.next=3,H(t);case 3:if(i=e.sent,a=n.parseFromString(i,"image/svg+xml"),!(r=a.documentElement).hasAttribute("width")||!r.hasAttribute("height")){e.next=8;break}return e.abrupt("return",C(t));case 8:if(null!==(o=r.getAttribute("viewBox"))){e.next=11;break}throw Error("SVG must have width/height or viewBox");case 11:return c=o.split(/\s+/),r.setAttribute("width",c[2]),r.setAttribute("height",c[3]),s=new XMLSerializer,l=s.serializeToString(a),e.abrupt("return",C(new Blob([l],{type:"image/svg+xml"})));case 17:case"end":return e.stop()}},e)}))).apply(this,arguments)}var Y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).widthQuery=window.matchMedia("(max-width: 599px)"),n.state={source:{},mobileView:n.widthQuery.matches,result:[]},n._onMobileWidthChange=function(){n.setState({mobileView:n.widthQuery.matches})},n._updateFile=function(){var e=Object(f.a)(m.a.mark(function e(t){var i,a,r;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.setState({loading:!0}),e.prev=1,!t.type.startsWith("image/svg+xml")){e.next=9;break}return e.next=5,U(t);case 5:a=e.sent,i=V(a),e.next=12;break;case 9:return e.next=11,M(t);case 11:i=e.sent;case 12:n.updateDocumentTitle(t.name),r=Object(y.a)({},n.state,{source:{decoded:i,file:t},loading:!1}),n.setState(r),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(1),console.error(e.t0),alert("Invalid image"),n.setState({loading:!1});case 22:case"end":return e.stop()}},e,null,[[1,17]])}));return function(t){return e.apply(this,arguments)}}(),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.widthQuery.addListener(this._onMobileWidthChange),this._updateFile(this.props.file)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.file!==this.props.file&&this.updateFile(e.file)}},{key:"updateDocumentTitle",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";document.title=e?"".concat(e," - ").concat(A):A}},{key:"render",value:function(){var e=this,t=this.state,n=t.source,i=t.mobileView;return a.a.createElement("div",{className:"pick"},a.a.createElement(F,{source:n,mobileView:i,onBack:this.props.onBack,onResult:function(t){return e.setState({result:t})}}),a.a.createElement(L,{rgba:this.state.result}))}}]),t}(a.a.Component),T=(n(45),window.location),W="#editor";function Q(){window.history.back()}var G=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={isEditorOpen:!1,file:void 0},e._handleDrop=function(t,n){if(t&&0!==t.length){var i=t[0];/image/.test(i.type)?(e.setState({file:i}),e.openEditor()):console.log("invalid image")}},e._onPickeLocalFile=function(t){t&&0!==t.length&&(/image/.test(t.type)?(e.setState({file:t}),e.openEditor()):console.log("invalid image"))},e.onPopState=function(){console.log(T),e.setState({isEditorOpen:T.hash===W})},document.body.addEventListener("gesturestart",function(e){e.preventDefault()}),window.addEventListener("popstate",e.onPopState),e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"openEditor",value:function(){if(!this.state.isEditorOpen){var e=new URL(T.href);e.hash=W,window.history.pushState(null,"",e.hash),this.setState({isEditorOpen:!0})}}},{key:"render",value:function(){return a.a.createElement(p.a,{onDrop:this._handleDrop},this.state.isEditorOpen&&this.state.file?a.a.createElement(Y,{file:this.state.file,onBack:Q}):a.a.createElement(_,{onFile:this._onPickeLocalFile}))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.206ca5e3.chunk.js.map