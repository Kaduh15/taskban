export async function getSortedTasks() {
  const response = await fetch('/api/task/sort')
  const data = await response.json()

  return data.tasks
}
