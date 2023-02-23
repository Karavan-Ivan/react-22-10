import React from 'react'
import ReactDOM from 'react-dom/client'

// const title = React.createElement('h1', { id: 'title' }, 'Hello React.js')
const title = <h1 id="title">Hello React.js</h1>
const content = (
    <div>
        {title}
        {10 + 10}
        <ul className="list">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
            libero ab commodi velit a alias quo facere, iste fugiat in aut rem
            nam dignissimos perspiciatis nihil similique laudantium placeat!
            Quis?
        </p>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{content}</React.StrictMode>)
