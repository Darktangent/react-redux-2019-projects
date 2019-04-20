let count=0
const myId="my-id";
const addOne=()=>{
    count++
    renderCounterApp()
}
const minusOne=()=>{
    count=count-1
    renderCounterApp()
}
const reset=()=>{
    count=0
    renderCounterApp()
}



const renderCounterApp=()=>{
    const templateTwo=(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={addOne} id="myId" className="count">+1</button>
            <button onClick={minusOne} id="myId" className="count">-1</button>
            <button onClick={reset} id="myId" className="count">Reset</button>
        </div>
    )

    ReactDOM.render(templateTwo,document.getElementById("app"))

}

renderCounterApp()


