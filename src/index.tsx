import { h, render } from "preact";
import { Layout } from "./components/layout";

const node = document.createElement("div");
node.id = "root";
document.body.appendChild(node);
render(<Layout />, node, node.lastChild as Element);
