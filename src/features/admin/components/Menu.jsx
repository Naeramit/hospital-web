


export default function Menu(prop) {
  const {active} = prop
  
  return (
    <div className=" w-full min-h-[66px] flex justify-center items-center"> 
    <ul className="menu bg-base-200 lg:menu-horizontal rounded-box w-[600px] flex justify-around font-bold">
      <li >
        <div className= { active== 1 ? "active" : ""}>
          ADD USER
        </div>
      </li>
      <li>
        <div className= { active== 2 ? "active" : ""}>
          CREATE TEMPORARY PASSWORD
        </div>
      </li>
      <li>
        <div className= { active== 3 ? "active" : ""}>
          DELETE USER
        </div>
      </li>
    </ul>
    </div>
  )
}



