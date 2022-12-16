const getData = async () => {
  await new Promise((r) => setTimeout(r, 10000));
};

export default async function ServerComponent() {
  await getData();
  return (
    <div
      style={{
        width: "50px",
        height: "100px",
        textAlign: "center",
        backgroundColor: "rebeccapurple",
      }}
    >
      ACTION!
    </div>
  );
}
