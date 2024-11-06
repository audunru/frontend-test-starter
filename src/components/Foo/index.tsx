import React, { useState } from "react";
import Button from "../Button";

interface Data {
  foo: string;
}

const Foo: React.FC = () => {
  const [data, setData] = useState<Data>();

  const getData = async () => {
    const response = await fetch("/foo");
    const json = (await response.json()) as Data;

    setData(json);
  };

  return (
    <>
      <Button onClick={() => getData()}>{"Last ned"}</Button>
      {data && <p>{data.foo}</p>}
    </>
  );
};

export default Foo;
