import styles from './header.css';

export default function Header() {
    return (
       <header className="myHeader">
           <h1>Nate Blog</h1>
       </header>
    );
}


export function links() {
    return [{rel: 'stylesheet', href: styles}];
}
