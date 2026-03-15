import{t as e}from"../page-X0Xv.js";const t=new e(async function({},e){return document.title=`Documentation | Nijor`,`<section n-scope="99y5of"><h1 n-scope="99y5of">About</h1><p n-scope="99y5of"> Nijor is a component-based frontend framework for building modern web applications. <br n-scope="99y5of"> Unlike many UI frameworks that rely on separate meta-frameworks for application features, Nijor includes these capabilities by default. <br n-scope="99y5of"> File-based routing, layouts, middleware, and other application-level features are built directly into the framework. <br n-scope="99y5of"> Templates are written in <span class="txt" n-scope="99y5of">*.nijor</span> files that combine markup, logic, and styles in a single component file. <br n-scope="99y5of"> Nijor avoids the Virtual DOM and instead relies on the browser’s native DOM APIs for rendering. <br n-scope="99y5of"> Server-side rendering (SSR) is currently under development. Once fully implemented, developers will be able to choose between client-side rendering (CSR) and server-side rendering (SSR) for production builds. </p></section><section n-scope="99y5of"><h1 n-scope="99y5of">Philosophy</h1><p n-scope="99y5of"> Nijor is built around a simple principle : use the browser's capabilities instead of recreating them in JavaScript. <br n-scope="99y5of"> Modern frameworks often introduce additional abstraction layers such as Virtual DOMs or heavy runtime systems. Nijor aims to reduce this complexity by relying on native browser behavior wherever possible. </p><h2 n-scope="99y5of">No Virtual DOM</h2><p n-scope="99y5of"> Nijor updates the real DOM directly instead of maintaining a virtual representation. </p><h2 n-scope="99y5of">Native Event Handling</h2><p n-scope="99y5of">Native event handling Events are declared using inline attributes instead of generated addEventListener calls.</p><h2 n-scope="99y5of">Application features built in</h2><p n-scope="99y5of">Routing, layouts, middleware, and plugins are included directly in the framework instead of requiring an additional meta-framework.</p><h2 n-scope="99y5of">Shared runtime</h2><p n-scope="99y5of"> Unlike many JavaScript frameworks, Nijor projects do not include a node_modules directory by default. <br n-scope="99y5of"> Instead, the Nijor runtime files are shared across projects. This reduces disk usage and keeps projects lightweight. <br n-scope="99y5of"> You can still install and use external packages via bun or node and can import them in your project without any external configuration. </p></section><section n-scope="99y5of"><h1 n-scope="99y5of">Project Structure</h1><p n-scope="99y5of"></p><pre>    my-app/
        │
        ├── pages/
        │   ├── index.nijor
        │   ├── about.nijor
        │   └── blog/
        │       └── index.nijor
        │
        ├── layouts/
        │   └── main.nijor
        │
        ├── middleware/
        │   └── auth.js
        │
        ├── plugins/
        │   └── example.js
        │
        ├── public/
        │   └── assets
        │
        └── nijor.config.js
    </pre> <p n-scope="99y5of"></p></section>`},async function({},e){},`docs`);export{t as default};