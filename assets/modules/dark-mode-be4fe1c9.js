import{$ as e,a as t}from"./highlight-440ab00d.js";import o from"./codeblock-d586b906.js";var n=new window.nijor.component((async function(){return'<sectionkxdf title="Implementation of Dark-Mode" n-scope="z2b2GarA0CQ">\n        Dark-Mode is very popular these days. You can implement dark mode using <highlightkxdf n-scope="z2b2GarA0CQ">CSS media queries</highlightkxdf>. But, it has a little problem : dark mode will only get activated if your browser theme is set to dark. <br n-scope="z2b2GarA0CQ">\n        So, what if you want to use dark-mode without your browser\'s dark-mode activated ? or What if you want the user to have the freedom to toggle between dark, light and automatic(based on browser\'s theme) modes without them changing the theme of the browser ? <br n-scope="z2b2GarA0CQ">\n        You need to use Javascript for these use cases, and Nijor has got it covered !\n    </sectionkxdf>\n    <sectionkxdf title="How to implement Dark Mode ?" n-scope="z2b2GarA0CQ">\n        To implement dark-mode in your Nijor website :\n        <codekxdf lang="js" file="App.js" n-scope="z2b2GarA0CQ">\n            import "nijor";\n            import "nijor/theme"; // Add this line of code to your App.js file\n        </codekxdf>\n\n        You can write separate CSS code for dark mode inside a Nijor Component by writing the CSS code for dark mode inside another <highlightkxdf n-scope="z2b2GarA0CQ">style</highlightkxdf> tag with the <highlightkxdf n-scope="z2b2GarA0CQ">dark</highlightkxdf> attribute.\n        <codekxdf n-scope="z2b2GarA0CQ">\n            &lt;template&gt;\n                &lt;div&gt;\n                    &lt;p&gt;Hello !&lt;/p&gt;\n                &lt;/div&gt;\n            &lt;/template&gt;\n            &lt;style&gt;\n                div{\n                    background-color : white;\n                    padding : 0.5rem;\n                    color : black;\n                }\n            &lt;/style&gt;\n            &lt;style dark&gt;\n                div{\n                    background-color : rgb(31, 31, 31);\n                    color : rgb(0, 153, 255);\n                }\n            &lt;/style&gt;\n        </codekxdf>\n    </sectionkxdf>\n    <sectionkxdf title="Methods provided by nijor/theme" n-scope="z2b2GarA0CQ">\n        <highlightkxdf n-scope="z2b2GarA0CQ">window.nijor.getTheme()</highlightkxdf> : This method returns the value of current theme (light, dark, auto) of website. <br n-scope="z2b2GarA0CQ">\n        <highlightkxdf n-scope="z2b2GarA0CQ">window.nijor.getColorScheme()</highlightkxdf> : This method returns the value of current theme (light, dark, auto) of browser. <br n-scope="z2b2GarA0CQ">\n        <highlightkxdf n-scope="z2b2GarA0CQ">window.nijor.setTheme(theme)</highlightkxdf> : This method changes the theme of the website according to the value of parameter theme. Accepted values are "dark", "light", "auto"(browser\'s theme).\n    </sectionkxdf>\n'}),(async function(){e.init("sectionkxdf"),await e.run(),t.init("highlightkxdf"),await t.run(),o.init("codekxdf"),await o.run()}));export{n as default};
