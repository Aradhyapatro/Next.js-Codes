import { comments } from '../../data/comments';

export default function handler(req, res) {
    console.log("POST request");
    const newComm = {
        id: comments.length + 1,
        comment: req.body.comm
    }
    comments.push(newComm);

    return res.status(200).json({ success: comments });
}