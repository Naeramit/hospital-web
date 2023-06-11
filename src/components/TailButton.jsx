

export default function TailBotton(prop) {
    const {name} = prop 
    return (
        <button className="btn btn-base-300 min-w-[200px]  hover:bg-success hover:text-white">
            {name}
        </button>
    )
}
