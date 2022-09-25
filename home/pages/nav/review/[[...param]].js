import { useRouter } from 'next/router'

function name() {
    const router = useRouter();
    const { param = [] } = router.query;

    return <h1>asd q {param.length}</h1>
}

export default name;