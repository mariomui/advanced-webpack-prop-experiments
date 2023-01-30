
import { add, minus } from 'addfunctions';
import React, { ReactElement, useMemo, useState } from 'react';
export default function App(): JSX.Element {
  const [left, setLeft] = useState<number>(null)
  const [right, setRight] = useState<number>(null)
  const isValuesPopulated = useMemo(() => {
    return [left, right].every(Boolean)
  }, [left, right])
  function handleSet(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name
    const mapping: { [key: string]: (e: any) => void } = {
      left: setLeft,
      right: setRight,
    }
    mapping[name](Number(e.target.value))
  }
  return <div style={{ fontSize: "4em" }}>
    <input name="left" value={left ?? ''} type="text" onChange={handleSet} />
    <input name="right" value={right ?? ''} type="text" onChange={handleSet} />

    <p>
      Libary function: add <br></br>
      {isValuesPopulated && add(left, right)}
    </p>
    <p>
      Library function: minus <br></br>
      {isValuesPopulated && minus(left, right)}

    </p>

  </div >
}