/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

interface Props {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SuperHeavyButtonMemo: React.FC<Props> = ({ onClick }) => {
  const [loading, setLoading] = useState(true);
  const sleep = (waitTime: number | undefined) => new Promise( resolve => setTimeout(resolve, waitTime) );
  const aFunc = async function () {
    await sleep(2000);
    console.log("SuberHeavyButtonMemo")
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
    <button onClick={onClick}>メモ化された描画の重いレンダリングのボタン</button>
  );
};

export default React.memo(SuperHeavyButtonMemo);
