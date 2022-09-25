import { comments } from "/data/comments";

export default function handler(req, res) {
    console.log("Get Request");
    return res.status(200).json(comments);
}