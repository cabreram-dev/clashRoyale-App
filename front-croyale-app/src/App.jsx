import React from "react";

export default function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3001/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
      <form>
        <p>Enter the name of the card</p>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
      <p>{!data ? "Loading..." : data}</p>
    </>
  );
}
