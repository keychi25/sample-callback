import React, { useCallback, useState } from 'react';
import './App.css';
import SuperHeavyButton from './components/SuperHeavyButton';
import SuperHeavyButtonMemo from './components/SuperHeavyButtonMemo';

const App: React.FC = () => {
  const [count, setCount] = useState(0)
  const countUpClick = () => {
    console.log("default clicked!");
    setCount(count + 1) 
  }

  const [callbackCount, setCallbackCount] = useState(0)
  const handleClick = () => {
    console.log("clicked!");
    setCallbackCount(callbackCount + 1)
  };

  const [memoCount, setMemoCount] = useState(0)
  const handleMemoClick = useCallback((e: React.MouseEvent) => {
    console.log("memo clicked!");
    setMemoCount(memoCount + 1)
  }, [memoCount]); // ← ここで定義している第二引数の依存が変更されている

  const countMemoUpClick = () => {
    console.log("memo state update clicked!");
    setMemoCount(memoCount + 1)
  }

  return (
    <>
      <div>
        <br />
        <button onClick={countUpClick}>ボタン</button>
        <br />
        変更を検知してapp全体をレンダリングするが，メモ化されている「SuperHeavyButtonMemo」は再レンダリングされない
        <br />
        カウント：{count}
      </div>
      <div>
      <br />
        <SuperHeavyButton onClick={handleClick} />
        <br />
        変更を検知してapp全体をレンダリングするが，メモ化されている「SuperHeavyButtonMemo」は再レンダリングされない
        <br />
        コールバックのカウント：{callbackCount}
      </div>
      <div>
        <br />
        <SuperHeavyButtonMemo onClick={handleMemoClick} />
        <br />
        変更を検知してapp全体をレンダリングする．全て再レンダリングされる
        <br />
        メモカウント：{memoCount}
      </div>
      <div>
        <br />
        <button onClick={countMemoUpClick}>メモ化されたコンポーネントに関係するstateを変更</button>
        <br />
        変更を検知してapp全体をレンダリングする．メモ化されている「SuperHeavyButtonMemo」で呼び出している関数で「memoCount」に変更を加えているので，全て再レンダリングされる
        <br />
        メモカウント：{memoCount}
      </div>
    </>

  );
}

export default App;
