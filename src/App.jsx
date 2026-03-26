import { Routes, Route, Navigate, Link , NavLink} from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Network from './pages/Network'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import UserProfile from './pages/UserProfile'
import Joblist from './pages/jobs/JobList'
import Parttime from './pages/jobs/PartTime'
import Fulltime from './pages/jobs/FullTime'

function App() {
  return (
    <div className="app navigation">
      <nav className='nav-links'>
        {/* <Link to="/" className='nav-link'>Home</Link>
        <Link to="/network" className='nav-link'>Network</Link>
        <Link to="/profile" className='nav-link'>Profile</Link>
        <Link to="/jobs" className='nav-link'>Jobs</Link> */}
        <NavLink to="/" className='nav-link'>Home</NavLink>
        <NavLink to="/network" className='nav-link'>Network</NavLink>
        <NavLink to="/profile" className='nav-link'>Profile</NavLink>
        <NavLink to="/jobs" className='nav-link'>Jobs</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/network" element={<Network />} /> //Simple route for network page
        <Route path="/profile" element={<Profile />} /> //Simple route for profile page
        <Route path="/user/:id" element={<UserProfile />} /> //Dynamic route for user profiles, :id is a placeholder for user ID
        <Route path="/jobs" element={<Joblist />} > //Route for job listings
          <Route path="parttime" element={<Parttime />} /> //Nested route for part-time jobs
          <Route path="fulltime" element={<Fulltime />} /> //Nested route for full-time jobs
        </Route>
        {/* <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/lists" element={<Lists />} /> */}
        {/* <Route path="/more" element={<More />} /> */}
        {/* Redirect any unknown routes to home */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <main className="main-content">
        {/* <Home /> */}
      </main>
    </div>
  )
}

export default App
