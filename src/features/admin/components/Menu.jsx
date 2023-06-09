


export default function Menu(prop) {
  const {active} = prop
  const baseClass = "min-w-[150px] flex justify-center "
  const activeClass = baseClass + " bg-info"
  
  return (
    <div className=" w-full min-h-[66px] flex justify-center items-center"> 
    <ul className="menu bg-base-200 lg:menu-horizontal rounded-box w-[800px] flex justify-around font-bold">
      <li className=" rounded-lg hover:bg-info" >
        <div className= { active== 1 ?  activeClass : baseClass }>
          ADD USER
        </div>
      </li>
      <li className=" rounded-lg hover:bg-info">
        <div className=  { active== 2 ?  activeClass : baseClass }>
          CREATE TEMPORARY PASSWORD
        </div>
      </li>
      <li className=" rounded-lg hover:bg-info">
        <div className=  { active== 3 ?  activeClass : baseClass }>
          DELETE USER
        </div>
      </li>
    </ul>
    </div>
  )
}



