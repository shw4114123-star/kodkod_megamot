import { Outlet } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import { useContext } from 'react'
import { UseContext } from './context/ThemeContext'
import "./css/layout.css"
export default function Layout() {
    const { theme } = useContext(UseContext)
    return (
        <div className={`layout ${theme}`}>
            <Header />
            <main className='main'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
