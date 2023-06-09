


export default function HeaderMain(prop) {
  const {title, name, logo} = prop


  return (
    <div className="navbar bg-primary  pb-0 ">
      <div className="flex-1">
        <div className="text-xl  text-white  ml-2 font-bold"> {title} </div>
      </div>
      <div className="flex gap-4">
      <div className="w-54 text-white">{name}</div>
      <div className="dropdown dropdown-end mr-2">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-12 rounded-full bg-white">
              <img src={logo} />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-1 p-2 shadow  bg-white rounded-box w-52 z-50">
            <li className="z-50"><a>Settings</a></li>
            <li className="z-50"><a>Logout</a></li>
          </ul>
      </div>
      </div>
    </div>
  )
}
