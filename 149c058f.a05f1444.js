(window.webpackJsonp=window.webpackJsonp||[]).push([[10,16],{138:function(e,t,a){"use strict";var n=a(0),s=a.n(n),i=a(141),o=a(139),r=a(50),l=a.n(r),c=37,b=39;t.a=function(e){var t=e.block,a=e.children,r=e.defaultValue,u=e.values,d=e.groupId,m=e.className,p=Object(i.a)(),h=p.tabGroupChoices,f=p.setTabGroupChoices,v=Object(n.useState)(r),w=v[0],y=v[1],O=Object(n.useState)(!1),j=O[0],g=O[1];if(null!=d){var x=h[d];null!=x&&x!==w&&u.some((function(e){return e.value===x}))&&y(x)}var T=function(e){y(e),null!=d&&f(d,e)},k=[],I=function(e){e.metaKey||e.altKey||e.ctrlKey||g(!0)},N=function(){g(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",I),window.addEventListener("mousedown",N),function(){window.removeEventListener("keydown",I),window.removeEventListener("mousedown",N)}}),[]),s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},m)},u.map((function(e){var t=e.value,a=e.label;return s.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":w===t,className:Object(o.a)("tabs__item",t,l.a.tabItem,{"tabs__item--active":w===t}),style:j?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case b:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),I(e)},onFocus:function(){return T(t)},onClick:function(){T(t),g(!1)},onPointerDown:function(){return g(!1)}},a)}))),s.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===w}))[0]))}},48:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return m}));var n=a(2),s=a(6),i=(a(0),a(137)),o=a(138),r=a(140),l=a(142),c={},b={unversionedId:"snippets/systemdtabs",id:"snippets/systemdtabs",isDocsHomePage:!1,title:"systemdtabs",description:"<Tabs",source:"@site/docs/snippets/systemdtabs.mdx",slug:"/snippets/systemdtabs",permalink:"/docs/snippets/systemdtabs",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/main/docs/snippets/systemdtabs.mdx",version:"current"},u=[],d={rightToc:u};function m(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"code"},Object(i.b)(o.a,{defaultValue:"start",values:[{label:"Start",value:"start"},{label:"Stop",value:"stop"},{label:"Restart",value:"restart"},{label:"Enable",value:"enable"},{label:"Disable",value:"disable"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"start",mdxType:"TabItem"},Object(i.b)(l.a,{children:"sudo systemctl start "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(r.a,{value:"stop",mdxType:"TabItem"},Object(i.b)(l.a,{children:"sudo systemctl stop "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(r.a,{value:"restart",mdxType:"TabItem"},Object(i.b)(l.a,{children:"sudo systemctl restart "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(r.a,{value:"enable",mdxType:"TabItem"},Object(i.b)(l.a,{children:"sudo systemctl enable "+a.service,className:"bash",mdxType:"CodeBlock"})),Object(i.b)(r.a,{value:"disable",mdxType:"TabItem"},Object(i.b)(l.a,{children:"sudo systemctl disable "+a.service,className:"bash",mdxType:"CodeBlock"})))))}m.isMDXComponent=!0},69:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(2),s=a(6),i=(a(0),a(137)),o=a(48),r={id:"webmin",title:"Webmin",sidebar_label:"Webmin"},l={unversionedId:"applications/webmin",id:"applications/webmin",isDocsHomePage:!1,title:"Webmin",description:"Webmin is a web-based user interface for administration of various parts of a Linux system.",source:"@site/docs/applications/webmin.mdx",slug:"/applications/webmin",permalink:"/docs/applications/webmin",editUrl:"https://github.com/liaralabs/docs.swizzin.ltd/edit/main/docs/applications/webmin.mdx",version:"current",sidebar_label:"Webmin",sidebar:"docs",previous:{title:"Shellinabox",permalink:"/docs/applications/shellinabox"},next:{title:"Wireguard",permalink:"/docs/applications/wireguard"}},c=[{value:"How to Install",id:"how-to-install",children:[]},{value:"How to Access",id:"how-to-access",children:[]},{value:"Service Management",id:"service-management",children:[]}],b={rightToc:c};function u(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Webmin is a web-based user interface for administration of various parts of a Linux system."),Object(i.b)("h2",{id:"how-to-install"},"How to Install"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:"main",main:!0}),"sudo box install webmin\n")),Object(i.b)("p",null,"The setup will install the apt repository of Webmin, and pull the latest package for your distribution from there."),Object(i.b)("h2",{id:"how-to-access"},"How to Access"),Object(i.b)("p",null,"If nginx is currently installed, Webmin is available on the address below.\n",Object(i.b)("inlineCode",{parentName:"p"},"https://<hostname.tld>/webmin")),Object(i.b)("p",null,"If nginx is not installed, you can find webmin at\n",Object(i.b)("inlineCode",{parentName:"p"},"https://<hostname.tld>:10000")),Object(i.b)("p",null,"Webmin will authenticate any user who has administrative sudo permissions on the system using its own mechanism. Therefore you should be able to use your master credentials."),Object(i.b)("p",null,"This means that in case you have nginx installed, you will first be asked for the Nginx authentication through the browser UI and then to webmin through the Webmin page. This is a deliberate choice for your own security. If you are already authenticated to the Panel, you will only see the Webmin authentication."),Object(i.b)("h2",{id:"service-management"},"Service Management"),Object(i.b)(o.default,{service:"webmin",mdxType:"SystemdTabs"}))}u.isMDXComponent=!0}}]);