import React from 'react'
import ReactDOM from 'react-dom/client'
import List from './List'

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
