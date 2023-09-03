(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // assets/modules/.nijor-a147a589.js
  var nijor_a147a589_exports = {};
  __export(nijor_a147a589_exports, {
    default: () => r
  });
  function c(n14, c2) {
    n14.querySelectorAll(".nav-link-docs").forEach((n15) => {
      n15.style.color = "white", n15.getAttribute("href") === c2 && (n15.style.color = "#07b0ff");
    });
  }
  var o2, i, e, r;
  var init_nijor_a147a589 = __esm({
    "assets/modules/.nijor-a147a589.js"() {
      init_app();
      window.nijorfunc._xgkChangeRoute = c, window.nijorfunc._xgkChangeRoute = c;
      o2 = new window.nijor.component(async function() {
        return '<ul n-scope="oFcc6jg3ArAeLlyNKO7T" onnavigate="window.nijorfunc._xgkChangeRoute(this)" onroute="window.nijorfunc._xgkChangeRoute(this,$data)">\n        <li n-scope="oFcc6jg3ArAeLlyNKO7T"><a class="nav-link-docs" n-scope="oFcc6jg3ArAeLlyNKO7T" onclick="return window.nijor.redirect(this.href)" href="/docs">Introduction</a></li>\n        <li n-scope="oFcc6jg3ArAeLlyNKO7T"><a class="nav-link-docs" n-scope="oFcc6jg3ArAeLlyNKO7T" onclick="return window.nijor.redirect(this.href)" href="/docs/installation">Installation</a></li>\n        <li n-scope="oFcc6jg3ArAeLlyNKO7T"><a class="nav-link-docs" n-scope="oFcc6jg3ArAeLlyNKO7T" onclick="return window.nijor.redirect(this.href)" href="/docs/nijor-cli">Nijor-CLI</a></li>\n        <li n-scope="oFcc6jg3ArAeLlyNKO7T"><a class="nav-link-docs" n-scope="oFcc6jg3ArAeLlyNKO7T" onclick="return window.nijor.redirect(this.href)" href="/docs/structure">Project Structure</a></li>\n        <li n-scope="oFcc6jg3ArAeLlyNKO7T"><a class="nav-link-docs" n-scope="oFcc6jg3ArAeLlyNKO7T" onclick="return window.nijor.redirect(this.href)" href="/docs/components">Components</a></li>\n        <li n-scope="oFcc6jg3ArAeLlyNKO7T"><a class="nav-link-docs" n-scope="oFcc6jg3ArAeLlyNKO7T" onclick="return window.nijor.redirect(this.href)" href="/docs/routing">Routing</a></li>\n        <li n-scope="oFcc6jg3ArAeLlyNKO7T"><a class="nav-link-docs" n-scope="oFcc6jg3ArAeLlyNKO7T" onclick="return window.nijor.redirect(this.href)" href="/docs/custom-events">Custom Events</a></li>\n        <li n-scope="oFcc6jg3ArAeLlyNKO7T"><a class="nav-link-docs" n-scope="oFcc6jg3ArAeLlyNKO7T" onclick="return window.nijor.redirect(this.href)" href="/docs/functional-attributes">Functional Attributes</a></li>\n        <li n-scope="oFcc6jg3ArAeLlyNKO7T"><a class="nav-link-docs" n-scope="oFcc6jg3ArAeLlyNKO7T" onclick="return window.nijor.redirect(this.href)" href="/docs/reactivity">Reactivity</a></li>\n        <li n-scope="oFcc6jg3ArAeLlyNKO7T"><a class="nav-link-docs" n-scope="oFcc6jg3ArAeLlyNKO7T" onclick="return window.nijor.redirect(this.href)" href="/docs/code-splitting">Code Splitting</a></li>\n        <li n-scope="oFcc6jg3ArAeLlyNKO7T"><a class="nav-link-docs" n-scope="oFcc6jg3ArAeLlyNKO7T" onclick="return window.nijor.redirect(this.href)" href="/docs/dark-mode">Dark Mode</a></li>\n        <li n-scope="oFcc6jg3ArAeLlyNKO7T"><a class="nav-link-docs" n-scope="oFcc6jg3ArAeLlyNKO7T" onclick="return window.nijor.redirect(this.href)" href="/docs/examples">Examples</a></li>\n    </ul>\n';
      }, async function() {
      });
      i = new window.nijor.component(async function() {
        return '<div class="main" id="docs-sidenav" n-scope="NhSdbKmcQk15Maz1O">\n        <linkscv n-scope="NhSdbKmcQk15Maz1O"></linkscv>\n    </div>\n';
      }, async function() {
        o2.init("linkscv"), await o2.run();
      });
      e = new window.nijor.component(async function() {
        return `<div class="main" id="docs-sidenav-mobile" n-scope="yvXvXw">
        <a class="branding" n-scope="yvXvXw" onclick="return window.nijor.redirect(this.href)" href="/"><img src="${o}" n-scope="yvXvXw"> Nijor</a>
        <linkse4 n-scope="yvXvXw"></linkse4>
    </div>
`;
      }, async function() {
        o2.init("linkse4"), await o2.run();
      });
      r = new window.nijor.component(async function() {
        return '<div class="container" n-scope="r6d5NAAhXrfhMdFaMQOj">\n        <sidenavw9t n-scope="r6d5NAAhXrfhMdFaMQOj"></sidenavw9t>\n        <mobilenavw9t n-scope="r6d5NAAhXrfhMdFaMQOj"></mobilenavw9t>\n        <div class="docs-div" id="routes-slot-/docs" n-scope="r6d5NAAhXrfhMdFaMQOj"></div>\n    </div>\n';
      }, async function() {
        i.init("sidenavw9t"), await i.run(), e.init("mobilenavw9t"), await e.run();
      });
    }
  });

  // assets/modules/.nijor-dca864d9.js
  var nijor_dca864d9_exports = {};
  __export(nijor_dca864d9_exports, {
    default: () => e2
  });
  function n(n14, o8) {
    n14.querySelectorAll(".nav-link-faq").forEach((n15) => {
      n15.style.color = "white", n15.getAttribute("href") === o8 && (n15.style.color = "#07b0ff");
    });
  }
  var o3, i2, e2;
  var init_nijor_dca864d9 = __esm({
    "assets/modules/.nijor-dca864d9.js"() {
      window.nijorfunc._3gChangeRoute = n, window.nijorfunc._3gChangeRoute = n;
      o3 = new window.nijor.component(async function() {
        return '<ul n-scope="U2MRkCyNTjwBw" onnavigate="window.nijorfunc._3gChangeRoute(this)" onroute="window.nijorfunc._3gChangeRoute(this,$data)">\n        <li n-scope="U2MRkCyNTjwBw"><a class="nav-link-faq" n-scope="U2MRkCyNTjwBw" onclick="return window.nijor.redirect(this.href)" href="/faq">A Note from the Creator</a></li>\n        <li n-scope="U2MRkCyNTjwBw"><a class="nav-link-faq" n-scope="U2MRkCyNTjwBw" onclick="return window.nijor.redirect(this.href)" href="/faq/How-Nijor-Works">How Nijor Works ?</a></li>\n        <li n-scope="U2MRkCyNTjwBw"><a class="nav-link-faq" n-scope="U2MRkCyNTjwBw" onclick="return window.nijor.redirect(this.href)" href="/faq/virtual-dom">Does Nijor have a Virtial DOM ?</a></li>\n        <li n-scope="U2MRkCyNTjwBw"><a class="nav-link-faq" n-scope="U2MRkCyNTjwBw" onclick="return window.nijor.redirect(this.href)" href="/faq/How-Scoped-CSS-Works">How Scoped CSS Work ?</a></li>        \n    </ul>\n';
      }, async function() {
      });
      i2 = new window.nijor.component(async function() {
        return '<div class="main" id="blog-sidenav" n-scope="THsftU9tNbgB9W">\n        <linkswy n-scope="THsftU9tNbgB9W"></linkswy>\n    </div>\n';
      }, async function() {
        o3.init("linkswy"), await o3.run();
      });
      e2 = new window.nijor.component(async function() {
        return '<div class="container" n-scope="LbOdIAuf6yScND57X">\n        <sidenavw2zvj n-scope="LbOdIAuf6yScND57X"></sidenavw2zvj>\n        <div class="blog-div" id="routes-slot-/faq" n-scope="LbOdIAuf6yScND57X"></div>\n    </div>\n';
      }, async function() {
        i2.init("sidenavw2zvj"), await i2.run();
      });
    }
  });

  // assets/modules/404-66858e28.js
  var e28_exports = {};
  __export(e28_exports, {
    default: () => n2
  });
  var n2;
  var init_e28 = __esm({
    "assets/modules/404-66858e28.js"() {
      n2 = new window.nijor.component(async function() {
        return '<div n-scope="aP1pSvg3nZYH5maRxwpD">\n        <h1 n-scope="aP1pSvg3nZYH5maRxwpD">404 Not found!</h1>\n        <p n-scope="aP1pSvg3nZYH5maRxwpD">It seems as if the page you are looking for is under construction or not found. <br n-scope="aP1pSvg3nZYH5maRxwpD">\n        Please go to the <a n-scope="aP1pSvg3nZYH5maRxwpD" onclick="return window.nijor.redirect(this.href)" href="/">Home</a> page.\n        </p>\n    </div>\n';
      }, async function() {
      });
    }
  });

  // assets/modules/highlight-9f5512bf.js
  var n3, i3;
  var init_highlight_9f5512bf = __esm({
    "assets/modules/highlight-9f5512bf.js"() {
      n3 = new window.nijor.component(async function({ title: n14, _text_: i9 }) {
        return `<div class="section" n-scope="IFj55VqHE5SC3Kg14bVc">
        <h1 n-scope="IFj55VqHE5SC3Kg14bVc">${n14}</h1>
        <p n-scope="IFj55VqHE5SC3Kg14bVc">${i9 || ""}</p>
        <div class="border" n-scope="IFj55VqHE5SC3Kg14bVc"></div>
    </div>
`;
      }, async function({ title: n14, _text_: i9 }) {
      });
      window.nijorfunc._blyRoute = function(n14) {
        if ("nolink" != n14) {
          if (n14.startsWith("https://"))
            return void window.open(n14);
          window.nijor.redirect(n14), window.nijor.emitEvent("navigate");
        }
      };
      i3 = new window.nijor.component(async function({ _text_: n14, link: i9 }) {
        return `<span class="highlight-text" n-scope="fqEHesen" onclick="window.nijorfunc._blyRoute('${i9 || "nolink"}')">${n14}</span>
`;
      }, async function({ _text_: n14, link: i9 }) {
      });
    }
  });

  // assets/modules/codeblock-5d174ceb.js
  var codeblock_5d174ceb_exports = {};
  __export(codeblock_5d174ceb_exports, {
    default: () => n4
  });
  var n4;
  var init_codeblock_5d174ceb = __esm({
    "assets/modules/codeblock-5d174ceb.js"() {
      n4 = new window.nijor.component(async function({ _text_: n14, lang: e5, file: l2 }) {
        return `<pre n-scope="w4bvpDfyrz7">        <code class="language-${e5 || "html"}" n-scope="w4bvpDfyrz7">${function(n15) {
          return null == n15 ? "" : `File : ${n15} 
`;
        }(l2)}${n14}</code>
    </pre>
`;
      }, async function({ _text_: n14, lang: e5, file: l2 }) {
        hljs.highlightAll();
      });
    }
  });

  // assets/modules/code-splitting-7dcccfbe.js
  var code_splitting_7dcccfbe_exports = {};
  __export(code_splitting_7dcccfbe_exports, {
    default: () => n5
  });
  var n5;
  var init_code_splitting_7dcccfbe = __esm({
    "assets/modules/code-splitting-7dcccfbe.js"() {
      init_highlight_9f5512bf();
      init_codeblock_5d174ceb();
      n5 = new window.nijor.component(async function() {
        return `<div style="display:none;" n-scope="MujbEjw"><code4a40 n-scope="MujbEjw"></code4a40></div>
    <section4a40 title="Code Splitting" n-scope="MujbEjw">
        The Nijor compiler automatically compiles and packages all <highlight4a40 n-scope="MujbEjw">*.nijor page</highlight4a40> files into multiple Javascript files. But compiles the <highlight4a40 n-scope="MujbEjw">*.nijor component</highlight4a40> files with the <highlight4a40 n-scope="MujbEjw">*.nijor page</highlight4a40> itself.
        Although this is not an issue for most projects, it can cause problems with increased loading time, resulting in a bad user experience.
        To overcome this problem, Nijor includes a built-in feature called code-splitting.
        By code-splitting your application, you can selectively <highlight4a40 n-scope="MujbEjw">lazy-load</highlight4a40> only the components that are currently required by the user, which can greatly enhance your app's performance.
        This approach does not reduce the overall amount of code in your app, but it does prevent loading of unnecessary code and reduces the amount of code needed during the initial load. All the pages in your app are lazy-loaded and there's no way to change it !
    </section4a40>
    <section4a40 title="Lazy-loading a component" n-scope="MujbEjw">
        To lazy-load a component, just add the <highlight4a40 n-scope="MujbEjw">lazy</highlight4a40> attribute after it.
        <code4a40 n-scope="MujbEjw">
            &lt;card1 n:imported="components/card.nijor"/&gt; &lt;!--Without Lazy Loading--&gt;
            &lt;card2 n:imported="components/card.nijor" lazy/&gt; &lt;!--With Lazy Loading--&gt;
        </code4a40>
    </section4a40>
`;
      }, async function() {
        n3.init("section4a40"), await n3.run(), i3.init("highlight4a40"), await i3.run(), n4.init("code4a40"), await n4.run();
      });
    }
  });

  // assets/modules/components-3083db31.js
  var components_3083db31_exports = {};
  __export(components_3083db31_exports, {
    default: () => o4
  });
  var o4;
  var init_components_3083db31 = __esm({
    "assets/modules/components-3083db31.js"() {
      init_highlight_9f5512bf();
      init_codeblock_5d174ceb();
      o4 = new window.nijor.component(async function() {
        return `<div style="display:none;" n-scope="wfzzAT75"><codefhkv n-scope="wfzzAT75"></codefhkv></div>
    <sectionfhkv title="Components" n-scope="wfzzAT75">
        In Nijor projects, we don't write code in HTML files ; we write code in <highlightfhkv n-scope="wfzzAT75">*.nijor</highlightfhkv> files instead. Each <highlightfhkv n-scope="wfzzAT75">*.nijor</highlightfhkv> file is a component in a Nijor Project. <br n-scope="wfzzAT75">
        A Nijor Component is a capsule of HTML, CSS and Javascript code in a single file in which the HTML, CSS and JS are scoped which allows developers to name their CSS classes and Javascript functions anyway we like without worrying about messing up with the scopes of other components. <br n-scope="wfzzAT75">
        A Nijor Component can be used as a custom HTML tag (with custom attributes) by other Nijor Component. It can also be used as a Page for routing.
    </sectionfhkv>
    <sectionfhkv title="Structure of a Nijor Component" n-scope="wfzzAT75">
        <codefhkv n-scope="wfzzAT75">
            &lt;template&gt;
                &lt;!-- Your HTML goes here --&gt;
            &lt;/template&gt;
            &lt;style&gt;
                /* Your CSS goes Here */
            &lt;/style&gt;
            &lt;script&gt;
                // Your JS goes here
            &lt;/script&gt;
        </codefhkv>
        There are 3 types of script tag in a Nijor component. It is not neccessary to use all of them in a single project.
        <codefhkv n-scope="wfzzAT75">
            &lt;template specs={name}&gt;
                &lt;p&gt;Hello {name} !&lt;/p&gt;
            &lt;/template&gt;
            &lt;script&gt;
                // Code will get executed before the component Renders. It's code is in the global scope
                // console.log(name); // Will result in error as this code gets executed before the component even renders.
                // Variables defined here can be read inside the template tag using {variable} syntax
                // Used for defining functions which get executed on events like on:click, on:customevent, onclick, etc
            &lt;/script&gt;
            &lt;script mid&gt;
                /* Very similar to the script tag above but with a slight difference; this script is scoped within the component itself.
                console.log(name); // Won't result in error as this code gets executed after the component renders.
                // Variables defined here can be read inside the template tag using {variable} syntax
            &lt;/script&gt;
            &lt;script defer&gt;
                // Code will get executed after the component Renders.
                console.log(name); // Won't result in error as this code gets executed after the component renders.
                // Variables defined here can't be read inside the template tag using {variable} syntax
            &lt;/script&gt;
        </codefhkv>
    </sectionfhkv>
    <sectionfhkv title="Specs Attribute" n-scope="wfzzAT75">
        <highlightfhkv n-scope="wfzzAT75">specs</highlightfhkv> is a special attribute available in the <highlightfhkv n-scope="wfzzAT75">template</highlightfhkv> tag . The specs attribute contains an object of all the custom attributes passed to the component from another component. <highlightfhkv n-scope="wfzzAT75">_text_</highlightfhkv> is a property in the specs object which returns the <highlightfhkv n-scope="wfzzAT75">innerHTML</highlightfhkv> of the component when imported by another component.
        <codefhkv n-scope="wfzzAT75">
            &lt;template specs={attr1,attr2}&gt;
                Attribute1 : {attr1}&lt;br&gt;
                Attribute2 : {attr2}&lt;br&gt;
            &lt;/template&gt;
            &lt;script&gt;
                console.log(attr1,attr2);
            &lt;/script&gt;
        </codefhkv>
        or
        <codefhkv n-scope="wfzzAT75">
            &lt;template specs=attrs&gt;
                Attribute1 : {attrs.attr1}&lt;br&gt;
                Attribute2 : {attrs.attr2}&lt;br&gt;
            &lt;/template&gt;
            &lt;script&gt;
                console.log(attrs.attr1,attrs.attr2);
            &lt;/script&gt;
        </codefhkv>
    </sectionfhkv>
    <sectionfhkv title="Template string" n-scope="wfzzAT75">
        Inside the template tag, you can use the value of a JS variable of the same component inside any HTML tag by enclosing the name of the variable by curly brackets.
        <codefhkv n-scope="wfzzAT75">
            &lt;template&gt;
                Hi! my name is {name}. &lt;br&gt;
                If you just want to just enclose some text within curly brackets, use \\(escape-sequence).
                Example :
                    \\{name} will just print {name} not Arun
            &lt;/template&gt;
            &lt;script&gt;
                let name = "Arun";
            &lt;/script&gt;
        </codefhkv>
    </sectionfhkv>
    <sectionfhkv title="Calling events" n-scope="wfzzAT75">
        In Nijor, instead of calling events like <highlightfhkv n-scope="wfzzAT75">onclick</highlightfhkv>, <highlightfhkv n-scope="wfzzAT75">onload</highlightfhkv>, etc we use events like <highlightfhkv n-scope="wfzzAT75">on:click</highlightfhkv>, <highlightfhkv n-scope="wfzzAT75">on:load</highlightfhkv>, etc.
        <codefhkv n-scope="wfzzAT75">
            &lt;template&gt;
                &lt;input type="number" id="num"&gt;
                &lt;button on:click="calc()"&gt;Click Me !&lt;/button&gt;
                &lt;p id="res"&gt;&lt;/p&gt;
            &lt;/template&gt;
            &lt;script&gt;
                function Factorial(n){
                    if(n===1 || n===0) return 1;
                    return n * Factorial(n-1);
                }
                function calc(){
                    let num = document.getElementById("num").value;
                    document.getElementById("res").innerHTML = \`\${num}! = \${Facrorial(num)}\`;
                }
            &lt;/script&gt;
        </codefhkv>
    </sectionfhkv>
    <sectionfhkv title="Importing a component" n-scope="wfzzAT75">
        Let's assume that there is a component blogpost.nijor in the <highlightfhkv n-scope="wfzzAT75">components/</highlightfhkv> directory. We can import it any Nijor file by the following syntax.
        <codefhkv file="pages/blog" n-scope="wfzzAT75">
            &lt;template&gt;
                &lt;blogpost title="Nijor : A first look"&gt;Nijor is a modern framework for building modern apps .....&lt;/blogpost&gt;
            &lt;/template&gt;
            &lt;script&gt;
                import $BlogPost from 'components/blogpost.nijor'; // Import the component
            &lt;/script&gt;
            &lt;script defer&gt;
                $BlogPost.init('blogpost'); // We have to initialize the component by the name which we're using to call it from inside the template tag.
                $BlogPost.run(); // Calling this function will render the component.
                /* 
                In our case, we are calling our component as &lt;blogpost&gt;....&lt;/blogpost&gt;. So we wrote $BlogPost.init('blogpost');
                Had we call it as &lt;post&gt;....&lt;/post&gt;, we'd have writen $BlogPost.init('post'); instead of $BlogPost.init('blogpost');
                */
            &lt;/script&gt;
        </codefhkv>
        Importing a component seems to be a very tedious task, but luckly for developers, Nijor has a much more beautiful syntax in which you don't need to initilaize and run the component manually.
        <codefhkv file="pages/blog" n-scope="wfzzAT75">
            &lt;blogpost n:imported="components/blogpost"/&gt; &lt;!-- This syntax handles the init and run methods automatically --&gt;
            &lt;template&gt;
                &lt;blogpost title="Nijor : A first look"&gt;Nijor is a modern framework for building modern apps .....&lt;/blogpost&gt;
            &lt;/template&gt;
        </codefhkv>
    </sectionfhkv>
    <sectionfhkv title="Example :" n-scope="wfzzAT75">
        <codefhkv lang="html" file="src/components/greet.nijor" n-scope="wfzzAT75">
            &lt;template specs={name,_text_}&gt;
                &lt;div&gt;
                    &lt;h1&gt;Hello {name}&lt;/h1&gt;
                    &lt;p&gt;{_text_}&lt;/p&gt;
                &lt;/div&gt;
            &lt;/template&gt;
            &lt;style&gt;
                div{
                    padding : 0.5rem;
                    background-color : white;
                }
                h1{
                    color : #0099ff;
                }
            &lt;/style&gt;
        </codefhkv>
        <div style="display:none;" n-scope="wfzzAT75"><codefhkv n-scope="wfzzAT75"></codefhkv></div>

        <codefhkv lang="html" file="src/App.nijor" n-scope="wfzzAT75">
            &lt;greet n:imported="components/greet.nijor"/&gt;
            &lt;!--&lt;greet n:imported="components/greet"/&gt; will also work as the file extension .nijor isn't mandatory while importing components. --&gt;
            &lt;template&gt;
                &lt;greet name="Tarun"&gt;How are you bro !&lt;/greet&gt;
                &lt;greet name="Varun"&gt;Long time no see !&lt;/greet&gt;
            &lt;/template&gt;
        </codefhkv>
    </sectionfhkv>
`;
      }, async function() {
        n3.init("sectionfhkv"), await n3.run(), i3.init("highlightfhkv"), await i3.run(), n4.init("codefhkv"), await n4.run();
      });
    }
  });

  // assets/modules/custom-events-a619f059.js
  var custom_events_a619f059_exports = {};
  __export(custom_events_a619f059_exports, {
    default: () => i4
  });
  var i4;
  var init_custom_events_a619f059 = __esm({
    "assets/modules/custom-events-a619f059.js"() {
      init_highlight_9f5512bf();
      init_codeblock_5d174ceb();
      i4 = new window.nijor.component(async function() {
        return `<sectionltzi title="Custom Events" n-scope="MlxTG3QS8tTfe">
        We can create custom events in Nijor. What it means is that, just like events like <highlightltzi n-scope="MlxTG3QS8tTfe">on:click</highlightltzi> exist in Nijor, we can create our own event like <highlightltzi n-scope="MlxTG3QS8tTfe">on:myevent</highlightltzi>.
        It's pretty easy to do so. <br n-scope="MlxTG3QS8tTfe">
        Let's consider a component <highlightltzi n-scope="MlxTG3QS8tTfe">msg.nijor</highlightltzi> which uses a custom event <highlightltzi n-scope="MlxTG3QS8tTfe">on:msg</highlightltzi>. Whenever a message is send from the <highlightltzi n-scope="MlxTG3QS8tTfe">send.nijor</highlightltzi>, the sender's name and message gets printed in the paragraph tag. <br n-scope="MlxTG3QS8tTfe"><br n-scope="MlxTG3QS8tTfe">
        
        <codeltzi file="src/page/msg.nijor" n-scope="MlxTG3QS8tTfe">
            &lt;template&gt;
                &lt;div&gt;
                    &lt;p id="msg" on:msg="PrintMsg($data)"&gt;
                &lt;/div&gt;
            &lt;/template&gt;
            &lt;script&gt;
            function PrintMsg(msgdata){
                document.getElementById('msg').innerHTML += \`\${msgdata.name} : \${msgdata.text} &lt;br&gt;\`;
            }
            &lt;/script&gt;
            &lt;script defer&gt;
                // element.addEventListener doesn't work for custom events.
                // document.getElementById('msg').addEventListener('msg',($data)=&gt;PrintMsg($data)); doesn't work for custom events.
            &lt;/script&gt;
        </codeltzi>

        <div style="display:none;" n-scope="MlxTG3QS8tTfe"><codeltzi n-scope="MlxTG3QS8tTfe"></codeltzi></div>

        <codeltzi file="src/page/send.nijor" n-scope="MlxTG3QS8tTfe">
            &lt;template&gt;
                &lt;div&gt;
                    &lt;input id="name"&gt;
                    &lt;input id="message"&gt;
                    &lt;input type="button" on:click="SendMsg()" value="Send"&gt;
                &lt;/div&gt;
            &lt;/template&gt;
            &lt;script&gt;
            function SendMsg(msgdata){
                let name = document.getElementById('name');
                let message = document.getElementById('message');
                let data = {name:name,text:message};

                // This fires the 'on:msg' event across all the components that are currently in use.
                // All the elements with on:msg events' function's $data get replaced by {name:name,text:message}
                window.nijor.emitEvent('msg',data);
            }
            &lt;/script&gt;
        </codeltzi>
    </sectionltzi>
`;
      }, async function() {
        n3.init("sectionltzi"), await n3.run(), i3.init("highlightltzi"), await i3.run(), n4.init("codeltzi"), await n4.run();
      });
    }
  });

  // assets/modules/dark-mode-f92a893b.js
  var dark_mode_f92a893b_exports = {};
  __export(dark_mode_f92a893b_exports, {
    default: () => n6
  });
  var n6;
  var init_dark_mode_f92a893b = __esm({
    "assets/modules/dark-mode-f92a893b.js"() {
      init_highlight_9f5512bf();
      init_codeblock_5d174ceb();
      n6 = new window.nijor.component(async function() {
        return `<sectionbo6gc title="Implementation of Dark-Mode" n-scope="R9GpjyJnSzkuU0uhr">
        Dark-Mode is very popular these days. You can implement dark mode using <highlightbo6gc n-scope="R9GpjyJnSzkuU0uhr">CSS media queries</highlightbo6gc>. But, it has a little problem : dark mode will only get activated if your browser theme is set to dark. <br n-scope="R9GpjyJnSzkuU0uhr">
        So, what if you want to use dark-mode without your browser's dark-mode activated ? or What if you want the user to have the freedom to toggle between dark, light and automatic(based on browser's theme) modes without them changing the theme of the browser ? <br n-scope="R9GpjyJnSzkuU0uhr">
        You need to use Javascript for these use cases, and Nijor has got it covered !
    </sectionbo6gc>
    <sectionbo6gc title="How to implement Dark Mode ?" n-scope="R9GpjyJnSzkuU0uhr">
        To implement dark-mode in your Nijor website :
        <codebo6gc lang="js" file="App.js" n-scope="R9GpjyJnSzkuU0uhr">
            import "nijor";
            import "nijor/theme"; // Add this line of code to your App.js file
        </codebo6gc>

        <codebo6gc lang="html" file="index.html" n-scope="R9GpjyJnSzkuU0uhr">
            &lt;script src="/assets/modules/app.js" type="module" onload="window.nijor.RenderTheme()" async defer&gt;&lt;/script&gt;
            &lt;!-- 
            You need to onload="window.nijor.RenderTheme()"
            so that dark mode automatically gets rendered if the browser color scheme is set to dark 
            --&gt;
        </codebo6gc>

        You can write separate CSS code for dark mode inside a Nijor Component by writing the CSS code for dark mode inside another <highlightbo6gc n-scope="R9GpjyJnSzkuU0uhr">style</highlightbo6gc> tag with the <highlightbo6gc n-scope="R9GpjyJnSzkuU0uhr">dark</highlightbo6gc> attribute.
        <codebo6gc n-scope="R9GpjyJnSzkuU0uhr">
            &lt;template&gt;
                &lt;div&gt;
                    &lt;p&gt;Hello !&lt;/p&gt;
                &lt;/div&gt;
            &lt;/template&gt;
            &lt;style&gt;
                div{
                    background-color : white;
                    padding : 0.5rem;
                    color : black;
                }
            &lt;/style&gt;
            &lt;style dark&gt;
                div{
                    background-color : rgb(31, 31, 31);
                    color : rgb(0, 153, 255);
                }
            &lt;/style&gt;
        </codebo6gc>
    </sectionbo6gc>
    <sectionbo6gc title="Methods provided by nijor/theme" n-scope="R9GpjyJnSzkuU0uhr">
        <highlightbo6gc n-scope="R9GpjyJnSzkuU0uhr">window.nijor.getTheme()</highlightbo6gc> : This method returns the value of current theme (light, dark, auto) of website. <br n-scope="R9GpjyJnSzkuU0uhr">
        <highlightbo6gc n-scope="R9GpjyJnSzkuU0uhr">window.nijor.getColorScheme()</highlightbo6gc> : This method returns the value of current theme (light, dark, auto) of browser. <br n-scope="R9GpjyJnSzkuU0uhr">
        <highlightbo6gc n-scope="R9GpjyJnSzkuU0uhr">window.nijor.setTheme(theme)</highlightbo6gc> : This method changes the theme of the website according to the value of parameter theme. Accepted values are "dark", "light", "auto"(browser's theme).
    </sectionbo6gc>
`;
      }, async function() {
        n3.init("sectionbo6gc"), await n3.run(), i3.init("highlightbo6gc"), await i3.run(), n4.init("codebo6gc"), await n4.run();
      });
    }
  });

  // assets/modules/examples-2e80c7e8.js
  var examples_2e80c7e8_exports = {};
  __export(examples_2e80c7e8_exports, {
    default: () => i5
  });
  var i5;
  var init_examples_2e80c7e8 = __esm({
    "assets/modules/examples-2e80c7e8.js"() {
      init_highlight_9f5512bf();
      i5 = new window.nijor.component(async function() {
        return '<sectionk3 title="Example Nijor Apps :" n-scope="HJ9ReK8SzUN0dc5Dmkf">\n        you can refer to the following examples to learn Nijor in a better way. <br n-scope="HJ9ReK8SzUN0dc5Dmkf"><br n-scope="HJ9ReK8SzUN0dc5Dmkf">\n        <highlightk3 link="https://github.com/nijorjs/notesapp-example" n-scope="HJ9ReK8SzUN0dc5Dmkf">Notes App</highlightk3>\n    </sectionk3>\n';
      }, async function() {
        n3.init("sectionk3"), await n3.run(), i3.init("highlightk3"), await i3.run();
      });
    }
  });

  // assets/modules/functional-attributes-f5a3f822.js
  var functional_attributes_f5a3f822_exports = {};
  __export(functional_attributes_f5a3f822_exports, {
    default: () => l
  });
  var l;
  var init_functional_attributes_f5a3f822 = __esm({
    "assets/modules/functional-attributes-f5a3f822.js"() {
      init_highlight_9f5512bf();
      init_codeblock_5d174ceb();
      l = new window.nijor.component(async function() {
        return `<div style="display:none;" n-scope="FndAsLrX"><codemrwwl n-scope="FndAsLrX"></codemrwwl></div>
    <sectionmrwwl title="Functional Attributes" n-scope="FndAsLrX">
        Functional Attributes are special attributes available in Nijor for normal html tags. They help us to do specific tasks with less code.
    </sectionmrwwl>
    <sectionmrwwl title="n:route" n-scope="FndAsLrX">
        In order to navigate between Nijor routes we use the <highlightmrwwl n-scope="FndAsLrX">n:route</highlightmrwwl> functional attribute on the anchor tag only. If we use the <highlightmrwwl n-scope="FndAsLrX">href</highlightmrwwl> attribute instead of <highlightmrwwl n-scope="FndAsLrX">n:route</highlightmrwwl>, we'll still be able to navigate. But the page will reload and the navigation won't be that smooth. Use <highlightmrwwl n-scope="FndAsLrX">href</highlightmrwwl> attribute for linking to external website.
        <codemrwwl n-scope="FndAsLrX">
            &lt;a n:route="/"&gt;Index Page&lt;/a&gt; &lt;!--Routing will be smooth, the page won't refresh--&gt;
            &lt;a href="/"&gt;Index Page&lt;/a&gt; &lt;!--Routing won't be smooth, the page will refresh--&gt;
        </codemrwwl>
    </sectionmrwwl>
    <sectionmrwwl title="n:for" n-scope="FndAsLrX">
        This functional attribute is used to perform loops inside a html tag.
        <codemrwwl n-scope="FndAsLrX">
            &lt;template&gt;
                &lt;p&gt;Following are the Functional Attributes in Nijor :&lt;p&gt;
                &lt;ul n:for="let x of AllAttributes"&gt;
                    &lt;li&gt;{x}&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/template&gt;
            &lt;script&gt;
                let AllAttributes = ['n:route','n:for','n:reload','n:asynLoad'];
            &lt;/script&gt;
        </codemrwwl>
    </sectionmrwwl>
    <sectionmrwwl title="n:reload" n-scope="FndAsLrX">
        This functional attribute is used with <highlightmrwwl n-scope="FndAsLrX">n:for</highlightmrwwl> or <highlightmrwwl n-scope="FndAsLrX">n:asyncLoad</highlightmrwwl> functional attributes. <br n-scope="FndAsLrX">
        To use this functional attribute, add this attribute to your desired HTML element and assign a <highlightmrwwl n-scope="FndAsLrX">label</highlightmrwwl> to it, then use the <highlightmrwwl n-scope="FndAsLrX">window.nijor.reload(label)</highlightmrwwl> function.
        <codemrwwl n-scope="FndAsLrX">
            &lt;template&gt;
                &lt;input type="text" id="newTodo"&gt;
                &lt;input type="button" on:click="AddItem()"&gt;
                &lt;ul n:for="let task of Todos" n:reload="todolist"&gt;
                    &lt;li&gt;{Todos}&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/template&gt;
            &lt;script&gt;
                let Todos = ['Read a book', 'Learn Nijor'];
                function AddItem(){
                    let item = document.getElementById('newTodo').value;
                    Todos.push(item);
                    window.nijor.reload('todolist');
                }

                /*
                    Whenever a new item is added to 'todo', 
                    the element(s) whith attribute n:reload="todolist" get reloaded 
                    and hence the data within them also gets updated. 
                */
                
            &lt;/script&gt;
        </codemrwwl>
    </sectionmrwwl>
    <div style="display:none;" n-scope="FndAsLrX"><codemrwwl n-scope="FndAsLrX"></codemrwwl></div>
    <sectionmrwwl title="n:asyncLoad" n-scope="FndAsLrX">
        This functional attribute is used to fetch data from server asynchronously to child elemenents inside a parent element. 
        <codemrwwl n-scope="FndAsLrX">
            &lt;template&gt;
                &lt;div n:asyncLoad="let data = await getData()"&gt;
                    &lt;span&gt;Name : {data.name}&lt;span&gt;
                    &lt;span&gt;Email : {data.email}&lt;span&gt;
                    &lt;span&gt;Phone no : {data.phoneno}&lt;span&gt;
                &lt;/div&gt;
            &lt;/template&gt;
            &lt;script&gt;
                async function getData(){
                    // This function fetches data from server.
                    let response = await fetch('url', {
                        method: 'GET',
                        credentials: 'include'
                    });
                    return (response.json());
                }
            &lt;/script&gt;
        </codemrwwl>
    </sectionmrwwl>
    <sectionmrwwl title="n:bind" n-scope="FndAsLrX">
        This functional attribute is used to bind the value of an input tag to a <highlightmrwwl link="/docs#reactivity" n-scope="FndAsLrX">reactive variable</highlightmrwwl>.
        <codemrwwl n-scope="FndAsLrX">
            &lt;template&gt;
                &lt;h1&gt;Hello {{name}}&lt;/h1&gt;
                &lt;input type="text" n:bind="name"&gt;

                &lt;!--Whenever the value of the input tag with the attribute n:bind changes, the value of {{name}} changes automatically.--&gt;
            &lt;/template&gt;
        </codemrwwl>
    </sectionmrwwl>
`;
      }, async function() {
        n3.init("sectionmrwwl"), await n3.run(), i3.init("highlightmrwwl"), await i3.run(), n4.init("codemrwwl"), await n4.run();
      });
    }
  });

  // assets/modules/index-5d98c2f4.js
  var index_5d98c2f4_exports = {};
  __export(index_5d98c2f4_exports, {
    default: () => n7
  });
  var n7;
  var init_index_5d98c2f4 = __esm({
    "assets/modules/index-5d98c2f4.js"() {
      init_highlight_9f5512bf();
      n7 = new window.nijor.component(async function() {
        return `<sectiontgvl title="What is Nijor ?" n-scope="ae8rQ4hffPs8">
        Nijor is a component-based framework that allows developers to build websites with ease by breaking down the code into many small components which can be reused throughout the codebase. Thus, Nijor makes developement faster in comparison to plain HTML, CSS and JS. <br n-scope="ae8rQ4hffPs8">
        Nijor compiles down to browser readable code with the help of the <highlighttgvl n-scope="ae8rQ4hffPs8">nijor compiler</highlighttgvl>.
    </sectiontgvl>
    <sectiontgvl title="Feature Nijor Provides :" n-scope="ae8rQ4hffPs8">
        <ul style="list-style: none;" n-scope="ae8rQ4hffPs8">
            <li n-scope="ae8rQ4hffPs8">Component Based</li>
            <li n-scope="ae8rQ4hffPs8">Frontend Routing</li>
            <li n-scope="ae8rQ4hffPs8">Custom Events</li>
            <li n-scope="ae8rQ4hffPs8">Easy to implement Dark-Mode</li>
        </ul>
    </sectiontgvl>
    <sectiontgvl title="Prerequisites" n-scope="ae8rQ4hffPs8">
        You need to have some basic knowledge about HTML, CSS and Javascript. You need to have Node.js installed on your computer before using Nijor although you don't need to know anything about NodeJS.
    </sectiontgvl>
`;
      }, async function() {
        n3.init("sectiontgvl"), await n3.run(), i3.init("highlighttgvl"), await i3.run();
      });
    }
  });

  // assets/modules/installation-b5a243be.js
  var installation_b5a243be_exports = {};
  __export(installation_b5a243be_exports, {
    default: () => i6
  });
  var i6;
  var init_installation_b5a243be = __esm({
    "assets/modules/installation-b5a243be.js"() {
      init_highlight_9f5512bf();
      init_codeblock_5d174ceb();
      i6 = new window.nijor.component(async function() {
        return '<sectionpu1 title="Installation" n-scope="xJTom1qgOzeM7Tb">\n        In order to use Nijor, we need to install the <highlightpu1 n-scope="xJTom1qgOzeM7Tb">nijor-cli</highlightpu1> from NPM. <br n-scope="xJTom1qgOzeM7Tb">\n        Type the following command to install it. <br n-scope="xJTom1qgOzeM7Tb"><br n-scope="xJTom1qgOzeM7Tb"><br n-scope="xJTom1qgOzeM7Tb">\n        <h3 n-scope="xJTom1qgOzeM7Tb">For Linux/Mac</h3>\n        <codepu1 lang="bash" n-scope="xJTom1qgOzeM7Tb">sudo npm install @nijor/cli -g</codepu1>\n        <h3 n-scope="xJTom1qgOzeM7Tb">For Windows</h3>\n        <codepu1 lang="bash" n-scope="xJTom1qgOzeM7Tb">npm install @nijor/cli -g</codepu1>\n    </sectionpu1>\n';
      }, async function() {
        n3.init("sectionpu1"), await n3.run(), i3.init("highlightpu1"), await i3.run(), n4.init("codepu1"), await n4.run();
      });
    }
  });

  // assets/modules/nijor-cli-0a9b645b.js
  var nijor_cli_0a9b645b_exports = {};
  __export(nijor_cli_0a9b645b_exports, {
    default: () => h
  });
  var h;
  var init_nijor_cli_0a9b645b = __esm({
    "assets/modules/nijor-cli-0a9b645b.js"() {
      init_highlight_9f5512bf();
      init_codeblock_5d174ceb();
      h = new window.nijor.component(async function() {
        return `<div style="display:none;" n-scope="9n3umn"><codex7syh n-scope="9n3umn"></codex7syh></div>
    <sectionx7syh title="Nijor-CLI" n-scope="9n3umn"></sectionx7syh>
    <sectionx7syh title="Intorduction" n-scope="9n3umn">
        The <highlightx7syh n-scope="9n3umn">nijor-cli</highlightx7syh> is a CLI tool which allows to work in Nijor. <br n-scope="9n3umn">
    </sectionx7syh>
    <sectionx7syh title="nijor create" n-scope="9n3umn">
        The <highlightx7syh n-scope="9n3umn">nijor create</highlightx7syh> command creates a new folder and generates some boilerplate code.
        To create a new Nijor project, type the following commands. (Write your project's name instead of {Appname} )
        <codex7syh lang="bash" n-scope="9n3umn">nijor create {AppName}</codex7syh>
        <codex7syh lang="bash" n-scope="9n3umn">cd {AppName}</codex7syh>
    </sectionx7syh>
    <sectionx7syh title="nijor serve" n-scope="9n3umn">
        The <highlightx7syh n-scope="9n3umn">nijor serve</highlightx7syh> command runs a development server for the Nijor Project.
        <codex7syh lang="bash" n-scope="9n3umn">nijor serve</codex7syh>
    </sectionx7syh>
    <sectionx7syh title="nijor compile" n-scope="9n3umn">
        The <highlightx7syh n-scope="9n3umn">nijor compile</highlightx7syh> command compiles the all the <highlightx7syh n-scope="9n3umn">*.nijor</highlightx7syh> files to browser readable JS and CSS code.
        <codex7syh lang="bash" n-scope="9n3umn">nijor compile</codex7syh>
        To watch for changes, type
        <codex7syh lang="bash" n-scope="9n3umn">nijor compile -w</codex7syh>
    </sectionx7syh>
    <sectionx7syh title="nijor build" n-scope="9n3umn">
        The <highlightx7syh n-scope="9n3umn">nijor build</highlightx7syh> command is very similar to the<highlightx7syh n-scope="9n3umn">nijor compile</highlightx7syh> command. The only differnce between the 2 is that <highlightx7syh n-scope="9n3umn">nijor build</highlightx7syh> minifies the JS code.
        <codex7syh lang="bash" n-scope="9n3umn">nijor build</codex7syh>
    </sectionx7syh>
`;
      }, async function() {
        n3.init("sectionx7syh"), await n3.run(), i3.init("highlightx7syh"), await i3.run(), n4.init("codex7syh"), await n4.run();
      });
    }
  });

  // assets/modules/reactivity-0762431e.js
  var reactivity_0762431e_exports = {};
  __export(reactivity_0762431e_exports, {
    default: () => n8
  });
  var n8;
  var init_reactivity_0762431e = __esm({
    "assets/modules/reactivity-0762431e.js"() {
      init_highlight_9f5512bf();
      init_codeblock_5d174ceb();
      n8 = new window.nijor.component(async function() {
        return `<div style="display:none;" n-scope="eieAEELkZqCMb"><codeldsl9 n-scope="eieAEELkZqCMb"></codeldsl9></div>
    <sectionldsl9 title="Reactivity" n-scope="eieAEELkZqCMb">
        In Nijor, we can define <highlightldsl9 n-scope="eieAEELkZqCMb">reactive variables</highlightldsl9>.
        Reactive variables are defined as properties of the window.nijor.reactiveVars object. You can use the syntax, <highlightldsl9 n-scope="eieAEELkZqCMb">window.nijor.reactiveVars['varname']</highlightldsl9> to create a reactive variable. To access the value of a reactive variable inside the template tag, use the <highlightldsl9 n-scope="eieAEELkZqCMb">{{varname}}</highlightldsl9> syntax.
        <codeldsl9 n-scope="eieAEELkZqCMb">
            &lt;template&gt;
                &lt;!--To fetch the value of a reactive variable within the Nijor template, use {{variable}} --&gt;
                &lt;!--Whenever the value of window.nijor.reactiveVars['count'] changes, the value of {{count}} will automatically change--&gt;
                &lt;button on:click="UpdateCount()"&gt;{{count}}&lt;/button&gt;
            &lt;/template&gt;
            &lt;script&gt;
                window.nijor.reactiveVars['count'] = 1; 
                // window.nijor.reactiveVars is a special object which contains a key-value pair of reactive variables and their values.
                // Changes in values of reactive variables get reflected on the DOM only.
                function UpdateCount(){
                    window.nijor.reactiveVars['count']+=1;
                }
            &lt;/script&gt;
        </codeldsl9>
    </sectionldsl9>
`;
      }, async function() {
        n3.init("sectionldsl9"), await n3.run(), i3.init("highlightldsl9"), await i3.run(), n4.init("codeldsl9"), await n4.run();
      });
    }
  });

  // assets/modules/routing-a99d9a09.js
  var routing_a99d9a09_exports = {};
  __export(routing_a99d9a09_exports, {
    default: () => n9
  });
  var n9;
  var init_routing_a99d9a09 = __esm({
    "assets/modules/routing-a99d9a09.js"() {
      init_highlight_9f5512bf();
      init_codeblock_5d174ceb();
      n9 = new window.nijor.component(async function() {
        return `<sectionxj6 title="Routing" n-scope="HEScrdA3Y"></sectionxj6>
    <sectionxj6 title="Introduction" n-scope="HEScrdA3Y">
        Nijor provides a client-side routing capability that allows the rendering of different user interfaces based on specific routes. Unlike traditional approaches, Nijor's routing mechanism renders routes within the same page, eliminating the need for page refreshes and delivering a seamless user experience.
    </sectionxj6>
    <sectionxj6 title="File-Based Routing" n-scope="HEScrdA3Y">
        Nijor simplifies the process of rendering pages for different routes by utilizing file-based routing. This means that developers are relieved from the responsibility of manually coding the rendering logic for each route. Instead, Nijor's compiler automatically handles this based on the organization of files in the <highlightxj6 n-scope="HEScrdA3Y">src/pages</highlightxj6> directory of your Nijor project. <br n-scope="HEScrdA3Y">
        To illustrate this behavior, let's consider an example. When a user visits the '/' route of our website, the page rendered will be src/pages/index.nijor. Similarly, accessing the '/about' route will trigger the rendering of src/pages/about.nijor. In the event that a route doesn't exist, Nijor will render src/pages/404.nijor. This convenient approach streamlines the development process and improves overall efficiency.
    </sectionxj6>
    <sectionxj6 title="Understanding the App.nijor file" n-scope="HEScrdA3Y">
        The <highlightxj6 n-scope="HEScrdA3Y">App.nijor</highlightxj6> is a very important file inside the <highlightxj6 n-scope="HEScrdA3Y">src/</highlightxj6> directory of a Nijor project. This page gets rendered before rendering any route in Nijor. Without this page, the Nijor router simply won't work. You can render those components in this page which remain same in all the pages, thus preventing the need for rerendering the common components during navigation through different routes. <br n-scope="HEScrdA3Y">
        The App.nijor file must have the <highlightxj6 n-scope="HEScrdA3Y">&lt;div n:slot&gt;&lt;/div&gt;</highlightxj6> in the <highlightxj6 n-scope="HEScrdA3Y">App.nijor</highlightxj6> file. The content from the routes (pages from the src/page/ dir) will be rendered inside this special tag.
        <codexj6 n-scope="HEScrdA3Y">
            &lt;template&gt;
                &lt;div n:slot&gt;
                    &lt;!--All the pages from the src/pages directory are rendered inside this div (marked with the n:slot attribute). 
                        Anything outside this div is always rendered irrespective of route.
                        You can write code for common header or footer outside this div so that it renders in every page, #Reasuablity
                    --&gt;
                &lt;/div&gt;

                &lt;!-- Note : Do not add an 'id' attribute to the div with the n:slot attribute. For styling, use 'class' instead. --&gt;
            &lt;/template&gt;
        </codexj6>
    </sectionxj6>
    <sectionxj6 title="Boilerplate Code for Routing" n-scope="HEScrdA3Y">
        In order to use the Nijor Router in your project, your <highlightxj6 n-scope="HEScrdA3Y">src/App.js</highlightxj6> file must contain the following Boilerplate code :
        <codexj6 lang="js" n-scope="HEScrdA3Y">
            import 'nijor';
            import 'nijor/router';
            import App from 'App.nijor';

            //@Routes()
            
            App.init('app');
            App.run();
            let url = window.location.pathname;
            window.nijor.renderRoute(url);
        </codexj6>
        Note: The <highlightxj6 n-scope="HEScrdA3Y">//@Routes()</highlightxj6> comment is crucial for the Nijor router to function properly. Please ensure that there is no code or comments written on the same line as this comment. <br n-scope="HEScrdA3Y">
    </sectionxj6>
    <sectionxj6 title="Parameterized Routing" n-scope="HEScrdA3Y">
        Nijor supports parameterized routes, allowing for variable paths within routes. To define a parameterized route, enclose the parameter(s) using square brackets, e.g., [parameter-name]. You can add any desired text before or after the parameter name. For example: @[user].nijor, [item].nijor, id-[x].nijor, etc.
        <br n-scope="HEScrdA3Y"><br n-scope="HEScrdA3Y">
        Let's explore parameterized routes with an example: <br n-scope="HEScrdA3Y">
        Suppose we are building a profile page for users on our site, and we want to render the profile of 'Arun' when accessing the '/@arun' route. Similarly, we want to display the profile of 'Himasri' for the '/@himasri' route, and so on. Instead of creating separate files for each user, such as <highlightxj6 n-scope="HEScrdA3Y">src/pages/@arun</highlightxj6> , <highlightxj6 n-scope="HEScrdA3Y">src/pages/@himasri</highlightxj6>, and thousands of other profiles, we can create a single file, <highlightxj6 n-scope="HEScrdA3Y">src/pages/@[user].nijor</highlightxj6> to handle all user profiles. This way, when a user visits routes like '/@himasri' or '/@arun', they will be directed to the same page, <highlightxj6 n-scope="HEScrdA3Y">src/pages/@[user].nijor</highlightxj6>. <br n-scope="HEScrdA3Y">
        <codexj6 file="src/pages/@[user]" n-scope="HEScrdA3Y">
            &lt;template specs=[user]&gt; &lt;!-- Receiving the parameterised route by array destructuring in specs --&gt;
                &lt;div&gt;
                    &lt;h1&gt;Hi {user}&lt;/h1&gt; 
                    &lt;!-- 
                        If the user visits /@arun &lt;h1&gt;Hi {user}&lt;/h1&gt; will become &lt;h1&gt;Hi arun&lt;/h1&gt; 
                        If the user visits /@himasri &lt;h1&gt;Hi {user}&lt;/h1&gt; will become &lt;h1&gt;Hi himasri&lt;/h1&gt; 
                    --&gt;
                &lt;/div&gt;
            &lt;/template&gt;
        </codexj6>
    </sectionxj6>
    <sectionxj6 title="Sub Routes within a route" n-scope="HEScrdA3Y">
        By sub routes, we mean routing within a parent route. <br n-scope="HEScrdA3Y">
        For instance, there is a route say, <highlightxj6 n-scope="HEScrdA3Y">/blog</highlightxj6> which has some sub-routes like <highlightxj6 n-scope="HEScrdA3Y">/blog/What-is-Nijor</highlightxj6>, <highlightxj6 n-scope="HEScrdA3Y">/blog/Learning-Nijor</highlightxj6>, etc and each of these pages have a lot of common components and common layout in general. So, you don't want to copy-paste the same common code for these pages. In these scenarios, sub-routes can be very useful. You can also have parameterized routes as subroutes within a route. <br n-scope="HEScrdA3Y"><br n-scope="HEScrdA3Y">
        
        In order to create a sub route within a route : <br n-scope="HEScrdA3Y">
        (1) Create a folder, say 'blog' inside the src/pages directory. <br n-scope="HEScrdA3Y">
        (2) Create the <highlightxj6 n-scope="HEScrdA3Y">.nijor</highlightxj6> file within it. (write .nijor the way you write .gitignore).<br n-scope="HEScrdA3Y">
        (3) Create <highlightxj6 n-scope="HEScrdA3Y">index.nijor</highlightxj6> file within the folder.<br n-scope="HEScrdA3Y">
        (4) Create <highlightxj6 n-scope="HEScrdA3Y">What-is-Nijor.nijor</highlightxj6> file within the folder.<br n-scope="HEScrdA3Y"><br n-scope="HEScrdA3Y">
        
        Now, write all the common components in the <highlightxj6 n-scope="HEScrdA3Y">.nijor</highlightxj6> file. This file contains all the common code/components for the '/blog' route. Whenever somebody visits '/blog/*', this page will get rendered.
        <codexj6 file="src/pages/blog/.nijor" n-scope="HEScrdA3Y">
            &lt;sidenav n:imported="components/sidenav"/&gt;
            &lt;template&gt;
                &lt;sidenav&gt;&lt;/sidenav&gt;
                &lt;div n:slot&gt;
                    &lt;!--All the subroutes will be rendered inside this folder.
                    Anything outside it will be rendered for any sub-route within '/blog' route--&gt;
                &lt;/div&gt;
            &lt;/template&gt;
        </codexj6>

        <codexj6 file="src/pages/blog/index.nijor" n-scope="HEScrdA3Y">
            &lt;template&gt;
                &lt;div&gt;
                    This is the Index page.
                    Whenever somebody visits '/blog/' or just '/blog' , this page will be rendered.
                &lt;/div&gt;
            &lt;/template&gt;
        </codexj6>

        <codexj6 file="src/pages/blog/What-is-Nijor.nijor" n-scope="HEScrdA3Y">
            &lt;template&gt;
                &lt;div&gt;
                    This is the What-is-Nijor page.
                    Whenever somebody visits '/blog/What-is-Nijor', this page will be rendered.
                &lt;/div&gt;
            &lt;/template&gt;
        </codexj6>

    </sectionxj6>
`;
      }, async function() {
        n3.init("sectionxj6"), await n3.run(), i3.init("highlightxj6"), await i3.run(), n4.init("codexj6"), await n4.run();
      });
    }
  });

  // assets/modules/routing.old-5f25edd2.js
  var routing_old_5f25edd2_exports = {};
  __export(routing_old_5f25edd2_exports, {
    default: () => n10
  });
  var n10;
  var init_routing_old_5f25edd2 = __esm({
    "assets/modules/routing.old-5f25edd2.js"() {
      init_highlight_9f5512bf();
      init_codeblock_5d174ceb();
      n10 = new window.nijor.component(async function() {
        return `<section4g4s title="Routing" n-scope="ChYwr0ZdR7m"></section4g4s>
    <section4g4s title="Introduction" n-scope="ChYwr0ZdR7m">
        In Nijor, we can do client-side routing. What it means is that we can render different UI to the user for different routes. The routes will be rendered in the same page due to which the page won't refresh on navigating to another route. This leads to a smoother user experience. <br n-scope="ChYwr0ZdR7m">

        Here's an example of a simple router in Nijor :
        <code4g4s lang="js" file="src/App.js" n-scope="ChYwr0ZdR7m">
            import 'nijor';
            import Router from 'nijor/router'; // Importing the Nijor Router
            import App from 'App.nijor'; // Importing the App.nijor page
            import Home from 'pages/index.nijor'; // Importing the home.nijor page
            import About from 'pages/about.nijor'; // Importing the about.nijor page
            import Error404 from 'pages/404.nijor'; // Importing the 404error.nijor page


            /* Initializing the Router. The '#n-route' is the reference to the div
            where the content from the pages (Home.nijor and About.nijor) has to be rendered. */

            const router = new Router('#n-routes');
            router.route('/',Home); // Defining the Routes.
            router.route('/about',About); // Defining the Routes.
            router.route('*',Error404); // '*' route is rendered in case of undefined routes ; can be used for showing a 404 Error page.
            router.render(App); // Rendering the App.nijor file.
        </code4g4s>
        <code4g4s file="src/App.nijor" n-scope="ChYwr0ZdR7m">
            &lt;header n:imported="components/header"/&gt;
            &lt;template&gt;
            &lt;header&gt;&lt;/header&gt; &lt;!-- The header component won't get affected on route change --&gt;
                &lt;div id="n-routes"&gt;
                    &lt;!-- All the routes will be rendered inside this div --&gt;
                    &lt;!-- Content outside this div won't get affected on change in route --&gt;
                &lt;/div&gt;
            &lt;/template&gt;
        </code4g4s>
        
    </section4g4s>
    <section4g4s title="Parameterized Routing" n-scope="ChYwr0ZdR7m">
        With parameterised routes we can have variable paths in our routes. Let's understand it with the help of an example :  
        <code4g4s lang="js" file="src/App.js" n-scope="ChYwr0ZdR7m">
            import 'nijor';
            import Router from 'nijor/router';
            import App from 'App.nijor';
            import Home from 'pages/index.nijor';
            import BlogIndex from 'pages/blog/index.nijor';
            import Blog from 'pages/blog/blog.nijor';
            import Error404 from 'pages/404.nijor';
            const router = new Router('#n-routes');
            router.route('/',Home);
            router.route('/blog',BlogIndex);
            router.route('/blog/&lt;title&gt;',Blog); // Defining the paramtereized Route.
            router.route('*',Error404); // '*' route is rendered in case of undefined routes ; can be used for showing a 404 Error page.
            router.render(App); // Rendering the App.nijor file.
        </code4g4s>
        <code4g4s file="src/pages/blog/index.nijor" n-scope="ChYwr0ZdR7m">
            &lt;!-- This page will get rendered whenever the user visits the /blog route --&gt;
            &lt;template&gt;
                &lt;div&gt;
                    &lt;h1&gt;Search for BlogPosts ....&lt;/h1&gt;
                &lt;/div&gt;
            &lt;/template&gt;
        </code4g4s>
        <code4g4s file="src/pages/blog/blog.nijor" n-scope="ChYwr0ZdR7m">
            &lt;template specs=[title]&gt; &lt;!-- Receiving the parameterised route by array destructuring in specs --&gt;
                &lt;div&gt;
                    &lt;h1&gt;{title}&lt;/h1&gt;
                    &lt;!-- 
                        If the user visits /blog/What-is-Nijor, &lt;h1&gt;{title}&lt;/h1&gt; will become &lt;h1&gt;What-is-Nijor&lt;/h1&gt;
                        If the user visits /blog/XYX, &lt;h1&gt;{title}&lt;/h1&gt; will become &lt;h1&gt;XYX&lt;/h1&gt;
                    --&gt;
                &lt;/div&gt;
            &lt;/template&gt;
        </code4g4s>
    </section4g4s>
    <section4g4s title="preRender method" n-scope="ChYwr0ZdR7m">
        <code4g4s lang="js" n-scope="ChYwr0ZdR7m">
            import 'nijor';
            import Router from 'nijor/router';
            const router = new Router('#n-routes');

            router.preRender(()=&gt;DoSomething());
            // function passed to the preRender function runs before every page is rendered on route change.
            // router.preRender((urlParameter)=&gt;DoSomething(urlParameter)); The urlParameter contains the url paramters of a parameterized route.
        </code4g4s>
    </section4g4s>
    <section4g4s title="postRender method" n-scope="ChYwr0ZdR7m">
        <code4g4s lang="js" n-scope="ChYwr0ZdR7m">
            import 'nijor';
            import Router from 'nijor/router';
            const router = new Router('#n-routes');

            function DoSomething(){
                window.nijor.emitEvent('routechange');
                // Fire the routechange event.
                // Whenever someone navigates to another route, the 'routechange' custom event will get fired.
            }

            router.postRender(()=&gt;DoSomething());
            // function passed to the preRender function runs after every page is rendered on route change.
            // router.postRender((urlParameter)=&gt;DoSomething(urlParameter)); The urlParameter contains the url paramters of a parameterized route.
        </code4g4s>
    </section4g4s>
`;
      }, async function() {
        n3.init("section4g4s"), await n3.run(), i3.init("highlight4g4s"), await i3.run(), n4.init("code4g4s"), await n4.run();
      });
    }
  });

  // assets/modules/structure-8695dd41.js
  var structure_8695dd41_exports = {};
  __export(structure_8695dd41_exports, {
    default: () => o5
  });
  var o5;
  var init_structure_8695dd41 = __esm({
    "assets/modules/structure-8695dd41.js"() {
      init_highlight_9f5512bf();
      init_codeblock_5d174ceb();
      o5 = new window.nijor.component(async function() {
        return `<div style="display: none;" n-scope="Hg59QxO4LChdY"><codedbk n-scope="Hg59QxO4LChdY"></codedbk></div>
    <sectiondbk title="Structure of a Nijor project" n-scope="Hg59QxO4LChdY">
        When you use the <highlightdbk n-scope="Hg59QxO4LChdY">nijor create {appname}</highlightdbk> command, it creates a new directory named after your project. This page is intended to help you understand the use of each of these directories and files.
    </sectiondbk>
    <sectiondbk title="app directory" n-scope="Hg59QxO4LChdY">
        The <highlightdbk n-scope="Hg59QxO4LChdY">app</highlightdbk> directory contains the <highlightdbk n-scope="Hg59QxO4LChdY">index.html</highlightdbk> file for our website. It also contains another directory called <highlightdbk n-scope="Hg59QxO4LChdY">assets</highlightdbk> which stores our css file and it also contains another directory called <highlightdbk n-scope="Hg59QxO4LChdY">modules</highlightdbk> which contains the js files produced by the compiler.
    </sectiondbk>
    <sectiondbk title="src directory" n-scope="Hg59QxO4LChdY">
        The <highlightdbk n-scope="Hg59QxO4LChdY">src</highlightdbk> directory is our main working directory. We generally don't need to touch the <highlightdbk n-scope="Hg59QxO4LChdY">app</highlightdbk> directory.
    </sectiondbk>
    <sectiondbk title="src/components directory" n-scope="Hg59QxO4LChdY">
        This directory stores all the reusable Nijor components.
    </sectiondbk>
    <sectiondbk title="src/pages directory" n-scope="Hg59QxO4LChdY">
        This directory stores all the Nijor components which are to be used as <highlightdbk n-scope="Hg59QxO4LChdY">pages</highlightdbk> during routing. Pages are just normal Nijor components which are used for routing, they behave normally as other Nijor components.
    </sectiondbk>
    <sectiondbk title="src/styles directory" n-scope="Hg59QxO4LChdY">
        This directory stores our global stylesheets.
    </sectiondbk>
    <sectiondbk title="src/images directory" n-scope="Hg59QxO4LChdY">
        This directory stores our images which can be imported into a Nijor component just like a Javascript file using ES6 imports.
    </sectiondbk>
    <sectiondbk title="src/App.js file" n-scope="Hg59QxO4LChdY">
        This file is the main entrypoint of our Nijor project.
    </sectiondbk>
    <sectiondbk title="src/App.nijor file" n-scope="Hg59QxO4LChdY">
        This file is like the index.html for Nijor. We still need to use the index.html file sometimes though. The template tag of App.nijor is like the body of the index.html file.
    </sectiondbk>
    <sectiondbk title="Nijor Configuration File" n-scope="Hg59QxO4LChdY">
        The <highlightdbk n-scope="Hg59QxO4LChdY">nijor.config.json</highlightdbk> is a file which contains certain configurations for a Nijor project.<br n-scope="Hg59QxO4LChdY">
        If you try to run the <highlightdbk n-scope="Hg59QxO4LChdY">nijor build</highlightdbk>,<highlightdbk n-scope="Hg59QxO4LChdY">nijor compile</highlightdbk>,<highlightdbk n-scope="Hg59QxO4LChdY">nijor serve</highlightdbk> commands inside a Nijor project without this file, then the <highlightdbk n-scope="Hg59QxO4LChdY">nijor-compiler</highlightdbk> won't work and will throw errors.
    </sectiondbk>
`;
      }, async function() {
        n3.init("sectiondbk"), await n3.run(), i3.init("highlightdbk"), await i3.run(), n4.init("codedbk"), await n4.run();
      });
    }
  });

  // assets/modules/How-Nijor-Works-19323365.js
  var How_Nijor_Works_19323365_exports = {};
  __export(How_Nijor_Works_19323365_exports, {
    default: () => o6
  });
  var o6;
  var init_How_Nijor_Works_19323365 = __esm({
    "assets/modules/How-Nijor-Works-19323365.js"() {
      init_highlight_9f5512bf();
      o6 = new window.nijor.component(async function() {
        return `<div class="container" n-scope="Awnnlx9NoRNySdn">
        <sectionmkf title="How Nijor Works ?" n-scope="Awnnlx9NoRNySdn">
            Many of you might have thought that how Nijor compiler actually works behind the scene ? Well, in this article I'd tell you exactly that ! <br n-scope="Awnnlx9NoRNySdn">
            The Nijor compiler uses <highlightmkf link="https://rollupjs.org" n-scope="Awnnlx9NoRNySdn">RollupJS</highlightmkf> with <highlightmkf link="https://github.com/nijorjs/nijor-rollup-plugin" n-scope="Awnnlx9NoRNySdn">this plugin</highlightmkf> to first compile the <highlightmkf n-scope="Awnnlx9NoRNySdn">*.nijor</highlightmkf> code to <highlightmkf n-scope="Awnnlx9NoRNySdn">*.js</highlightmkf> code and bundle the components into the pages. All the functional attributes get compiled to normal js code. 
        </sectionmkf>
    </div>
`;
      }, async function() {
        n3.init("sectionmkf"), await n3.run(), i3.init("highlightmkf"), await i3.run();
      });
    }
  });

  // assets/modules/How-Scoped-CSS-Works-c101c076.js
  var How_Scoped_CSS_Works_c101c076_exports = {};
  __export(How_Scoped_CSS_Works_c101c076_exports, {
    default: () => n11
  });
  var n11;
  var init_How_Scoped_CSS_Works_c101c076 = __esm({
    "assets/modules/How-Scoped-CSS-Works-c101c076.js"() {
      init_highlight_9f5512bf();
      n11 = new window.nijor.component(async function() {
        return `<div class="container" n-scope="Yyvt9OAYDCdST390">
        <sectionodvj title="How Scoped CSS Works ?" n-scope="Yyvt9OAYDCdST390">
            The CSS code you write inside a component is scoped.
            While compiling <highlightodvj n-scope="Yyvt9OAYDCdST390">.nijor</highlightodvj> files, the compiler adds the attribute "n-scope" to each and every HTML element inside the template tag and also modifies the CSS code inside the style tag such that the styles only apply to the elements of that particular component. The value of the 'n-scope' attribute is same for all the HTML elements inside a particular Nijor component. <br n-scope="Yyvt9OAYDCdST390">
            
            For example :

            <codeodvj n-scope="Yyvt9OAYDCdST390">
                &lt;template&gt;
                    &lt;div&gt;
                        &lt;h1&gt;Hello World&lt;/h1&gt;
                    &lt;/div&gt;
                &lt;/template&gt;
                &lt;style&gt;
                    div{
                       dispaly : flex; 
                    }
                    h1{
                        color : #0066f6;
                     }
                &lt;/style&gt;
            </codeodvj>
            The above code becomes somewhat like the code below.
            <codeodvj n-scope="Yyvt9OAYDCdST390">
                &lt;template&gt;
                    &lt;div n-scope="nsjiue73j"&gt;
                        &lt;h1 n-scope="nsjiue73j"&gt;Hello World&lt;/h1&gt;
                    &lt;/div&gt;
                &lt;/template&gt;
                &lt;style&gt;
                    div[n-scope="nsjiue73j"]{
                       dispaly : flex; 
                    }
                    h1[n-scope="nsjiue73j"]{
                        color : #0066f6;
                     }
                &lt;/style&gt;
            </codeodvj>
        </sectionodvj>
    </div>
`;
      }, async function() {
        const { default: n14 } = await Promise.resolve().then(() => (init_codeblock_5d174ceb(), codeblock_5d174ceb_exports));
        n3.init("sectionodvj"), await n3.run(), i3.init("highlightodvj"), await i3.run(), n14.init("codeodvj"), await n14.run();
      });
    }
  });

  // assets/modules/enei-30a7c392.js
  var enei_30a7c392_exports = {};
  __export(enei_30a7c392_exports, {
    default: () => e3
  });
  var t, e3;
  var init_enei_30a7c392 = __esm({
    "assets/modules/enei-30a7c392.js"() {
      t = /* @__PURE__ */ new Map();
      t.set("todolist", "http://localhost:3500/assets/");
      e3 = new window.nijor.component(async function([e5]) {
        return `<page fn="${async function(e6) {
          const n14 = document.createElement("link");
          n14.setAttribute("rel", "stylesheet"), n14.setAttribute("href", t.get(e6) + "style.css"), document.head.appendChild(n14);
          let { Page: s2 } = await import(t.get(e6) + "modules/App.js");
          s2.init("page"), await s2.run();
        }(e5)}" n-scope="YUQszScEFkT1oq"></page>
`;
      }, async function([t3]) {
      });
    }
  });

  // assets/modules/index-3a0a92c9.js
  var index_3a0a92c9_exports = {};
  __export(index_3a0a92c9_exports, {
    default: () => o7
  });
  var o7;
  var init_index_3a0a92c9 = __esm({
    "assets/modules/index-3a0a92c9.js"() {
      init_highlight_9f5512bf();
      o7 = new window.nijor.component(async function() {
        return `<div class="container" n-scope="DQDyVykorKnN5">
        <sectionttw title="Namaskar \u{1F64F}" n-scope="DQDyVykorKnN5">
        Hi ! I'm Debarshi Pathak (alias <highlightttw link="https://twitter.com/DebAxom" n-scope="DQDyVykorKnN5">DebAxom</highlightttw>), the creator of Nijor. <br n-scope="DQDyVykorKnN5">
        I am the Assamese teenager who created Nijor in 2020 at the age of 14 (was about to turn 15). <br n-scope="DQDyVykorKnN5"><br n-scope="DQDyVykorKnN5">

        I created Nijor because I didn't want to learn React or Angular as I felt that learning those frameworks is like kinda learning a new language completely. So I decided to create my own framework, Nijor. <br n-scope="DQDyVykorKnN5">
        The word <highlightttw n-scope="DQDyVykorKnN5">Nijor (\u09A8\u09BF\u099C\u09F0)</highlightttw> means "My" or "Mine" in the Assamese language. I chose the word "Nijor" for my framework because I could create "my own" custom HTML tags with attributes. I've been using NijorJS since 2020 and I decided to write the <highlightttw link="/docs" n-scope="DQDyVykorKnN5">docs</highlightttw> in 2023. <br n-scope="DQDyVykorKnN5"><br n-scope="DQDyVykorKnN5">
        
        Nijor has been inspired by Vue and Svelte and it's influence can be felt. The idea of <highlightttw n-scope="DQDyVykorKnN5">*.nijor</highlightttw> files came from <highlightttw n-scope="DQDyVykorKnN5">*.vue</highlightttw> files and the idea of a compiler came from Svelte. I even tried to take some inspiration from their source code, but I couldn't understand their code. So, I had to implement all the features of this framework from scratch (I did steal some code from StalkOverflow though \u{1F601}). <br n-scope="DQDyVykorKnN5"><br n-scope="DQDyVykorKnN5">

        My core philosophy behind Nijor is simplicity : The framework should have a very flat learning curve. Due to this philosophy, <highlightttw n-scope="DQDyVykorKnN5">*.nijor</highlightttw> files are more closely related to <highlightttw n-scope="DQDyVykorKnN5">*.html</highlightttw> files than <highlightttw n-scope="DQDyVykorKnN5">*.js</highlightttw> files as it's easier to write JS inside HTML rather than the other way round. <br n-scope="DQDyVykorKnN5"><br n-scope="DQDyVykorKnN5">
        
        Nijor is not a perfect framework ; just like everything in this world, Nijor too has it's flaws and it might be confusing at times. <br n-scope="DQDyVykorKnN5"><br n-scope="DQDyVykorKnN5">
        
        At last, I'd like to thank the Svelte creator Rich-Harris for creating Rollup JS as without Rollup it'd have been impossible for me to create the Nijor compiler.
        </sectionttw>
    </div>
`;
      }, async function() {
        n3.init("sectionttw"), await n3.run(), i3.init("highlightttw"), await i3.run();
      });
    }
  });

  // assets/modules/virtual-dom-06ee1463.js
  var virtual_dom_06ee1463_exports = {};
  __export(virtual_dom_06ee1463_exports, {
    default: () => i7
  });
  var i7;
  var init_virtual_dom_06ee1463 = __esm({
    "assets/modules/virtual-dom-06ee1463.js"() {
      init_highlight_9f5512bf();
      i7 = new window.nijor.component(async function() {
        return `<div class="container" n-scope="lg5qy8UHQVItDC">
        <sectionhi02g title="Does Nijor have a Virtial DOM ?" n-scope="lg5qy8UHQVItDC">
            No, Nijor doesn't have any Virtual DOM as it's simply overrated ! At the end of the day, the Virtual DOM also communicated with the real DOM. So, I don't really understand how can it be faster than the real DOM ? <br n-scope="lg5qy8UHQVItDC">
            Nijor uses very savage rendering techniques ; it doesn't even create the HTML elements using JS code, it just dumps the code you wrote inside a Nijor JS file directly into the parent contaier using the <highlighthi02g n-scope="lg5qy8UHQVItDC">.innerHTML</highlighthi02g> method.
        </sectionhi02g>
    </div>
`;
      }, async function() {
        n3.init("sectionhi02g"), await n3.run(), i3.init("highlighthi02g"), await i3.run();
      });
    }
  });

  // assets/modules/index-4c1106c1.js
  var index_4c1106c1_exports = {};
  __export(index_4c1106c1_exports, {
    default: () => p
  });
  var p;
  var init_index_4c1106c1 = __esm({
    "assets/modules/index-4c1106c1.js"() {
      init_app();
      p = new window.nijor.component(async function() {
        return `<div class="main" n-scope="cyylEAkRVKtjv3ppPQ99">
        <img src="${o}" n-scope="cyylEAkRVKtjv3ppPQ99">
        <p n-scope="cyylEAkRVKtjv3ppPQ99">
            <span style="font-size: 35px; font-weight: bold;" n-scope="cyylEAkRVKtjv3ppPQ99">Nijor</span>
            <span class="tagline" n-scope="cyylEAkRVKtjv3ppPQ99"> : A modern and practical web framework !</span>
        </p>
        <a n-scope="cyylEAkRVKtjv3ppPQ99" onclick="return window.nijor.redirect(this.href)" href="/docs"><button n-scope="cyylEAkRVKtjv3ppPQ99">Get Started</button></a>
    </div>
`;
      }, async function() {
      });
    }
  });

  // assets/modules/internet-error-0476dc11.js
  var internet_error_0476dc11_exports = {};
  __export(internet_error_0476dc11_exports, {
    default: () => n12
  });
  var n12;
  var init_internet_error_0476dc11 = __esm({
    "assets/modules/internet-error-0476dc11.js"() {
      n12 = new window.nijor.component(async function() {
        return `<div n-scope="iTTaJVNdEwZHF7">
        <h1 n-scope="iTTaJVNdEwZHF7">Network Error !</h1>
        <p n-scope="iTTaJVNdEwZHF7">It seems that you aren't connected to the internet, kindly check your net connection.</p>
    </div>
`;
      }, async function() {
      });
    }
  });

  // assets/modules/app.js
  async function t2(e5) {
    if ("/" === e5)
      return;
    let o8 = e5.split("/");
    return "404" === o8[o8.length - 1] && o8.pop(), o8.pop(), o8.push("404"), (e5 = o8.join("/")).endsWith("/") && "/" != e5 && (e5 = e5.substring(0, e5.length - 1)), window.nijor.routes.has(e5) ? await window.nijor.routes.get(e5)() : await t2(e5);
  }
  function n13() {
    document.body.style.transition = "0.5s";
    let e5 = window.nijor.getTheme();
    "auto" !== e5 && null !== e5 || (e5 = window.nijor.getColorScheme()), "dark" === e5 && window.nijor.setTheme("light"), "light" === e5 && window.nijor.setTheme("dark");
  }
  var e4, o, i8, r2, s, a;
  var init_app = __esm({
    "assets/modules/app.js"() {
      e4 = new Proxy({}, { set: (e5, t3, o8) => (e5[t3] = o8, document.querySelectorAll(`nirev[var="${t3}"]`).forEach((e6) => {
        e6.innerHTML = o8;
      }), true) });
      window.nijor = { component: class {
        constructor(e5, t3) {
          this.template = e5, this.cb = t3;
        }
        init(e5) {
          this.name = e5;
        }
        run = async function(e5) {
          let t3 = new RegExp(`(<${this.name}[^>]+>|<${this.name}>)`), o8 = document.getElementsByTagName(this.name)[0];
          if (0 === document.getElementsByTagName(this.name).length)
            return;
          let n14 = function(e6) {
            let t4 = [], o9 = [];
            for (let n16, i10 = 0, r3 = e6.attributes, s2 = r3.length; i10 < s2; i10++)
              n16 = r3[i10], t4.push(n16.nodeName), o9.push(n16.nodeValue);
            t4.push("_text_"), o9.push(e6.innerHTML);
            let n15 = o9, i9 = {};
            return t4.forEach((e7, t5) => i9[e7] = n15[t5]), i9;
          }(o8);
          null != e5 && (n14 = e5);
          try {
            o8.innerHTML = "";
          } catch (e6) {
          }
          try {
            let e6 = await this.template(n14);
            o8.parentElement.innerHTML = o8.parentElement.innerHTML.replace(t3, e6), await this.cb(n14), await this.run();
          } catch (e6) {
            let o9 = await this.template(n14);
            document.body.innerHTML = document.body.innerHTML.replace(t3, o9), await this.cb(n14), await this.run();
          }
        };
      }, reactiveVars: e4 }, window.nijor.hashRouterActivated = false, window.nijorfunc = {}, window.location.query = function() {
        let e5 = {}, t3 = document.createElement("a");
        t3.href = window.location.href;
        let o8 = t3.search.substring(1).split("&");
        for (let t4 = 0; t4 < o8.length; t4++) {
          let n14 = o8[t4].split("=");
          e5[n14[0]] = decodeURIComponent(n14[1]);
        }
        return e5;
      }, window.nijor.emitEvent = async function(e5, t3 = {}) {
        document.querySelectorAll("[on" + e5 + "]").forEach((o8) => {
          null === o8.getAttribute("id") && o8.setAttribute("id", "id_" + function(e6, t4) {
            let o9 = Math.floor(Math.random() * (t4 - e6 + 1) + e6), n15 = "", i10 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r4 = i10.length;
            for (let e7 = 0; e7 < o9; e7++)
              n15 += i10.charAt(Math.floor(Math.random() * r4));
            return n15;
          }(4, 6));
          let n14 = o8.getAttribute("on" + e5), i9 = n14.split("(")[0], r3 = n14.match(/\((.*)\)/)[1];
          r3 = r3.replace("$data", JSON.stringify(t3)), r3 = r3.replace("this", "_this"), new Function(`
        let _this = document.getElementById('${o8.id}');
        ${i9}(${r3});
        `)();
        });
      }, window.nijor.reload = async function(e5) {
        await window.nijor.emitEvent("reload" + e5, null);
      }, window.nijor.routes = /* @__PURE__ */ new Map(), window.nijor.routes.set("/", () => {
      }), window.nijor.slots = /* @__PURE__ */ new Map(), window.nijor.slots.set("/", () => {
      }), window.nijor.redirect = function(e5) {
        window.nijor.previousRoute = window.location.pathname;
        try {
          history.pushState(null, null, e5), history.pushState(null, null, e5), history.back();
        } catch (t3) {
          window.location.href = e5;
        }
        return false;
      }, window.addEventListener("popstate", async (e5) => {
        let t3 = e5.target.location.pathname;
        await window.nijor.renderRoute(t3), window.nijor.previousRoute = t3, window.nijor.emitEvent("route", window.location.pathname);
      }), window.nijor.setRoute = function(e5, t3, o8) {
        window.nijor.routes.set(e5, async (e6) => {
          try {
            let { default: n14 } = await t3(), i9 = document.getElementById(`routes-slot-${o8}`);
            i9 ? i9.innerHTML = "<app></app>" : (await window.nijor.slots.get(`${o8}`)(), document.getElementById(`routes-slot-${o8}`).innerHTML = "<app></app>"), n14.init("app"), await n14.run(e6);
          } catch (e7) {
          }
        });
      }, window.nijor.addSlot = function(e5, t3) {
        window.nijor.slots.set(e5, async () => {
          try {
            let { default: e6 } = await t3(), o8 = document.getElementById("routes-slot-/");
            o8 && (o8.innerHTML = "<app></app>"), e6.init("app"), await e6.run();
          } catch (e6) {
            console.log(e6);
          }
        });
      }, window.nijor.renderRoute = async function(e5) {
        return e5.endsWith("/") && "/" != e5 && (e5 = e5.substring(0, e5.length - 1)), e5.endsWith(".html") && (e5 = e5.slice(0, -5), history.replaceState(null, null, e5)), window.nijor.routes.has(e5) ? await window.nijor.routes.get(e5)() : await async function(e6, o8) {
          for (const [t3, n14] of o8.entries())
            if (t3 instanceof RegExp) {
              const o9 = t3.exec(e6);
              if (!o9)
                continue;
              let i9 = o9.slice(1, o9.length);
              if (i9[0].indexOf("/") > -1)
                continue;
              return await n14(i9);
            }
          await t2(e6);
        }(e5, window.nijor.routes);
      }, window.nijor.renderSlots = async function(e5) {
        if (e5.endsWith("/") && "/" != e5 && (e5 = e5.substring(0, e5.length - 1)), window.nijor.slots.has(e5))
          return await window.nijor.slots.get(e5)();
      }, window.nijor.RenderTheme = function() {
        if (null === window.localStorage.getItem("theme") || "auto" === window.localStorage.getItem("theme")) {
          window.matchMedia("(prefers-color-scheme: dark)").matches && document.body.classList.toggle("dark-mode");
        } else {
          if ("dark" === window.localStorage.getItem("theme"))
            return document.body.classList.add("dark-mode"), void window.localStorage.setItem("theme", "dark");
          document.body.classList.remove("light-mode"), window.localStorage.setItem("theme", "light");
        }
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
          if (null === window.localStorage.getItem("theme") || "auto" === window.localStorage.getItem("theme")) {
            window.matchMedia("(prefers-color-scheme: dark)").matches ? document.body.classList.toggle("dark-mode") : document.body.classList.remove("dark-mode");
          }
        });
      };
      window.nijor.setTheme = function(e5) {
        if ("light" === e5)
          return document.body.classList.remove("dark-mode"), void window.localStorage.setItem("theme", "light");
        if ("dark" === e5)
          return document.body.classList.add("dark-mode"), void window.localStorage.setItem("theme", "dark");
        if ("auto" === e5) {
          window.localStorage.setItem("theme", "auto"), window.matchMedia("(prefers-color-scheme: dark)").matches ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");
        }
      }, window.nijor.getTheme = () => window.localStorage.getItem("theme") || "auto", window.nijor.getColorScheme = () => true === window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      o = "data:image/svg+xml,%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 20010904//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='150px' height='150px' viewBox='0 0 1500 1500' preserveAspectRatio='xMidYMid meet'%3e%3cg id='layer101' fill='%2300a2e8' stroke='none'%3e %3cpath d='M150 1397 c0 -8 -5 -17 -11 -19 -7 -2 21 -200 80 -567 50 -310 91 -568 91 -572 0 -5 6 -9 12 -9 7 0 178 165 380 367 l368 368 1 -360 1 -360 99 -94 c55 -52 102 -91 105 -88 10 10 -157 1131 -169 1139 -7 4 -16 8 -22 8 -5 0 -175 -165 -377 -367 l-368 -368 -1 380 -1 380 -94 89 c-54 51 -94 82 -94 73z'/%3e %3c/g%3e%3cg id='layer102' fill='%230ec4f8' stroke='none'%3e %3cpath d='M703 838 l-363 -363 0 -120 0 -120 365 365 366 366 -3 117 -3 117 -362 -362z'/%3e %3c/g%3e%3c/svg%3e";
      i8 = { "/docs": "docs", "/examples": "examples", "/faq": "faq" };
      window.nijorfunc._si4n2OpenCloseMenu = function(e5) {
        let t3 = document.getElementById("docs-sidenav-mobile");
        if ("menu" === e5.innerHTML)
          return t3.style.width = "75%", void (e5.innerHTML = "close");
        t3.style.width = "0%", e5.innerHTML = "menu";
      }, window.nijorfunc._si4n2ChangeRoute = function(e5, t3) {
        e5.style.display = "flex", e5.querySelectorAll(".nav-link").forEach((e6) => {
          e6.style.color = "white", e6.getAttribute("tab") === i8["/" + t3.split("/")[1]] && (e6.style.color = "#07b0ff");
        }), screen.width < 600 && ("/docs" != window.location.pathname ? (document.getElementById("header-nijor-logo").style.display = "block", document.getElementById("header-nijor-menu").style.display = "none") : (document.getElementById("header-nijor-logo").style.display = "none", document.getElementById("header-nijor-menu").style.display = "block", document.getElementById("header-nijor-menu").innerHTML = "menu"));
      }, window.nijorfunc._si4n2ChangeTheme = n13, window.nijorfunc._si4n2ChangeTheme = n13;
      r2 = new window.nijor.component(async function() {
        return `<div class="container" n-scope="lM9YK7JZ6xL2RwutFAGR">
        <span class="material-symbols-sharp menu" id="header-nijor-menu" n-scope="lM9YK7JZ6xL2RwutFAGR" onclick="window.nijorfunc._si4n2OpenCloseMenu(this)">menu</span>
        <a class="logo" id="header-nijor-logo" n-scope="lM9YK7JZ6xL2RwutFAGR" onclick="return window.nijor.redirect(this.href)" href="/"><img src="${o}" n-scope="lM9YK7JZ6xL2RwutFAGR"></a>
        <div class="nav-bar" n-scope="lM9YK7JZ6xL2RwutFAGR" onroute="window.nijorfunc._si4n2ChangeRoute(this,$data)">
            <a tab="docs" class="nav-link" n-scope="lM9YK7JZ6xL2RwutFAGR" onclick="return window.nijor.redirect(this.href)" href="/docs">Docs</a>
            <a href="https://github.com/nijorjs" class="nav-link" n-scope="lM9YK7JZ6xL2RwutFAGR">Github</a>
            <a tab="faq" class="nav-link" n-scope="lM9YK7JZ6xL2RwutFAGR" onclick="return window.nijor.redirect(this.href)" href="/faq">FAQ</a>
            <button class="material-symbols-sharp theme-dark-btn" n-scope="lM9YK7JZ6xL2RwutFAGR" onclick="window.nijorfunc._si4n2ChangeTheme()">dark_mode</button>
            <button class="material-symbols-sharp theme-light-btn" n-scope="lM9YK7JZ6xL2RwutFAGR" onclick="window.nijorfunc._si4n2ChangeTheme()">light_mode</button>
        </div>
    </div>
`;
      }, async function() {
      });
      s = new window.nijor.component(async function() {
        return '<headerx1y4v n-scope="faaJte"></headerx1y4v>\n    <div style="margin-top: 5rem;" id="routes-slot-/" n-scope="faaJte"></div>\n';
      }, async function() {
        r2.init("headerx1y4v"), await r2.run();
      });
      window.nijor.addSlot("/docs", () => Promise.resolve().then(() => (init_nijor_a147a589(), nijor_a147a589_exports))), window.nijor.addSlot("/faq", () => Promise.resolve().then(() => (init_nijor_dca864d9(), nijor_dca864d9_exports))), window.nijor.setRoute("/404", () => Promise.resolve().then(() => (init_e28(), e28_exports)), "/"), window.nijor.setRoute("/docs/code-splitting", () => Promise.resolve().then(() => (init_code_splitting_7dcccfbe(), code_splitting_7dcccfbe_exports)), "/docs"), window.nijor.setRoute("/docs/components", () => Promise.resolve().then(() => (init_components_3083db31(), components_3083db31_exports)), "/docs"), window.nijor.setRoute("/docs/custom-events", () => Promise.resolve().then(() => (init_custom_events_a619f059(), custom_events_a619f059_exports)), "/docs"), window.nijor.setRoute("/docs/dark-mode", () => Promise.resolve().then(() => (init_dark_mode_f92a893b(), dark_mode_f92a893b_exports)), "/docs"), window.nijor.setRoute("/docs/examples", () => Promise.resolve().then(() => (init_examples_2e80c7e8(), examples_2e80c7e8_exports)), "/docs"), window.nijor.setRoute("/docs/functional-attributes", () => Promise.resolve().then(() => (init_functional_attributes_f5a3f822(), functional_attributes_f5a3f822_exports)), "/docs"), window.nijor.setRoute("/docs", () => Promise.resolve().then(() => (init_index_5d98c2f4(), index_5d98c2f4_exports)), "/docs"), window.nijor.setRoute("/docs/installation", () => Promise.resolve().then(() => (init_installation_b5a243be(), installation_b5a243be_exports)), "/docs"), window.nijor.setRoute("/docs/nijor-cli", () => Promise.resolve().then(() => (init_nijor_cli_0a9b645b(), nijor_cli_0a9b645b_exports)), "/docs"), window.nijor.setRoute("/docs/reactivity", () => Promise.resolve().then(() => (init_reactivity_0762431e(), reactivity_0762431e_exports)), "/docs"), window.nijor.setRoute("/docs/routing", () => Promise.resolve().then(() => (init_routing_a99d9a09(), routing_a99d9a09_exports)), "/docs"), window.nijor.setRoute("/docs/routing.old", () => Promise.resolve().then(() => (init_routing_old_5f25edd2(), routing_old_5f25edd2_exports)), "/docs"), window.nijor.setRoute("/docs/structure", () => Promise.resolve().then(() => (init_structure_8695dd41(), structure_8695dd41_exports)), "/docs"), window.nijor.setRoute("/faq/How-Nijor-Works", () => Promise.resolve().then(() => (init_How_Nijor_Works_19323365(), How_Nijor_Works_19323365_exports)), "/faq"), window.nijor.setRoute("/faq/How-Scoped-CSS-Works", () => Promise.resolve().then(() => (init_How_Scoped_CSS_Works_c101c076(), How_Scoped_CSS_Works_c101c076_exports)), "/faq"), window.nijor.setRoute("/faq/enei", () => Promise.resolve().then(() => (init_enei_30a7c392(), enei_30a7c392_exports)), "/faq"), window.nijor.setRoute("/faq", () => Promise.resolve().then(() => (init_index_3a0a92c9(), index_3a0a92c9_exports)), "/faq"), window.nijor.setRoute("/faq/virtual-dom", () => Promise.resolve().then(() => (init_virtual_dom_06ee1463(), virtual_dom_06ee1463_exports)), "/faq"), window.nijor.setRoute("/", () => Promise.resolve().then(() => (init_index_4c1106c1(), index_4c1106c1_exports)), "/"), window.nijor.setRoute("/internet-error", () => Promise.resolve().then(() => (init_internet_error_0476dc11(), internet_error_0476dc11_exports)), "/"), s.init("app"), s.run();
      a = window.location.pathname;
      window.nijor.renderRoute(a), setTimeout(() => window.nijor.emitEvent("route", window.location.pathname), 1);
    }
  });
  init_app();
})();
