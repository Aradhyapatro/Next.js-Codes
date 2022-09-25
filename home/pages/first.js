function first({ data }) {
    return <h2>{data}</h2>
}

export default first;

export async function getStaticProps() {
    console.log("PROps");
    return {
        props: {
            data: "I am arya"
        }
    }
}