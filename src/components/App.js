import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
    <div>
        ADD TODO
        <AddTodo />
        TODO LIST
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App