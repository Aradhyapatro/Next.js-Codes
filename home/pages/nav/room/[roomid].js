import { useRouter } from 'next/router';
import Link from 'next/link';

function name() {
    const router = useRouter();
    return <h1><Link href='/first' >here</Link> Welcome to Room {router.query.roomid}</h1>
}

export default name;