self.__BUILD_MANIFEST = function(s) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/": [s, "static/chunks/file2.js", "static/chunks/pages/index.js"],
        "/_error": ["static/chunks/pages/_error-54de1933a164a1ff.js"],
        "/archive": [s, "static/chunks/pages/archive-443c4086ec3debb0.js"],
        "/og": ["static/chunks/pages/og-a74b920f81d6dcaa.js"],
        sortedPages: ["/", "/_app", "/_error", "/archive", "/og"]
    }
}("static/chunks/file3.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();