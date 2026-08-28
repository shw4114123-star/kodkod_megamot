import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import { Tabs } from '../Tabs/Tabs';
import type { Book, Movie } from '../../types';


const INITIAL_BOOKS: Book[] = [
  {
    id: "b1",
    title: "קיצור תולדות האנושות",
    author: "יובל נח הררי",
    pages: 448,
    finished: true
  },
  {
    id: "b2",
    title: "הארי פוטר ואבן החכמים",
    author: "ג'יי.קיי. רולינג",
    pages: 320,
    finished: false
  }
];

const INITIAL_MOVIES: Movie[] = [
  {
    id: "m1",
    title: "מטריקס",
    director: "האחיות ואצ'אוסקי",
    durationMinutes: 136,
    finished: true
  },
  {
    id: "m2",
    title: "התחלה (Inception)",
    director: "כריסטופר נולאן",
    durationMinutes: 148,
    finished: false
  }
];


function App() {
  const [activeTab, setActiveTab] = useState<'books' | 'movies'>('books');

  return (
    <>
      <div className="app-container">
        <h1>MediaShelf</h1>
        <Tabs active={activeTab} onChange={setActiveTab} />
        <div className="content">
          {activeTab === 'books' ? (
            <div>
              <h2>רשימת ספרים</h2>
              <ul> {INITIAL_BOOKS.map((book) => (
                  <li key={book.id}>
                    <strong>{book.title}</strong> מאת {book.author} ({book.pages} עמודים) - {book.finished ? '✅ נקרא' : '⏳ טרם נקרא'}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <h2>רשימת סרטים</h2>
              <ul> {INITIAL_MOVIES.map((movie) => (
                  <li key={movie.id}>
                    <strong>{movie.title}</strong> (במאי: {movie.director}, {movie.durationMinutes} דקות) - {movie.finished ? '✅ נצפה' : '⏳ טרם נצפה'}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App

