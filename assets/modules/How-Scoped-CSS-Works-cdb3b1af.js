import{$ as n,a as t}from"./highlight-440ab00d.js";var e=new window.nijor.component((async function(){return'<div class="container" n-scope="Q8sA5TD5cwfzSDcyz4h">\n        <sectionnqh title="How Scoped CSS Works ?" n-scope="Q8sA5TD5cwfzSDcyz4h">\n            The CSS code you write inside a component is scoped.\n            While compiling <highlightnqh n-scope="Q8sA5TD5cwfzSDcyz4h">.nijor</highlightnqh> files, the compiler adds the attribute "n-scope" to each and every HTML element inside the template tag and also modifies the CSS code inside the style tag such that the styles only apply to the elements of that particular component. The value of the \'n-scope\' attribute is same for all the HTML elements inside a particular Nijor component. <br n-scope="Q8sA5TD5cwfzSDcyz4h">\n            \n            For example :\n\n            <codenqh n-scope="Q8sA5TD5cwfzSDcyz4h">\n                &lt;template&gt;\n                    &lt;div&gt;\n                        &lt;h1&gt;Hello World&lt;/h1&gt;\n                    &lt;/div&gt;\n                &lt;/template&gt;\n                &lt;style&gt;\n                    div{\n                       dispaly : flex; \n                    }\n                    h1{\n                        color : #0066f6;\n                     }\n                &lt;/style&gt;\n            </codenqh>\n            The above code becomes somewhat like the code below.\n            <codenqh n-scope="Q8sA5TD5cwfzSDcyz4h">\n                &lt;template&gt;\n                    &lt;div n-scope="nsjiue73j"&gt;\n                        &lt;h1 n-scope="nsjiue73j"&gt;Hello World&lt;/h1&gt;\n                    &lt;/div&gt;\n                &lt;/template&gt;\n                &lt;style&gt;\n                    div[n-scope="nsjiue73j"]{\n                       dispaly : flex; \n                    }\n                    h1[n-scope="nsjiue73j"]{\n                        color : #0066f6;\n                     }\n                &lt;/style&gt;\n            </codenqh>\n        </sectionnqh>\n    </div>\n'}),(async function(){const{default:e}=await import("./codeblock-d586b906.js");n.init("sectionnqh"),await n.run(),t.init("highlightnqh"),await t.run(),e.init("codenqh"),await e.run()}));export{e as default};