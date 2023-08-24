import{$ as e,a as i}from"./highlight-f31d8d70.js";import t from"./codeblock-be73a27e.js";var n=new window.nijor.component((async function(){return'<div style="display:none;" n-scope="NPIJUGZeLI"><codeqd n-scope="NPIJUGZeLI"></codeqd></div>\n    <sectionqd title="Code Splitting" n-scope="NPIJUGZeLI">\n        The Nijor compiler automatically compiles and packages all <highlightqd n-scope="NPIJUGZeLI">*.nijor page</highlightqd> files into multiple Javascript files. But compiles the <highlightqd n-scope="NPIJUGZeLI">*.nijor component</highlightqd> files with the <highlightqd n-scope="NPIJUGZeLI">*.nijor page</highlightqd> itself.\n        Although this is not an issue for most projects, it can cause problems with increased loading time, resulting in a bad user experience.\n        To overcome this problem, Nijor includes a built-in feature called code-splitting.\n        By code-splitting your application, you can selectively <highlightqd n-scope="NPIJUGZeLI">lazy-load</highlightqd> only the components that are currently required by the user, which can greatly enhance your app\'s performance.\n        This approach does not reduce the overall amount of code in your app, but it does prevent loading of unnecessary code and reduces the amount of code needed during the initial load. All the pages in your app are lazy-loaded and there\'s no way to change it !\n    </sectionqd>\n    <sectionqd title="Lazy-loading a component" n-scope="NPIJUGZeLI">\n        To lazy-load a component, just add the <highlightqd n-scope="NPIJUGZeLI">lazy</highlightqd> attribute after it.\n        <codeqd n-scope="NPIJUGZeLI">\n            &lt;card1 n:imported="components/card.nijor"/&gt; &lt;!--Without Lazy Loading--&gt;\n            &lt;card2 n:imported="components/card.nijor" lazy/&gt; &lt;!--With Lazy Loading--&gt;\n        </codeqd>\n    </sectionqd>\n'}),(async function(){e.init("sectionqd"),await e.run(),i.init("highlightqd"),await i.run(),t.init("codeqd"),await t.run()}));export{n as default};
