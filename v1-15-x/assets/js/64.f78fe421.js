(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{487:function(e,t,o){"use strict";o.r(t);var n=o(3),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"developing-for-zowe-cli"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#developing-for-zowe-cli"}},[e._v("#")]),e._v(" Developing for Zowe CLI")]),e._v(" "),o("p",[e._v("You can extend Zowe™ CLI by developing plug-ins and contributing code to the base Zowe CLI or existing plug-ins.")]),e._v(" "),o("h2",{attrs:{id:"how-can-i-contribute"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-contribute"}},[e._v("#")]),e._v(" How can I contribute?")]),e._v(" "),o("p",[e._v("You can contribute to Zowe CLI in the following ways:")]),e._v(" "),o("ol",[o("li",[e._v("Add new commands, options, or other improvements to the base CLI.")]),e._v(" "),o("li",[e._v("Develop a plug-in that users can install to Zowe CLI.")])]),e._v(" "),o("p",[e._v("You might want to contribute to Zowe CLI to accomplish the following:")]),e._v(" "),o("ul",[o("li",[e._v("Provide new scriptable functionality for yourself, your organization, or to a broader community.")]),e._v(" "),o("li",[e._v("Make use of Zowe CLI infrastructure (profiles and programmatic APIs).")]),e._v(" "),o("li",[e._v("Participate in the Zowe CLI community space.")])]),e._v(" "),o("h2",{attrs:{id:"getting-started"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting started")]),e._v(" "),o("p",[e._v("If you want to start working with the code immediately, check out the "),o("a",{attrs:{href:"https://github.com/zowe/zowe-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zowe CLI core repository"),o("OutboundLink")],1),e._v(" and the "),o("a",{attrs:{href:"https://github.com/zowe/zowe-cli/master/blob/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("contribution guidelines"),o("OutboundLink")],1),e._v(". The "),o("a",{attrs:{href:"https://github.com/zowe/zowe-cli-sample-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("zowe-cli-sample-plugin GitHub repository"),o("OutboundLink")],1),e._v(" is a sample plug-in that adheres to the guidelines for contributing to Zowe CLI projects.")]),e._v(" "),o("h3",{attrs:{id:"tutorials"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tutorials"}},[e._v("#")]),e._v(" Tutorials")]),e._v(" "),o("p",[e._v("Follow these tutorials to get started working with the sample plug-in:")]),e._v(" "),o("ol",[o("li",[o("strong",[o("router-link",{attrs:{to:"/extend/extend-cli/cli-setting-up.html"}},[e._v("Setting up")])],1),e._v(" - Clone the project and prepare your local environment.")]),e._v(" "),o("li",[o("strong",[o("router-link",{attrs:{to:"/extend/extend-cli/cli-installing-sample-plugin.html"}},[e._v("Installing a plug-in")])],1),e._v(" - Install the sample plug-in to Zowe CLI and run as-is.")]),e._v(" "),o("li",[o("strong",[o("router-link",{attrs:{to:"/extend/extend-cli/cli-extending-a-plugin.html"}},[e._v("Extending a plug-in")])],1),e._v(" - Extend the sample plug-in with a new by creating a programmatic API, definition, and handler.")]),e._v(" "),o("li",[o("strong",[o("router-link",{attrs:{to:"/extend/extend-cli/cli-developing-a-plugin.html"}},[e._v("Creating a new plug-in")])],1),e._v(" - Create a new CLI plug-in that uses Zowe CLI programmatic APIs and a diff package to compare two data sets.")]),e._v(" "),o("li",[o("strong",[o("router-link",{attrs:{to:"/extend/extend-cli/cli-implement-profiles.html"}},[e._v("Implementing user profiles")])],1),e._v(" - Implement user profiles with the plug-in.")])]),e._v(" "),o("h3",{attrs:{id:"plug-in-development-overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#plug-in-development-overview"}},[e._v("#")]),e._v(" Plug-in Development Overview")]),e._v(" "),o("p",[e._v("At a high level, a plug-in must have "),o("code",[e._v("imperative-framework")]),e._v(" configuration "),o("a",{attrs:{href:"https://github.com/zowe/zowe-cli-sample-plugin/src/imperative.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("(sample here)"),o("OutboundLink")],1),e._v(".  This configuration is discovered by  "),o("code",[e._v("imperative-framework")]),e._v(" through the "),o("a",{attrs:{href:"https://github.com/zowe/zowe-cli-sample-plugin/package.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("package.json"),o("OutboundLink")],1),e._v(" "),o("code",[e._v("imperative")]),e._v(" key.")]),e._v(" "),o("p",[e._v("A Zowe CLI plug-in will minimally contain the following:")]),e._v(" "),o("ol",[o("li",[o("strong",[e._v("Programmatic API")]),e._v(" - Node.js programmatic APIs to be called by your handler or other Node.js applications.")]),e._v(" "),o("li",[o("strong",[e._v("Command definition")]),e._v(" - The syntax definition for your command.")]),e._v(" "),o("li",[o("strong",[e._v("Handler implementation")]),e._v(" - To invoke your programmatic API to display information in the format that you defined in the definition.")])]),e._v(" "),o("p",[e._v("The following guidelines and documentation will assist you during development:")]),e._v(" "),o("h3",{attrs:{id:"imperative-cli-framework-documentation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#imperative-cli-framework-documentation"}},[e._v("#")]),e._v(" Imperative CLI Framework Documentation")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/zowe/imperative/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("Imperative CLI Framework documentation"),o("OutboundLink")],1),e._v(" is a key source of information to learn about the features of Imperative CLI Framework (the code framework that you use to build plug-ins for Zowe CLI). Refer to these supplementary documents during development to learn about specific features such as:")]),e._v(" "),o("ul",[o("li",[e._v("Auto-generated help")]),e._v(" "),o("li",[e._v("JSON responses")]),e._v(" "),o("li",[e._v("User profiles")]),e._v(" "),o("li",[e._v("Logging, progress bars, experimental commands, and more!")])]),e._v(" "),o("h3",{attrs:{id:"contribution-guidelines"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#contribution-guidelines"}},[e._v("#")]),e._v(" Contribution Guidelines")]),e._v(" "),o("p",[e._v("The Zowe CLI contribution guidelines contain standards and conventions for developing Zowe CLI plug-ins.")]),e._v(" "),o("p",[e._v("The guidelines contain critical information about working with the code, running/writing/maintaining automated tests, developing consistent syntax in your plug-in, and ensuring that your plug-in integrates with Zowe CLI properly:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("For more information about ...")]),e._v(" "),o("th",[e._v("See:")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[e._v("General guidelines that apply to contributing to Zowe CLI and Plug-ins")]),e._v(" "),o("td",[o("a",{attrs:{href:"https://github.com/zowe/zowe-cli/blob/master/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Contribution Guidelines"),o("OutboundLink")],1)])]),e._v(" "),o("tr",[o("td",[e._v("Conventions and best practices for creating packages and plug-ins for Zowe CLI")]),e._v(" "),o("td",[o("a",{attrs:{href:"https://github.com/zowe/zowe-cli/blob/master/docs/PackagesAndPluginGuidelines.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Package and Plug-in Guidelines"),o("OutboundLink")],1)])]),e._v(" "),o("tr",[o("td",[e._v("Guidelines for running tests on Zowe CLI")]),e._v(" "),o("td",[o("a",{attrs:{href:"https://github.com/zowe/zowe-cli/blob/master/docs/TESTING.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Testing Guidelines"),o("OutboundLink")],1)])]),e._v(" "),o("tr",[o("td",[e._v("Guidelines for running tests on the plug-ins that you build")]),e._v(" "),o("td",[o("a",{attrs:{href:"https://github.com/zowe/zowe-cli/blob/master/docs/PluginTESTINGGuidelines.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Plug-in Testing Guidelines"),o("OutboundLink")],1)])]),e._v(" "),o("tr",[o("td",[e._v("Versioning conventions for Zowe CLI and Plug-ins")]),e._v(" "),o("td",[o("a",{attrs:{href:"https://github.com/zowe/zowe-cli/blob/master/docs/MaintainerVersioning.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Versioning Guidelines"),o("OutboundLink")],1)])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);