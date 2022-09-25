import { comments } from '../../../data/comments'

export default function handler(req, res) {
    console.log('DELETE');
    let id = req.query.delete;
    id = Number(id);

    let index = -1

    for (let ind = 0; ind < comments.length; ind++) {
        const element = comments[ind];
        if (element.id == id) {
            index = ind
        }
    }
    console.log(index);
    const dataDeleted = comments[index];
    comments.splice(index, 1);

    return res.status(200).json({ result: dataDeleted });
}