"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const link_1 = require("next/link");
const layout_1 = require("../components/layout");
exports.default = () => {
    return (React.createElement(layout_1.default, { title: "Home" },
        React.createElement("div", null,
            React.createElement("header", null,
                React.createElement("nav", null,
                    React.createElement(link_1.default, { href: '/' },
                        React.createElement("a", null, "Home")),
                    React.createElement(link_1.default, { href: '/login' },
                        React.createElement("a", null, "Log In")),
                    React.createElement(link_1.default, { href: '/signup' },
                        React.createElement("a", null, "Sign Up")))))));
};
