(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{193:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jquery其他方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery其他方法"}},[t._v("#")]),t._v(" jQuery其他方法")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#jquery拷贝对象"}},[t._v("jQuery拷贝对象")])]),a("li",[a("a",{attrs:{href:"#多库共存"}},[t._v("多库共存")])]),a("li",[a("a",{attrs:{href:"#jquery插件"}},[t._v("jQuery插件")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"jquery拷贝对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery拷贝对象"}},[t._v("#")]),t._v(" jQuery拷贝对象")]),t._v(" "),a("p",[t._v("如果想要把某个对象拷贝(合并)给另外一个对象使用,此时可以使用"),a("code",[t._v("$.extend()")]),t._v("方法。")]),t._v(" "),a("p",[t._v("语法:")]),t._v(" "),a("p",[a("code",[t._v("$.extend([deep],target,object1,[objectN])")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("deep")]),t._v(":如果设为"),a("code",[t._v("true")]),t._v("为深拷贝,默认为"),a("code",[t._v("false")]),t._v("浅拷贝")]),t._v(" "),a("li",[a("code",[t._v("target")]),t._v(":要拷贝的目标对象")]),t._v(" "),a("li",[a("code",[t._v("object1")]),t._v(":待拷贝到第一个对象的对象")]),t._v(" "),a("li",[a("code",[t._v("objectN")]),t._v(":待拷贝到第N个对象的对象")]),t._v(" "),a("li",[t._v("浅拷贝是把被拷贝的对象"),a("strong",[t._v("复杂数据类型种的地址")]),t._v("拷贝给目标对象,修改目标对象"),a("strong",[t._v("会影响")]),t._v("被拷贝对象")]),t._v(" "),a("li",[t._v("深拷贝,前面加"),a("code",[t._v("true")]),t._v(",完全克隆(拷贝的对象,而不是地址),修改目标对象不会影响被拷贝对象。")])]),t._v(" "),a("p",[t._v("eg：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" targetObj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'andy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                msg"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    age"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1.浅拷贝把原来对象里面的复杂数据类型地址拷贝给目标对象")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $.extend(targetObj, obj);")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log(targetObj);//{id；1，name:'andy'}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// targetObj.msg.age = 20;")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log('targetObj', targetObj)")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// console.log('obj', obj)")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2.深拷贝把里面的数据完全复制一份给目标对象,如果里面有不冲突的属性,会合到一起")]),t._v("\n            $"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" targetObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            targetObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'targetObj'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" targetObj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'obj'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"多库共存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多库共存"}},[t._v("#")]),t._v(" 多库共存")]),t._v(" "),a("p",[a("strong",[t._v("问题概述")])]),t._v(" "),a("p",[a("code",[t._v("jQuery")]),t._v("使用"),a("code",[t._v("$")]),t._v("作为标识符,随着"),a("code",[t._v("jQuery")]),t._v("的流行，其他"),a("code",[t._v("js")]),t._v("库也会用这"),a("code",[t._v("$")]),t._v("作为标识符，这样一起使用会引起冲突。")]),t._v(" "),a("p",[a("strong",[t._v("客观需求")])]),t._v(" "),a("p",[t._v("需要一个解决方案,让"),a("code",[t._v("jQuery")]),t._v("和其他的"),a("code",[t._v("js")]),t._v("库不存在冲突,可以同时存在，这就叫做多库共存。")]),t._v(" "),a("p",[a("strong",[t._v("jQuery解决方案")])]),t._v(" "),a("ul",[a("li",[t._v("把里面的"),a("code",[t._v("$")]),t._v("符号统一改为"),a("code",[t._v("jQuery")]),t._v("。比如"),a("code",[t._v('jQuery("div")')])]),t._v(" "),a("li",[a("code",[t._v("jQuery")]),t._v("变量规定新的名称："),a("code",[t._v("$.noConflict()")]),t._v(" "),a("code",[t._v("var xx = $.Conflict()")])])]),t._v(" "),a("p",[t._v("eg:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ele")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ele"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$(\"div\")'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"div"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//$.each();//报错")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//方式1 如果$ 符号冲突  我们就使用 jQuery ")]),t._v("\n            jQuery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("each")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//方式2 让jQuery  释放对$ 控制权 让自己决定")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//var suibian = $.noConflict();")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" suibian "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" jQuery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("noConflict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("suibian")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"span"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'suibian(\"span\")'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("suibian")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"span"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            suibian"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("each")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h2",{attrs:{id:"jquery插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery插件"}},[t._v("#")]),t._v(" jQuery插件")]),t._v(" "),a("p",[a("code",[t._v("jQuery")]),t._v("功能比较有限,想要更复杂的特效效果,可以借助于"),a("code",[t._v("jQuery")]),t._v("插件完成。")]),t._v(" "),a("p",[t._v("注意:这些插件也是依赖于"),a("code",[t._v("jQuery")]),t._v("来完成的，所以必须要引入"),a("code",[t._v("jQuery")]),t._v("文件，因此也称为"),a("code",[t._v("jQuery")]),t._v("插件。")]),t._v(" "),a("p",[a("strong",[t._v("jQuery插件常用的网站")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("jQuery")]),t._v("插件库:http://www.jq22.com/")]),t._v(" "),a("li",[a("code",[t._v("jQuery")]),t._v("之家:http://www.htmleaf.com/")])]),t._v(" "),a("p",[a("strong",[t._v("jQuery插件使用步骤")])]),t._v(" "),a("ul",[a("li",[t._v("引入相关文件。("),a("code",[t._v("jQuery")]),t._v("文件和插件文件)")]),t._v(" "),a("li",[t._v("复制相关"),a("code",[t._v("html")]),t._v("、"),a("code",[t._v("css")]),t._v("、"),a("code",[t._v("js")]),t._v("(调用插件)")])]),t._v(" "),a("p",[a("strong",[t._v("jQuery插件演示")])]),t._v(" "),a("ul",[a("li",[t._v("瀑布流")]),t._v(" "),a("li",[t._v("图片懒加载(图片使用延迟加载在可提高网页下载速度。它也能帮助减轻服务器负载)")])]),t._v(" "),a("p",[t._v("当们页面滑动到可视区域,再显示图片。")]),t._v(" "),a("p",[t._v("我们使用"),a("code",[t._v("jQuery")]),t._v("插件库"),a("code",[t._v("EasyLazyload")]),t._v("。注意，此时的"),a("code",[t._v("js")]),t._v("引入文件和"),a("code",[t._v("js")]),t._v("调用必须写到"),a("code",[t._v("DOM")]),t._v("元素(图片)最后面。")]),t._v(" "),a("ul",[a("li",[t._v("全屏滚动("),a("code",[t._v("fullpage.js")]),t._v(")")])]),t._v(" "),a("p",[t._v("github:https://github.com/alvarotrigo/fullPage.js")]),t._v(" "),a("p",[t._v("中文翻译网站:http://www.dowebok.com/demo/2014/77/")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Bootstrap JS")]),t._v("插件")])]),t._v(" "),a("p",[a("code",[t._v("bootstrap")]),t._v("框架也是依赖于"),a("code",[t._v("jQuery")]),t._v("开发的,因此里面的"),a("code",[t._v("js")]),t._v("插件使用,也必须引入"),a("code",[t._v("jQuery")]),t._v("文件")]),t._v(" "),a("ul",[a("li",[t._v("引入bootstrap.min.css")]),t._v(" "),a("li",[t._v("引入jquery.min.js")]),t._v(" "),a("li",[t._v("引入bootstrap.min.js")])])])}),[],!1,null,null,null);s.default=e.exports}}]);