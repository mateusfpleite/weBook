import SearchBar from '../SearchBar/SearchBar'
import Link from '@mui/material/Link';
import { useRouter } from 'next/router';

function Header() {
    const router = useRouter()
    return (
        <>
            <Link onClick={() => router.push('/signIn')}>Sign In?</Link>
            <br />
            <Link onClick={() => router.push('/signUp')}>sign up</Link>
            <br />
            <Link onClick={() => router.push('/profile')}>Profile</Link>
            <br />
            <Link onClick={() => router.push('my-books')}>My Books</Link>
            <br />
            <SearchBar />
        </>
    )
}

export default Header;