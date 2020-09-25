(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{463:function(e,t,s){"use strict";s.r(t);var r=s(3),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"zlux-app-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zlux-app-server"}},[e._v("#")]),e._v(" zlux-app-server")]),e._v(" "),s("p",[e._v("This is the default setup of the Zowe App Server, built upon the zLUX framework. Within, you will find a collection of build, deploy, and run scripts as well as configuration files that will help you to configure a simple App Server and add a few Apps.")]),e._v(" "),s("p",[s("strong",[e._v("To request features or report bugs, please use the issues page at the "),s("a",{attrs:{href:"https://github.com/zowe/zlux/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("zlux repo"),s("OutboundLink")],1),e._v(" with the server infrastructure or server security tags")])]),e._v(" "),s("h2",{attrs:{id:"server-layout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-layout"}},[e._v("#")]),e._v(" Server layout")]),e._v(" "),s("p",[e._v("At the core of the zLUX App infrastructure backend is an extensible server, written for nodeJS and utilizing expressJS for routing. It handles the backend components of Apps, and also can serve as a proxy for requests from Apps to additional servers as needed. One such proxy destination is the ZSS - a Zowe backend component called "),s("strong",[e._v("Zowe System Services")]),e._v(". It's a so-called Agent for the App Server.")]),e._v(" "),s("h3",{attrs:{id:"zss-zlux-server-overlap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zss-zlux-server-overlap"}},[e._v("#")]),e._v(" ZSS & zLUX Server overlap")]),e._v(" "),s("p",[e._v("The zLUX App Server and ZSS utilize the same deployment & App/Plugin structure, and share some configuration parameters as well. It is possible to run ZSS and zLUX App Server from the same system, in which case you would be running under z/OS USS. This configuration requires that IBM's version of nodeJS is installed prior.")]),e._v(" "),s("p",[e._v("Another way to set up zLUX is to have the zLUX App Server running under LUW, while keeping ZSS under USS. This is the configuration scenario presented below. In this scenario, you'll need to clone these github repositories to two different systems, and they'll need to have compatible configurations. For first-timers, it is fine to have identical configuration files and /plugins folders in order to get going.")]),e._v(" "),s("h2",{attrs:{id:"first-time-installation-use"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#first-time-installation-use"}},[e._v("#")]),e._v(" First-time Installation & Use")]),e._v(" "),s("p",[e._v("Getting started with this server requires just a few steps:")]),e._v(" "),s("ol",{attrs:{start:"0"}},[s("li",[s("a",{attrs:{href:"#0-install-prerequisites"}},[e._v("Install Prerequisites")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#1-acquire-the-source-code"}},[e._v("Acquire the Source Code")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#2-initial-build"}},[e._v("Initial Build")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#3-initial-startup"}},[e._v("Initial Startup")]),e._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"#server-logs"}},[e._v("Server Logs")])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#4-connect-in-a-browser"}},[e._v("Connect in a Browser!")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#5-customizing-configuration"}},[e._v("Customizing Configuration")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#6-adding-plugins"}},[e._v("Adding Plugins")]),e._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"#plugin-build--add-example"}},[e._v("Plugin Build & Add Example")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#adding-more-plugins"}},[e._v("Adding More Plugins")])])])]),e._v(" "),s("li",[s("a",{attrs:{href:"#7-adding-zss-to-the-environment"}},[e._v("Adding ZSS to the Environment")]),e._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"#building-zss"}},[e._v("Building ZSS")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#configuring-app-server-to-use-zss"}},[e._v("Configuring App Server to Use ZSS")])]),e._v(" "),s("li",[s("a",{attrs:{href:"#starting-app-server-when-using-zss"}},[e._v("Starting App Server When Using ZSS")])])])])]),e._v(" "),s("p",[e._v("Follow each step and you'll be on your way to your first App Server instance!")]),e._v(" "),s("h2",{attrs:{id:"_0-install-prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_0-install-prerequisites"}},[e._v("#")]),e._v(" 0. Install Prerequisites")]),e._v(" "),s("p",[e._v("Wherever the App Server is installed, the following is required for running:")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("NodeJS")]),e._v(" - v6.14.4 minimum, v12 maximum for z/OS. Elsewhere, 6 through 12 work well.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("npm")]),e._v(" - v6.4 minimum")])])]),e._v(" "),s("p",[e._v("For building zLUX framework and apps:")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("jdk")]),e._v(" - v8 minimum")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("ant")]),e._v(" - v1.10 minimum")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("ant-contrib")]),e._v(" - v1 minimum")])])]),e._v(" "),s("p",[e._v("For building zss ("),s("a",{attrs:{href:"#7-adding-zss-to-the-environment"}},[e._v("Section 7")]),e._v("):")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("IBM z/OS XLC compiler for Metal C Compilation")])])]),e._v(" "),s("p",[e._v("For development:")]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("git")]),e._v(" - 2.18 or higher is recommended off z/os")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("ssh agent")]),e._v(" - Our repositories are structured to expect that you have ssh keys setup for github. This assists with rapid development and automation.\nGit bash or putty's pageant are some of various tools that can help you setup & work with ssh keys over git.")])])]),e._v(" "),s("h3",{attrs:{id:"optional-install-git-for-z-os"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#optional-install-git-for-z-os"}},[e._v("#")]),e._v(" (Optional) Install git for z/OS")]),e._v(" "),s("p",[e._v("Because all of our code is on github, yet ZSS must run on z/OS and the zLUX App Server may optionally run on z/OS as well, having git on z/OS is the most convenient way to work with the source code. The alternative would be to utilize FTP or another method to transfer contents to z/OS.\nIf you'd like to go this route, you can find git for z/OS free of charge here:\nhttp://www.rocketsoftware.com/product-categories/mainframe/git-for-zos")]),e._v(" "),s("p",[e._v("On z/OS, git 2.14.4 is the minimum needed.")]),e._v(" "),s("h2",{attrs:{id:"_1-acquire-the-source-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-acquire-the-source-code"}},[e._v("#")]),e._v(" 1. Acquire the source code")]),e._v(" "),s("p",[e._v("Afterwards, clone (or download) the github capstone repository, https://github.com/zowe/zlux\nAs we'll be configuring ZSS on z/OS's USS, and the zLUX App Server on a LUW host, you'll need to put the contents on both systems.\nIf using git, the following commands should be used:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('git clone --recursive git@github.com:zowe/zlux.git\ncd zlux\ngit submodule foreach "git checkout master"\n')])])]),s("p",[e._v('For the initial setup, the default authentication is the "trivial authentication" plugin, which allows login to the App Server without valid credentials. At the end of this guide, you can customize the environment to switch to a secure authentication plugin instead, such as the ZSS authentication plugin, covered in '),s("a",{attrs:{href:"#7-adding-zss-to-the-environment"}},[e._v("Section 7")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"_2-initial-build"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-initial-build"}},[e._v("#")]),e._v(" 2. Initial build")]),e._v(" "),s("p",[e._v("Now you'll have the latest code for the server.\nThe App Server framework & core plugins contain server and/or web components.\nSince these web components use webpack for packaging optimization, and server components may use typescript or other software that requires compiling, it is necessary to build the code before using the server and plugins.")]),e._v(" "),s("p",[e._v("There are utilities within the zlux-build folder for initializing & building core plugins and the framework itself, which will be used.\nHowever, those tools are not needed when building individual plugins, as it is faster to build them each as needed when "),s("a",{attrs:{href:"https://github.com/zowe/zlux/wiki/Building-Plugins",target:"_blank",rel:"noopener noreferrer"}},[e._v("following this documentation."),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("On the host running the App Server, run the script that will automatically build all included Apps:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd zlux-build\n\n//Windows\nbuild.bat\n\n//Otherwise\n./build.sh\n")])])]),s("p",[e._v("This will take some time to complete.")]),e._v(" "),s("p",[s("strong",[e._v("Note when building, NPM is used. The version of NPM needed for the build to succeed should be at least 6.4. You can update NPM by executing "),s("code",[e._v("npm install -g npm")])])]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" It has been reported that building can hang on Windows if you have put the code in a directory that has a symbolic link. Build time can depend on hardware speed, but should take minutes not hours.")]),e._v(" "),s("p",[e._v("Upon completion, the App Server is ready to be run.")]),e._v(" "),s("h2",{attrs:{id:"_3-initial-startup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-initial-startup"}},[e._v("#")]),e._v(" 3. Initial startup")]),e._v(" "),s("p",[e._v("To start the App Server with all default settings, do the following:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd ../zlux-app-server/bin\n\n// Windows:\napp-server.bat\n\n// Others:\n./app-server.sh\n")])])]),s("p",[e._v("When the App Server has started, one of the messages you will see as bootstrapping completes is that the server is listening on the HTTP/s port. Now, the server is ready for use.")]),e._v(" "),s("h3",{attrs:{id:"server-logs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-logs"}},[e._v("#")]),e._v(" Server Logs")]),e._v(" "),s("p",[e._v("When the server starts, it writes logs to a text file. On z/OS, Unix, and Linux, the server also logs to the terminal via stdout.\nTo view the entire logs, you can find the log file within "),s("code",[e._v("<INSTANCE_DIR>/logs")]),e._v(", which will default to "),s("code",[e._v("~/.zowe/logs")]),e._v(" or "),s("code",[e._v("%USERPROFILE%/.zowe/logs")]),e._v(' (Windows) if INSTANCE_DIR is not specified. The log file starts with "appServer" and the filename may also include a timestamp.')]),e._v(" "),s("h2",{attrs:{id:"_4-connect-in-a-browser"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-connect-in-a-browser"}},[e._v("#")]),e._v(" 4. Connect in a browser")]),e._v(" "),s("p",[e._v("With the App Server started, you can access Apps and the Zowe Desktop from it in a web browser.\nIn this example, the address you will want to go to first is the location of the window management App - Zowe Desktop.\nThe URL for this is:")]),e._v(" "),s("p",[e._v("https://<App Server>:8544/ZLUX/plugins/org.zowe.zlux.bootstrap/web/index.html")]),e._v(" "),s("p",[e._v("Once here, you should be greeted with a Login screen. By default trivial authentication is used which allows to login with arbitrary credentials.\nSo, you can type in any username to get access to the desktop, which likely does not yet have any Apps. Next, the server should be configured, Apps added, and authentication set up.")]),e._v(" "),s("h2",{attrs:{id:"_5-customizing-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-customizing-configuration"}},[e._v("#")]),e._v(" 5. Customizing configuration")]),e._v(" "),s("p",[e._v("Read the "),s("a",{attrs:{href:"https://github.com/zowe/zlux/wiki/Configuration-for-zLUX-App-Server-&-ZSS",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configuration"),s("OutboundLink")],1),e._v(" wiki page for a detailed explanation of the primary items that you'll want to configure for your server.")]),e._v(" "),s("p",[e._v("In short, determine the location of your instance directory (Environment variable "),s("code",[e._v("INSTANCE_DIR")]),e._v(", or "),s("code",[e._v("~/.zowe")]),e._v(" (Linux, Unix, z/OS) or "),s("code",[e._v("%USERPROFILE%/.zowe")]),e._v(" when "),s("code",[e._v("INSTANCE_DIR")]),e._v(" is not defined)\nWithin the instance directory, edit "),s("strong",[e._v("workspace/app-server/serverConfig/server.json")]),e._v(" to change attributes such as the HTTPS port via "),s("strong",[e._v("node.https.port")]),e._v(", or the location of plugins.")]),e._v(" "),s("h2",{attrs:{id:"_6-adding-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-adding-plugins"}},[e._v("#")]),e._v(" 6. Adding Plugins")]),e._v(" "),s("p",[s("strong",[e._v("Note when building, NPM is used. The version of NPM needed for the build to succeed should be at least 6.4. You can update NPM by executing "),s("code",[e._v("npm install -g npm")])])]),e._v(" "),s("p",[e._v('Plugins, like the framework, can contain server and/or web components, either of which may need to be built using technologies such as webpack and typescript.\nThe Plugins which have web components are also called "Apps" within the UI.\nTo add a plugin to the server, it must first be built. Plugins that you download may already be pre-built.')]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/zowe/zlux/wiki/Building-Plugins",target:"_blank",rel:"noopener noreferrer"}},[e._v("Click here to read about building plugins"),s("OutboundLink")],1)]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/zowe/zlux/wiki/Installing-Plugins",target:"_blank",rel:"noopener noreferrer"}},[e._v("Click here to read about installing plugins"),s("OutboundLink")],1)]),e._v(" "),s("h3",{attrs:{id:"plugin-build-add-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugin-build-add-example"}},[e._v("#")]),e._v(" Plugin Build & Add Example")]),e._v(" "),s("p",[e._v("Following the references above, this is how you can add a TN3270 terminal emulator app to your App Server, for an App server installed in "),s("code",[e._v("~/my-zowe")])]),e._v(" "),s("ol",[s("li",[s("code",[e._v("git clone https://github.com/zowe/tn3270-ng2.git ~/my-zowe/tn3270-ng2")])]),e._v(" "),s("li",[s("code",[e._v("cd ~/my-zowe/tn3270-ng2")])]),e._v(" "),s("li",[e._v("Set the environment variable "),s("code",[e._v("MVD_DESKTOP_DIR")]),e._v(" to the path of zlux-app-manager/virtual-desktop, such as "),s("code",[e._v("export MVD_DESKTOP_DIR=~/my-zowe/zlux-app-manager/virtual-desktop")])]),e._v(" "),s("li",[s("code",[e._v("cd webClient")])]),e._v(" "),s("li",[s("code",[e._v("npm install")])]),e._v(" "),s("li",[s("code",[e._v("npm run build")]),e._v(" (This will take some time to complete.)")]),e._v(" "),s("li",[s("code",[e._v("cd ~/my-zowe/zlux-app-server/bin")])]),e._v(" "),s("li",[s("code",[e._v("./install-app.sh ~/my-zowe/tn3270-ng2")])])]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" If on Windows, try "),s("code",[e._v("%USERPROFILE%/")]),e._v(" instead of "),s("code",[e._v("~/")]),e._v(", and "),s("code",[e._v("install-app.bat")]),e._v(" instead of "),s("code",[e._v("./install-app.sh")])]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" In a production environment you should not have 3rd party apps in the same root folder as the App Server, but currently some apps have relative path limitations during build & development that lead to developing apps within the same root folder.")]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" It has been reported that building can hang on Windows if you have put the code in a directory that has a symbolic link. Build time can depend on hardware speed, but should take minutes not hours.")]),e._v(" "),s("h3",{attrs:{id:"adding-more-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#adding-more-plugins"}},[e._v("#")]),e._v(" Adding more plugins")]),e._v(" "),s("p",[e._v("Several plugins are available for use in Zowe. Some of them may require ZSS, which can be set up in the next steps\nHere are a few plugins which you can clone to experiment with development:")]),e._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/zowe/sample-angular-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("sample-angular-app"),s("OutboundLink")],1),e._v(": A simple app showing how a zLUX App frontend (here, Angular) component can communicate with an App backend (REST) component.")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/zowe/sample-react-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("sample-react-app"),s("OutboundLink")],1),e._v(": Similar to the Angular App, but using React instead to show how you have the flexibility to use a framework of your choice.")]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/zowe/sample-iframe-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("sample-iframe-app"),s("OutboundLink")],1),e._v(": Similar in functionality to the Angular & React Apps, but presented via inclusion of an iframe, to show that even pre-existing pages can be included")])]),e._v(" "),s("p",[e._v("You can clone them all via:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git clone git@github.com:zowe/sample-angular-app.git\ngit clone git@github.com:zowe/sample-react-app.git\ngit clone git@github.com:zowe/sample-iframe-app.git\n")])])]),s("h2",{attrs:{id:"_7-adding-zss-to-the-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-adding-zss-to-the-environment"}},[e._v("#")]),e._v(" 7. Adding ZSS to the environment")]),e._v(" "),s("p",[e._v("Like the App Server, ZSS is an HTTP(S) server component of Zowe.\nHowever unlike the App Server, ZSS is a z/OS specific component which exists to provide core low-level & security APIs, as well as a place to attach lower-level plugins than could be built with the App Server. The configuration, directories, and network-level API structures are similar, as these servers work together to support Apps.\nAlso, some of the low-level APIs are made possibly by ZSS working in concert with the Zowe Cross Memory Server, which is not an HTTP(S) server, but ZSS provides any needed HTTP(S) access. So, if you need the APIs provided by ZSS, or want to build & use low-level plugins, then you must add ZSS and the Cross Memory Server to your Zowe environment.")]),e._v(" "),s("p",[e._v("Since ZSS adheres to the same configuration & directory structure as the App server, the easiest way to set up ZSS is to clone all of the App Server repos ("),s("a",{attrs:{href:"#1-acquire-the-source-code"}},[e._v("Step 1")]),e._v(") onto z/OS if you have not already done so. However, strictly speaking the only non-ZSS repo needed is the "),s("code",[e._v("zlux-app-server")]),e._v(" repo because it contains the scripts that are used to start the servers.")]),e._v(" "),s("h3",{attrs:{id:"building-zss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#building-zss"}},[e._v("#")]),e._v(" Building ZSS")]),e._v(" "),s("p",[e._v("To build ZSS from source, it is recommended to use git on z/OS. You can use this command to get the code:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git clone --recursive git@github.com:zowe/zss.git\ncd zss/build\n")])])]),s("p",[s("strong",[e._v("The code must be placed on z/OS")]),e._v(", as ZSS can only be compiled there and will only run there.")]),e._v(" "),s("p",[e._v("Now, you can build both ZSS and the Cross Memory Server via:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("./build_zss.sh\n./build_zis.sh\n")])])]),s("p",[e._v("A successful build will result in the ZSS binary being placed at "),s("code",[e._v("zss/bin/zssServer")]),e._v(". To use it, you need to copy "),s("code",[e._v("zssServer")]),e._v(" to the "),s("code",[e._v("zlux-app-server/bin")]),e._v(" directory, so that you can either run it directly via "),s("code",[e._v("zssServer.sh")]),e._v(" or have the App Server automatically start it when the App Server is run via "),s("code",[e._v("app-server.sh")]),e._v(".")]),e._v(" "),s("p",[e._v("Before running, you must set also set program control attribute on the ZSS binary. It is needed to make the APIs run under the authenticated user's permissions.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cp zssServer ../../zlux-app-server/bin\nextattr +p ../../zlux-app-server/bin/zssServer\n")])])]),s("p",[e._v("Finally, the ZSS Cross memory server must be installed and configured according to "),s("a",{attrs:{href:"https://github.com/zowe/docs-site/blob/master/docs/user-guide/install-zos.md#manually-installing-the-zowe-cross-memory-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("This Install Guide"),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("With ZSS built, you can now run it in one of two ways.")]),e._v(" "),s("ul",[s("li",[e._v("Run it independently of the App Server via "),s("code",[e._v("zlux-app-server/bin/zssServer.sh")]),e._v(" or")]),e._v(" "),s("li",[e._v("Run the App Server and it will attempt to start "),s("code",[e._v("zssServer.sh")]),e._v(" as a child process, due to it being defined as a child process in the server.json")])]),e._v(" "),s("h3",{attrs:{id:"configuring-app-server-to-use-zss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-app-server-to-use-zss"}},[e._v("#")]),e._v(" Configuring App Server to use ZSS")]),e._v(" "),s("p",[e._v("In App Server terminology, ZSS is a "),s("strong",[e._v("Agent")]),e._v(", where the Agent is responsible for fulfilling low-level & OS-specific APIs that the App Server delegates. In order to use the App Server and ZSS together, your App Server must be configured to use it as an Agent, and setup with a security plugin which uses ZSS as an App Server security provider.")]),e._v(" "),s("h4",{attrs:{id:"security-provider-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#security-provider-setup"}},[e._v("#")]),e._v(" Security Provider Setup")]),e._v(" "),s("p",[e._v("To add ZSS as a security provider, add the "),s("strong",[e._v("zss-auth")]),e._v(" plugin to the App Server. Following "),s("a",{attrs:{href:"#6-adding-plugins"}},[e._v("Section 6")]),e._v(" about adding plugins, you can do the following, where "),s("code",[e._v("INSTANCE_DIR=~/.zowe")]),e._v(" and the App Server in "),s("code",[e._v("~/my-zowe")]),e._v(":")]),e._v(" "),s("ol",[s("li",[s("code",[e._v("git clone git@github.com:zowe/zss-auth.git ~/my-zowe-plugins/zss-auth")])]),e._v(" "),s("li",[s("code",[e._v("cd ~/my-zowe/zlux-app-server/bin")])]),e._v(" "),s("li",[s("code",[e._v("./install-app.sh ~/my-zowe-plugins/zss-auth")])])]),e._v(" "),s("p",[e._v("Then, you need set the configuration of the App Server to prefer that security provider.\nLocate and edit server.json (Within INSTANCE_DIR/workspace/app-server/serverConfig/server.json, such as "),s("code",[e._v("~/.zowe/workspace/app-server/serverConfig/server.json")]),e._v(")\nWithin that file, set "),s("code",[e._v('dataserviceAuthentication.defaultAuthentication = "zss"')]),e._v(" and "),s("code",[e._v('dataserviceAuthentication.implementationDefaults.zss.plugins = ["org.zowe.zlux.auth.zss"]')]),e._v(".")]),e._v(" "),s("p",[e._v("Keep this file open to continue with agent setup.")]),e._v(" "),s("h4",{attrs:{id:"agent-setup-app-server-side"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#agent-setup-app-server-side"}},[e._v("#")]),e._v(" Agent Setup (App Server side)")]),e._v(" "),s("p",[e._v("Within the server.json file, you need to define or set "),s("strong",[e._v("agent.http.ipAddresses")]),e._v(" to a hostname or ip address where ZSS is located that is also visible to the App Server. This could be '0.0.0.0' or '127.0.0.1' if they are located on the same system, but it may otherwise be a hostname or external IP address.\nYou must also define or set "),s("strong",[e._v("agent.http.port")]),e._v(". This is the TCP port which ZSS will listen on to be contacted by the App Server. Define this in the configuration file as a value between 1024-65535. See "),s("a",{attrs:{href:"https://docs.zowe.org/stable/user-guide/mvd-configuration.html#configuring-zss-for-https",target:"_blank",rel:"noopener noreferrer"}},[e._v("zss configuration"),s("OutboundLink")],1),e._v(" for more information and an example.")]),e._v(" "),s("p",[s("strong",[e._v("Note: It is highly recommended to turn on HTTPS for ZSS via "),s("a",{attrs:{href:"https://zowe.github.io/docs-site/latest/user-guide/mvd-configuration.html#configuring-zss-for-https",target:"_blank",rel:"noopener noreferrer"}},[e._v("configuring AT-TLS"),s("OutboundLink")],1),e._v(" when using ZSS externally, as the session security is essential for all but trivial development environments")])]),e._v(" "),s("p",[e._v("As a result of the above edits to server.json, an example of what it may now look like is:")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"node"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"https"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"ipAddresses"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.0.0.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8544")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"keys"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"../defaults/serverConfig/zlux.keystore.key"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"certificates"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"../defaults/serverConfig/zlux.keystore.cer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"certificateAuthorities"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"../defaults/serverConfig/apiml-localca.cer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"childProcesses"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"path"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"../bin/zssServer.sh"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"once"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"agent"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"host"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"localhost"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"http"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"ipAddresses"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"127.0.0.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"port"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8542")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"productDir"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"../defaults"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"siteDir"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"~/.zowe/workspace/app-server/site"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"instanceDir"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"~/.zowe/workspace/app-server"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"groupsDir"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"~/.zowe/workspace/app-server/groups"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"usersDir"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"~/.zowe/workspace/app-server/users"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"pluginsDir"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"~/.zowe/workspace/app-server/plugins"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"dataserviceAuthentication"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"defaultAuthentication"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"zss"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"rbac"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"implementationDefaults"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"zss"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n       "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"plugins"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"org.zowe.zlux.auth.zss"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"fallback"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"plugins"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"org.zowe.zlux.auth.trivial"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("h4",{attrs:{id:"agent-setup-zss-side"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#agent-setup-zss-side"}},[e._v("#")]),e._v(" Agent Setup (ZSS side)")]),e._v(" "),s("p",[e._v("Just like the App Server, the ZSS server reads the server.json file. If App Server and ZSS are on the same system, then this can be the same file. Otherwise, you must edit the server.json file where ZSS is and keep it in sync with the App Server one with regards to the "),s("strong",[e._v("agent")]),e._v(" settings.")]),e._v(" "),s("p",[e._v("Within the server.json file, define or set "),s("strong",[e._v("agent.http.port")]),e._v(" to the port where you want ZSS to listen on. This must be done at minimum on the z/OS host, but can also be done in the zluxserver.json where the App server is running, if it is not the same.")]),e._v(" "),s("h3",{attrs:{id:"starting-app-server-when-using-zss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#starting-app-server-when-using-zss"}},[e._v("#")]),e._v(" Starting App Server when using ZSS")]),e._v(" "),s("p",[e._v("When running the App Server with an Agent such as ZSS, you can either set the "),s("code",[e._v("server.json")]),e._v(" with all info to connect to the Agent, or set that info via environment variable or command line arguments. The above sections detail "),s("code",[e._v("server.json")]),e._v(" configuration, but the other ways to set the IP and port of the Agent are:")]),e._v(" "),s("ol",[s("li",[e._v("Environment variable configuration\nItems in server.json can be substitued by environment variables that have a name that corresponds to each item. The pattern is")])]),e._v(" "),s("p",[s("code",[e._v("ZWED_json_key=value")]),e._v(" where "),s("code",[e._v("ZWED_")]),e._v(" is the prefix, and "),s("code",[e._v("json_key")]),e._v(" is the name of the key. For example,")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ZWED_agent_http_port=9999\nZWED_node_https_ipAddresses=127.0.0.1,192.168.1.100\n")])])]),s("p",[e._v("This would override the "),s("code",[e._v("server.json")]),e._v(" value of "),s("code",[e._v("agent.http.port")]),e._v(" to be 9999, and "),s("code",[e._v("node.https.ipAddresses")]),e._v(" to be ['127.0.0.1','192.168.1.100'].")]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[e._v("CLI argument configuration\nItems in server.json can also be substituded by arguments and flags. The pattern for arguments is")])]),e._v(" "),s("p",[s("code",[e._v("-Djson.key=value")]),e._v(", where "),s("code",[e._v("-D")]),e._v(" denotes an argument, and "),s("code",[e._v("json.key")]),e._v(" is the name of the key. For example,")]),e._v(" "),s("p",[s("code",[e._v("-Dagent.http.port=9999 -Dnode.https.ipAddresses=127.0.0.1,192.168.1.100")]),e._v(" Would set "),s("code",[e._v("agent.http.port")]),e._v(" to be 9999, and "),s("code",[e._v("node.https.ipAddresses")]),e._v(" to be ['127.0.0.1,'192.168.1.100'].")]),e._v(" "),s("p",[e._v("There are also specific flags used for well-known configuration items, such as:")]),e._v(" "),s("ul",[s("li",[s("em",[e._v("-h")]),e._v(': Declares the host where ZSS can be found. Use as "-h <hostname>"')]),e._v(" "),s("li",[s("em",[e._v("-P")]),e._v(": Declares the port at which ZSS is listening.")]),e._v(" "),s("li",[s("em",[e._v("-s")]),e._v(": Declares the https port the App Server will listen on.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);