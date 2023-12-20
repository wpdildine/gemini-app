import UpdateElectron from '@/components/update'
import './App.css'
import Home from "@/components/home";

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`)

function App() {


  return (
    <div className='App'>
        <Home></Home>
    </div>
  )
}

export default App