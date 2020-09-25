(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{455:function(e,t,n){"use strict";n.r(t);var o=n(3),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"building-plugin-apps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#building-plugin-apps"}},[e._v("#")]),e._v(" Building plugin apps")]),e._v(" "),n("p",[e._v("You can build a plugin app by using the following steps as a model. Alternatively, you can follow the "),n("a",{attrs:{href:"https://github.com/zowe/sample-angular-app/blob/lab/step-1-hello-world/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sample Angular App tutorial"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("The basic requirement for a plugin app is that static web content must be in a "),n("code",[e._v("/web")]),e._v(" directory, and server and other backend files must be in a "),n("code",[e._v("/lib")]),e._v(" directory. You can place other plugin source code anywhere.")]),e._v(" "),n("p",[e._v("Before you can build a plugin app you must install all "),n("a",{attrs:{href:"https://github.com/zowe/zlux-app-server#0-install-prerequisites",target:"_blank",rel:"noopener noreferrer"}},[e._v("prerequisites"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"building-web-content"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#building-web-content"}},[e._v("#")]),e._v(" Building web content")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("On the computer where the virtual desktop is installed, use the the following command to specify a value for the "),n("code",[e._v("MVD_DESKTOP_DIR")]),e._v(" environment variable:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("export MVD_DESKTOP_DIR=/<path>/zowe/zlux-app-manager/virtual-desktop\n")])])]),n("p",[e._v("Where "),n("code",[e._v("<path>")]),e._v(" is the install location of the virtual desktop.")])]),e._v(" "),n("li",[n("p",[e._v("Navigate to "),n("code",[e._v("/<plugin_dir>/webClient")]),e._v(".  If there is no "),n("code",[e._v("/webClient")]),e._v(" directory, proceed to the "),n("strong",[e._v("Building server content")]),e._v(" section below.")])]),e._v(" "),n("li",[n("p",[e._v("Run the "),n("code",[e._v("npm install")]),e._v(" command to install any application dependencies. Check for successful return code.")])]),e._v(" "),n("li",[n("p",[e._v("Run one of the following commands to build the application code:")]),e._v(" "),n("ul",[n("li",[e._v("Run the "),n("code",[e._v("npm run build")]),e._v(" command to generate static content in the "),n("code",[e._v("/web")]),e._v(" directory. (You can ignore warnings as long as the build is successful.)")]),e._v(" "),n("li",[e._v("Run the "),n("code",[e._v("npm run start")]),e._v(" command to compile in real-time. Until you stop the script, it compiles code changes as you make them.")])])])]),e._v(" "),n("h2",{attrs:{id:"building-server-content"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#building-server-content"}},[e._v("#")]),e._v(" Building server content")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Navigate to the plugin directory. If there is no "),n("code",[e._v("/nodeServer")]),e._v(" directory in the plugin directory, procede to the "),n("strong",[e._v("Building Javascript content (*.js files)")]),e._v(" section below.")])]),e._v(" "),n("li",[n("p",[e._v("Run the "),n("code",[e._v("npm install")]),e._v(" command to install any application dependencies. Check for successful return code.")])]),e._v(" "),n("li",[n("p",[e._v("Run one of the following commands to build the application code:")]),e._v(" "),n("ul",[n("li",[e._v("Run the "),n("code",[e._v("npm run build")]),e._v(" command to generate static content in the "),n("code",[e._v("/lib")]),e._v(" directory.")]),e._v(" "),n("li",[e._v("Run the "),n("code",[e._v("npm run start")]),e._v(" command to compile in real-time. Until you stop the script, it compiles code changes as you make them.")])])])]),e._v(" "),n("h2",{attrs:{id:"tagging-plugin-files-on-z-os"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tagging-plugin-files-on-z-os"}},[e._v("#")]),e._v(" Tagging plugin files on z/OS")]),e._v(" "),n("p",[e._v("When Zowe App Framework is installed on z/OS developrs should tag their plugin files according to the file content. Tagging files helps programs on z/OS understand how to interpret those files, most importantly to know whether a file is encoded using EBCDIC (Extended Binary Coded Decimal Interchange Code). If you are unsure if a plugin you are using is tagged, it can be checked and set using the "),n("a",{attrs:{href:"https://www.ibm.com/support/knowledgecenter/SSLTBW_2.2.0/com.ibm.zos.v2r2.bpxa500/chtag.htm",target:"_blank",rel:"noopener noreferrer"}},[n("code",[e._v("chtag")]),e._v(" command"),n("OutboundLink")],1),e._v(". If you want to set the tags, it can be done in bulk with the help of these programs:")]),e._v(" "),n("ul",[n("li",[e._v("Autotag: This free, open-source application is not part of Zowe. You can download the binary from here for example https://anaconda.org/izoda/autotag. Source: https://github.com/RocketSoftware/autotag")]),e._v(" "),n("li",[e._v("The Zowe tagging script: This script tags by file extension. It might not work for all cases, but can be altered to suit your needs. Source: https://github.com/zowe/zowe-install-packaging/blob/master/scripts/tag-files.sh")])]),e._v(" "),n("h2",{attrs:{id:"building-javascript-content-js-files"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#building-javascript-content-js-files"}},[e._v("#")]),e._v(" Building Javascript content (*.js files)")]),e._v(" "),n("p",[e._v("Unlike Typescript, Javascript is an interpreted language and does not need to be built. In most cases, reloading the page should build new code changes. For Iframes or other JS-based apps, close and open the app.")]),e._v(" "),n("h2",{attrs:{id:"installing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installing"}},[e._v("#")]),e._v(" Installing")]),e._v(" "),n("p",[e._v("Follow the steps described in "),n("router-link",{attrs:{to:"/extend/extend-desktop/mvd-installplugins.html"}},[e._v("Installing plugins")]),e._v(" to add your built plugin to the Zowe desktop.")],1),e._v(" "),n("h2",{attrs:{id:"packaging"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#packaging"}},[e._v("#")]),e._v(" Packaging")]),e._v(" "),n("p",[e._v("For more information on how to package your Zowe app, developers can see "),n("router-link",{attrs:{to:"/extend/extend-desktop/mvd-plugindefandstruct.html"}},[e._v("Plugins definition and structure")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=a.exports}}]);