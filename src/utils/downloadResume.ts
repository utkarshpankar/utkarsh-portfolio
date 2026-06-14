export async function downloadResume(filePath: string, fileName: string) {
  const response = await fetch(filePath)

  if (!response.ok) {
    throw new Error(`Failed to fetch resume (${response.status})`)
  }

  const blob = await response.blob()
  const objectUrl = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = objectUrl
  link.download = fileName
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(objectUrl)
}
