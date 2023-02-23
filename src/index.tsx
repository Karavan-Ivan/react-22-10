import React from 'react'
import ReactDOM from 'react-dom/client'

type TitleProps = {
    name: string
    text: string
    year: number
}
const Title = ({ name, text, year }: TitleProps) => {
    return (
        <>
            <h1>Hello {name}</h1>
            <p>{text}</p>
            <div>Year: {year}</div>
        </>
    )
}
function List() {
    return (
        <>
            <ul>
                <li>list</li>
                <li>list</li>
                <li>list</li>
            </ul>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
                dolor nulla similique veniam voluptatum ratione maiores totam
                sint accusantium id cumque nemo earum quisquam itaque? Cumque
                ipsa aperiam consequatur quis!
            </p>
        </>
    )
}
const App = () => {
    return (
        <div className="app">
            <Title name="App" text="Lorem" year={2021} />
            <Title name="React" text="Lorem" year={2022} />
            <Title name="TS" text="Lorem" year={2023} />
            <List />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
