type Lines = [string, string][]

export function formatDescription (lines: Lines) {
  return lines
    .map(([title, value]) => `<b>${title}</b>: ${value}`)
    .join('<br/>')
}
