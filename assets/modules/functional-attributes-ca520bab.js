import{$ as t,a as n}from"./highlight-c6fe8555.js";import{$ as e}from"./codeblock-6ab1e2ba.js";var o=new window.nijor.component((async function(){return'<div style="display:none;" n-scope="1brERohCKgH6Vrr7"><coder3 n-scope="1brERohCKgH6Vrr7"></coder3></div>\n    <sectionr3 title="Functional Attributes" n-scope="1brERohCKgH6Vrr7">\n        Functional Attributes are special attributes available in Nijor for normal html tags. They help us to do specific tasks with less code.\n    </sectionr3>\n    <sectionr3 title="n:route" n-scope="1brERohCKgH6Vrr7">\n        In order to navigate between Nijor routes we use the <highlightr3 n-scope="1brERohCKgH6Vrr7">n:route</highlightr3> functional attribute on the anchor tag only. If we use the <highlightr3 n-scope="1brERohCKgH6Vrr7">href</highlightr3> attribute instead of <highlightr3 n-scope="1brERohCKgH6Vrr7">n:route</highlightr3>, we\'ll still be able to navigate. But the page will reload and the navigation won\'t be that smooth. Use <highlightr3 n-scope="1brERohCKgH6Vrr7">href</highlightr3> attribute for linking to external website.\n        <coder3 n-scope="1brERohCKgH6Vrr7">\n            &lt;a n:route="/"&gt;Index Page&lt;/a&gt; &lt;!--Routing will be smooth, the page won\'t refresh--&gt;\n            &lt;a href="/"&gt;Index Page&lt;/a&gt; &lt;!--Routing won\'t be smooth, the page will refresh--&gt;\n        </coder3>\n    </sectionr3>\n    <sectionr3 title="n:for" n-scope="1brERohCKgH6Vrr7">\n        This functional attribute is used to perform loops inside a html tag.\n        <coder3 n-scope="1brERohCKgH6Vrr7">\n            &lt;template&gt;\n                &lt;p&gt;Following are the Functional Attributes in Nijor :&lt;p&gt;\n                &lt;ul n:for="let x of AllAttributes"&gt;\n                    &lt;li&gt;{x}&lt;/li&gt;\n                &lt;/ul&gt;\n            &lt;/template&gt;\n            &lt;script&gt;\n                let AllAttributes = [\'n:route\',\'n:for\',\'n:reload\',\'n:asynLoad\'];\n            &lt;/script&gt;\n        </coder3>\n    </sectionr3>\n    <sectionr3 title="n:reload" n-scope="1brERohCKgH6Vrr7">\n        This functional attribute is used with <highlightr3 n-scope="1brERohCKgH6Vrr7">n:for</highlightr3> or <highlightr3 n-scope="1brERohCKgH6Vrr7">n:asyncLoad</highlightr3> functional attributes. <br n-scope="1brERohCKgH6Vrr7">\n        To use this functional attribute, add this attribute to your desired HTML element and assign a <highlightr3 n-scope="1brERohCKgH6Vrr7">label</highlightr3> to it, then use the <highlightr3 n-scope="1brERohCKgH6Vrr7">window.nijor.reload(label)</highlightr3> function.\n        <coder3 n-scope="1brERohCKgH6Vrr7">\n            &lt;template&gt;\n                &lt;input type="text" id="newTodo"&gt;\n                &lt;input type="button" on:click="AddItem()"&gt;\n                &lt;ul n:for="let task of Todos" n:reload="todolist"&gt;\n                    &lt;li&gt;{Todos}&lt;/li&gt;\n                &lt;/ul&gt;\n            &lt;/template&gt;\n            &lt;script&gt;\n                let Todos = [\'Read a book\', \'Learn Nijor\'];\n                function AddItem(){\n                    let item = document.getElementById(\'newTodo\').value;\n                    Todos.push(item);\n                    window.nijor.reload(\'todolist\');\n                }\n\n                /*\n                    Whenever a new item is added to \'todo\', \n                    the element(s) whith attribute n:reload="todolist" get reloaded \n                    and hence the data within them also gets updated. \n                */\n                \n            &lt;/script&gt;\n        </coder3>\n    </sectionr3>\n    <div style="display:none;" n-scope="1brERohCKgH6Vrr7"><coder3 n-scope="1brERohCKgH6Vrr7"></coder3></div>\n    <sectionr3 title="n:asyncLoad" n-scope="1brERohCKgH6Vrr7">\n        This functional attribute is used to fetch data from server asynchronously to child elemenents inside a parent element. \n        <coder3 n-scope="1brERohCKgH6Vrr7">\n            &lt;template&gt;\n                &lt;div n:asyncLoad="let data = await getData()"&gt;\n                    &lt;span&gt;Name : {data.name}&lt;span&gt;\n                    &lt;span&gt;Email : {data.email}&lt;span&gt;\n                    &lt;span&gt;Phone no : {data.phoneno}&lt;span&gt;\n                &lt;/div&gt;\n            &lt;/template&gt;\n            &lt;script&gt;\n                async function getData(){\n                    // This function fetches data from server.\n                    let response = await fetch(\'url\', {\n                        method: \'GET\',\n                        credentials: \'include\'\n                    });\n                    return (response.json());\n                }\n            &lt;/script&gt;\n        </coder3>\n    </sectionr3>\n    <sectionr3 title="n:bind" n-scope="1brERohCKgH6Vrr7">\n        This functional attribute is used to bind the value of an input tag to a <highlightr3 link="/docs#reactivity" n-scope="1brERohCKgH6Vrr7">reactive variable</highlightr3>.\n        <coder3 n-scope="1brERohCKgH6Vrr7">\n            &lt;template&gt;\n                &lt;h1&gt;Hello {{name}}&lt;/h1&gt;\n                &lt;input type="text" n:bind="name"&gt;\n\n                &lt;!--Whenever the value of the input tag with the attribute n:bind changes, the value of {{name}} changes automatically.--&gt;\n            &lt;/template&gt;\n        </coder3>\n    </sectionr3>\n'}),(async function(){t.init("sectionr3"),await t.run(),n.init("highlightr3"),await n.run(),e.init("coder3"),await e.run()}));export{o as default};
