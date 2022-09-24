function EventList({ List }) {

    return <>
        <h1>List</h1>
        {List.map(item => {
            return <h3 key={item.id}>{item.title}<hr />{item.description}</h3>
        })}
    </>
}

export default EventList;

export async function getServerSideProps() {
    const data = await fetch('http://localhost:4000/products');
    const result = await data.json();

    return {
        props: {
            List: result
        }
    }
}