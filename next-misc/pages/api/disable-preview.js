export default function handler(req, res) {
  res.clearPreviewData()
  res.end('Preview mode disabled')
}
