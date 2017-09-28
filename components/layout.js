"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const head_1 = require("next/head");
exports.default = ({ title, children }) => {
    return (React.createElement("div", null,
        React.createElement(head_1.default, null,
            React.createElement("title", null, title),
            React.createElement("meta", { charSet: 'utf-8' }),
            React.createElement("meta", { name: 'viewport', content: 'initial-scale=1.0, width=device-width' })),
        children,
        React.createElement("footer", null, "Fuck your footer!!!")));
};
