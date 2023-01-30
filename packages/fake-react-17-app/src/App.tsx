
import React, { useMemo, useState } from 'react';
import { add, minus, say } from "addfunctions"

export default function App(): JSX.Element {
  const [left, setLeft] = useState<string | number>("")
  const [right, setRight] = useState<string | number>("")
  const isValuesPopulated = useMemo(() => {
    return [left, right].every(Boolean)
  }, [left, right])
  function handleSet(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    const name = e.target.name
    const mapping: { [key: string]: (e: any) => void } = {
      left: setLeft,
      right: setRight,
    }
    const ret = ![''].includes(e.target.value) ? Number(e.target.value) : '';
    mapping[name](ret)
  }
  return <div style={{ fontSize: "4em" }}>
    <input name="left" value={left} type="text" onChange={handleSet} />
    <input name="right" value={right} type="text" onChange={handleSet} />

    <p>
      Libary function: add <br></br>
      {isValuesPopulated && add(Number(left), Number(right))}
    </p>
    <p>
      Library function: minus <br></br>
      {isValuesPopulated && minus(Number(left), Number(right))}
    </p>
    <p>
      !!!{say()}

    </p>

  </div >
}