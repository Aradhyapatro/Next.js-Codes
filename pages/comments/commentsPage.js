import { useState } from "react";


function CommentsPage() {
    const [comments, setComments] = useState([]);
    const [comm, setComm] = useState('');

    async function fetchComment() {
        const data = await fetch('/api/get');
        const result = await data.json();
        setComments(result);
    }

    async function postComment() {
        const data = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({ comm }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const response = await data.json();
        console.log(response);
    }

    async function del(id) {
        const data = await fetch(`/api/delete/${id}`, {
            method: 'DELETE'
        })
        const response = await data.json();
        console.log(response);
        fetchComment();
    }

    return <>
        <input type="text" id="comment" value={comm} onChange={(e) => { setComm(e.target.value) }} />
        <button onClick={postComment}>Post Comment</button>
        <button onClick={fetchComment}>Get</button>
        {comments.map((comment, index) => {
            return <h1 key={index}>{comment.comment} <button onClick={() => { del(comment.id) }}>Delete</button></h1>
        })}
    </>
}

export default CommentsPage;