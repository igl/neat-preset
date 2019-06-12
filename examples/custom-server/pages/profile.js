import { withRouter } from 'next/router'
import Link from 'next/link'

export default withRouter(props => (
    <div>
        <h1>Profile of {props.router.query.id}</h1>
        <Link href='/about' prefetch>
            <a>About Page</a>
        </Link>
        <br />
        <Link href='/profile/hotzenplotz'>
            <a>Profile Page</a>
        </Link>
        <p>
            all props: <pre>{JSON.stringify(props.router, null, 2)}</pre>
        </p>
    </div>
))
