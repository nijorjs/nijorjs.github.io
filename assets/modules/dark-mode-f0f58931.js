import{$ as e,a as t}from"./highlight-a2f415e0.js";import o from"./codeblock-3a0e8dc7.js";var r=new window.nijor.component((async function(){return'<sectionrkmh3 title="Implementation of Dark-Mode" n-scope="mt4vFpGMCgNmy0">\n        Dark-Mode is very popular these days. You can implement dark mode using <highlightrkmh3 n-scope="mt4vFpGMCgNmy0">CSS media queries</highlightrkmh3>. But, it has a little problem : dark mode will only get activated if your browser theme is set to dark. <br n-scope="mt4vFpGMCgNmy0">\n        So, what if you want to use dark-mode without your browser\'s dark-mode activated ? or What if you want the user to have the freedom to toggle between dark, light and automatic(based on browser\'s theme) modes without them changing the theme of the browser ? <br n-scope="mt4vFpGMCgNmy0">\n        You need to use Javascript for these use cases, and Nijor has got it covered !\n    </sectionrkmh3>\n    <sectionrkmh3 title="How to implement Dark Mode ?" n-scope="mt4vFpGMCgNmy0">\n        To implement dark-mode in your Nijor website :\n        <coderkmh3 lang="js" file="App.js" n-scope="mt4vFpGMCgNmy0">\n            import "nijor";\n            import "nijor/theme"; // Add this line of code to your App.js file\n        </coderkmh3>\n\n        You can write separate CSS code for dark mode inside a Nijor Component by writing the CSS code for dark mode inside another <highlightrkmh3 n-scope="mt4vFpGMCgNmy0">style</highlightrkmh3> tag with the <highlightrkmh3 n-scope="mt4vFpGMCgNmy0">dark</highlightrkmh3> attribute.\n        <coderkmh3 n-scope="mt4vFpGMCgNmy0">\n            &lt;template&gt;\n                &lt;div&gt;\n                    &lt;p&gt;Hello !&lt;/p&gt;\n                &lt;/div&gt;\n            &lt;/template&gt;\n            &lt;style&gt;\n                div{\n                    background-color : white;\n                    padding : 0.5rem;\n                    color : black;\n                }\n            &lt;/style&gt;\n            &lt;style dark&gt;\n                div{\n                    background-color : rgb(31, 31, 31);\n                    color : rgb(0, 153, 255);\n                }\n            &lt;/style&gt;\n        </coderkmh3>\n    </sectionrkmh3>\n    <sectionrkmh3 title="Methods provided by nijor/theme" n-scope="mt4vFpGMCgNmy0">\n        <highlightrkmh3 n-scope="mt4vFpGMCgNmy0">window.nijor.getTheme()</highlightrkmh3> : This method returns the value of current theme (light, dark, auto) of website. <br n-scope="mt4vFpGMCgNmy0">\n        <highlightrkmh3 n-scope="mt4vFpGMCgNmy0">window.nijor.getColorScheme()</highlightrkmh3> : This method returns the value of current theme (light, dark, auto) of browser. <br n-scope="mt4vFpGMCgNmy0">\n        <highlightrkmh3 n-scope="mt4vFpGMCgNmy0">window.nijor.setTheme(theme)</highlightrkmh3> : This method changes the theme of the website according to the value of parameter theme. Accepted values are "dark", "light", "auto"(browser\'s theme).\n    </sectionrkmh3>\n'}),(async function(){e.init("sectionrkmh3"),await e.run(),t.init("highlightrkmh3"),await t.run(),o.init("coderkmh3"),await o.run()}));export{r as default};
