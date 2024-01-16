import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList'
import MovieList from './components/MovieList'
import BookList from './components/BookList'
 
 

function App() {

    return (
      <>
        <div>
          <h1>MYLENE PAMINTUAN</h1>
          <TodoList/>
          <MovieList/>
          <BookList/>
        </div>      
      </>
    )
  }
  

export default App
