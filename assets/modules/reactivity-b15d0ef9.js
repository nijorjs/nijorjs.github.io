import{$ as e,a as t}from"./highlight-87767d2c.js";import{$ as n}from"./codeblock-0a935fa0.js";var i=new window.nijor.component((async function(){return'<div style="display:none;" n-scope="LtXZBl2vvKeP"><codeonb5 n-scope="LtXZBl2vvKeP"></codeonb5></div>\n    <sectiononb5 title="Reactivity" n-scope="LtXZBl2vvKeP">\n        In Nijor, we can define <highlightonb5 n-scope="LtXZBl2vvKeP">reactive variables</highlightonb5>.\n        Reactive variables are defined as properties of the window.nijor.reactiveVars object. You can use the syntax, <highlightonb5 n-scope="LtXZBl2vvKeP">window.nijor.reactiveVars[\'varname\']</highlightonb5> to create a reactive variable. To access the value of a reactive variable inside the template tag, use the <highlightonb5 n-scope="LtXZBl2vvKeP">{{varname}}</highlightonb5> syntax.\n        <codeonb5 n-scope="LtXZBl2vvKeP">\n            &lt;template&gt;\n                &lt;!--To fetch the value of a reactive variable within the Nijor template, use {{variable}} --&gt;\n                &lt;!--Whenever the value of window.nijor.reactiveVars[\'count\'] changes, the value of {{count}} will automatically change--&gt;\n                &lt;button on:click="UpdateCount()"&gt;{{count}}&lt;/button&gt;\n            &lt;/template&gt;\n            &lt;script&gt;\n                window.nijor.reactiveVars[\'count\'] = 1; \n                // window.nijor.reactiveVars is a special object which contains a key-value pair of reactive variables and their values.\n                // Changes in values of reactive variables get reflected on the DOM only.\n                function UpdateCount(){\n                    window.nijor.reactiveVars[\'count\']+=1;\n                }\n            &lt;/script&gt;\n        </codeonb5>\n    </sectiononb5>\n'}),(async function(){e.init("sectiononb5"),await e.run(),t.init("highlightonb5"),await t.run(),n.init("codeonb5"),await n.run()}));export{i as default};
