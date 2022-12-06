import {LoaderFunction} from "@remix-run/node";
import * as fiveTips from './fiveTips.mdx';
import * as frontendFrameworks from './frontendFrameworks.mdx';
import {Link, useLoaderData} from "@remix-run/react";

function postFromModule(mod: any) {
    return {
        slug: mod.filename.replace(/\.mdx?$/, ''),
        ...mod.attributes,
    }
}

export const loader: LoaderFunction = () => {
    return [
        postFromModule(fiveTips),
        postFromModule(frontendFrameworks),
    ];
}

export default function BlogIndex() {
    const posts = useLoaderData();
    return (
        <div>
            <h2>Articles</h2>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.slug}>
                        <Link to={post.slug}>{post.title}</Link>
                        {post.subheading ? (
                            <p className="m-0 lg:m-0">{post.subheading}</p>
                        ) : null}
                    </li>
                ))}
            </ul>
        </div>
    )
}
