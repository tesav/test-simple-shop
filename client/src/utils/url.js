export function getQueryParam(str, name) {
  if (str && name) {
    let searchParams = new URLSearchParams(str)
    return searchParams.get(name)
  }
}
