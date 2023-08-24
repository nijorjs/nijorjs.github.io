import{$ as t,a as e}from"./highlight-f31d8d70.js";var n=new window.nijor.component((async function(){return'<div class="container" n-scope="6fPzPJGcaLbwUG0YV2H">\n        <sectionxjq8 title="How Scoped CSS Works ?" n-scope="6fPzPJGcaLbwUG0YV2H">\n            The CSS code you write inside a component is scoped.\n            While compiling <highlightxjq8 n-scope="6fPzPJGcaLbwUG0YV2H">.nijor</highlightxjq8> files, the compiler adds the attribute "n-scope" to each and every HTML element inside the template tag and also modifies the CSS code inside the style tag such that the styles only apply to the elements of that particular component. The value of the \'n-scope\' attribute is same for all the HTML elements inside a particular Nijor component. <br n-scope="6fPzPJGcaLbwUG0YV2H">\n            \n            For example :\n\n            <codexjq8 n-scope="6fPzPJGcaLbwUG0YV2H">\n                &lt;template&gt;\n                    &lt;div&gt;\n                        &lt;h1&gt;Hello World&lt;/h1&gt;\n                    &lt;/div&gt;\n                &lt;/template&gt;\n                &lt;style&gt;\n                    div{\n                       dispaly : flex; \n                    }\n                    h1{\n                        color : #0066f6;\n                     }\n                &lt;/style&gt;\n            </codexjq8>\n            The above code becomes somewhat like the code below.\n            <codexjq8 n-scope="6fPzPJGcaLbwUG0YV2H">\n                &lt;template&gt;\n                    &lt;div n-scope="nsjiue73j"&gt;\n                        &lt;h1 n-scope="nsjiue73j"&gt;Hello World&lt;/h1&gt;\n                    &lt;/div&gt;\n                &lt;/template&gt;\n                &lt;style&gt;\n                    div[n-scope="nsjiue73j"]{\n                       dispaly : flex; \n                    }\n                    h1[n-scope="nsjiue73j"]{\n                        color : #0066f6;\n                     }\n                &lt;/style&gt;\n            </codexjq8>\n        </sectionxjq8>\n    </div>\n'}),(async function(){const{default:n}=await import("./codeblock-be73a27e.js");t.init("sectionxjq8"),await t.run(),e.init("highlightxjq8"),await e.run(),n.init("codexjq8"),await n.run()}));export{n as default};
