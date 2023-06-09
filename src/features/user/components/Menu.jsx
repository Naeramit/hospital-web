
export default function Menu(prop) {
    const {active} = prop
    const baseClass = "min-w-[150px] flex justify-center "
    const activeClass = baseClass + "active"
    
    return (
      <div className=" w-full min-h-[66px] flex justify-center items-center"> 
      <ul className="menu bg-base-200 lg:menu-horizontal rounded-box w-full flex justify-around font-bold">
        <li >
          <div className= { active== 1 ?  activeClass : baseClass }>
            Current History
          </div>
        </li>
        <li>
          <div className= { active== 2 ? activeClass  : baseClass }>
            Previous History
          </div>
        </li>
        <li>
          <div className= { active== 3 ? activeClass : baseClass }>
            Lab
          </div>
        </li>
        <li>
          <div className= { active== 4 ? activeClass : baseClass }>
            Med Image
          </div>
        </li>
        <li>
          <div className= { active== 5 ? activeClass : baseClass }>
            Pre-Diag Order
          </div>
        </li>
        <li>
          <div className= { active== 6 ? activeClass : baseClass }>
            Diagnosis
          </div>
        </li>
      </ul>
      </div>
    )
  }