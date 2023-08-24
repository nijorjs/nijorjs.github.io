import{$ as e,a as o}from"./highlight-f31d8d70.js";import i from"./codeblock-be73a27e.js";var t=new window.nijor.component((async function(){return'<div style="display: none;" n-scope="eWK53SJw53r8"><codexlo n-scope="eWK53SJw53r8"></codexlo></div>\n    <sectionxlo title="Structure of a Nijor project" n-scope="eWK53SJw53r8">\n        When you use the <highlightxlo n-scope="eWK53SJw53r8">nijor create {appname}</highlightxlo> command, it creates a new directory named after your project. This page is intended to help you understand the use of each of these directories and files.\n    </sectionxlo>\n    <sectionxlo title="app directory" n-scope="eWK53SJw53r8">\n        The <highlightxlo n-scope="eWK53SJw53r8">app</highlightxlo> directory contains the <highlightxlo n-scope="eWK53SJw53r8">index.html</highlightxlo> file for our website. It also contains another directory called <highlightxlo n-scope="eWK53SJw53r8">assets</highlightxlo> which stores our css file and it also contains another directory called <highlightxlo n-scope="eWK53SJw53r8">modules</highlightxlo> which contains the js files produced by the compiler.\n    </sectionxlo>\n    <sectionxlo title="src directory" n-scope="eWK53SJw53r8">\n        The <highlightxlo n-scope="eWK53SJw53r8">src</highlightxlo> directory is our main working directory. We generally don\'t need to touch the <highlightxlo n-scope="eWK53SJw53r8">app</highlightxlo> directory.\n    </sectionxlo>\n    <sectionxlo title="src/components directory" n-scope="eWK53SJw53r8">\n        This directory stores all the reusable Nijor components.\n    </sectionxlo>\n    <sectionxlo title="src/pages directory" n-scope="eWK53SJw53r8">\n        This directory stores all the Nijor components which are to be used as <highlightxlo n-scope="eWK53SJw53r8">pages</highlightxlo> during routing. Pages are just normal Nijor components which are used for routing, they behave normally as other Nijor components.\n    </sectionxlo>\n    <sectionxlo title="src/styles directory" n-scope="eWK53SJw53r8">\n        This directory stores our global stylesheets.\n    </sectionxlo>\n    <sectionxlo title="src/images directory" n-scope="eWK53SJw53r8">\n        This directory stores our images which can be imported into a Nijor component just like a Javascript file using ES6 imports.\n    </sectionxlo>\n    <sectionxlo title="src/App.js file" n-scope="eWK53SJw53r8">\n        This file is the main entrypoint of our Nijor project.\n    </sectionxlo>\n    <sectionxlo title="src/App.nijor file" n-scope="eWK53SJw53r8">\n        This file is like the index.html for Nijor. We still need to use the index.html file sometimes though. The template tag of App.nijor is like the body of the index.html file.\n    </sectionxlo>\n    <sectionxlo title="Nijor Configuration File" n-scope="eWK53SJw53r8">\n        The <highlightxlo n-scope="eWK53SJw53r8">nijor.config.json</highlightxlo> is a file which contains certain configurations for a Nijor project.<br n-scope="eWK53SJw53r8">\n        If you try to run the <highlightxlo n-scope="eWK53SJw53r8">nijor build</highlightxlo>,<highlightxlo n-scope="eWK53SJw53r8">nijor compile</highlightxlo>,<highlightxlo n-scope="eWK53SJw53r8">nijor serve</highlightxlo> commands inside a Nijor project without this file, then the <highlightxlo n-scope="eWK53SJw53r8">nijor-compiler</highlightxlo> won\'t work and will throw errors.\n    </sectionxlo>\n'}),(async function(){e.init("sectionxlo"),await e.run(),o.init("highlightxlo"),await o.run(),i.init("codexlo"),await i.run()}));export{t as default};