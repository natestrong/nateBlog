import styles from 'highlight.js/styles/atom-one-dark.css';
import type {LinksFunction} from "@remix-run/node";
import {Outlet} from "@remix-run/react";

export const links: LinksFunction = () => {
    return [{rel: 'stylesheet', href: styles}];
}

export default function Blog() {
    return (
        <div className="flex justify-center">
            <div className="prose lg:prose-xl py10">
                <Outlet/>
            </div>
        </div>
    );
}