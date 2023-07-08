
import Link from "next/link";

const Header = () => {
    return(
        <header className="header">
            <div className="header-logo">
                <Link href={'/'}><img src="/assets/header-logo.png" alt=""/></Link>
            </div>
            <div className="header-nav">
                <Link href={'/Home'} className="header-nav-link">Home</Link>
                <Link href={'/'} className="header-nav-link">Storage</Link>
                <div className="header-nav-link-settings">
                    <img src="/assets/header-settings.png" alt=""/>
                </div>
            </div>
        </header>
    )
}

export default Header;