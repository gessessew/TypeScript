/// <reference path="fourslash.ts"/>
// @Filename: scriptLexicalStructureItemsContainsNoAnonymouseFunctions_0.ts
/////*file1*/
////(function() {
////    // this should not be included
////    var x = 0;
////
////    // this should not be included either
////    function foo() {
////
////    }
////})();
////
// @Filename: scriptLexicalStructureItemsContainsNoAnonymouseFunctions_1.ts
/////*file2*/
////var x = function() {
////    // this should not be included
////    var x = 0;
////
////    // this should not be included either
////    function foo() {
////};
////
// @Filename: scriptLexicalStructureItemsContainsNoAnonymouseFunctions_2.ts
////// Named functions should still show up
/////*file3*/
////function foo() {
////}
////function bar() {
////}

goTo.marker("file1");
verify.navigationBar([
    {
        "text": "<global>",
        "kind": "module",
        "childItems": [],
        "indent": 0
    }
]);

goTo.marker("file2");
verify.navigationBar([
    {
        "text": "<global>",
        "kind": "module",
        "childItems": [
            {
                "text": "x",
                "kind": "var"
            }
        ],
        "indent": 0
    }
]);

goTo.marker("file3");
verify.navigationBar([
    {
        "text": "<global>",
        "kind": "module",
        "childItems": [
            {
                "text": "bar",
                "kind": "function"
            },
            {
                "text": "foo",
                "kind": "function"
            }
        ],
        "indent": 0
    },
    {
        "text": "bar",
        "kind": "function",
        "childItems": [],
        "indent": 1
    },
    {
        "text": "foo",
        "kind": "function",
        "childItems": [],
        "indent": 1
    }
]);
