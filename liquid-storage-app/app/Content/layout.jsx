import Link from "next/link";

export default function ContentLayout({children}){
    return(
        <html>
        <body>
        <div className="link"><Link href={'/home'}>Home</Link></div>
        <div className="link"><Link href={'/storage'}>Storage</Link></div>
        <main>{children}</main>
        </body>
        </html>
    )
}