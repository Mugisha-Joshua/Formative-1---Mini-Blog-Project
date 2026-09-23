export function getPreview(content: string, wordCount = 12): string {
  const words = content.split(' ');
  return words.length > wordCount ? `${words.slice(0, wordCount).join(' ')}...` : content;
}
