import Link from "next/link";

const Home = () => {
    return(
        <div className="home">
            <div className="home-button">
                <Link href={'/Storage'}>Storage</Link>
            </div>
        </div>
    )
}

export default Home;