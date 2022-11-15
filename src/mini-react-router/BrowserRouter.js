import { createBrowserHistory } from "history";
import { useRef } from "react";
import Router from "./Router";

export default function BrowserRouter({children}) {
    // 组件卸载之前用
    let historyRef = useRef(createBrowserHistory())

    return <Router children={children} navigator={historyRef.current} />
};

