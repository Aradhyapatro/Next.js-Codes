import { getSession } from 'next-auth/react';

export default function Blog({ data }) {
    return <h1>{data}</h1>
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: `/api/auth/signin?callbackURL=http://localhost:3000/blog`,
                permanent: false
            }
        }
    }

    return {
        props: {
            data: session ? "personalized data returned" : "generic Data returned"
        }
    }
}