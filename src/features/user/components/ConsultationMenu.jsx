
export default function ConsultationMenu(prop) {
    const {active} = prop
    const baseClass = "min-w-[150px] flex justify-center "
    const activeClass = baseClass + " bg-info"
    
    return (
      <div className=" w-full min-h-[66px] flex justify-center items-center "> 
      <ul className="menu bg-base-200 lg:menu-horizontal rounded-box w-[98%] flex justify-around font-bold">
        <li  className=" rounded-lg hover:bg-info">
          <div className= { active== 1 ?  activeClass : baseClass }>
            CURRENT HISTORY
          </div>
        </li>
        <li className="rounded-lg hover:bg-info">
          <div className= { active== 2 ? activeClass  : baseClass }>
            PREVIOUS HISTORY
          </div>
        </li>
        <li className="rounded-lg hover:bg-info">
          <div className= { active== 3 ? activeClass : baseClass }>
            LAP
          </div>
        </li>
        <li className="rounded-lg hover:bg-info">
          <div className= { active== 4 ? activeClass : baseClass }>
            MED IMAGE
          </div>
        </li>
        <li className="rounded-lg hover:bg-info">
          <div className= { active== 5 ? activeClass : baseClass }>
            PRE-DIAG ORDER
          </div>
        </li>
        <li className="rounded-lg hover:bg-info">
          <div className= { active== 6 ? activeClass : baseClass }>
            DIAGNOSIS
          </div>
        </li>
      </ul>
      </div>
    )
  }