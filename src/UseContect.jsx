import { createContext, useContext, useState } from 'react'

const Store = createContext();

function Fun() {
    const [data, setData] = useState(0)
    return (
        <>
            <Store.Provider value={[data, setData]}>
                <h1>HEADER</h1>
                <ComponentA />
                <ComponentB />
                <button onClick={() => setData(data + 1)}>Increment</button>
                <button onClick={() => setData(data - 1)}>Decrement</button>
              
            </Store.Provider>
        </>
    )
}

function ComponentA() {
    const [data, setData] = useContext(Store);
  
    return (
        <>
            <h1>componentA</h1>
            <b>let see!{data}</b>
        

        </>
    )
}

function ComponentB() {
    const [data, setData] = useContext(Store);
    
    return (
        <>
            <h1>componentB</h1>
            <b>let see!{data}</b>

        </>
    )
}

export default Fun