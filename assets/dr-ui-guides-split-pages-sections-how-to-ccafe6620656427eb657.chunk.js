(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"/UuL":function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n("q1tI"),r=n.n(a),o=(n("17x9"),n("tcEi")),l=n.n(o);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=h(e);if(t){var r=h(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=function(e){p(n,e);var t=d(n);function n(){return s(this,n),t.apply(this,arguments)}return u(n,[{key:"render",value:function(){var e="inline-block";return this.props.classes&&(e+=" ".concat(this.props.classes)),r.a.createElement("form",{className:e,method:"POST",action:this.props.action,target:"_blank"},this.props.children)}}]),n}(r.a.Component),b=function(e){p(n,e);var t=d(n);function n(){return s(this,n),t.apply(this,arguments)}return u(n,[{key:"render",value:function(){var e=this.props.platform;return r.a.createElement("input",{style:{border:0},type:"submit",className:"btn btn--s cursor-pointer round",value:"Edit in ".concat(e),onClick:function(){window&&window.analytics&&analytics.track("Clicked Edit in ".concat(e))}})}}]),n}(r.a.Component),y=function(e){p(n,e);var t=d(n);function n(){return s(this,n),t.apply(this,arguments)}return u(n,[{key:"render",value:function(){var e=this.props,t=e.css,n=e.js,a=e.html,o=e.head,i=e.resources,s=function(e){var t=e.description,n="https://docs.mapbox.com/".concat(e.pathname);return t+="\n\nSee the example: [".concat(n,"](").concat(n,")"),{title:e.title,description:t,tags:["mapbox","maps"]}}(e.frontMatter);return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{action:"https://jsfiddle.net/api/post/library/pure/"},r.a.createElement(b,{platform:"JSFiddle"}),r.a.createElement("input",{type:"hidden",name:"wrap",value:"b"}),r.a.createElement("input",{type:"hidden",name:"css",value:t}),r.a.createElement("input",{type:"hidden",name:"html",value:a}),r.a.createElement("input",{type:"hidden",name:"js",value:n}),r.a.createElement("input",{type:"hidden",name:"title",value:s.title}),r.a.createElement("input",{type:"hidden",name:"resources",value:i?i.js.concat(i.css):[]}),r.a.createElement("input",{type:"hidden",name:"description",value:l()(s.description)})),r.a.createElement(g,{classes:"ml6",action:"https://codepen.io/pen/define"},r.a.createElement("input",{type:"hidden",name:"data",value:JSON.stringify({title:s.title,html:a,html_pre_processor:"none",description:s.description,tags:s.tags,css:t,css_pre_processor:"none",js:n,js_pre_processor:"none",css_external:i&&i.css?i.css.join(";"):"",js_external:i&&i.js?i.js.join(";"):"",head:o})}),r.a.createElement(b,{platform:"CodePen"})))}}]),n}(r.a.Component)},"1Ncp":function(e,t,n){var a=n("n9o4");a=a.default||a,e.exports={component:a,props:{frontMatter:{title:"How to use spit pages",description:"An introduction to use split pages.",order:2,splitPage:!0,hideFeedback:!0,contentType:"guide",products:["Mapbox fundamentals"],prependJs:["import MainPage from '!raw-loader!../index.js'; //eslint-disable-line","import SubOne from '!raw-loader!./intro.md'; //eslint-disable-line","import SplitPageShell from '!raw-loader!../../../../components/split-page-shell.js'; //eslint-disable-line","import CodeSnippet from '../../../../../../src/components/code-snippet/code-snippet';","import { highlightJsx } from '../../../../../../src/components/highlight/jsx';","import { highlightHtml } from '../../../../../../src/components/highlight/html';"]}}}},CjHp:function(e,t){!function(e){var t=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+(?:\s+(?:[\w.:$-]+(?:=(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i,e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var n=function(e){return e?"string"==typeof e?e:"string"==typeof e.content?e.content:e.content.map(n).join(""):""},a=function(t){for(var r=[],o=0;o<t.length;o++){var l=t[o],i=!1;if("string"!=typeof l&&("tag"===l.type&&l.content[0]&&"tag"===l.content[0].type?"</"===l.content[0].content[0].content?r.length>0&&r[r.length-1].tagName===n(l.content[0].content[1])&&r.pop():"/>"===l.content[l.content.length-1].content||r.push({tagName:n(l.content[0].content[1]),openedBraces:0}):r.length>0&&"punctuation"===l.type&&"{"===l.content?r[r.length-1].openedBraces++:r.length>0&&r[r.length-1].openedBraces>0&&"punctuation"===l.type&&"}"===l.content?r[r.length-1].openedBraces--:i=!0),(i||"string"==typeof l)&&r.length>0&&0===r[r.length-1].openedBraces){var s=n(l);o<t.length-1&&("string"==typeof t[o+1]||"plain-text"===t[o+1].type)&&(s+=n(t[o+1]),t.splice(o+1,1)),o>0&&("string"==typeof t[o-1]||"plain-text"===t[o-1].type)&&(s=n(t[o-1])+s,t.splice(o-1,1),o--),t[o]=new e.Token("plain-text",s,null,s)}l.content&&"string"!=typeof l.content&&a(l.content)}};e.hooks.add("after-tokenize",(function(e){"jsx"!==e.language&&"tsx"!==e.language||a(e.tokens)}))}(Prism)},IHv9:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n("q1tI"),r=n.n(a),o=(n("17x9"),n("5sBR")),l=n.n(o);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m(e);if(t){var r=m(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(i,e);var t,n,a,o=p(i);function i(){var e;s(this,i);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return h(d(e=o.call.apply(o,[this].concat(n))),"renderFilename",(function(){return r.a.createElement("div",{className:"inline-block txt-bold mb6 color-gray-dark"},e.props.filename)})),h(d(e),"renderLink",(function(){return r.a.createElement("div",{className:"inline-block ml12-mm"},r.a.createElement("a",{className:"unprose link",href:e.props.link,title:"View ".concat(e.props.filename," on GitHub")},r.a.createElement(l.a,{name:"github",inline:!0})," View on GitHub"))})),e}return t=i,(n=[{key:"render",value:function(){var e=this.props,t=e.link,n=e.toggle;return r.a.createElement("div",{className:"flex-parent-mm flex-parent--space-between-main-mm mb6"},r.a.createElement("div",{className:"flex-child"},this.renderFilename(),t&&this.renderLink()),n&&r.a.createElement("div",{className:"flex-child"},n))}}])&&c(t.prototype,n),a&&c(t,a),i}(r.a.Component)},"Jw+a":function(e,t,n){"use strict";n.r(t),n.d(t,"highlightJsx",(function(){return o}));var a=n("wZee"),r=n.n(a);n("CjHp");function o(e){return e?r.a.highlight(e,r.a.languages.jsx):""}},LYKw:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport SplitPage from '../../../src/components/page-layout/split-page';\nimport constants from '../constants.json';\n\nexport default class SplitPageShell extends React.Component {\n  render() {\n    const { children } = this.props;\n    return (\n      <SplitPage {...this.props} constants={constants}>\n        {children}\n      </SplitPage>\n    );\n  }\n}\n\nSplitPageShell.propTypes = {\n  children: PropTypes.node\n};\n"},MlWK:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="code[class*='language-'],pre[class*='language-']{color:#273d56;background:none;font-family:Consolas,Monaco,'AndaleMono','UbuntuMono',monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none;}/*Codeblocks*/pre[class*='language-']{padding:1em;margin:0.5em0;overflow:auto;border-radius:0.3em;}:not(pre)>code[class*='language-'],pre[class*='language-']{background:#272822;}/*Inlinecode*/:not(pre)>code[class*='language-']{padding:0.1em;border-radius:0.3em;white-space:normal;}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:#53708e;}.token.punctuation{color:#273d56;}.namespace{opacity:1!important;color:#b43b71;/*bg-dark-pink*/}.token.property,.token.tag,.token.constant,.token.symbol,.token.deleted{color:#314ccd;}.token.boolean,.token.number{color:#7753eb;}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#ce2c69;}.token.operator,.token.entity,.token.url,.language-css.token.string,.style.token.string,.token.variable{color:#273d56;}.token.atrule,.token.attr-value,.token.function,.token.class-name{color:#385af5;}/*slightlydarkertomakeimprovecontrastwhencodeisinaNote*/.dr-ui--note.token.atrule,.dr-ui--note.token.attr-value,.dr-ui--note.token.function,.dr-ui--note.token.class-name{color:#2a4de4;}/*slightlydarkertomakeimprovecontrastwhencodeisinaNote*/.dr-ui--note.token.selector,.dr-ui--note.token.attr-name,.dr-ui--note.token.string,.dr-ui--note.token.char,.dr-ui--note.token.builtin,.dr-ui--note.token.inserted{color:#ae2056;}.token.keyword{color:#314ccd;}.token.regex,.token.important{color:#fd971f;}.token.important,.token.bold{font-weight:bold;}.token.italic{font-style:italic;}.token.entity{cursor:help;}/*Linenumbers*/[data-content]::before{content:attr(data-content);}"},lBdT:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=(n("17x9"),n("DnIG")),l=n.n(o),i=n("IHv9").a,s=n("/UuL").a,c=n("MlWK"),u=n("TSYQ"),p=n.n(u);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=w(e);if(t){var r=w(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(u,e);var t,n,a,o=b(u);function u(){var e;m(this,u);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return E(v(e=o.call.apply(o,[this].concat(n))),"editButtons",(function(){var t=e.props,n=t.edit,a=t.maxHeight;return n&&n.css&&n.html&&n.js&&n.frontMatter.title&&n.frontMatter.description?r.a.createElement("div",{className:p()("absolute-mm right mb6 mb0-mm",{"top mr36-mm z2":!a,"mt-neg36-mm":a}),style:a?{}:{marginTop:"4px"}},r.a.createElement(s,{css:n.css,html:n.html,js:n.js,head:n.head,resources:n.resources,frontMatter:n.frontMatter})):""})),E(v(e),"codeSnippetTitle",(function(){var t=e.props.filename;return t&&r.a.createElement(i,{filename:t})})),e}return t=u,(n=[{key:"render",value:function(){var e=this.props,t=e.code,n=e.maxHeight,a=e.highlighter,o=a()(t);if(a||t)return r.a.createElement("div",{"data-swiftype-index":"false"},this.codeSnippetTitle(),r.a.createElement("div",{className:"relative prose"},this.editButtons(),r.a.createElement(l.a,d({maxHeight:n,code:t},this.props,{highlightThemeCss:c.a,highlightedCode:o,onCopy:function(){analytics.track("Copied example with clipboard")}}))))}}])&&h(t.prototype,n),a&&h(t,a),u}(r.a.Component);t.default=k},n9o4:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=y(n("q1tI")),p=(n("yr+R"),n("cQZ0"),y(n("x6Hv"))),f=y(n("xKx0")),d=y(n("LYKw")),m=y(n("lBdT")),h=n("Jw+a"),g=n("odXD"),b=y(n("C5U3"));function y(e){return e&&e.__esModule?e:{default:e}}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var w={title:"How to use spit pages",description:"An introduction to use split pages.",order:2,splitPage:!0,hideFeedback:!0,contentType:"guide",products:["Mapbox fundamentals"],headings:[{text:"How to use split pages",slug:"how-to-use-split-pages",level:2},{text:"1. Create the main page",slug:"1-create-the-main-page",level:3},{text:"Example",slug:"example",level:4},{text:"2. Create the split pages",slug:"2-create-the-split-pages",level:3},{text:"Example",slug:"example-1",level:4},{text:"3. Update the Batfish configuration",slug:"3-update-the-batfish-configuration",level:3},{text:"SplitPage wrapper",slug:"splitpage-wrapper",level:4},{text:"Example",slug:"example-2",level:5},{text:"Define SplitPage wrapper in the Batfish configuration",slug:"define-splitpage-wrapper-in-the-batfish-configuration",level:4},{text:"Use the split-pages Batfish data selector",slug:"use-the-split-pages-batfish-data-selector",level:4},{text:"4. Create redirects",slug:"4-create-redirects",level:3}]},E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(c,e);var t,n,a,s=i(c);function c(){return r(this,c),s.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){var e=this.props;return u.default.createElement(b.default,v({},e,{frontMatter:w}),u.default.createElement("div",null,u.default.createElement("h2",{id:"how-to-use-split-pages",className:"anchor"},u.default.createElement("a",{href:"#how-to-use-split-pages",className:"unprose color-blue-on-hover"},"How to use split pages")),u.default.createElement("p",null,"Before you begin using this pattern, read about its ",u.default.createElement("a",{href:"#limitations"},"limitations")," to make sure it's the right option for your site."),u.default.createElement("h3",{id:"1-create-the-main-page",className:"anchor"},u.default.createElement("a",{href:"#1-create-the-main-page",className:"unprose color-blue-on-hover"},"1. Create the main page")),u.default.createElement("p",null,"The main page is where you will combine all the partial markdown files."),u.default.createElement("ol",null,u.default.createElement("li",null,"Create an ",u.default.createElement("code",null,"index.js")," file, this is the main page. It must be a JavaScript file so that the sidebar scroll spy will work correctly."),u.default.createElement("li",null,"In the frontmatter of the main page:",u.default.createElement("ul",null,u.default.createElement("li",null,"Add ",u.default.createElement("code",null,"splitPages: true")," to the frontmatter."),u.default.createElement("li",null,"Add ",u.default.createElement("code",null,"order")," to choose the order in which it will appear in the ",u.default.createElement("code",null,"NavgiationAccordion"),"."),u.default.createElement("li",null,"Set ",u.default.createElement("code",null,"hideFeedback: true")," (usually). If the partial files will have feedback enabled, you'll want to disable the feedback from also appearing at the bottom of the page."))),u.default.createElement("li",null,"Once created, import each partial file in the main page."),u.default.createElement("li",null,"Import the ",u.default.createElement("code",null,"splitPages")," function to override the page's headings. (Depending on your set-up, this step may happen in the site's page-shell instead.)")),u.default.createElement("h4",{id:"example",className:"anchor"},u.default.createElement("a",{href:"#example",className:"unprose color-blue-on-hover"},"Example")),u.default.createElement("div",{className:"mb18"},u.default.createElement(m.default,{code:"".concat(p.default),highlighter:function(){return h.highlightJsx},filename:"src/pages/guides/split-pages/index.js"})),u.default.createElement("h3",{id:"2-create-the-split-pages",className:"anchor"},u.default.createElement("a",{href:"#2-create-the-split-pages",className:"unprose color-blue-on-hover"},"2. Create the split pages")),u.default.createElement("ol",null,u.default.createElement("li",null,"Create a new directory, ",u.default.createElement("code",null,"sections/"),", in the same folder as the ",u.default.createElement("code",null,"index.js")," you created in the previous step."),u.default.createElement("li",null,"In the ",u.default.createElement("code",null,"sections/")," directory, compose your markdown files."),u.default.createElement("li",null,"In each markdown file:",u.default.createElement("ul",null,u.default.createElement("li",null,"Add ",u.default.createElement("code",null,"splitPage: true")," to the frontmatter."),u.default.createElement("li",null,"Add ",u.default.createElement("code",null,"order:")," to chose the order in which each section (or partial markdown file) will appear on the main page - this is necessary in generating the headings. You will need to make sure this is the same order as the imported partial files in the main page.")))),u.default.createElement("h4",{id:"example-1",className:"anchor"},u.default.createElement("a",{href:"#example-1",className:"unprose color-blue-on-hover"},"Example")),u.default.createElement(m.default,{code:"".concat(f.default),highlighter:function(){return g.highlightHtml},filename:"src/pages/guides/split-pages/sections/intro.md"}),u.default.createElement("h3",{id:"3-update-the-batfish-configuration",className:"anchor"},u.default.createElement("a",{href:"#3-update-the-batfish-configuration",className:"unprose color-blue-on-hover"},"3. Update the Batfish configuration")),u.default.createElement("p",null,"You will need to update the Batfish configuration to define the wrapper component for the partial markdown files and load the ",u.default.createElement("a",{href:"/dr-ui/guides/batfish-helpers/#split-pages"},u.default.createElement("code",null,"split-pages"))," Batfish helper function."),u.default.createElement("h4",{id:"splitpage-wrapper",className:"anchor"},u.default.createElement("a",{href:"#splitpage-wrapper",className:"unprose color-blue-on-hover"},"SplitPage wrapper")),u.default.createElement("p",null,"Use the ",u.default.createElement("a",{href:"https://github.com/mapbox/dr-ui/blob/main/src/components/page-layout/split-page.js"},"SplitPage component")," (",u.default.createElement("code",null,"@mapbox/dr-ui/page-layout/split-page"),") as the wrapper for each markdown partial file. You will likely also need to create a local wrapper component to pass the page's constants file to the component since the Feedback component requires data from the constants file."),u.default.createElement("ol",null,u.default.createElement("li",null,"Create a local component: ",u.default.createElement("code",null,"src/components/split-page-shell.js"),"."),u.default.createElement("li",null,"Import the SplitPage component: ",u.default.createElement("code",null,"import SplitPage from '@mapbox/dr-ui/page-layout/split-page';")),u.default.createElement("li",null,"Import the site's local constant's file."),u.default.createElement("li",null,"Pass all props and the ",u.default.createElement("code",null,"constants")," to the SplitPage component.")),u.default.createElement("h5",{id:"example-2",className:"anchor"},u.default.createElement("a",{href:"#example-2",className:"unprose color-blue-on-hover"},"Example")),u.default.createElement(m.default,{code:"".concat(d.default),highlighter:function(){return h.highlightJsx},filename:"src/components/split-page-shell.js"}),u.default.createElement("h4",{id:"define-splitpage-wrapper-in-the-batfish-configuration",className:"anchor"},u.default.createElement("a",{href:"#define-splitpage-wrapper-in-the-batfish-configuration",className:"unprose color-blue-on-hover"},"Define SplitPage wrapper in the Batfish configuration")),u.default.createElement("ol",null,u.default.createElement("li",null,"Update ",u.default.createElement("code",null,"batfish.config.js")," to define the new wrapper and using a logic, only apply the wrapper to files in the ",u.default.createElement("code",null,"sections/")," directory:")),u.default.createElement(m.default,{code:"jsxtremeMarkdownOptions: {\ngetWrapper: resource => {\n if (//sections//.test(resource)) {\n   return path.join(\n     __dirname,\n     './src/components/split-page-shell.js'\n   );\n } else {\n   return path.join(__dirname, 'src/components/page-shell.js')\n }\n}",highlighter:function(){return h.highlightJsx},filename:"batfish.config.js"}),u.default.createElement("ul",null,u.default.createElement("li",null,"If you do not want the Feedback component to appear after each section (or partial markdown file), you can reference ",u.default.createElement("code",null,"@mapbox/dr-ui/page-layout/split-page")," instead of the local ",u.default.createElement("code",null,"split-page-shell.js")," in ",u.default.createElement("code",null,"batfish.config.js"),"."),u.default.createElement("li",null,"You can turn off the Feedback component from any partial markdown file by setting ",u.default.createElement("code",null,"hideFeedback: true")," in the frontmatter of the desired section.")),u.default.createElement("h4",{id:"use-the-split-pages-batfish-data-selector",className:"anchor"},u.default.createElement("a",{href:"#use-the-split-pages-batfish-data-selector",className:"unprose color-blue-on-hover"},"Use the split-pages Batfish data selector")),u.default.createElement("p",null,"The ",u.default.createElement("a",{href:"/dr-ui/guides/batfish-helpers/#split-pages"},u.default.createElement("code",null,"split-pages"))," Batfish data selector will combine metadata and headings for all partial markdown files and create a single source for the main page to reference."),u.default.createElement("ol",null,u.default.createElement("li",null,"Import the ",u.default.createElement("code",null,"buildSplitPages")," function in ",u.default.createElement("code",null,"batfish.config.js"),"."),u.default.createElement("li",null,"Create a new ",u.default.createElement("code",null,"splitPages")," dataSelector that returns the ",u.default.createElement("code",null,"buildSplitPages")," function.")),u.default.createElement(m.default,{code:"const {\nbuildSplitPages\n} = require('@mapbox/dr-ui/helpers/batfish/split-pages.js');\n\nmodule.exports = () => {\nreturn {\ndataSelectors: {\nsplitPages: (data) => buildSplitPages(data)\n}\n};\n};",highlighter:function(){return h.highlightJsx},filename:"batfish.config.js"}),u.default.createElement("h3",{id:"4-create-redirects",className:"anchor"},u.default.createElement("a",{href:"#4-create-redirects",className:"unprose color-blue-on-hover"},"4. Create redirects")),u.default.createElement("p",null,"You will need to create redirects in ",u.default.createElement("a",{href:"https://github.com/mapbox/subdomain-docs"},"subdomain-docs")," to redirect the partial files to the main file. The redirects will prevent users, or more likely web crawlers, from accessing the page partials."),u.default.createElement("p",null,"See ",u.default.createElement("a",{href:"https://github.com/mapbox/subdomain-docs/pull/75"},'Redirects for Studio Manual reference "sections" pages #75')," for a similar example.")))}}])&&o(t.prototype,n),a&&o(t,a),c}(u.default.PureComponent);t.default=E},odXD:function(e,t,n){"use strict";n.r(t),n.d(t,"highlightHtml",(function(){return o}));var a=n("wZee"),r=n.n(a);function o(e){return e?r.a.highlight(e,r.a.languages.html):""}},x6Hv:function(e,t,n){"use strict";n.r(t),t.default="/*---\ntitle: Split pages\ndescription: This is the first section\nsplitPages: true\norder: 3\nlayout: page\ncontentType: API\n---*/\n\nimport React from 'react';\n\n// Import each markdown file.\nimport Intro from './sections/intro.md';\nimport HowTo from './sections/how-to.md';\nimport Limitations from './sections/limitations.md';\nimport TagDebugger from './sections/tag-debugger.md';\nimport PageShell from '../../../components/page-shell';\n\n// Import splitPage function\nimport splitPages from '@mapbox/batfish/data/split-pages'; // eslint-disable-line\n\nexport default class Page extends React.Component {\n  render() {\n    const { location } = this.props;\n    // Override the combines headings in the sidebar\n    const headings = splitPages[location.pathname].headings;\n    return (\n      <PageShell headings={headings} {...this.props}>\n        <Intro {...this.props} />\n        <HowTo {...this.props} />\n        <Limitations {...this.props} />\n        <TagDebugger {...this.props} />\n      </PageShell>\n    );\n  }\n}\n"},xKx0:function(e,t,n){"use strict";n.r(t),t.default="---\ntitle: Introduction to split pages\ndescription: An introduction to use split pages.\norder: 1\nsplitPage: true\nhideFeedback: true\nproducts:\n  - Documentation\ncontentType: guide\n---\n\nThis page demonstrates the split page pattern and provides steps on how to implement it on a site.\n\nTo improve internal developer experience, the pattern splits a longer page into multiple markdown files (also known as markdown partial files) and then imports the markdown files into a single page (also known as the main page).\n\nThis split page pattern is used by the following pages:\n\n- [API documentation](https://docs.mapbox.com/api/maps/)\n- [Studio manual reference](https://docs.mapbox.com/studio-manual/reference/)\n- [Accounts pricing page](https://docs.mapbox.com/accounts/overview/pricing/)\n- [Vector Tiles Specification](https://docs.mapbox.com/vector-tiles/specification/)\n"}}]);