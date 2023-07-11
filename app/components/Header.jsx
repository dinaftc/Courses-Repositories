import Link from "next/link"
const Header = () =>{
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Link href='/'>My next js app</Link>
                </div>
                <div className="links">
                    <Link href='/about'>About</Link>
                    <Link href='/about/team'>our team</Link>
               
                    <Link href='/code/repos'>code</Link>
               
                </div>
            </div>
        </header>
    )
}
export default Header;