import {
    Routes, Route, Link,
    useMatch, Navigate, useNavigate
} from "react-router-dom"
import {Button, Form, Input} from "antd";
import { useState } from 'react'

const Menu = () => {
    const padding = {
        paddingRight: 5
    }
    return (
        <div>
            <Link to='/' style={padding}>anecdotes</Link>
            <Link to='/create-new' style={padding}>create new</Link>
            <Link to='/about' style={padding}>about</Link>
        </div>
    )
}

const SingleAnecdote = ({anecdote}) => (
            <div>
                <p><strong>{anecdote.content} by {anecdote.author}</strong></p>
                <p>has {anecdote.votes} votes</p>
                <p>for more info see <a href={anecdote.info} target="_blank">{anecdote.info}</a></p>
            </div>)

const AnecdoteList = ({anecdotes}) => (
        <div>
            <h2>Anecdotes</h2>
            <ul>
                {anecdotes.map(anecdote => <li key={anecdote.id}><Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link></li>)}
            </ul>
        </div>
        )

const About = () => (
    <div>
        <h2>About anecdote app</h2>
        <p>According to Wikipedia:</p>

        <em>An anecdote is a brief, revealing account of an individual person or an incident.
            Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke
            laughter but to reveal a truth more general than the brief tale itself,
            such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea
            about a person, place, or thing through the concrete details of a short narrative.
            An anecdote is "a story with a point."</em>

        <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
    </div>
)

const Footer = () => (
    <div>
        Anecdote app for <a href='https://fullstackopen.com/'>Full Stack Open</a>.

        See <a
        href='https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js'>https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js</a> for
        the source code.
    </div>
)

const CreateNew = (props) => {
    const navigate = useNavigate()


    const handleSubmit = (values) => {
        const content = values.content
        const author = values.author
        const info = values.info
        props.addNew({
            content,
            author,
            info,
            votes: 0
        })
        navigate('/')
    }

    return (
        <div>
            <h2>create a new anecdote</h2>
            <Form onFinish={handleSubmit}>
                <Form.Item
                    label="Content"
                    name="content"
                    rules={[
                        {
                            required: true,
                            message: 'Please input content!',
                        },
                        ]}
                    >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Author"
                    name="author"
                    rules={[
                        {
                            required: true,
                            message: 'Please input author!',
                        },
                        ]}
                    >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Url for more info"
                    name="info"
                    rules={[
                        {
                            required: true,
                            message: 'Please input url!',
                        },
                        ]}
                    >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">
                        Create
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )

}

const App = () => {
    const [anecdotes, setAnecdotes] = useState([
        {
            content: 'If it hurts, do it more often',
            author: 'Jez Humble',
            info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
            votes: 0,
            id: 1
        },
        {
            content: 'Premature optimization is the root of all evil',
            author: 'Donald Knuth',
            info: 'http://wiki.c2.com/?PrematureOptimization',
            votes: 0,
            id: 2
        }
    ])

    const [notification, setNotification] = useState('')

    const addNew = (anecdote) => {
        anecdote.id = Math.round(Math.random() * 10000)
        setAnecdotes(anecdotes.concat(anecdote))
        setNotification(anecdote ? `a new anecdote ${anecdote.content} created !` : '')
        setTimeout(() => setNotification(''), 5000)
    }

    const anecdoteById = (id) =>
        anecdotes.find(a => a.id === id)

    const vote = (id) => {
        const anecdote = anecdoteById(id)

        const voted = {
            ...anecdote,
            votes: anecdote.votes + 1
        }

        setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
    }

    const match = useMatch('/anecdotes/:id')
    const anecdote = match ? anecdoteById(Number(match.params.id)) : null

    return (
            <div>
                <h1>Software anecdotes</h1>
                <Menu/>
                {notification ? <p>{notification}</p> : null}
                <Routes>
                    <Route path="/create-new" element={<CreateNew addNew={addNew}/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/" element={<AnecdoteList anecdotes={anecdotes}/>}/>
                    <Route path="/anecdotes/:id" element={anecdote ? <SingleAnecdote anecdote={anecdote}/> : <Navigate replace to="/"/>}/>
                </Routes>
                <Footer/>
            </div>
    )
}

export default App
