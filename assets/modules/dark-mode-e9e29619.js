import{$ as e,a as t}from"./highlight-f31d8d70.js";import o from"./codeblock-be73a27e.js";var n=new window.nijor.component((async function(){return'<section0kc title="Implementation of Dark-Mode" n-scope="q4oh7Db9JGtDfNLeBCLx">\n        Dark-Mode is very popular these days. You can implement dark mode using <highlight0kc n-scope="q4oh7Db9JGtDfNLeBCLx">CSS media queries</highlight0kc>. But, it has a little problem : dark mode will only get activated if your browser theme is set to dark. <br n-scope="q4oh7Db9JGtDfNLeBCLx">\n        So, what if you want to use dark-mode without your browser\'s dark-mode activated ? or What if you want the user to have the freedom to toggle between dark, light and automatic(based on browser\'s theme) modes without them changing the theme of the browser ? <br n-scope="q4oh7Db9JGtDfNLeBCLx">\n        You need to use Javascript for these use cases, and Nijor has got it covered !\n    </section0kc>\n    <section0kc title="How to implement Dark Mode ?" n-scope="q4oh7Db9JGtDfNLeBCLx">\n        To implement dark-mode in your Nijor website :\n        <code0kc lang="js" file="App.js" n-scope="q4oh7Db9JGtDfNLeBCLx">\n            import "nijor";\n            import "nijor/theme"; // Add this line of code to your App.js file\n        </code0kc>\n\n        You can write separate CSS code for dark mode inside a Nijor Component by writing the CSS code for dark mode inside another <highlight0kc n-scope="q4oh7Db9JGtDfNLeBCLx">style</highlight0kc> tag with the <highlight0kc n-scope="q4oh7Db9JGtDfNLeBCLx">dark</highlight0kc> attribute.\n        <code0kc n-scope="q4oh7Db9JGtDfNLeBCLx">\n            &lt;template&gt;\n                &lt;div&gt;\n                    &lt;p&gt;Hello !&lt;/p&gt;\n                &lt;/div&gt;\n            &lt;/template&gt;\n            &lt;style&gt;\n                div{\n                    background-color : white;\n                    padding : 0.5rem;\n                    color : black;\n                }\n            &lt;/style&gt;\n            &lt;style dark&gt;\n                div{\n                    background-color : rgb(31, 31, 31);\n                    color : rgb(0, 153, 255);\n                }\n            &lt;/style&gt;\n        </code0kc>\n    </section0kc>\n    <section0kc title="Methods provided by nijor/theme" n-scope="q4oh7Db9JGtDfNLeBCLx">\n        <highlight0kc n-scope="q4oh7Db9JGtDfNLeBCLx">window.nijor.getTheme()</highlight0kc> : This method returns the value of current theme (light, dark, auto) of website. <br n-scope="q4oh7Db9JGtDfNLeBCLx">\n        <highlight0kc n-scope="q4oh7Db9JGtDfNLeBCLx">window.nijor.getColorScheme()</highlight0kc> : This method returns the value of current theme (light, dark, auto) of browser. <br n-scope="q4oh7Db9JGtDfNLeBCLx">\n        <highlight0kc n-scope="q4oh7Db9JGtDfNLeBCLx">window.nijor.setTheme(theme)</highlight0kc> : This method changes the theme of the website according to the value of parameter theme. Accepted values are "dark", "light", "auto"(browser\'s theme).\n    </section0kc>\n'}),(async function(){e.init("section0kc"),await e.run(),t.init("highlight0kc"),await t.run(),o.init("code0kc"),await o.run()}));export{n as default};