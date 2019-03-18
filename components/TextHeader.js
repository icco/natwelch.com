export default (params) => {
const headers = {
  "1": (<h1 className="f3 f2-m f1-l">{params.childre}</h1>),
  "2": (<h2 className="f4 f3-m f2-l">{params.childre}</h2>),
  "3": (<h3 className="f5 f4-m f3-l">{params.childre}</h3>),
}

  let level = "1"
  if (params.level) {
    level = params.level
  }

  return headers[level]
}
