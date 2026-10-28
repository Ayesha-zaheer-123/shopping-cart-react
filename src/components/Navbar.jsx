import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/Products" className="text-2xl font-bold tracking-wide">
          Shop<span className="text-blue-400">Ease</span>
        </Link>
        <div className="flex items-center gap-6">
          <NavLink
            to="/Products"
            className={({ isActive }) =>
              `font-medium transition-colors hover:text-blue-400 ${
                isActive ? 'text-blue-400' : 'text-white'
              }`
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/Cart"
            className={({ isActive }) =>
              `rounded-lg px-4 py-2 font-medium transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-700 hover:bg-blue-600'
              }`
            }
          >
        Cart
          </NavLink>
        </div>

      </div>
    </nav>
  )
}

export default Navbar