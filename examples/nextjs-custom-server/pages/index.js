import Link from 'next/link'

export default () => (
    <div>
        <h1>Home</h1>
        <Link href='/about' prefetch>
            <a>About Page</a>
        </Link>
        <br />
        <Link href='/profile/hotzenplotz'>
            <a>Profile Page</a>
        </Link>
    </div>
)
