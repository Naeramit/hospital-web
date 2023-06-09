
export default function DoctorOpdMenu(prop) {
    const {active} = prop
    const baseClass = "min-w-[150px] flex justify-center "
    const activeClass = baseClass + " bg-info"
    
    return (
      <div className=" w-full min-h-[66px] flex justify-center items-center "> 
      <ul className="menu bg-base-200 lg:menu-horizontal rounded-box w-[98%] flex justify-around font-bold">
        <li  className=" rounded-lg hover:bg-info">
          <div className= { active== 1 ?  activeClass : baseClass }>
            RECIEVE CONSULTATION 
          </div>
        </li>
        <li className="rounded-lg hover:bg-info">
          <div className= { active== 2 ? activeClass  : baseClass }>
            CREATE CONSULTATION
          </div>
        </li>
      </ul>
      </div>
    )
  }