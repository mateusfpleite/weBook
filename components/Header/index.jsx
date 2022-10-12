import Link from "next/link";
import SearchBar from '../SearchBar/SearchBar'

const Header = () => {
    return (
        <>
            <Link href="/profile">
                <a><span> Profile </span></a>
            </Link>
            <Link href="/my-books">
            <a><span> My Books </span></a>
            </Link>
            <SearchBar />
        </>
    )
}

export default Header;