import SearchBar from '../SearchBar/SearchBar'
import Link from '@mui/material/Link';
function Header() {
    return (
        <>
            <Link href='/signIn'>Sign In?</Link>
            <br />
            <Link href='/signUp'>sign up</Link>
            <br />
            <Link href='/profile'>Profile</Link>
            <br />
            <Link href='my-books'>My Books</Link>
            <br />
            <SearchBar />
        </>
    )
}

export default Header;