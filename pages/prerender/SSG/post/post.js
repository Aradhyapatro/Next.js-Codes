import Link from "next/link";

function post({ posts }) {
    return <>
        {posts.map((post) => {
            return <div key={post.id}>
                <Link href={`/prerender/SSG/post/${post.id}`} passHref  >
                    <h1>{post.id}.{post.title}</h1>
                </Link>
            </div>
        })}
    </>
}

export default post;

export async function getStaticProps() {
    console.log("REgenerated");
    const data = await fetch('http://localhost:4000/products');
    const result = await data.json();

    return {
        props: {
            posts: result
        },
        revalidate: 3000
    }
}