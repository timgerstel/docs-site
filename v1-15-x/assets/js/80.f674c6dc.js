(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{417:function(e,t,i){"use strict";i.r(t);var n=i(3),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"plug-ins-definition-and-structure"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#plug-ins-definition-and-structure"}},[e._v("#")]),e._v(" Plug-ins definition and structure")]),e._v(" "),i("p",[e._v("The Zowe™ Application Server ("),i("code",[e._v("zlux-server-framework")]),e._v(") enables extensiblity with application plug-ins. Application plug-ins are a subcategory of the unit of extensibility in the server called a "),i("em",[e._v("plug-in")]),e._v(".")]),e._v(" "),i("p",[e._v("The files that define a plug-in are located in the "),i("code",[e._v("pluginsDir")]),e._v(" directory.")]),e._v(" "),i("h2",{attrs:{id:"application-plug-in-filesystem-structure"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#application-plug-in-filesystem-structure"}},[e._v("#")]),e._v(" Application plug-in filesystem structure")]),e._v(" "),i("p",[e._v("An application plug-in can be loaded from a filesystem that is accessible to the Zowe Application Server, or it can be loaded dynamically at runtime. When accessed from a filesystem, there are important considerations for the developer and the user as to where to place the files for proper build, packaging, and operation.")]),e._v(" "),i("h3",{attrs:{id:"root-files-and-directories"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#root-files-and-directories"}},[e._v("#")]),e._v(" Root files and directories")]),e._v(" "),i("p",[e._v("The root of an application plug-in directory contains the following files and directories.")]),e._v(" "),i("h4",{attrs:{id:"plugindefinition-json"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#plugindefinition-json"}},[e._v("#")]),e._v(" pluginDefinition.json")]),e._v(" "),i("p",[e._v('This file describes an application plug-in to the Zowe Application Server. (A plug-in is the unit of extensibility for the Zowe Application Server. An application plug-in is a plug-in of the type "Application", the most common and visible type of plug-in.) A definition file informs the server whether the application plug-in has server-side dataservices, client-side web content, or both. The attributes of this file and how it is found by the server are described in the '),i("a",{attrs:{href:"https://github.com/zowe/ZLUX/wiki/ZLUX-Plugin-Definition-&-Structure",target:"_blank",rel:"noopener noreferrer"}},[e._v("Plugin Definition article"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("h3",{attrs:{id:"dev-and-source-content"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#dev-and-source-content"}},[e._v("#")]),e._v(" Dev and source content")]),e._v(" "),i("p",[e._v("Aside from demonstration or open source application plug-ins, the following directories should not be visible on a deployed server because the directories are used to build content and are not read by the server.")]),e._v(" "),i("h4",{attrs:{id:"nodeserver"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#nodeserver"}},[e._v("#")]),e._v(" nodeServer")]),e._v(" "),i("p",[e._v("When an application plug-in has router-type dataservices, they are interpreted by the Zowe Application Server by attaching them as ExpressJS routers. It is recommended that you write application plug-ins using "),i("a",{attrs:{href:"http://www.typescriptlang.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Typescript"),i("OutboundLink")],1),e._v(", because it facilitates well-structured code. Use of Typescript results in build steps because the pre-transpilation Typescript content is not to be consumed by NodeJS. Therefore, keep server-side source code in the "),i("code",[e._v("nodeServer")]),e._v(" directory. At runtime, the server loads router dataservices from the "),i("a",{attrs:{href:"#lib"}},[e._v("lib")]),e._v(" directory.")]),e._v(" "),i("h4",{attrs:{id:"webclient"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#webclient"}},[e._v("#")]),e._v(" webClient")]),e._v(" "),i("p",[e._v("When an application plug-in has the "),i("em",[e._v("webContent")]),e._v(" attribute in its definition, the server serves static content for a client. To optimize loading of the application plug-in to the user, use Typescript to write the application plug-in and then package it using "),i("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webpack"),i("OutboundLink")],1),e._v(". Use of Typescript and Webpack result in build steps because the pre-transpilation Typescript and the pre-webpack content are not to be consumed by the browser. Therefore, separate the source code  from the served content by placing source code in the "),i("code",[e._v("webClient")]),e._v(" directory.")]),e._v(" "),i("h3",{attrs:{id:"runtime-content"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#runtime-content"}},[e._v("#")]),e._v(" Runtime content")]),e._v(" "),i("p",[e._v("At runtime, the following set of directories are used by the server and client.")]),e._v(" "),i("h4",{attrs:{id:"lib"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lib"}},[e._v("#")]),e._v(" lib")]),e._v(" "),i("p",[e._v("The "),i("code",[e._v("lib")]),e._v(" directory is where router-type dataservices are loaded by use in the Zowe Application Server. If the JS files that are loaded from the "),i("code",[e._v("lib")]),e._v(" directory require NodeJS modules, which are not provided by the server base (the modules "),i("code",[e._v("zlux-server-framework")]),e._v(" requires are added to "),i("code",[e._v("NODE_PATH")]),e._v(" at runtime), then you must include these modules in "),i("code",[e._v("lib/node_modules")]),e._v(" for local directory lookup or ensure that they are found on the "),i("code",[e._v("NODE_PATH")]),e._v(" environment variable. "),i("code",[e._v("nodeServer/node_modules")]),e._v(" is not automatically accessed at runtime because it is a dev and build directory.")]),e._v(" "),i("h4",{attrs:{id:"web"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#web"}},[e._v("#")]),e._v(" web")]),e._v(" "),i("p",[e._v("The "),i("code",[e._v("web")]),e._v(" directory is where the server serves static content for an application plug-in that includes the "),i("em",[e._v("webContent")]),e._v(" attribute in its definition. Typically, this directory contains the output of a webpack build. Anything you place in this directory can be accessed by a client, so only include content that is intended to be consumed by clients.")]),e._v(" "),i("h3",{attrs:{id:"packaging-applications-as-compressed-files"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#packaging-applications-as-compressed-files"}},[e._v("#")]),e._v(" Packaging applications as compressed files")]),e._v(" "),i("p",[e._v("Application plug-in files can be served to browsers as compressed files in brotli (.br) or gzip (.gz) format. The file must be below the application's "),i("code",[e._v("/web")]),e._v(" directory, and the browser must support the compression method. If there are multiple compressed files in the "),i("code",[e._v("/web")]),e._v(" directory, the Zowe Application Server and browser perform runtime negotiation to decide which file to use.")]),e._v(" "),i("h2",{attrs:{id:"location-of-plug-in-files"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#location-of-plug-in-files"}},[e._v("#")]),e._v(" Location of plug-in files")]),e._v(" "),i("p",[e._v("The files that define a plug-in are located in the "),i("code",[e._v("plugins")]),e._v(" directory.")]),e._v(" "),i("h3",{attrs:{id:"pluginsdir-directory"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#pluginsdir-directory"}},[e._v("#")]),e._v(" pluginsDir directory")]),e._v(" "),i("p",[e._v("At startup, the server reads from the "),i("code",[e._v("plugins")]),e._v(" directory. The server loads the valid plug-ins that are found by the information that is provided in the JSON files.")]),e._v(" "),i("p",[e._v("Within the "),i("code",[e._v("pluginsDir")]),e._v(" directory are a collection of JSON files. Each file has two attributes, which serve to locate a plug-in on disk:")]),e._v(" "),i("p",[i("strong",[e._v("location")]),e._v(": This is a directory path that is relative to the server's executable (such as "),i("code",[e._v("zlux-app-server/bin/nodeServer.sh")]),e._v(") at which a "),i("code",[e._v("pluginDefinition.json")]),e._v(" file is expected to be found.")]),e._v(" "),i("p",[i("strong",[e._v("identifier")]),e._v(": The unique string (commonly styled as a Java resource) of a plug-in, which must match what is in the "),i("code",[e._v("pluginDefinition.json")]),e._v(" file.")]),e._v(" "),i("h2",{attrs:{id:"plug-in-definition-file"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#plug-in-definition-file"}},[e._v("#")]),e._v(" Plug-in definition file")]),e._v(" "),i("p",[i("code",[e._v("pluginDefinition.json")]),e._v(" is a file that describes a plug-in. Each plug-in requires this file, because it defines how the server will register and use the backend of an application plug-in (called a "),i("em",[e._v("plug-in")]),e._v(" in the terminology of the proxy server). The attributes in each file are dependent upon the "),i("code",[e._v("pluginType")]),e._v(" attribute. Consider the following "),i("code",[e._v("pluginDefinition.json")]),e._v(" file from "),i("code",[e._v("sample-app")]),e._v(":")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v('{\n  "identifier": "com.rs.mvd.myplugin",\n  "apiVersion": "1.0",\n  "pluginVersion": "1.0",\n  "pluginType": "application",\n  "webContent": {\n    "framework": "angular2",\n    "launchDefinition": {\n      "pluginShortNameKey": "helloWorldTitle",\n      "pluginShortNameDefault": "Hello World",\n      "imageSrc": "assets/icon.png"\n    },\n    "descriptionKey": "MyPluginDescription",\n    "descriptionDefault": "Base MVD plugin template",\n    "isSingleWindowApp": true,\n    "defaultWindowStyle": {\n      "width": 400,\n      "height": 300\n    }\n  },\n  "dataServices": [\n    {\n      "type": "router",\n      "name": "hello",\n      "serviceLookupMethod": "external",\n      "fileName": "helloWorld.js",\n      "routerFactory": "helloWorldRouter",\n      "dependenciesIncluded": true\n    }\n  ]\n}\n')])])]),i("h2",{attrs:{id:"plug-in-attributes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#plug-in-attributes"}},[e._v("#")]),e._v(" Plug-in attributes")]),e._v(" "),i("p",[e._v("There are two categories of attributes: General and Application.")]),e._v(" "),i("h3",{attrs:{id:"general-attributes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#general-attributes"}},[e._v("#")]),e._v(" General attributes")]),e._v(" "),i("p",[i("strong",[e._v("identifier")])]),e._v(" "),i("p",[e._v("Every application plug-in must have a unique string ID that associates it with a URL space on the server.")]),e._v(" "),i("p",[i("strong",[e._v("apiVersion")])]),e._v(" "),i("p",[e._v("The version number for the pluginDefinition scheme and application plug-in or dataservice requirements. The default is 1.0.0.")]),e._v(" "),i("p",[i("strong",[e._v("pluginVersion")])]),e._v(" "),i("p",[e._v("The version number of the individual plug-in.")]),e._v(" "),i("p",[i("strong",[e._v("pluginType")])]),e._v(" "),i("p",[e._v("A string that specifies the type of plug-in. The type of plug-in determines the other attributes that are valid in the definition.")]),e._v(" "),i("ul",[i("li",[i("p",[i("strong",[e._v("application")]),e._v(": Defines the plug-in as an application plug-in. Application plug-ins are composed of a collection of web content for presentation in the Zowe web component (such as the Zowe Desktop), or a collection of dataservices (REST and websocket), or both.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("library")]),e._v(": Defines the plug-in as a library that serves static content at a known URL space.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("node authentication")]),e._v(": Authentication and Authorization handlers for the Zowe Application Server.")])])]),e._v(" "),i("h3",{attrs:{id:"application-attributes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#application-attributes"}},[e._v("#")]),e._v(" Application attributes")]),e._v(" "),i("p",[e._v("When a plug-in is of "),i("em",[e._v("pluginType")]),e._v(" application, the following attributes are valid:")]),e._v(" "),i("p",[i("strong",[e._v("webContent")])]),e._v(" "),i("p",[e._v("An object that defines several attributes about the content that is shown in a web UI.")]),e._v(" "),i("p",[i("strong",[e._v("dataServices")])]),e._v(" "),i("p",[e._v("An array of objects that describe REST or websocket dataservices.")]),e._v(" "),i("p",[i("strong",[e._v("configurationData")])]),e._v(" "),i("p",[e._v("An object that describes the resource structure that the application plug-in uses for storing user, group, and server data.")]),e._v(" "),i("h3",{attrs:{id:"application-web-content-attributes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#application-web-content-attributes"}},[e._v("#")]),e._v(" Application web content attributes")]),e._v(" "),i("p",[e._v("An application that has the "),i("em",[e._v("webContent")]),e._v(" attribute defined provides content that is displayed in a Zowe web UI.")]),e._v(" "),i("p",[e._v("The following attributes determine some of this behavior:")]),e._v(" "),i("p",[i("strong",[e._v("framework")])]),e._v(" "),i("p",[e._v("States the type of web framework that is used, which determines the other attributes that are valid in "),i("em",[e._v("webContent")]),e._v(".")]),e._v(" "),i("ul",[i("li",[i("p",[i("strong",[e._v("angular2")]),e._v(': Defines the application as having an Angular (2+) web framework component. This is the standard for a "native" framework Zowe application.')])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("iframe")]),e._v(": Defines the application as being external to the native Zowe web application environment, but instead embedded in an iframe wrapper.")])])]),e._v(" "),i("p",[i("strong",[e._v("launchDefinition")])]),e._v(" "),i("p",[e._v("An object that details several attributes for presenting the application in a web UI.")]),e._v(" "),i("ul",[i("li",[i("p",[i("strong",[e._v("pluginShortNameDefault")]),e._v(": A string that gives a name to the application when i18n is not present. When i18n is present, i18n is applied by using the "),i("em",[e._v("pluginShortNameKey")]),e._v(".")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("descriptionDefault")]),e._v(": A longer string that specifies a description of the application within a UI. The description is seen when i18n is not present. When i18n is present, i18n is applied by using the "),i("em",[e._v("descriptionKey")]),e._v(".")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("imageSrc")]),e._v(": The relative path (from "),i("code",[e._v("/web")]),e._v(") to a small image file that represents the application icon.")])])]),e._v(" "),i("p",[i("strong",[e._v("defaultWindowStyle")])]),e._v(" "),i("p",[e._v("An object that details the placement of a default window for the application in a web UI.")]),e._v(" "),i("ul",[i("li",[i("p",[i("strong",[e._v("width")]),e._v(": The default width of the application plug-in window, in pixels.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("height")]),e._v(": The default height of the application plug-in window, in pixels.")])])]),e._v(" "),i("h3",{attrs:{id:"iframe-application-web-content"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#iframe-application-web-content"}},[e._v("#")]),e._v(" IFrame application web content")]),e._v(" "),i("p",[e._v('In addition to the general web content attributes, when the framework of an application is "iframe", you must specify the page that is being embedded in the iframe. To do so, incude the attribute '),i("em",[e._v("startingPage")]),e._v(" within "),i("em",[e._v("webContent")]),e._v(". "),i("em",[e._v("startingPage")]),e._v(" is relative to the application's "),i("code",[e._v("/web")]),e._v(" directory.")]),e._v(" "),i("p",[e._v("Specify "),i("em",[e._v("startingPage")]),e._v(" as a relative path rather than an absolute path because the "),i("code",[e._v("pluginDefinition.json")]),e._v(" file is intended to be read-only, and therefore would not work well when the hostname of a page changes.")]),e._v(" "),i("p",[e._v("Within an IFrame, the application plug-in still has access to the globals that are used by Zowe for application-to-application communication; simply access "),i("em",[e._v("window.parent.ZoweZLUX")]),e._v(".")])])}),[],!1,null,null,null);t.default=a.exports}}]);