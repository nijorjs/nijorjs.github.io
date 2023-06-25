import{$ as e,a as t}from"./highlight-87767d2c.js";import{$ as o}from"./codeblock-0a935fa0.js";var n=new window.nijor.component((async function(){return"<sectionjj9 title=\"Routing\" n-scope=\"1aousUdwE7bjLoTMOtO6\"></sectionjj9>\n    <sectionjj9 title=\"Introduction\" n-scope=\"1aousUdwE7bjLoTMOtO6\">\n        In Nijor, we can do client-side routing. What it means is that we can render different UI to the user for different routes. The routes will be rendered in the same page due to which the page won't refresh on navigating to another route. This leads to a smoother user experience. <br n-scope=\"1aousUdwE7bjLoTMOtO6\">\n\n        Here's an example of a simple router in Nijor :\n        <codejj9 lang=\"js\" file=\"src/App.js\" n-scope=\"1aousUdwE7bjLoTMOtO6\">\n            import 'nijor';\n            import Router from 'nijor/router'; // Importing the Nijor Router\n            import App from 'App.nijor'; // Importing the App.nijor page\n            import Home from 'pages/index.nijor'; // Importing the home.nijor page\n            import About from 'pages/about.nijor'; // Importing the about.nijor page\n            import Error404 from 'pages/404.nijor'; // Importing the 404error.nijor page\n\n\n            /* Initializing the Router. The '#n-route' is the reference to the div\n            where the content from the pages (Home.nijor and About.nijor) has to be rendered. */\n\n            const router = new Router('#n-routes');\n            router.route('/',Home); // Defining the Routes.\n            router.route('/about',About); // Defining the Routes.\n            router.route('*',Error404); // '*' route is rendered in case of undefined routes ; can be used for showing a 404 Error page.\n            router.render(App); // Rendering the App.nijor file.\n        </codejj9>\n        <codejj9 file=\"src/App.nijor\" n-scope=\"1aousUdwE7bjLoTMOtO6\">\n            &lt;header n:imported=\"components/header\"/&gt;\n            &lt;template&gt;\n            &lt;header&gt;&lt;/header&gt; &lt;!-- The header component won't get affected on route change --&gt;\n                &lt;div id=\"n-routes\"&gt;\n                    &lt;!-- All the routes will be rendered inside this div --&gt;\n                    &lt;!-- Content outside this div won't get affected on change in route --&gt;\n                &lt;/div&gt;\n            &lt;/template&gt;\n        </codejj9>\n        \n    </sectionjj9>\n    <sectionjj9 title=\"Parameterized Routing\" n-scope=\"1aousUdwE7bjLoTMOtO6\">\n        With parameterised routes we can have variable paths in our routes. Let's understand it with the help of an example :  \n        <codejj9 lang=\"js\" file=\"src/App.js\" n-scope=\"1aousUdwE7bjLoTMOtO6\">\n            import 'nijor';\n            import Router from 'nijor/router';\n            import App from 'App.nijor';\n            import Home from 'pages/index.nijor';\n            import BlogIndex from 'pages/blog/index.nijor';\n            import Blog from 'pages/blog/blog.nijor';\n            import Error404 from 'pages/404.nijor';\n            const router = new Router('#n-routes');\n            router.route('/',Home);\n            router.route('/blog',BlogIndex);\n            router.route('/blog/&lt;title&gt;',Blog); // Defining the paramtereized Route.\n            router.route('*',Error404); // '*' route is rendered in case of undefined routes ; can be used for showing a 404 Error page.\n            router.render(App); // Rendering the App.nijor file.\n        </codejj9>\n        <codejj9 file=\"src/pages/blog/index.nijor\" n-scope=\"1aousUdwE7bjLoTMOtO6\">\n            &lt;!-- This page will get rendered whenever the user visits the /blog route --&gt;\n            &lt;template&gt;\n                &lt;div&gt;\n                    &lt;h1&gt;Search for BlogPosts ....&lt;/h1&gt;\n                &lt;/div&gt;\n            &lt;/template&gt;\n        </codejj9>\n        <codejj9 file=\"src/pages/blog/blog.nijor\" n-scope=\"1aousUdwE7bjLoTMOtO6\">\n            &lt;template specs=[title]&gt; &lt;!-- Receiving the parameterised route by array destructuring in specs --&gt;\n                &lt;div&gt;\n                    &lt;h1&gt;{title}&lt;/h1&gt;\n                    &lt;!-- \n                        If the user visits /blog/What-is-Nijor, &lt;h1&gt;{title}&lt;/h1&gt; will become &lt;h1&gt;What-is-Nijor&lt;/h1&gt;\n                        If the user visits /blog/XYX, &lt;h1&gt;{title}&lt;/h1&gt; will become &lt;h1&gt;XYX&lt;/h1&gt;\n                    --&gt;\n                &lt;/div&gt;\n            &lt;/template&gt;\n        </codejj9>\n    </sectionjj9>\n    <sectionjj9 title=\"preRender method\" n-scope=\"1aousUdwE7bjLoTMOtO6\">\n        <codejj9 lang=\"js\" n-scope=\"1aousUdwE7bjLoTMOtO6\">\n            import 'nijor';\n            import Router from 'nijor/router';\n            const router = new Router('#n-routes');\n\n            router.preRender(()=&gt;DoSomething());\n            // function passed to the preRender function runs before every page is rendered on route change.\n            // router.preRender((urlParameter)=&gt;DoSomething(urlParameter)); The urlParameter contains the url paramters of a parameterized route.\n        </codejj9>\n    </sectionjj9>\n    <sectionjj9 title=\"postRender method\" n-scope=\"1aousUdwE7bjLoTMOtO6\">\n        <codejj9 lang=\"js\" n-scope=\"1aousUdwE7bjLoTMOtO6\">\n            import 'nijor';\n            import Router from 'nijor/router';\n            const router = new Router('#n-routes');\n\n            function DoSomething(){\n                window.nijor.emitEvent('routechange');\n                // Fire the routechange event.\n                // Whenever someone navigates to another route, the 'routechange' custom event will get fired.\n            }\n\n            router.postRender(()=&gt;DoSomething());\n            // function passed to the preRender function runs after every page is rendered on route change.\n            // router.postRender((urlParameter)=&gt;DoSomething(urlParameter)); The urlParameter contains the url paramters of a parameterized route.\n        </codejj9>\n    </sectionjj9>\n"}),(async function(){e.init("sectionjj9"),await e.run(),t.init("highlightjj9"),await t.run(),o.init("codejj9"),await o.run()}));export{n as default};