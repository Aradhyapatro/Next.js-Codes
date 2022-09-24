function pre({ users }) {
    return <>
        {users.map((user) => {
            return <><h1 key={user.id}>{user.email}</h1><h2>{user.name}</h2></>
        })}
    </>
}

export default pre;

export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();
    return {
        props: { users: users }
    }
}