import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import html from "@rollup/plugin-html";
import serve from "rollup-plugin-serve";
import replace from "@rollup/plugin-replace";
import jsx from "acorn-jsx";
import alias from "@rollup/plugin-alias";
import image from "@rollup/plugin-image";

export default {
    input: "./src/index.tsx",
    output: {
        file: "./dist/bundle.js",
        format: "iife",
        globals: {
            react: "React",
            "react-dom": "ReactDOM",
        },
    },
    acornInjectPlugins: [jsx()],
    plugins: [
        replace({
            preventAssignment: true,
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
        }),
        alias({
            entries: [
                { find: "react", replacement: "preact/compat" },
                { find: "react-dom", replacement: "preact/compat" },
            ],
        }),
        resolve(),
        commonjs(),
        image(),
        typescript(),
        html({
            attributes: {},
        }),
        process.env.SERVE === "true" && serve("dist"),
    ],
};
