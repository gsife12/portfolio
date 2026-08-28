import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { Experience } from './pages/Experience'
import { Projects } from './pages/Projects'
import { ProjectCaseStudy } from './pages/ProjectCaseStudy'
import { Skills } from './pages/Skills'
import { Education } from './pages/Education'
import { NotFound } from './pages/NotFound'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectCaseStudy />} />
          <Route path="skills" element={<Skills />} />
          <Route path="education" element={<Education />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
