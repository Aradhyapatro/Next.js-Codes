import Router, { useRouter } from 'next/router';

function postid({ post }) {
    const router = useRouter();
    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    return <>
        <h1>{post.id}.{post.title}</h1>
        <hr />
        <p>{post.body}</p>
    </>
}

export default postid;

export async function getStaticPaths() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = await data.json();
    const paths = result.map((post) => {
        return {
            params: {
                postid: `${post.id}`
            }
        }
    })

    return {
        paths: [
            {
                params: { postid: '1' }
            }, {
                params: { postid: '2' }
            }
        ],
        // paths: paths,
        fallback: true
    }
}

export async function getStaticProps(context) {
    const { params } = context;
    console.log(params.postid);
    const data = await fetch(`http://localhost:4000/products/${params.postid}`)
    const result = await data.json();

    if (!result.id) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            post: result
        }
    }
}