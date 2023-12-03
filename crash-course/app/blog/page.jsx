export default async function Page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  return <div>
    <h1>blog</h1>
  </div>
}

export const revalidate = 30;