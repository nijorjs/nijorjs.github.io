import{$ as i,a as e}from"./highlight-9f5512bf.js";import t from"./codeblock-5d174ceb.js";var o=new window.nijor.component((async function(){return'<div style="display: none;" n-scope="Hg59QxO4LChdY"><codedbk n-scope="Hg59QxO4LChdY"></codedbk></div>\n    <sectiondbk title="Structure of a Nijor project" n-scope="Hg59QxO4LChdY">\n        When you use the <highlightdbk n-scope="Hg59QxO4LChdY">nijor create {appname}</highlightdbk> command, it creates a new directory named after your project. This page is intended to help you understand the use of each of these directories and files.\n    </sectiondbk>\n    <sectiondbk title="app directory" n-scope="Hg59QxO4LChdY">\n        The <highlightdbk n-scope="Hg59QxO4LChdY">app</highlightdbk> directory contains the <highlightdbk n-scope="Hg59QxO4LChdY">index.html</highlightdbk> file for our website. It also contains another directory called <highlightdbk n-scope="Hg59QxO4LChdY">assets</highlightdbk> which stores our css file and it also contains another directory called <highlightdbk n-scope="Hg59QxO4LChdY">modules</highlightdbk> which contains the js files produced by the compiler.\n    </sectiondbk>\n    <sectiondbk title="src directory" n-scope="Hg59QxO4LChdY">\n        The <highlightdbk n-scope="Hg59QxO4LChdY">src</highlightdbk> directory is our main working directory. We generally don\'t need to touch the <highlightdbk n-scope="Hg59QxO4LChdY">app</highlightdbk> directory.\n    </sectiondbk>\n    <sectiondbk title="src/components directory" n-scope="Hg59QxO4LChdY">\n        This directory stores all the reusable Nijor components.\n    </sectiondbk>\n    <sectiondbk title="src/pages directory" n-scope="Hg59QxO4LChdY">\n        This directory stores all the Nijor components which are to be used as <highlightdbk n-scope="Hg59QxO4LChdY">pages</highlightdbk> during routing. Pages are just normal Nijor components which are used for routing, they behave normally as other Nijor components.\n    </sectiondbk>\n    <sectiondbk title="src/styles directory" n-scope="Hg59QxO4LChdY">\n        This directory stores our global stylesheets.\n    </sectiondbk>\n    <sectiondbk title="src/images directory" n-scope="Hg59QxO4LChdY">\n        This directory stores our images which can be imported into a Nijor component just like a Javascript file using ES6 imports.\n    </sectiondbk>\n    <sectiondbk title="src/App.js file" n-scope="Hg59QxO4LChdY">\n        This file is the main entrypoint of our Nijor project.\n    </sectiondbk>\n    <sectiondbk title="src/App.nijor file" n-scope="Hg59QxO4LChdY">\n        This file is like the index.html for Nijor. We still need to use the index.html file sometimes though. The template tag of App.nijor is like the body of the index.html file.\n    </sectiondbk>\n    <sectiondbk title="Nijor Configuration File" n-scope="Hg59QxO4LChdY">\n        The <highlightdbk n-scope="Hg59QxO4LChdY">nijor.config.json</highlightdbk> is a file which contains certain configurations for a Nijor project.<br n-scope="Hg59QxO4LChdY">\n        If you try to run the <highlightdbk n-scope="Hg59QxO4LChdY">nijor build</highlightdbk>,<highlightdbk n-scope="Hg59QxO4LChdY">nijor compile</highlightdbk>,<highlightdbk n-scope="Hg59QxO4LChdY">nijor serve</highlightdbk> commands inside a Nijor project without this file, then the <highlightdbk n-scope="Hg59QxO4LChdY">nijor-compiler</highlightdbk> won\'t work and will throw errors.\n    </sectiondbk>\n'}),(async function(){i.init("sectiondbk"),await i.run(),e.init("highlightdbk"),await e.run(),t.init("codedbk"),await t.run()}));export{o as default};