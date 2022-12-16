const getData = async (id: string) => {
  const api = "http://localhost:3000/api/movies";
  const res = await fetch(`${api}/${id}`);
  const json = await res.json();
  await new Promise((r) => setTimeout(r, 1000));
  return json;
};

export default async function Details(props: any) {
  const data = await getData(props.params.id);
  return <div>{JSON.stringify(data)}</div>;
}
