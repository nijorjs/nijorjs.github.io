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

  // assets/modules/.nijor-73f734c6.js
  var nijor_73f734c6_exports = {};
  __export(nijor_73f734c6_exports, {
    default: () => s
  });
  function o(n13, o8) {
    n13.querySelectorAll(".nav-link-docs").forEach((n14) => {
      n14.style.color = "white", n14.getAttribute("href") === o8 && (n14.style.color = "#07b0ff");
    });
  }
  var i, c, e, s;
  var init_nijor_73f734c6 = __esm({
    "assets/modules/.nijor-73f734c6.js"() {
      init_app();
      window.nijorfunc._etChangeRoute = o, window.nijorfunc._etChangeRoute = o;
      i = new window.nijor.component(async function() {
        return '<ul n-scope="Rb8cEokbzq96" onnavigate="window.nijorfunc._etChangeRoute(this)" onroute="window.nijorfunc._etChangeRoute(this,$data)">\n        <li n-scope="Rb8cEokbzq96"><a class="nav-link-docs" n-scope="Rb8cEokbzq96" onclick="return window.nijor.redirect(this.href)" href="/docs">Introduction</a></li>\n        <li n-scope="Rb8cEokbzq96"><a class="nav-link-docs" n-scope="Rb8cEokbzq96" onclick="return window.nijor.redirect(this.href)" href="/docs/installation">Installation</a></li>\n        <li n-scope="Rb8cEokbzq96"><a class="nav-link-docs" n-scope="Rb8cEokbzq96" onclick="return window.nijor.redirect(this.href)" href="/docs/nijor-cli">Nijor-CLI</a></li>\n        <li n-scope="Rb8cEokbzq96"><a class="nav-link-docs" n-scope="Rb8cEokbzq96" onclick="return window.nijor.redirect(this.href)" href="/docs/structure">Project Structure</a></li>\n        <li n-scope="Rb8cEokbzq96"><a class="nav-link-docs" n-scope="Rb8cEokbzq96" onclick="return window.nijor.redirect(this.href)" href="/docs/components">Components</a></li>\n        <li n-scope="Rb8cEokbzq96"><a class="nav-link-docs" n-scope="Rb8cEokbzq96" onclick="return window.nijor.redirect(this.href)" href="/docs/routing">Routing</a></li>\n        <li n-scope="Rb8cEokbzq96"><a class="nav-link-docs" n-scope="Rb8cEokbzq96" onclick="return window.nijor.redirect(this.href)" href="/docs/custom-events">Custom Events</a></li>\n        <li n-scope="Rb8cEokbzq96"><a class="nav-link-docs" n-scope="Rb8cEokbzq96" onclick="return window.nijor.redirect(this.href)" href="/docs/functional-attributes">Functional Attributes</a></li>\n        <li n-scope="Rb8cEokbzq96"><a class="nav-link-docs" n-scope="Rb8cEokbzq96" onclick="return window.nijor.redirect(this.href)" href="/docs/reactivity">Reactivity</a></li>\n        <li n-scope="Rb8cEokbzq96"><a class="nav-link-docs" n-scope="Rb8cEokbzq96" onclick="return window.nijor.redirect(this.href)" href="/docs/code-splitting">Code Splitting</a></li>\n        <li n-scope="Rb8cEokbzq96"><a class="nav-link-docs" n-scope="Rb8cEokbzq96" onclick="return window.nijor.redirect(this.href)" href="/docs/dark-mode">Dark Mode</a></li>\n        <li n-scope="Rb8cEokbzq96"><a class="nav-link-docs" n-scope="Rb8cEokbzq96" onclick="return window.nijor.redirect(this.href)" href="/docs/examples">Examples</a></li>\n    </ul>\n';
      }, async function() {
      });
      c = new window.nijor.component(async function() {
        return '<div class="main" id="docs-sidenav" n-scope="12UCKP1UN">\n        <linksutmb n-scope="12UCKP1UN"></linksutmb>\n    </div>\n';
      }, async function() {
        i.init("linksutmb"), await i.run();
      });
      e = new window.nijor.component(async function() {
        return `<div class="main" id="docs-sidenav-mobile" n-scope="UDRWNZ8UL3d15S">
        <a class="branding" n-scope="UDRWNZ8UL3d15S" onclick="return window.nijor.redirect(this.href)" href="/"><img src="${t}" n-scope="UDRWNZ8UL3d15S"> Nijor</a>
        <linksyn5xn n-scope="UDRWNZ8UL3d15S"></linksyn5xn>
    </div>
`;
      }, async function() {
        i.init("linksyn5xn"), await i.run();
      });
      s = new window.nijor.component(async function() {
        return '<div class="container" n-scope="clhB1mtIxnfAa">\n        <sidenavnc n-scope="clhB1mtIxnfAa"></sidenavnc>\n        <mobilenavnc n-scope="clhB1mtIxnfAa"></mobilenavnc>\n        <div class="docs-div" id="routes-slot-/docs" n-scope="clhB1mtIxnfAa"></div>\n    </div>\n';
      }, async function() {
        c.init("sidenavnc"), await c.run(), e.init("mobilenavnc"), await e.run();
      });
    }
  });

  // assets/modules/.nijor-2f875b4d.js
  var nijor_2f875b4d_exports = {};
  __export(nijor_2f875b4d_exports, {
    default: () => e2
  });
  function n(n13, i8) {
    n13.querySelectorAll(".nav-link-faq").forEach((n14) => {
      n14.style.color = "white", n14.getAttribute("href") === i8 && (n14.style.color = "#07b0ff");
    });
  }
  var i2, o2, e2;
  var init_nijor_2f875b4d = __esm({
    "assets/modules/.nijor-2f875b4d.js"() {
      window.nijorfunc._q2951ChangeRoute = n, window.nijorfunc._q2951ChangeRoute = n;
      i2 = new window.nijor.component(async function() {
        return '<ul n-scope="bsRpwjMRppCSun" onnavigate="window.nijorfunc._q2951ChangeRoute(this)" onroute="window.nijorfunc._q2951ChangeRoute(this,$data)">\n        <li n-scope="bsRpwjMRppCSun"><a class="nav-link-faq" n-scope="bsRpwjMRppCSun" onclick="return window.nijor.redirect(this.href)" href="/faq">A Note from the Creator</a></li>\n        <li n-scope="bsRpwjMRppCSun"><a class="nav-link-faq" n-scope="bsRpwjMRppCSun" onclick="return window.nijor.redirect(this.href)" href="/faq/How-Nijor-Works">How Nijor Works ?</a></li>\n        <li n-scope="bsRpwjMRppCSun"><a class="nav-link-faq" n-scope="bsRpwjMRppCSun" onclick="return window.nijor.redirect(this.href)" href="/faq/virtual-dom">Does Nijor have a Virtial DOM ?</a></li>\n        <li n-scope="bsRpwjMRppCSun"><a class="nav-link-faq" n-scope="bsRpwjMRppCSun" onclick="return window.nijor.redirect(this.href)" href="/faq/How-Scoped-CSS-Works">How Scoped CSS Work ?</a></li>        \n    </ul>\n';
      }, async function() {
      });
      o2 = new window.nijor.component(async function() {
        return '<div class="main" id="blog-sidenav" n-scope="2HRV3ez2WGIUbM4f">\n        <linksippau n-scope="2HRV3ez2WGIUbM4f"></linksippau>\n    </div>\n';
      }, async function() {
        i2.init("linksippau"), await i2.run();
      });
      e2 = new window.nijor.component(async function() {
        return '<div class="container" n-scope="GY40TBAhjtg0V6wrEv4m">\n        <sidenav9s n-scope="GY40TBAhjtg0V6wrEv4m"></sidenav9s>\n        <div class="blog-div" id="routes-slot-/faq" n-scope="GY40TBAhjtg0V6wrEv4m"></div>\n    </div>\n';
      }, async function() {
        o2.init("sidenav9s"), await o2.run();
      });
    }
  });

  // assets/modules/404-c11cdd7e.js
  var c11cdd7e_exports = {};
  __export(c11cdd7e_exports, {
    default: () => n2
  });
  var n2;
  var init_c11cdd7e = __esm({
    "assets/modules/404-c11cdd7e.js"() {
      n2 = new window.nijor.component(async function() {
        return '<div n-scope="5VEnqQap4DP">\n        <h1 n-scope="5VEnqQap4DP">404 Not found!</h1>\n        <p n-scope="5VEnqQap4DP">It seems as if the page you are looking for is under construction or not found. <br n-scope="5VEnqQap4DP">\n        Please go to the <a n-scope="5VEnqQap4DP" onclick="return window.nijor.redirect(this.href)" href="/">Home</a> page.\n        </p>\n    </div>\n';
      }, async function() {
      });
    }
  });

  // assets/modules/highlight-440ab00d.js
  var n3, t2;
  var init_highlight_440ab00d = __esm({
    "assets/modules/highlight-440ab00d.js"() {
      n3 = new window.nijor.component(async function({ title: n13, _text_: t5 }) {
        return `<div class="section" n-scope="tNrO1JIVgwgSLDayofOl">
        <h1 n-scope="tNrO1JIVgwgSLDayofOl">${n13}</h1>
        <p n-scope="tNrO1JIVgwgSLDayofOl">${t5 || ""}</p>
        <div class="border" n-scope="tNrO1JIVgwgSLDayofOl"></div>
    </div>
`;
      }, async function({ title: n13, _text_: t5 }) {
      });
      window.nijorfunc._uwp05Route = function(n13) {
        if ("nolink" != n13) {
          if (n13.startsWith("https://"))
            return void window.open(n13);
          window.nijor.redirect(n13), window.nijor.emitEvent("navigate");
        }
      };
      t2 = new window.nijor.component(async function({ _text_: n13, link: t5 }) {
        return `<span class="highlight-text" n-scope="GTaGrB8" onclick="window.nijorfunc._uwp05Route('${t5 || "nolink"}')">${n13}</span>
`;
      }, async function({ _text_: n13, link: t5 }) {
      });
    }
  });

  // assets/modules/codeblock-d586b906.js
  var codeblock_d586b906_exports = {};
  __export(codeblock_d586b906_exports, {
    default: () => n4
  });
  var n4;
  var init_codeblock_d586b906 = __esm({
    "assets/modules/codeblock-d586b906.js"() {
      n4 = new window.nijor.component(async function({ _text_: n13, lang: e6, file: l }) {
        return `<pre n-scope="5iyssh">        <code class="language-${e6 || "html"}" n-scope="5iyssh">${function(n14) {
          return null == n14 ? "" : `File : ${n14} 
`;
        }(l)}${n13}</code>
    </pre>
`;
      }, async function({ _text_: n13, lang: e6, file: l }) {
        hljs.highlightAll();
      });
    }
  });

  // assets/modules/code-splitting-1dede25d.js
  var code_splitting_1dede25d_exports = {};
  __export(code_splitting_1dede25d_exports, {
    default: () => n5
  });
  var n5;
  var init_code_splitting_1dede25d = __esm({
    "assets/modules/code-splitting-1dede25d.js"() {
      init_highlight_440ab00d();
      init_codeblock_d586b906();
      n5 = new window.nijor.component(async function() {
        return `<div style="display:none;" n-scope="IJiYTANadTJ15HRuVF"><codehys n-scope="IJiYTANadTJ15HRuVF"></codehys></div>
    <sectionhys title="Code Splitting" n-scope="IJiYTANadTJ15HRuVF">
        The Nijor compiler automatically compiles and packages all <highlighthys n-scope="IJiYTANadTJ15HRuVF">*.nijor page</highlighthys> files into multiple Javascript files. But compiles the <highlighthys n-scope="IJiYTANadTJ15HRuVF">*.nijor component</highlighthys> files with the <highlighthys n-scope="IJiYTANadTJ15HRuVF">*.nijor page</highlighthys> itself.
        Although this is not an issue for most projects, it can cause problems with increased loading time, resulting in a bad user experience.
        To overcome this problem, Nijor includes a built-in feature called code-splitting.
        By code-splitting your application, you can selectively <highlighthys n-scope="IJiYTANadTJ15HRuVF">lazy-load</highlighthys> only the components that are currently required by the user, which can greatly enhance your app's performance.
        This approach does not reduce the overall amount of code in your app, but it does prevent loading of unnecessary code and reduces the amount of code needed during the initial load. All the pages in your app are lazy-loaded and there's no way to change it !
    </sectionhys>
    <sectionhys title="Lazy-loading a component" n-scope="IJiYTANadTJ15HRuVF">
        To lazy-load a component, just add the <highlighthys n-scope="IJiYTANadTJ15HRuVF">lazy</highlighthys> attribute after it.
        <codehys n-scope="IJiYTANadTJ15HRuVF">
            &lt;card1 n:imported="components/card.nijor"/&gt; &lt;!--Without Lazy Loading--&gt;
            &lt;card2 n:imported="components/card.nijor" lazy/&gt; &lt;!--With Lazy Loading--&gt;
        </codehys>
    </sectionhys>
`;
      }, async function() {
        n3.init("sectionhys"), await n3.run(), t2.init("highlighthys"), await t2.run(), n4.init("codehys"), await n4.run();
      });
    }
  });

  // assets/modules/components-3a91deb0.js
  var components_3a91deb0_exports = {};
  __export(components_3a91deb0_exports, {
    default: () => o3
  });
  var o3;
  var init_components_3a91deb0 = __esm({
    "assets/modules/components-3a91deb0.js"() {
      init_highlight_440ab00d();
      init_codeblock_d586b906();
      o3 = new window.nijor.component(async function() {
        return `<div style="display:none;" n-scope="uyHuC1pipBxgMt"><codeprcma n-scope="uyHuC1pipBxgMt"></codeprcma></div>
    <sectionprcma title="Components" n-scope="uyHuC1pipBxgMt">
        In Nijor projects, we don't write code in HTML files ; we write code in <highlightprcma n-scope="uyHuC1pipBxgMt">*.nijor</highlightprcma> files instead. Each <highlightprcma n-scope="uyHuC1pipBxgMt">*.nijor</highlightprcma> file is a component in a Nijor Project. <br n-scope="uyHuC1pipBxgMt">
        A Nijor Component is a capsule of HTML, CSS and Javascript code in a single file in which the HTML, CSS and JS are scoped which allows developers to name their CSS classes and Javascript functions anyway we like without worrying about messing up with the scopes of other components. <br n-scope="uyHuC1pipBxgMt">
        A Nijor Component can be used as a custom HTML tag (with custom attributes) by other Nijor Component. It can also be used as a Page for routing.
    </sectionprcma>
    <sectionprcma title="Structure of a Nijor Component" n-scope="uyHuC1pipBxgMt">
        <codeprcma n-scope="uyHuC1pipBxgMt">
            &lt;template&gt;
                &lt;!-- Your HTML goes here --&gt;
            &lt;/template&gt;
            &lt;style&gt;
                /* Your CSS goes Here */
            &lt;/style&gt;
            &lt;script&gt;
                // Your JS goes here
            &lt;/script&gt;
        </codeprcma>
        There are 3 types of script tag in a Nijor component. It is not neccessary to use all of them in a single project.
        <codeprcma n-scope="uyHuC1pipBxgMt">
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
        </codeprcma>
    </sectionprcma>
    <sectionprcma title="Specs Attribute" n-scope="uyHuC1pipBxgMt">
        <highlightprcma n-scope="uyHuC1pipBxgMt">specs</highlightprcma> is a special attribute available in the <highlightprcma n-scope="uyHuC1pipBxgMt">template</highlightprcma> tag . The specs attribute contains an object of all the custom attributes passed to the component from another component. <highlightprcma n-scope="uyHuC1pipBxgMt">_text_</highlightprcma> is a property in the specs object which returns the <highlightprcma n-scope="uyHuC1pipBxgMt">innerHTML</highlightprcma> of the component when imported by another component.
        <codeprcma n-scope="uyHuC1pipBxgMt">
            &lt;template specs={attr1,attr2}&gt;
                Attribute1 : {attr1}&lt;br&gt;
                Attribute2 : {attr2}&lt;br&gt;
            &lt;/template&gt;
            &lt;script&gt;
                console.log(attr1,attr2);
            &lt;/script&gt;
        </codeprcma>
        or
        <codeprcma n-scope="uyHuC1pipBxgMt">
            &lt;template specs=attrs&gt;
                Attribute1 : {attrs.attr1}&lt;br&gt;
                Attribute2 : {attrs.attr2}&lt;br&gt;
            &lt;/template&gt;
            &lt;script&gt;
                console.log(attrs.attr1,attrs.attr2);
            &lt;/script&gt;
        </codeprcma>
    </sectionprcma>
    <sectionprcma title="Template string" n-scope="uyHuC1pipBxgMt">
        Inside the template tag, you can use the value of a JS variable of the same component inside any HTML tag by enclosing the name of the variable by curly brackets.
        <codeprcma n-scope="uyHuC1pipBxgMt">
            &lt;template&gt;
                Hi! my name is {name}. &lt;br&gt;
                If you just want to just enclose some text within curly brackets, use \\(escape-sequence).
                Example :
                    \\{name} will just print {name} not Arun
            &lt;/template&gt;
            &lt;script&gt;
                let name = "Arun";
            &lt;/script&gt;
        </codeprcma>
    </sectionprcma>
    <sectionprcma title="Calling events" n-scope="uyHuC1pipBxgMt">
        In Nijor, instead of calling events like <highlightprcma n-scope="uyHuC1pipBxgMt">onclick</highlightprcma>, <highlightprcma n-scope="uyHuC1pipBxgMt">onload</highlightprcma>, etc we use events like <highlightprcma n-scope="uyHuC1pipBxgMt">on:click</highlightprcma>, <highlightprcma n-scope="uyHuC1pipBxgMt">on:load</highlightprcma>, etc.
        <codeprcma n-scope="uyHuC1pipBxgMt">
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
        </codeprcma>
    </sectionprcma>
    <sectionprcma title="Importing a component" n-scope="uyHuC1pipBxgMt">
        Let's assume that there is a component blogpost.nijor in the <highlightprcma n-scope="uyHuC1pipBxgMt">components/</highlightprcma> directory. We can import it any Nijor file by the following syntax.
        <codeprcma file="pages/blog" n-scope="uyHuC1pipBxgMt">
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
        </codeprcma>
        Importing a component seems to be a very tedious task, but luckly for developers, Nijor has a much more beautiful syntax in which you don't need to initilaize and run the component manually.
        <codeprcma file="pages/blog" n-scope="uyHuC1pipBxgMt">
            &lt;blogpost n:imported="components/blogpost"/&gt; &lt;!-- This syntax handles the init and run methods automatically --&gt;
            &lt;template&gt;
                &lt;blogpost title="Nijor : A first look"&gt;Nijor is a modern framework for building modern apps .....&lt;/blogpost&gt;
            &lt;/template&gt;
        </codeprcma>
    </sectionprcma>
    <sectionprcma title="Example :" n-scope="uyHuC1pipBxgMt">
        <codeprcma lang="html" file="src/components/greet.nijor" n-scope="uyHuC1pipBxgMt">
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
        </codeprcma>
        <div style="display:none;" n-scope="uyHuC1pipBxgMt"><codeprcma n-scope="uyHuC1pipBxgMt"></codeprcma></div>

        <codeprcma lang="html" file="src/App.nijor" n-scope="uyHuC1pipBxgMt">
            &lt;greet n:imported="components/greet.nijor"/&gt;
            &lt;!--&lt;greet n:imported="components/greet"/&gt; will also work as the file extension .nijor isn't mandatory while importing components. --&gt;
            &lt;template&gt;
                &lt;greet name="Tarun"&gt;How are you bro !&lt;/greet&gt;
                &lt;greet name="Varun"&gt;Long time no see !&lt;/greet&gt;
            &lt;/template&gt;
        </codeprcma>
    </sectionprcma>
`;
      }, async function() {
        n3.init("sectionprcma"), await n3.run(), t2.init("highlightprcma"), await t2.run(), n4.init("codeprcma"), await n4.run();
      });
    }
  });

  // assets/modules/custom-events-6556987d.js
  var custom_events_6556987d_exports = {};
  __export(custom_events_6556987d_exports, {
    default: () => s2
  });
  var s2;
  var init_custom_events_6556987d = __esm({
    "assets/modules/custom-events-6556987d.js"() {
      init_highlight_440ab00d();
      init_codeblock_d586b906();
      s2 = new window.nijor.component(async function() {
        return `<sections8p title="Custom Events" n-scope="uZKF2GZXgvz">
        We can create custom events in Nijor. What it means is that, just like events like <highlights8p n-scope="uZKF2GZXgvz">on:click</highlights8p> exist in Nijor, we can create our own event like <highlights8p n-scope="uZKF2GZXgvz">on:myevent</highlights8p>.
        It's pretty easy to do so. <br n-scope="uZKF2GZXgvz">
        Let's consider a component <highlights8p n-scope="uZKF2GZXgvz">msg.nijor</highlights8p> which uses a custom event <highlights8p n-scope="uZKF2GZXgvz">on:msg</highlights8p>. Whenever a message is send from the <highlights8p n-scope="uZKF2GZXgvz">send.nijor</highlights8p>, the sender's name and message gets printed in the paragraph tag. <br n-scope="uZKF2GZXgvz"><br n-scope="uZKF2GZXgvz">
        
        <codes8p file="src/page/msg.nijor" n-scope="uZKF2GZXgvz">
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
        </codes8p>

        <div style="display:none;" n-scope="uZKF2GZXgvz"><codes8p n-scope="uZKF2GZXgvz"></codes8p></div>

        <codes8p file="src/page/send.nijor" n-scope="uZKF2GZXgvz">
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
        </codes8p>
    </sections8p>
`;
      }, async function() {
        n3.init("sections8p"), await n3.run(), t2.init("highlights8p"), await t2.run(), n4.init("codes8p"), await n4.run();
      });
    }
  });

  // assets/modules/dark-mode-be4fe1c9.js
  var dark_mode_be4fe1c9_exports = {};
  __export(dark_mode_be4fe1c9_exports, {
    default: () => n6
  });
  var n6;
  var init_dark_mode_be4fe1c9 = __esm({
    "assets/modules/dark-mode-be4fe1c9.js"() {
      init_highlight_440ab00d();
      init_codeblock_d586b906();
      n6 = new window.nijor.component(async function() {
        return `<sectionkxdf title="Implementation of Dark-Mode" n-scope="z2b2GarA0CQ">
        Dark-Mode is very popular these days. You can implement dark mode using <highlightkxdf n-scope="z2b2GarA0CQ">CSS media queries</highlightkxdf>. But, it has a little problem : dark mode will only get activated if your browser theme is set to dark. <br n-scope="z2b2GarA0CQ">
        So, what if you want to use dark-mode without your browser's dark-mode activated ? or What if you want the user to have the freedom to toggle between dark, light and automatic(based on browser's theme) modes without them changing the theme of the browser ? <br n-scope="z2b2GarA0CQ">
        You need to use Javascript for these use cases, and Nijor has got it covered !
    </sectionkxdf>
    <sectionkxdf title="How to implement Dark Mode ?" n-scope="z2b2GarA0CQ">
        To implement dark-mode in your Nijor website :
        <codekxdf lang="js" file="App.js" n-scope="z2b2GarA0CQ">
            import "nijor";
            import "nijor/theme"; // Add this line of code to your App.js file
        </codekxdf>

        You can write separate CSS code for dark mode inside a Nijor Component by writing the CSS code for dark mode inside another <highlightkxdf n-scope="z2b2GarA0CQ">style</highlightkxdf> tag with the <highlightkxdf n-scope="z2b2GarA0CQ">dark</highlightkxdf> attribute.
        <codekxdf n-scope="z2b2GarA0CQ">
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
        </codekxdf>
    </sectionkxdf>
    <sectionkxdf title="Methods provided by nijor/theme" n-scope="z2b2GarA0CQ">
        <highlightkxdf n-scope="z2b2GarA0CQ">window.nijor.getTheme()</highlightkxdf> : This method returns the value of current theme (light, dark, auto) of website. <br n-scope="z2b2GarA0CQ">
        <highlightkxdf n-scope="z2b2GarA0CQ">window.nijor.getColorScheme()</highlightkxdf> : This method returns the value of current theme (light, dark, auto) of browser. <br n-scope="z2b2GarA0CQ">
        <highlightkxdf n-scope="z2b2GarA0CQ">window.nijor.setTheme(theme)</highlightkxdf> : This method changes the theme of the website according to the value of parameter theme. Accepted values are "dark", "light", "auto"(browser's theme).
    </sectionkxdf>
`;
      }, async function() {
        n3.init("sectionkxdf"), await n3.run(), t2.init("highlightkxdf"), await t2.run(), n4.init("codekxdf"), await n4.run();
      });
    }
  });

  // assets/modules/examples-b5b76025.js
  var examples_b5b76025_exports = {};
  __export(examples_b5b76025_exports, {
    default: () => n7
  });
  var n7;
  var init_examples_b5b76025 = __esm({
    "assets/modules/examples-b5b76025.js"() {
      init_highlight_440ab00d();
      n7 = new window.nijor.component(async function() {
        return '<sectionoy7lj title="Example Nijor Apps :" n-scope="lyitCGSebQ92Ae">\n        you can refer to the following examples to learn Nijor in a better way. <br n-scope="lyitCGSebQ92Ae"><br n-scope="lyitCGSebQ92Ae">\n        <highlightoy7lj link="https://github.com/nijorjs/notesapp-example" n-scope="lyitCGSebQ92Ae">Notes App</highlightoy7lj>\n    </sectionoy7lj>\n';
      }, async function() {
        n3.init("sectionoy7lj"), await n3.run(), t2.init("highlightoy7lj"), await t2.run();
      });
    }
  });

  // assets/modules/functional-attributes-92bcf66e.js
  var functional_attributes_92bcf66e_exports = {};
  __export(functional_attributes_92bcf66e_exports, {
    default: () => i3
  });
  var i3;
  var init_functional_attributes_92bcf66e = __esm({
    "assets/modules/functional-attributes-92bcf66e.js"() {
      init_highlight_440ab00d();
      init_codeblock_d586b906();
      i3 = new window.nijor.component(async function() {
        return `<div style="display:none;" n-scope="pDghgl"><codeikjg n-scope="pDghgl"></codeikjg></div>
    <sectionikjg title="Functional Attributes" n-scope="pDghgl">
        Functional Attributes are special attributes available in Nijor for normal html tags. They help us to do specific tasks with less code.
    </sectionikjg>
    <sectionikjg title="n:route" n-scope="pDghgl">
        In order to navigate between Nijor routes we use the <highlightikjg n-scope="pDghgl">n:route</highlightikjg> functional attribute on the anchor tag only. If we use the <highlightikjg n-scope="pDghgl">href</highlightikjg> attribute instead of <highlightikjg n-scope="pDghgl">n:route</highlightikjg>, we'll still be able to navigate. But the page will reload and the navigation won't be that smooth. Use <highlightikjg n-scope="pDghgl">href</highlightikjg> attribute for linking to external website.
        <codeikjg n-scope="pDghgl">
            &lt;a n:route="/"&gt;Index Page&lt;/a&gt; &lt;!--Routing will be smooth, the page won't refresh--&gt;
            &lt;a href="/"&gt;Index Page&lt;/a&gt; &lt;!--Routing won't be smooth, the page will refresh--&gt;
        </codeikjg>
    </sectionikjg>
    <sectionikjg title="n:for" n-scope="pDghgl">
        This functional attribute is used to perform loops inside a html tag.
        <codeikjg n-scope="pDghgl">
            &lt;template&gt;
                &lt;p&gt;Following are the Functional Attributes in Nijor :&lt;p&gt;
                &lt;ul n:for="let x of AllAttributes"&gt;
                    &lt;li&gt;{x}&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/template&gt;
            &lt;script&gt;
                let AllAttributes = ['n:route','n:for','n:reload','n:asynLoad'];
            &lt;/script&gt;
        </codeikjg>
    </sectionikjg>
    <sectionikjg title="n:reload" n-scope="pDghgl">
        This functional attribute is used with <highlightikjg n-scope="pDghgl">n:for</highlightikjg> or <highlightikjg n-scope="pDghgl">n:asyncLoad</highlightikjg> functional attributes. <br n-scope="pDghgl">
        To use this functional attribute, add this attribute to your desired HTML element and assign a <highlightikjg n-scope="pDghgl">label</highlightikjg> to it, then use the <highlightikjg n-scope="pDghgl">window.nijor.reload(label)</highlightikjg> function.
        <codeikjg n-scope="pDghgl">
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
        </codeikjg>
    </sectionikjg>
    <div style="display:none;" n-scope="pDghgl"><codeikjg n-scope="pDghgl"></codeikjg></div>
    <sectionikjg title="n:asyncLoad" n-scope="pDghgl">
        This functional attribute is used to fetch data from server asynchronously to child elemenents inside a parent element. 
        <codeikjg n-scope="pDghgl">
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
        </codeikjg>
    </sectionikjg>
    <sectionikjg title="n:bind" n-scope="pDghgl">
        This functional attribute is used to bind the value of an input tag to a <highlightikjg link="/docs#reactivity" n-scope="pDghgl">reactive variable</highlightikjg>.
        <codeikjg n-scope="pDghgl">
            &lt;template&gt;
                &lt;h1&gt;Hello {{name}}&lt;/h1&gt;
                &lt;input type="text" n:bind="name"&gt;

                &lt;!--Whenever the value of the input tag with the attribute n:bind changes, the value of {{name}} changes automatically.--&gt;
            &lt;/template&gt;
        </codeikjg>
    </sectionikjg>
`;
      }, async function() {
        n3.init("sectionikjg"), await n3.run(), t2.init("highlightikjg"), await t2.run(), n4.init("codeikjg"), await n4.run();
      });
    }
  });

  // assets/modules/index-b27605c5.js
  var index_b27605c5_exports = {};
  __export(index_b27605c5_exports, {
    default: () => n8
  });
  var n8;
  var init_index_b27605c5 = __esm({
    "assets/modules/index-b27605c5.js"() {
      init_highlight_440ab00d();
      n8 = new window.nijor.component(async function() {
        return `<section6t1z title="What is Nijor ?" n-scope="5ZrYoG">
        Nijor is a component-based framework that allows developers to build websites with ease by breaking down the code into many small components which can be reused throughout the codebase. Thus, Nijor makes developement faster in comparison to plain HTML, CSS and JS. <br n-scope="5ZrYoG">
        Nijor compiles down to browser readable code with the help of the <highlight6t1z n-scope="5ZrYoG">nijor compiler</highlight6t1z>.
    </section6t1z>
    <section6t1z title="Feature Nijor Provides :" n-scope="5ZrYoG">
        <ul style="list-style: none;" n-scope="5ZrYoG">
            <li n-scope="5ZrYoG">Component Based</li>
            <li n-scope="5ZrYoG">Frontend Routing</li>
            <li n-scope="5ZrYoG">Custom Events</li>
            <li n-scope="5ZrYoG">Easy to implement Dark-Mode</li>
        </ul>
    </section6t1z>
    <section6t1z title="Prerequisites" n-scope="5ZrYoG">
        You need to have some basic knowledge about HTML, CSS and Javascript. You need to have Node.js installed on your computer before using Nijor although you don't need to know anything about NodeJS.
    </section6t1z>
`;
      }, async function() {
        n3.init("section6t1z"), await n3.run(), t2.init("highlight6t1z"), await t2.run();
      });
    }
  });

  // assets/modules/installation-bdd93437.js
  var installation_bdd93437_exports = {};
  __export(installation_bdd93437_exports, {
    default: () => i4
  });
  var i4;
  var init_installation_bdd93437 = __esm({
    "assets/modules/installation-bdd93437.js"() {
      init_highlight_440ab00d();
      init_codeblock_d586b906();
      i4 = new window.nijor.component(async function() {
        return '<sectionx0pk title="Installation" n-scope="rROYcqduXYHamTO0pWOa">\n        In order to use Nijor, we need to install the <highlightx0pk n-scope="rROYcqduXYHamTO0pWOa">nijor-cli</highlightx0pk> from NPM. <br n-scope="rROYcqduXYHamTO0pWOa">\n        Type the following command to install it. <br n-scope="rROYcqduXYHamTO0pWOa"><br n-scope="rROYcqduXYHamTO0pWOa"><br n-scope="rROYcqduXYHamTO0pWOa">\n        <h3 n-scope="rROYcqduXYHamTO0pWOa">For Linux/Mac</h3>\n        <codex0pk lang="bash" n-scope="rROYcqduXYHamTO0pWOa">sudo npm install @nijor/cli -g</codex0pk>\n        <h3 n-scope="rROYcqduXYHamTO0pWOa">For Windows</h3>\n        <codex0pk lang="bash" n-scope="rROYcqduXYHamTO0pWOa">npm install @nijor/cli -g</codex0pk>\n    </sectionx0pk>\n';
      }, async function() {
        n3.init("sectionx0pk"), await n3.run(), t2.init("highlightx0pk"), await t2.run(), n4.init("codex0pk"), await n4.run();
      });
    }
  });

  // assets/modules/nijor-cli-6726e98b.js
  var nijor_cli_6726e98b_exports = {};
  __export(nijor_cli_6726e98b_exports, {
    default: () => o4
  });
  var o4;
  var init_nijor_cli_6726e98b = __esm({
    "assets/modules/nijor-cli-6726e98b.js"() {
      init_highlight_440ab00d();
      init_codeblock_d586b906();
      o4 = new window.nijor.component(async function() {
        return `<div style="display:none;" n-scope="mwYPZ86tyTA1"><codez9st n-scope="mwYPZ86tyTA1"></codez9st></div>
    <sectionz9st title="Nijor-CLI" n-scope="mwYPZ86tyTA1"></sectionz9st>
    <sectionz9st title="Intorduction" n-scope="mwYPZ86tyTA1">
        The <highlightz9st n-scope="mwYPZ86tyTA1">nijor-cli</highlightz9st> is a CLI tool which allows to work in Nijor. <br n-scope="mwYPZ86tyTA1">
    </sectionz9st>
    <sectionz9st title="nijor create" n-scope="mwYPZ86tyTA1">
        The <highlightz9st n-scope="mwYPZ86tyTA1">nijor create</highlightz9st> command creates a new folder and generates some boilerplate code.
        To create a new Nijor project, type the following commands. (Write your project's name instead of {Appname} )
        <codez9st lang="bash" n-scope="mwYPZ86tyTA1">nijor create {AppName}</codez9st>
        <codez9st lang="bash" n-scope="mwYPZ86tyTA1">cd {AppName}</codez9st>
    </sectionz9st>
    <sectionz9st title="nijor serve" n-scope="mwYPZ86tyTA1">
        The <highlightz9st n-scope="mwYPZ86tyTA1">nijor serve</highlightz9st> command runs a development server for the Nijor Project.
        <codez9st lang="bash" n-scope="mwYPZ86tyTA1">nijor serve</codez9st>
    </sectionz9st>
    <sectionz9st title="nijor compile" n-scope="mwYPZ86tyTA1">
        The <highlightz9st n-scope="mwYPZ86tyTA1">nijor compile</highlightz9st> command compiles the all the <highlightz9st n-scope="mwYPZ86tyTA1">*.nijor</highlightz9st> files to browser readable JS and CSS code.
        <codez9st lang="bash" n-scope="mwYPZ86tyTA1">nijor compile</codez9st>
        To watch for changes, type
        <codez9st lang="bash" n-scope="mwYPZ86tyTA1">nijor compile -w</codez9st>
    </sectionz9st>
    <sectionz9st title="nijor build" n-scope="mwYPZ86tyTA1">
        The <highlightz9st n-scope="mwYPZ86tyTA1">nijor build</highlightz9st> command is very similar to the<highlightz9st n-scope="mwYPZ86tyTA1">nijor compile</highlightz9st> command. The only differnce between the 2 is that <highlightz9st n-scope="mwYPZ86tyTA1">nijor build</highlightz9st> minifies the JS code.
        <codez9st lang="bash" n-scope="mwYPZ86tyTA1">nijor build</codez9st>
    </sectionz9st>
`;
      }, async function() {
        n3.init("sectionz9st"), await n3.run(), t2.init("highlightz9st"), await t2.run(), n4.init("codez9st"), await n4.run();
      });
    }
  });

  // assets/modules/reactivity-7b937a0d.js
  var reactivity_7b937a0d_exports = {};
  __export(reactivity_7b937a0d_exports, {
    default: () => n9
  });
  var n9;
  var init_reactivity_7b937a0d = __esm({
    "assets/modules/reactivity-7b937a0d.js"() {
      init_highlight_440ab00d();
      init_codeblock_d586b906();
      n9 = new window.nijor.component(async function() {
        return `<div style="display:none;" n-scope="LbOgEr"><codeifmu n-scope="LbOgEr"></codeifmu></div>
    <sectionifmu title="Reactivity" n-scope="LbOgEr">
        In Nijor, we can define <highlightifmu n-scope="LbOgEr">reactive variables</highlightifmu>.
        Reactive variables are defined as properties of the window.nijor.reactiveVars object. You can use the syntax, <highlightifmu n-scope="LbOgEr">window.nijor.reactiveVars['varname']</highlightifmu> to create a reactive variable. To access the value of a reactive variable inside the template tag, use the <highlightifmu n-scope="LbOgEr">{{varname}}</highlightifmu> syntax.
        <codeifmu n-scope="LbOgEr">
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
        </codeifmu>
    </sectionifmu>
`;
      }, async function() {
        n3.init("sectionifmu"), await n3.run(), t2.init("highlightifmu"), await t2.run(), n4.init("codeifmu"), await n4.run();
      });
    }
  });

  // assets/modules/routing-76d2102d.js
  var routing_76d2102d_exports = {};
  __export(routing_76d2102d_exports, {
    default: () => n10
  });
  var n10;
  var init_routing_76d2102d = __esm({
    "assets/modules/routing-76d2102d.js"() {
      init_highlight_440ab00d();
      init_codeblock_d586b906();
      n10 = new window.nijor.component(async function() {
        return `<sectiony537 title="Routing" n-scope="TBQyKEK7DbaD62EXx"></sectiony537>
    <sectiony537 title="Introduction" n-scope="TBQyKEK7DbaD62EXx">
        Nijor provides a client-side routing capability that allows the rendering of different user interfaces based on specific routes. Unlike traditional approaches, Nijor's routing mechanism renders routes within the same page, eliminating the need for page refreshes and delivering a seamless user experience.
    </sectiony537>
    <sectiony537 title="File-Based Routing" n-scope="TBQyKEK7DbaD62EXx">
        Nijor simplifies the process of rendering pages for different routes by utilizing file-based routing. This means that developers are relieved from the responsibility of manually coding the rendering logic for each route. Instead, Nijor's compiler automatically handles this based on the organization of files in the <highlighty537 n-scope="TBQyKEK7DbaD62EXx">src/pages</highlighty537> directory of your Nijor project. <br n-scope="TBQyKEK7DbaD62EXx">
        To illustrate this behavior, let's consider an example. When a user visits the '/' route of our website, the page rendered will be src/pages/index.nijor. Similarly, accessing the '/about' route will trigger the rendering of src/pages/about.nijor. In the event that a route doesn't exist, Nijor will render src/pages/404.nijor. This convenient approach streamlines the development process and improves overall efficiency.
    </sectiony537>
    <sectiony537 title="Understanding the App.nijor file" n-scope="TBQyKEK7DbaD62EXx">
        The <highlighty537 n-scope="TBQyKEK7DbaD62EXx">App.nijor</highlighty537> is a very important file inside the <highlighty537 n-scope="TBQyKEK7DbaD62EXx">src/</highlighty537> directory of a Nijor project. This page gets rendered before rendering any route in Nijor. Without this page, the Nijor router simply won't work. You can render those components in this page which remain same in all the pages, thus preventing the need for rerendering the common components during navigation through different routes. <br n-scope="TBQyKEK7DbaD62EXx">
        The App.nijor file must have the <highlighty537 n-scope="TBQyKEK7DbaD62EXx">&lt;div n:slot&gt;&lt;/div&gt;</highlighty537> in the <highlighty537 n-scope="TBQyKEK7DbaD62EXx">App.nijor</highlighty537> file. The content from the routes (pages from the src/page/ dir) will be rendered inside this special tag.
        <codey537 n-scope="TBQyKEK7DbaD62EXx">
            &lt;template&gt;
                &lt;div n:slot&gt;
                    &lt;!--All the pages from the src/pages directory are rendered inside this div (marked with the n:slot attribute). 
                        Anything outside this div is always rendered irrespective of route.
                        You can write code for common header or footer outside this div so that it renders in every page, #Reasuablity
                    --&gt;
                &lt;/div&gt;

                &lt;!-- Note : Do not add an 'id' attribute to the div with the n:slot attribute. For styling, use 'class' instead. --&gt;
            &lt;/template&gt;
        </codey537>
    </sectiony537>
    <sectiony537 title="Boilerplate Code for Routing" n-scope="TBQyKEK7DbaD62EXx">
        In order to use the Nijor Router in your project, your <highlighty537 n-scope="TBQyKEK7DbaD62EXx">src/App.js</highlighty537> file must contain the following Boilerplate code :
        <codey537 lang="js" n-scope="TBQyKEK7DbaD62EXx">
            import 'nijor';
            import 'nijor/router';
            import App from 'App.nijor';

            //@Routes()
            
            App.init('app');
            App.run();
            let url = window.location.pathname;
            window.nijor.renderRoute(url);
        </codey537>
        Note: The <highlighty537 n-scope="TBQyKEK7DbaD62EXx">//@Routes()</highlighty537> comment is crucial for the Nijor router to function properly. Please ensure that there is no code or comments written on the same line as this comment. <br n-scope="TBQyKEK7DbaD62EXx">
    </sectiony537>
    <sectiony537 title="Parameterized Routing" n-scope="TBQyKEK7DbaD62EXx">
        Nijor supports parameterized routes, allowing for variable paths within routes. To define a parameterized route, enclose the parameter(s) using square brackets, e.g., [parameter-name]. You can add any desired text before or after the parameter name. For example: @[user].nijor, [item].nijor, id-[x].nijor, etc.
        <br n-scope="TBQyKEK7DbaD62EXx"><br n-scope="TBQyKEK7DbaD62EXx">
        Let's explore parameterized routes with an example: <br n-scope="TBQyKEK7DbaD62EXx">
        Suppose we are building a profile page for users on our site, and we want to render the profile of 'Arun' when accessing the '/@arun' route. Similarly, we want to display the profile of 'Himasri' for the '/@himasri' route, and so on. Instead of creating separate files for each user, such as <highlighty537 n-scope="TBQyKEK7DbaD62EXx">src/pages/@arun</highlighty537> , <highlighty537 n-scope="TBQyKEK7DbaD62EXx">src/pages/@himasri</highlighty537>, and thousands of other profiles, we can create a single file, <highlighty537 n-scope="TBQyKEK7DbaD62EXx">src/pages/@[user].nijor</highlighty537> to handle all user profiles. This way, when a user visits routes like '/@himasri' or '/@arun', they will be directed to the same page, <highlighty537 n-scope="TBQyKEK7DbaD62EXx">src/pages/@[user].nijor</highlighty537>. <br n-scope="TBQyKEK7DbaD62EXx">
        <codey537 file="src/pages/@[user]" n-scope="TBQyKEK7DbaD62EXx">
            &lt;template specs=[user]&gt; &lt;!-- Receiving the parameterised route by array destructuring in specs --&gt;
                &lt;div&gt;
                    &lt;h1&gt;Hi {user}&lt;/h1&gt; 
                    &lt;!-- 
                        If the user visits /@arun &lt;h1&gt;Hi {user}&lt;/h1&gt; will become &lt;h1&gt;Hi arun&lt;/h1&gt; 
                        If the user visits /@himasri &lt;h1&gt;Hi {user}&lt;/h1&gt; will become &lt;h1&gt;Hi himasri&lt;/h1&gt; 
                    --&gt;
                &lt;/div&gt;
            &lt;/template&gt;
        </codey537>
    </sectiony537>
    <sectiony537 title="Sub Routes within a route" n-scope="TBQyKEK7DbaD62EXx">
        By sub routes, we mean routing within a parent route. <br n-scope="TBQyKEK7DbaD62EXx">
        For instance, there is a route say, <highlighty537 n-scope="TBQyKEK7DbaD62EXx">/blog</highlighty537> which has some sub-routes like <highlighty537 n-scope="TBQyKEK7DbaD62EXx">/blog/What-is-Nijor</highlighty537>, <highlighty537 n-scope="TBQyKEK7DbaD62EXx">/blog/Learning-Nijor</highlighty537>, etc and each of these pages have a lot of common components and common layout in general. So, you don't want to copy-paste the same common code for these pages. In these scenarios, sub-routes can be very useful. You can also have parameterized routes as subroutes within a route. <br n-scope="TBQyKEK7DbaD62EXx"><br n-scope="TBQyKEK7DbaD62EXx">
        
        In order to create a sub route within a route : <br n-scope="TBQyKEK7DbaD62EXx">
        (1) Create a folder, say 'blog' inside the src/pages directory. <br n-scope="TBQyKEK7DbaD62EXx">
        (2) Create the <highlighty537 n-scope="TBQyKEK7DbaD62EXx">.nijor</highlighty537> file within it. (write .nijor the way you write .gitignore).<br n-scope="TBQyKEK7DbaD62EXx">
        (3) Create <highlighty537 n-scope="TBQyKEK7DbaD62EXx">index.nijor</highlighty537> file within the folder.<br n-scope="TBQyKEK7DbaD62EXx">
        (4) Create <highlighty537 n-scope="TBQyKEK7DbaD62EXx">What-is-Nijor.nijor</highlighty537> file within the folder.<br n-scope="TBQyKEK7DbaD62EXx"><br n-scope="TBQyKEK7DbaD62EXx">
        
        Now, write all the common components in the <highlighty537 n-scope="TBQyKEK7DbaD62EXx">.nijor</highlighty537> file. This file contains all the common code/components for the '/blog' route. Whenever somebody visits '/blog/*', this page will get rendered.
        <codey537 file="src/pages/blog/.nijor" n-scope="TBQyKEK7DbaD62EXx">
            &lt;sidenav n:imported="components/sidenav"/&gt;
            &lt;template&gt;
                &lt;sidenav&gt;&lt;/sidenav&gt;
                &lt;div n:slot&gt;
                    &lt;!--All the subroutes will be rendered inside this folder.
                    Anything outside it will be rendered for any sub-route within '/blog' route--&gt;
                &lt;/div&gt;
            &lt;/template&gt;
        </codey537>

        <codey537 file="src/pages/blog/index.nijor" n-scope="TBQyKEK7DbaD62EXx">
            &lt;template&gt;
                &lt;div&gt;
                    This is the Index page.
                    Whenever somebody visits '/blog/' or just '/blog' , this page will be rendered.
                &lt;/div&gt;
            &lt;/template&gt;
        </codey537>

        <codey537 file="src/pages/blog/What-is-Nijor.nijor" n-scope="TBQyKEK7DbaD62EXx">
            &lt;template&gt;
                &lt;div&gt;
                    This is the What-is-Nijor page.
                    Whenever somebody visits '/blog/What-is-Nijor', this page will be rendered.
                &lt;/div&gt;
            &lt;/template&gt;
        </codey537>

    </sectiony537>
`;
      }, async function() {
        n3.init("sectiony537"), await n3.run(), t2.init("highlighty537"), await t2.run(), n4.init("codey537"), await n4.run();
      });
    }
  });

  // assets/modules/routing.old-8a15e367.js
  var routing_old_8a15e367_exports = {};
  __export(routing_old_8a15e367_exports, {
    default: () => r
  });
  var r;
  var init_routing_old_8a15e367 = __esm({
    "assets/modules/routing.old-8a15e367.js"() {
      init_highlight_440ab00d();
      init_codeblock_d586b906();
      r = new window.nijor.component(async function() {
        return `<section0nfu title="Routing" n-scope="hIqHZ77G81"></section0nfu>
    <section0nfu title="Introduction" n-scope="hIqHZ77G81">
        In Nijor, we can do client-side routing. What it means is that we can render different UI to the user for different routes. The routes will be rendered in the same page due to which the page won't refresh on navigating to another route. This leads to a smoother user experience. <br n-scope="hIqHZ77G81">

        Here's an example of a simple router in Nijor :
        <code0nfu lang="js" file="src/App.js" n-scope="hIqHZ77G81">
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
        </code0nfu>
        <code0nfu file="src/App.nijor" n-scope="hIqHZ77G81">
            &lt;header n:imported="components/header"/&gt;
            &lt;template&gt;
            &lt;header&gt;&lt;/header&gt; &lt;!-- The header component won't get affected on route change --&gt;
                &lt;div id="n-routes"&gt;
                    &lt;!-- All the routes will be rendered inside this div --&gt;
                    &lt;!-- Content outside this div won't get affected on change in route --&gt;
                &lt;/div&gt;
            &lt;/template&gt;
        </code0nfu>
        
    </section0nfu>
    <section0nfu title="Parameterized Routing" n-scope="hIqHZ77G81">
        With parameterised routes we can have variable paths in our routes. Let's understand it with the help of an example :  
        <code0nfu lang="js" file="src/App.js" n-scope="hIqHZ77G81">
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
        </code0nfu>
        <code0nfu file="src/pages/blog/index.nijor" n-scope="hIqHZ77G81">
            &lt;!-- This page will get rendered whenever the user visits the /blog route --&gt;
            &lt;template&gt;
                &lt;div&gt;
                    &lt;h1&gt;Search for BlogPosts ....&lt;/h1&gt;
                &lt;/div&gt;
            &lt;/template&gt;
        </code0nfu>
        <code0nfu file="src/pages/blog/blog.nijor" n-scope="hIqHZ77G81">
            &lt;template specs=[title]&gt; &lt;!-- Receiving the parameterised route by array destructuring in specs --&gt;
                &lt;div&gt;
                    &lt;h1&gt;{title}&lt;/h1&gt;
                    &lt;!-- 
                        If the user visits /blog/What-is-Nijor, &lt;h1&gt;{title}&lt;/h1&gt; will become &lt;h1&gt;What-is-Nijor&lt;/h1&gt;
                        If the user visits /blog/XYX, &lt;h1&gt;{title}&lt;/h1&gt; will become &lt;h1&gt;XYX&lt;/h1&gt;
                    --&gt;
                &lt;/div&gt;
            &lt;/template&gt;
        </code0nfu>
    </section0nfu>
    <section0nfu title="preRender method" n-scope="hIqHZ77G81">
        <code0nfu lang="js" n-scope="hIqHZ77G81">
            import 'nijor';
            import Router from 'nijor/router';
            const router = new Router('#n-routes');

            router.preRender(()=&gt;DoSomething());
            // function passed to the preRender function runs before every page is rendered on route change.
            // router.preRender((urlParameter)=&gt;DoSomething(urlParameter)); The urlParameter contains the url paramters of a parameterized route.
        </code0nfu>
    </section0nfu>
    <section0nfu title="postRender method" n-scope="hIqHZ77G81">
        <code0nfu lang="js" n-scope="hIqHZ77G81">
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
        </code0nfu>
    </section0nfu>
`;
      }, async function() {
        n3.init("section0nfu"), await n3.run(), t2.init("highlight0nfu"), await t2.run(), n4.init("code0nfu"), await n4.run();
      });
    }
  });

  // assets/modules/structure-6a7fad2b.js
  var structure_6a7fad2b_exports = {};
  __export(structure_6a7fad2b_exports, {
    default: () => t3
  });
  var t3;
  var init_structure_6a7fad2b = __esm({
    "assets/modules/structure-6a7fad2b.js"() {
      init_highlight_440ab00d();
      init_codeblock_d586b906();
      t3 = new window.nijor.component(async function() {
        return `<div style="display: none;" n-scope="nTsUS3WyGUgtlT"><code2bs2n n-scope="nTsUS3WyGUgtlT"></code2bs2n></div>
    <section2bs2n title="Structure of a Nijor project" n-scope="nTsUS3WyGUgtlT">
        When you use the <highlight2bs2n n-scope="nTsUS3WyGUgtlT">nijor create {appname}</highlight2bs2n> command, it creates a new directory named after your project. This page is intended to help you understand the use of each of these directories and files.
    </section2bs2n>
    <section2bs2n title="app directory" n-scope="nTsUS3WyGUgtlT">
        The <highlight2bs2n n-scope="nTsUS3WyGUgtlT">app</highlight2bs2n> directory contains the <highlight2bs2n n-scope="nTsUS3WyGUgtlT">index.html</highlight2bs2n> file for our website. It also contains another directory called <highlight2bs2n n-scope="nTsUS3WyGUgtlT">assets</highlight2bs2n> which stores our css file and it also contains another directory called <highlight2bs2n n-scope="nTsUS3WyGUgtlT">modules</highlight2bs2n> which contains the js files produced by the compiler.
    </section2bs2n>
    <section2bs2n title="src directory" n-scope="nTsUS3WyGUgtlT">
        The <highlight2bs2n n-scope="nTsUS3WyGUgtlT">src</highlight2bs2n> directory is our main working directory. We generally don't need to touch the <highlight2bs2n n-scope="nTsUS3WyGUgtlT">app</highlight2bs2n> directory.
    </section2bs2n>
    <section2bs2n title="src/components directory" n-scope="nTsUS3WyGUgtlT">
        This directory stores all the reusable Nijor components.
    </section2bs2n>
    <section2bs2n title="src/pages directory" n-scope="nTsUS3WyGUgtlT">
        This directory stores all the Nijor components which are to be used as <highlight2bs2n n-scope="nTsUS3WyGUgtlT">pages</highlight2bs2n> during routing. Pages are just normal Nijor components which are used for routing, they behave normally as other Nijor components.
    </section2bs2n>
    <section2bs2n title="src/styles directory" n-scope="nTsUS3WyGUgtlT">
        This directory stores our global stylesheets.
    </section2bs2n>
    <section2bs2n title="src/images directory" n-scope="nTsUS3WyGUgtlT">
        This directory stores our images which can be imported into a Nijor component just like a Javascript file using ES6 imports.
    </section2bs2n>
    <section2bs2n title="src/App.js file" n-scope="nTsUS3WyGUgtlT">
        This file is the main entrypoint of our Nijor project.
    </section2bs2n>
    <section2bs2n title="src/App.nijor file" n-scope="nTsUS3WyGUgtlT">
        This file is like the index.html for Nijor. We still need to use the index.html file sometimes though. The template tag of App.nijor is like the body of the index.html file.
    </section2bs2n>
    <section2bs2n title="Nijor Configuration File" n-scope="nTsUS3WyGUgtlT">
        The <highlight2bs2n n-scope="nTsUS3WyGUgtlT">nijor.config.json</highlight2bs2n> is a file which contains certain configurations for a Nijor project.<br n-scope="nTsUS3WyGUgtlT">
        If you try to run the <highlight2bs2n n-scope="nTsUS3WyGUgtlT">nijor build</highlight2bs2n>,<highlight2bs2n n-scope="nTsUS3WyGUgtlT">nijor compile</highlight2bs2n>,<highlight2bs2n n-scope="nTsUS3WyGUgtlT">nijor serve</highlight2bs2n> commands inside a Nijor project without this file, then the <highlight2bs2n n-scope="nTsUS3WyGUgtlT">nijor-compiler</highlight2bs2n> won't work and will throw errors.
    </section2bs2n>
`;
      }, async function() {
        n3.init("section2bs2n"), await n3.run(), t2.init("highlight2bs2n"), await t2.run(), n4.init("code2bs2n"), await n4.run();
      });
    }
  });

  // assets/modules/How-Nijor-Works-11b19312.js
  var How_Nijor_Works_11b19312_exports = {};
  __export(How_Nijor_Works_11b19312_exports, {
    default: () => o5
  });
  var o5;
  var init_How_Nijor_Works_11b19312 = __esm({
    "assets/modules/How-Nijor-Works-11b19312.js"() {
      init_highlight_440ab00d();
      o5 = new window.nijor.component(async function() {
        return `<div class="container" n-scope="mx7xW8qX">
        <section1jsl title="How Nijor Works ?" n-scope="mx7xW8qX">
            Many of you might have thought that how Nijor compiler actually works behind the scene ? Well, in this article I'd tell you exactly that ! <br n-scope="mx7xW8qX">
            The Nijor compiler uses <highlight1jsl link="https://rollupjs.org" n-scope="mx7xW8qX">RollupJS</highlight1jsl> with <highlight1jsl link="https://github.com/nijorjs/nijor-rollup-plugin" n-scope="mx7xW8qX">this plugin</highlight1jsl> to first compile the <highlight1jsl n-scope="mx7xW8qX">*.nijor</highlight1jsl> code to <highlight1jsl n-scope="mx7xW8qX">*.js</highlight1jsl> code and bundle the components into the pages. All the functional attributes get compiled to normal js code. 
        </section1jsl>
    </div>
`;
      }, async function() {
        n3.init("section1jsl"), await n3.run(), t2.init("highlight1jsl"), await t2.run();
      });
    }
  });

  // assets/modules/How-Scoped-CSS-Works-cdb3b1af.js
  var How_Scoped_CSS_Works_cdb3b1af_exports = {};
  __export(How_Scoped_CSS_Works_cdb3b1af_exports, {
    default: () => e3
  });
  var e3;
  var init_How_Scoped_CSS_Works_cdb3b1af = __esm({
    "assets/modules/How-Scoped-CSS-Works-cdb3b1af.js"() {
      init_highlight_440ab00d();
      e3 = new window.nijor.component(async function() {
        return `<div class="container" n-scope="Q8sA5TD5cwfzSDcyz4h">
        <sectionnqh title="How Scoped CSS Works ?" n-scope="Q8sA5TD5cwfzSDcyz4h">
            The CSS code you write inside a component is scoped.
            While compiling <highlightnqh n-scope="Q8sA5TD5cwfzSDcyz4h">.nijor</highlightnqh> files, the compiler adds the attribute "n-scope" to each and every HTML element inside the template tag and also modifies the CSS code inside the style tag such that the styles only apply to the elements of that particular component. The value of the 'n-scope' attribute is same for all the HTML elements inside a particular Nijor component. <br n-scope="Q8sA5TD5cwfzSDcyz4h">
            
            For example :

            <codenqh n-scope="Q8sA5TD5cwfzSDcyz4h">
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
            </codenqh>
            The above code becomes somewhat like the code below.
            <codenqh n-scope="Q8sA5TD5cwfzSDcyz4h">
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
            </codenqh>
        </sectionnqh>
    </div>
`;
      }, async function() {
        const { default: e6 } = await Promise.resolve().then(() => (init_codeblock_d586b906(), codeblock_d586b906_exports));
        n3.init("sectionnqh"), await n3.run(), t2.init("highlightnqh"), await t2.run(), e6.init("codenqh"), await e6.run();
      });
    }
  });

  // assets/modules/enei-71233717.js
  var enei_71233717_exports = {};
  __export(enei_71233717_exports, {
    default: () => e4
  });
  var t4, e4;
  var init_enei_71233717 = __esm({
    "assets/modules/enei-71233717.js"() {
      t4 = /* @__PURE__ */ new Map();
      t4.set("todolist", "http://localhost:3500/assets/");
      e4 = new window.nijor.component(async function([e6]) {
        return `<page fn="${async function(e7) {
          const n13 = document.createElement("link");
          n13.setAttribute("rel", "stylesheet"), n13.setAttribute("href", t4.get(e7) + "style.css"), document.head.appendChild(n13);
          let { Page: s4 } = await import(t4.get(e7) + "modules/App.js");
          s4.init("page"), await s4.run();
        }(e6)}" n-scope="xg4B4dcEjTBrgOr"></page>
`;
      }, async function([t5]) {
      });
    }
  });

  // assets/modules/index-7c00ea91.js
  var index_7c00ea91_exports = {};
  __export(index_7c00ea91_exports, {
    default: () => i5
  });
  var i5;
  var init_index_7c00ea91 = __esm({
    "assets/modules/index-7c00ea91.js"() {
      init_highlight_440ab00d();
      i5 = new window.nijor.component(async function() {
        return `<div class="container" n-scope="wBM2pCD">
        <sectionajxo title="Namaskar \u{1F64F}" n-scope="wBM2pCD">
        Hi ! I'm Debarshi Pathak (alias <highlightajxo link="https://twitter.com/DebAxom" n-scope="wBM2pCD">DebAxom</highlightajxo>), the creator of Nijor. <br n-scope="wBM2pCD">
        I am the Assamese teenager who created Nijor in 2020 at the age of 14 (was about to turn 15). <br n-scope="wBM2pCD"><br n-scope="wBM2pCD">

        I created Nijor because I didn't want to learn React or Angular as I felt that learning those frameworks is like kinda learning a new language completely. So I decided to create my own framework, Nijor. <br n-scope="wBM2pCD">
        The word <highlightajxo n-scope="wBM2pCD">Nijor (\u09A8\u09BF\u099C\u09F0)</highlightajxo> means "My" or "Mine" in the Assamese language. I chose the word "Nijor" for my framework because I could create "my own" custom HTML tags with attributes. I've been using NijorJS since 2020 and I decided to write the <highlightajxo link="/docs" n-scope="wBM2pCD">docs</highlightajxo> in 2023. <br n-scope="wBM2pCD"><br n-scope="wBM2pCD">
        
        Nijor has been inspired by Vue and Svelte and it's influence can be felt. The idea of <highlightajxo n-scope="wBM2pCD">*.nijor</highlightajxo> files came from <highlightajxo n-scope="wBM2pCD">*.vue</highlightajxo> files and the idea of a compiler came from Svelte. I even tried to take some inspiration from their source code, but I couldn't understand their code. So, I had to implement all the features of this framework from scratch (I did steal some code from StalkOverflow though \u{1F601}). <br n-scope="wBM2pCD"><br n-scope="wBM2pCD">

        My core philosophy behind Nijor is simplicity : The framework should have a very flat learning curve. Due to this philosophy, <highlightajxo n-scope="wBM2pCD">*.nijor</highlightajxo> files are more closely related to <highlightajxo n-scope="wBM2pCD">*.html</highlightajxo> files than <highlightajxo n-scope="wBM2pCD">*.js</highlightajxo> files as it's easier to write JS inside HTML rather than the other way round. <br n-scope="wBM2pCD"><br n-scope="wBM2pCD">
        
        Nijor is not a perfect framework ; just like everything in this world, Nijor too has it's flaws and it might be confusing at times. <br n-scope="wBM2pCD"><br n-scope="wBM2pCD">
        
        At last, I'd like to thank the Svelte creator Rich-Harris for creating Rollup JS as without Rollup it'd have been impossible for me to create the Nijor compiler.
        </sectionajxo>
    </div>
`;
      }, async function() {
        n3.init("sectionajxo"), await n3.run(), t2.init("highlightajxo"), await t2.run();
      });
    }
  });

  // assets/modules/virtual-dom-20a6469f.js
  var virtual_dom_20a6469f_exports = {};
  __export(virtual_dom_20a6469f_exports, {
    default: () => i6
  });
  var i6;
  var init_virtual_dom_20a6469f = __esm({
    "assets/modules/virtual-dom-20a6469f.js"() {
      init_highlight_440ab00d();
      i6 = new window.nijor.component(async function() {
        return `<div class="container" n-scope="vIEif4">
        <sectionpkv2o title="Does Nijor have a Virtial DOM ?" n-scope="vIEif4">
            No, Nijor doesn't have any Virtual DOM as it's simply overrated ! At the end of the day, the Virtual DOM also communicated with the real DOM. So, I don't really understand how can it be faster than the real DOM ? <br n-scope="vIEif4">
            Nijor uses very savage rendering techniques ; it doesn't even create the HTML elements using JS code, it just dumps the code you wrote inside a Nijor JS file directly into the parent contaier using the <highlightpkv2o n-scope="vIEif4">.innerHTML</highlightpkv2o> method.
        </sectionpkv2o>
    </div>
`;
      }, async function() {
        n3.init("sectionpkv2o"), await n3.run(), t2.init("highlightpkv2o"), await t2.run();
      });
    }
  });

  // assets/modules/index-e0ca6fd1.js
  var index_e0ca6fd1_exports = {};
  __export(index_e0ca6fd1_exports, {
    default: () => o6
  });
  var o6;
  var init_index_e0ca6fd1 = __esm({
    "assets/modules/index-e0ca6fd1.js"() {
      init_app();
      o6 = new window.nijor.component(async function() {
        return `<div class="main" n-scope="USq3hUb6UACl3XxuIPvr">
        <img src="${t}" n-scope="USq3hUb6UACl3XxuIPvr">
        <p n-scope="USq3hUb6UACl3XxuIPvr">
            <span style="font-size: 35px; font-weight: bold;" n-scope="USq3hUb6UACl3XxuIPvr">Nijor</span>
            <span class="tagline" n-scope="USq3hUb6UACl3XxuIPvr"> : A modern and practical web framework !</span>
        </p>
        <a n-scope="USq3hUb6UACl3XxuIPvr" onclick="return window.nijor.redirect(this.href)" href="/docs"><button n-scope="USq3hUb6UACl3XxuIPvr">Get Started</button></a>
    </div>
`;
      }, async function() {
      });
    }
  });

  // assets/modules/internet-error-a90ac108.js
  var internet_error_a90ac108_exports = {};
  __export(internet_error_a90ac108_exports, {
    default: () => n11
  });
  var n11;
  var init_internet_error_a90ac108 = __esm({
    "assets/modules/internet-error-a90ac108.js"() {
      n11 = new window.nijor.component(async function() {
        return `<div n-scope="QEnsryfhbRudj">
        <h1 n-scope="QEnsryfhbRudj">Network Error !</h1>
        <p n-scope="QEnsryfhbRudj">It seems that you aren't connected to the internet, kindly check your net connection.</p>
    </div>
`;
      }, async function() {
      });
    }
  });

  // assets/modules/app.js
  async function o7(e6) {
    if ("/" === e6)
      return;
    let t5 = e6.split("/");
    return "404" === t5[t5.length - 1] && t5.pop(), t5.pop(), t5.push("404"), (e6 = t5.join("/")).endsWith("/") && "/" != e6 && (e6 = e6.substring(0, e6.length - 1)), window.nijor.routes.has(e6) ? await window.nijor.routes.get(e6)() : await o7(e6);
  }
  function n12() {
    document.body.style.transition = "0.5s";
    let e6 = window.nijor.getTheme();
    "auto" !== e6 && null !== e6 || (e6 = window.nijor.getColorScheme()), "dark" === e6 && window.nijor.setTheme("light"), "light" === e6 && window.nijor.setTheme("dark");
  }
  var e5, t, i7, r2, s3, a;
  var init_app = __esm({
    "assets/modules/app.js"() {
      e5 = new Proxy({}, { set: (e6, o8, t5) => (e6[o8] = t5, document.querySelectorAll(`nirev[var="${o8}"]`).forEach((e7) => {
        e7.innerHTML = t5;
      }), true) });
      window.nijor = { component: class {
        constructor(e6, o8) {
          this.template = e6, this.cb = o8;
        }
        init(e6) {
          this.name = e6;
        }
        run = async function(e6) {
          let o8 = new RegExp(`(<${this.name}[^>]+>|<${this.name}>)`), t5 = document.getElementsByTagName(this.name)[0];
          if (0 === document.getElementsByTagName(this.name).length)
            return;
          let n13 = function(e7) {
            let o9 = [], t6 = [];
            for (let n15, i9 = 0, r3 = e7.attributes, s4 = r3.length; i9 < s4; i9++)
              n15 = r3[i9], o9.push(n15.nodeName), t6.push(n15.nodeValue);
            o9.push("_text_"), t6.push(e7.innerHTML);
            let n14 = t6, i8 = {};
            return o9.forEach((e8, o10) => i8[e8] = n14[o10]), i8;
          }(t5);
          null != e6 && (n13 = e6);
          try {
            t5.innerHTML = "";
          } catch (e7) {
          }
          try {
            let e7 = await this.template(n13);
            t5.parentElement.innerHTML = t5.parentElement.innerHTML.replace(o8, e7), await this.cb(n13), await this.run();
          } catch (e7) {
            let t6 = await this.template(n13);
            document.body.innerHTML = document.body.innerHTML.replace(o8, t6), await this.cb(n13), await this.run();
          }
        };
      }, reactiveVars: e5 }, window.nijor.hashRouterActivated = false, window.nijorfunc = {}, window.location.query = function() {
        let e6 = {}, o8 = document.createElement("a");
        o8.href = window.location.href;
        let t5 = o8.search.substring(1).split("&");
        for (let o9 = 0; o9 < t5.length; o9++) {
          let n13 = t5[o9].split("=");
          e6[n13[0]] = decodeURIComponent(n13[1]);
        }
        return e6;
      }, window.nijor.emitEvent = async function(e6, o8 = {}) {
        document.querySelectorAll("[on" + e6 + "]").forEach((t5) => {
          null === t5.getAttribute("id") && t5.setAttribute("id", "id_" + function(e7, o9) {
            let t6 = Math.floor(Math.random() * (o9 - e7 + 1) + e7), n14 = "", i9 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r4 = i9.length;
            for (let e8 = 0; e8 < t6; e8++)
              n14 += i9.charAt(Math.floor(Math.random() * r4));
            return n14;
          }(4, 6));
          let n13 = t5.getAttribute("on" + e6), i8 = n13.split("(")[0], r3 = n13.match(/\((.*)\)/)[1];
          r3 = r3.replace("$data", JSON.stringify(o8)), r3 = r3.replace("this", "_this"), new Function(`
        let _this = document.getElementById('${t5.id}');
        ${i8}(${r3});
        `)();
        });
      }, window.nijor.reload = async function(e6) {
        await window.nijor.emitEvent("reload" + e6, null);
      }, window.nijor.routes = /* @__PURE__ */ new Map(), window.nijor.routes.set("/", () => {
      }), window.nijor.slots = /* @__PURE__ */ new Map(), window.nijor.slots.set("/", () => {
      }), window.nijor.redirect = function(e6) {
        window.nijor.previousRoute = window.location.pathname;
        try {
          history.pushState(null, null, e6), history.pushState(null, null, e6), history.back();
        } catch (o8) {
          window.location.href = e6;
        }
        return false;
      }, window.addEventListener("popstate", async (e6) => {
        let o8 = e6.target.location.pathname;
        await window.nijor.renderRoute(o8), window.nijor.previousRoute = o8, window.nijor.emitEvent("route", window.location.pathname);
      }), window.nijor.setRoute = function(e6, o8, t5) {
        window.nijor.routes.set(e6, async (e7) => {
          try {
            let { default: n13 } = await o8(), i8 = document.getElementById(`routes-slot-${t5}`);
            i8 ? i8.innerHTML = "<app></app>" : (await window.nijor.slots.get(`${t5}`)(), document.getElementById(`routes-slot-${t5}`).innerHTML = "<app></app>"), n13.init("app"), await n13.run(e7);
          } catch (e8) {
          }
        });
      }, window.nijor.addSlot = function(e6, o8) {
        window.nijor.slots.set(e6, async () => {
          try {
            let { default: e7 } = await o8(), t5 = document.getElementById("routes-slot-/");
            t5 && (t5.innerHTML = "<app></app>"), e7.init("app"), await e7.run();
          } catch (e7) {
            console.log(e7);
          }
        });
      }, window.nijor.renderRoute = async function(e6) {
        return e6.endsWith("/") && "/" != e6 && (e6 = e6.substring(0, e6.length - 1)), e6.endsWith(".html") && (e6 = e6.slice(0, -5), history.replaceState(null, null, e6)), window.nijor.routes.has(e6) ? await window.nijor.routes.get(e6)() : await async function(e7, t5) {
          for (const [o8, n13] of t5.entries())
            if (o8 instanceof RegExp) {
              const t6 = o8.exec(e7);
              if (!t6)
                continue;
              let i8 = t6.slice(1, t6.length);
              if (i8[0].indexOf("/") > -1)
                continue;
              return await n13(i8);
            }
          await o7(e7);
        }(e6, window.nijor.routes);
      }, window.nijor.renderSlots = async function(e6) {
        if (e6.endsWith("/") && "/" != e6 && (e6 = e6.substring(0, e6.length - 1)), window.nijor.slots.has(e6))
          return await window.nijor.slots.get(e6)();
      }, window.nijor.AutoTheme = function() {
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
      window.nijor.setTheme = function(e6) {
        if ("light" === e6)
          return document.body.classList.remove("dark-mode"), void window.localStorage.setItem("theme", "light");
        if ("dark" === e6)
          return document.body.classList.add("dark-mode"), void window.localStorage.setItem("theme", "dark");
        if ("auto" === e6) {
          window.localStorage.setItem("theme", "auto"), window.matchMedia("(prefers-color-scheme: dark)").matches ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");
        }
      }, window.nijor.getTheme = () => window.localStorage.getItem("theme") || "auto", window.nijor.getColorScheme = () => true === window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      t = "data:image/svg+xml,%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 20010904//EN' 'http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd'%3e%3csvg version='1.0' xmlns='http://www.w3.org/2000/svg' width='150px' height='150px' viewBox='0 0 1500 1500' preserveAspectRatio='xMidYMid meet'%3e%3cg id='layer101' fill='%2300a2e8' stroke='none'%3e %3cpath d='M150 1397 c0 -8 -5 -17 -11 -19 -7 -2 21 -200 80 -567 50 -310 91 -568 91 -572 0 -5 6 -9 12 -9 7 0 178 165 380 367 l368 368 1 -360 1 -360 99 -94 c55 -52 102 -91 105 -88 10 10 -157 1131 -169 1139 -7 4 -16 8 -22 8 -5 0 -175 -165 -377 -367 l-368 -368 -1 380 -1 380 -94 89 c-54 51 -94 82 -94 73z'/%3e %3c/g%3e%3cg id='layer102' fill='%230ec4f8' stroke='none'%3e %3cpath d='M703 838 l-363 -363 0 -120 0 -120 365 365 366 366 -3 117 -3 117 -362 -362z'/%3e %3c/g%3e%3c/svg%3e";
      i7 = { "/docs": "docs", "/examples": "examples", "/faq": "faq" };
      window.nijorfunc._igOpenCloseMenu = function(e6) {
        let o8 = document.getElementById("docs-sidenav-mobile");
        if ("menu" === e6.innerHTML)
          return o8.style.width = "75%", void (e6.innerHTML = "close");
        o8.style.width = "0%", e6.innerHTML = "menu";
      }, window.nijorfunc._igChangeRoute = function(e6, o8) {
        e6.style.display = "flex", e6.querySelectorAll(".nav-link").forEach((e7) => {
          e7.style.color = "white", e7.getAttribute("tab") === i7["/" + o8.split("/")[1]] && (e7.style.color = "#07b0ff");
        }), screen.width < 600 && ("/docs" != window.location.pathname ? (document.getElementById("header-nijor-logo").style.display = "block", document.getElementById("header-nijor-menu").style.display = "none") : (document.getElementById("header-nijor-logo").style.display = "none", document.getElementById("header-nijor-menu").style.display = "block", document.getElementById("header-nijor-menu").innerHTML = "menu"));
      }, window.nijorfunc._igChangeTheme = n12, window.nijorfunc._igChangeTheme = n12;
      r2 = new window.nijor.component(async function() {
        return `<div class="container" n-scope="LDNTGAG1O">
        <span class="material-symbols-sharp menu" id="header-nijor-menu" n-scope="LDNTGAG1O" onclick="window.nijorfunc._igOpenCloseMenu(this)">menu</span>
        <a class="logo" id="header-nijor-logo" n-scope="LDNTGAG1O" onclick="return window.nijor.redirect(this.href)" href="/"><img src="${t}" n-scope="LDNTGAG1O"></a>
        <div class="nav-bar" n-scope="LDNTGAG1O" onroute="window.nijorfunc._igChangeRoute(this,$data)">
            <a tab="docs" class="nav-link" n-scope="LDNTGAG1O" onclick="return window.nijor.redirect(this.href)" href="/docs">Docs</a>
            <a href="https://github.com/nijorjs" class="nav-link" n-scope="LDNTGAG1O">Github</a>
            <a tab="faq" class="nav-link" n-scope="LDNTGAG1O" onclick="return window.nijor.redirect(this.href)" href="/faq">FAQ</a>
            <button class="material-symbols-sharp theme-dark-btn" n-scope="LDNTGAG1O" onclick="window.nijorfunc._igChangeTheme()">dark_mode</button>
            <button class="material-symbols-sharp theme-light-btn" n-scope="LDNTGAG1O" onclick="window.nijorfunc._igChangeTheme()">light_mode</button>
        </div>
    </div>
`;
      }, async function() {
      });
      s3 = new window.nijor.component(async function() {
        return '<header73o3g n-scope="KOJDoi28I8RO1YJ"></header73o3g>\n    <div style="margin-top: 5rem;" id="routes-slot-/" n-scope="KOJDoi28I8RO1YJ"></div>\n';
      }, async function() {
        r2.init("header73o3g"), await r2.run();
      });
      window.nijor.addSlot("/docs", () => Promise.resolve().then(() => (init_nijor_73f734c6(), nijor_73f734c6_exports))), window.nijor.addSlot("/faq", () => Promise.resolve().then(() => (init_nijor_2f875b4d(), nijor_2f875b4d_exports))), window.nijor.setRoute("/404", () => Promise.resolve().then(() => (init_c11cdd7e(), c11cdd7e_exports)), "/"), window.nijor.setRoute("/docs/code-splitting", () => Promise.resolve().then(() => (init_code_splitting_1dede25d(), code_splitting_1dede25d_exports)), "/docs"), window.nijor.setRoute("/docs/components", () => Promise.resolve().then(() => (init_components_3a91deb0(), components_3a91deb0_exports)), "/docs"), window.nijor.setRoute("/docs/custom-events", () => Promise.resolve().then(() => (init_custom_events_6556987d(), custom_events_6556987d_exports)), "/docs"), window.nijor.setRoute("/docs/dark-mode", () => Promise.resolve().then(() => (init_dark_mode_be4fe1c9(), dark_mode_be4fe1c9_exports)), "/docs"), window.nijor.setRoute("/docs/examples", () => Promise.resolve().then(() => (init_examples_b5b76025(), examples_b5b76025_exports)), "/docs"), window.nijor.setRoute("/docs/functional-attributes", () => Promise.resolve().then(() => (init_functional_attributes_92bcf66e(), functional_attributes_92bcf66e_exports)), "/docs"), window.nijor.setRoute("/docs", () => Promise.resolve().then(() => (init_index_b27605c5(), index_b27605c5_exports)), "/docs"), window.nijor.setRoute("/docs/installation", () => Promise.resolve().then(() => (init_installation_bdd93437(), installation_bdd93437_exports)), "/docs"), window.nijor.setRoute("/docs/nijor-cli", () => Promise.resolve().then(() => (init_nijor_cli_6726e98b(), nijor_cli_6726e98b_exports)), "/docs"), window.nijor.setRoute("/docs/reactivity", () => Promise.resolve().then(() => (init_reactivity_7b937a0d(), reactivity_7b937a0d_exports)), "/docs"), window.nijor.setRoute("/docs/routing", () => Promise.resolve().then(() => (init_routing_76d2102d(), routing_76d2102d_exports)), "/docs"), window.nijor.setRoute("/docs/routing.old", () => Promise.resolve().then(() => (init_routing_old_8a15e367(), routing_old_8a15e367_exports)), "/docs"), window.nijor.setRoute("/docs/structure", () => Promise.resolve().then(() => (init_structure_6a7fad2b(), structure_6a7fad2b_exports)), "/docs"), window.nijor.setRoute("/faq/How-Nijor-Works", () => Promise.resolve().then(() => (init_How_Nijor_Works_11b19312(), How_Nijor_Works_11b19312_exports)), "/faq"), window.nijor.setRoute("/faq/How-Scoped-CSS-Works", () => Promise.resolve().then(() => (init_How_Scoped_CSS_Works_cdb3b1af(), How_Scoped_CSS_Works_cdb3b1af_exports)), "/faq"), window.nijor.setRoute("/faq/enei", () => Promise.resolve().then(() => (init_enei_71233717(), enei_71233717_exports)), "/faq"), window.nijor.setRoute("/faq", () => Promise.resolve().then(() => (init_index_7c00ea91(), index_7c00ea91_exports)), "/faq"), window.nijor.setRoute("/faq/virtual-dom", () => Promise.resolve().then(() => (init_virtual_dom_20a6469f(), virtual_dom_20a6469f_exports)), "/faq"), window.nijor.setRoute("/", () => Promise.resolve().then(() => (init_index_e0ca6fd1(), index_e0ca6fd1_exports)), "/"), window.nijor.setRoute("/internet-error", () => Promise.resolve().then(() => (init_internet_error_a90ac108(), internet_error_a90ac108_exports)), "/"), s3.init("app"), s3.run();
      a = window.location.pathname;
      window.nijor.renderRoute(a), setTimeout(() => window.nijor.emitEvent("route", window.location.pathname), 1);
    }
  });
  init_app();
})();
