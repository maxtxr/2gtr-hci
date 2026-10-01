import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Project from './pages/Project.jsx'
import Stages from './pages/Stages.jsx'
import Stage from './pages/Stage.jsx'
import Assignments from './pages/Assignments.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/stages" element={<Stages />} />
        <Route path="/stages/:slug" element={<Stage />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
