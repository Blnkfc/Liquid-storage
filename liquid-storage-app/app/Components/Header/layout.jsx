import Link from "next/link";

export default function HeaderLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <header className="header">
            <div className="header-logo">
                <Link href={'/'}><img src="/assets/header-logo.png" alt=""/></Link>
            </div>
            <div className="header-nav">
                <Link href={'/'} className="header-nav-link">Home</Link>
                <Link href={'/'} className="header-nav-link">Storage</Link>
                <div className="header-nav-link header-nav-link-settings">
                    <img src="/assets/header-settings.png" alt=""/>
                </div>
            </div>
        </header>
        <main>{children}</main>
        </body>
        </html>
    )
}