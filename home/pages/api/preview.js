export default function name(req, res) {
    res.setPreviewData({});
    res.redirect(req.query.redirect);
}