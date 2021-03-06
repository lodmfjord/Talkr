import{createContext as n,useState as e,createElement as t,useContext as r}from"react";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var a=function(){return(a=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var a in e=arguments[t])Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}).apply(this,arguments)},u="undefined"!=typeof navigator?navigator.language.split("-")[0]:null,l=n({locale:"",setLocale:function(){return null},languages:{},defaultLanguage:""});function o(n){var r=n.children,a=n.languages,o=n.defaultLanguage,i=n.detectBrowserLanguage,c=e(i&&u?u:o),g=c[0],f=c[1];return t(l.Provider,{value:{locale:g,setLocale:f,languages:a,defaultLanguage:o}},r)}function i(n,e){var t=r(l),u=t.locale,o=t.languages,i=t.defaultLanguage,c=o[u]?u:i,g=o[c],f=n;if(e&&Object.keys(e).includes("count")){var s=new Intl.PluralRules(c).select(e.count);f=0===e.count?n+".zero":"other"===s?n+".many":n+"."+s}if(f.split(".").forEach((function(n){if(g[n])return g=g[n]})),"string"!=typeof g)return console.warn("Talkr bot: Missing translation for "+n),null;var p=e&&Object.entries(e).reduce((function(n,e){var t;return a(a({},n),((t={})[e[0]]=e[1].toString(),t))}),{});return p?g.split("__").map((function(n){return p[n]?p[n]:n})).join(""):g}function c(){return r(l)}export{i as T,o as Talkr,c as useLocale};
