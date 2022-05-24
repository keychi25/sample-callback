/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SuperHeavyButton: React.FC<Props> = ({ onClick }) => {
  const [loading, setLoading] = useState(true);
  const sleep = (waitTime: number | undefined) => new Promise( resolve => setTimeout(resolve, waitTime) );
  const aFunc = async function () {
    await sleep(2000);
    console.log("SuberHeavyButton")
  }
  useEffect(() => {
    setLoading(true)
    aFunc()
    setLoading(false);
  }, [aFunc])

  if (loading) {
    return null
  }
  return (
    <button onClick={onClick}>描画重いレンダリングのボタン</button>
  );
};

export default  SuperHeavyButton;
