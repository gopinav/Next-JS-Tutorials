export default function handler(req, res) {
  res.setPreviewData({
    user: 'Vishwas'
  })
  res.redirect(req.query.redirect)
}
