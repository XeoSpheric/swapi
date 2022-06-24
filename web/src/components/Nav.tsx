import { Link, useNavigate } from 'react-router-dom';

export default function Nav() {
  const navigate = useNavigate();
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none md:hidden">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <Link
          to={'/'}
          className="btn btn-ghost normal-case text-xl text-primary"
        >
          SWAPI
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        {/* Large Expanded View */}
        <ul className="menu menu-horizontal p-0 hidden lg:inline-flex">
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/docs'}>Docs</Link>
          </li>
          <li>
            <a>
              <label tabIndex={1} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://api.lorem.space/image/face?hash=33791" />
                </div>
              </label>
            </a>
          </li>
        </ul>
        {/* Medium Compact View */}
        <ul className="menu menu-horizontal p-0 hidden md:inline-flex lg:hidden">
          <li tabIndex={1}>
            <a>
              Menu
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 menu bg-base-100">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Docs</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
