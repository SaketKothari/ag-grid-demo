import { NavLink, Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Tabs Demo App</h1>
          {/* Using NavLink gives us as an additional active class */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="tabs">Tabs</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
