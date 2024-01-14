export function debounce(func, delay) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

export async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
