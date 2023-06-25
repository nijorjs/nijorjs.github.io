import{$ as e,a as n}from"./highlight-87767d2c.js";import{$ as t}from"./codeblock-0a935fa0.js";var o=new window.nijor.component((async function(){return'<div style="display:none;" n-scope="5Dy2eEB4sW"><codexx n-scope="5Dy2eEB4sW"></codexx></div>\n    <sectionxx title="Code Splitting" n-scope="5Dy2eEB4sW">\n        The Nijor compiler automatically compiles and packages all <highlightxx n-scope="5Dy2eEB4sW">*.nijor</highlightxx> files into a single Javascript file by default.\n        Although this is not an issue for small projects, as the project expands, it can cause problems with increased loading time, resulting in a bad user experience.\n        To overcome this problem, Nijor includes a built-in feature called code-splitting.\n        By code-splitting your application, you can selectively <highlightxx n-scope="5Dy2eEB4sW">lazy-load</highlightxx> only the components that are currently required by the user, which can greatly enhance your app\'s performance.\n        This approach does not reduce the overall amount of code in your app, but it does prevent loading of unnecessary code and reduces the amount of code needed during the initial load. All the pages in your app are lazy-loaded and there\'s no way to change it !\n    </sectionxx>\n    <sectionxx title="Lazy-loading a component" n-scope="5Dy2eEB4sW">\n        To lazy-load a component, just add the <highlightxx n-scope="5Dy2eEB4sW">lazy</highlightxx> attribute after it.\n        <codexx n-scope="5Dy2eEB4sW">\n            &lt;card1 n:imported="components/card.nijor"/&gt; &lt;!--Without Lazy Loading--&gt;\n            &lt;card2 n:imported="components/card.nijor" lazy/&gt; &lt;!--With Lazy Loading--&gt;\n        </codexx>\n    </sectionxx>\n'}),(async function(){e.init("sectionxx"),await e.run(),n.init("highlightxx"),await n.run(),t.init("codexx"),await t.run()}));export{o as default};