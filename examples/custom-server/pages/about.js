import Link from 'next/link'

const add = (a, b) => a + b

const add100 = add(?, 100)

export default props => (
    <div>
        <h1>About</h1>
        <Link href='/about' prefetch>
            <a>About Page</a>
        </Link>
        <br />
        <Link href='/profile/hotzenplotz'>
            <a>Profile Page</a>
        </Link>
        <p>
            <h3>@babel/plugin-proposal-partial-application</h3>
            <code>
                <pre>{add100}</pre>
            </code>
            <h3>@babel/plugin-proposal-optional-chaining</h3>
            <code>
                <pre>{JSON.stringify(props.foo?.bar || 'did-not-crashed', null, 2)}</pre>
            </code>
        </p>
    </div>
)
