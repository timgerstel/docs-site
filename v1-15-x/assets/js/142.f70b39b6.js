(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{391:function(e,t,s){"use strict";s.r(t);var a=s(3),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"stopping-the-zwesvstc-proc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stopping-the-zwesvstc-proc"}},[e._v("#")]),e._v(" Stopping the ZWESVSTC PROC")]),e._v(" "),s("p",[e._v("To stop the Zowe server, the ZWESVSTC PROC needs to be ended. Run the "),s("code",[e._v("zowe-stop.sh")]),e._v(" script at the Unix Systems Services command prompt that is in the zowe instance directory used to start the Zowe started task:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd $ZOWE_INSTANCE_DIR/bin\n./zowe-stop.sh\n")])])]),s("p",[e._v("where "),s("em",[e._v("<ZOWE_INSTANCE_DIR>")]),e._v(" is the directory where you set the instance directory to.")]),e._v(" "),s("p",[e._v("When you stop ZWESVSTC, you might get the following error message:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IEE842I ZWESVSTC DUPLICATE NAME FOUND- REENTER COMMAND WITH 'A='\n")])])]),s("p",[e._v("This error results when there is more than one started task named ZWESVSTC. To resolve the issue, stop the required ZWESVSTC instance by issuing the following commands:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/C ${ZOWE_PREFIX}${ZOWE_INSTANCE}SV,A=asid\n")])])]),s("p",[e._v("Where "),s("em",[e._v("ZOWE_PREFIX")]),e._v(" and "),s("em",[e._v("ZOWE_INSTANCE")]),e._v(" are specified in your configuration (and default to ZWE and 1) and you can obtain the "),s("em",[e._v("asid")]),e._v(" from the value of "),s("code",[e._v("A=asid")]),e._v(" when you issue the following commands:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/D A,${ZOWE_PREFIX}${ZOWE_INSTANCE}SV\n")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);