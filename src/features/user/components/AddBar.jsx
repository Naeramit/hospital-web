

export default function AddBar(prop) {
const {title , type, handleOnChange, handleOnClickAdd, handleOnClickUpdate, addBar, defaultAdd, err, editId} = prop

const typeSelected = type.map( obj => {

  if (obj.id == defaultAdd){
      return <option  value={obj.id} selected="selected">{obj.name}</option>
  }
  return <option  value={obj.id}>{obj.name}</option>
})

  return (
    <form className="w-[1400px] bg-base-300 min-h-[120px] flex-col rounded-lg" >
        <div className="w-full rounded-t-lg h-8 font-bold flex justify-center items-center mt-2"> {editId ? "EDIT MODE" :title} </div>
        <div className="w-full flex mt-1  gap-4 justify-center items-center">
            <div>
            <select  className="min-w-[200px] w-[200px] h-[40px] rounded-lg text-center font-bold"
            name="type"

            >
              {typeSelected}
            </select>
            </div>
            <div>
                <input type="text" className="min-w-[900px] w-[900px] h-[40px] pl-12  rounded-lg" 
                id = "addBarInput"
                name={title}
                autoFocus
                value={addBar}
                onChange={handleOnChange}
                />
            </div>
            { editId ? 


            (<button type="submit" className="btn btn-success min-w-[200px]  min-h-[40px] h-[42px] font-bold text-xl"
            onClick={handleOnClickUpdate}
            > EDIT
            </button>)

            :

            (<button type="submit" className="btn btn-success min-w-[200px]  min-h-[40px] h-[42px] font-bold text-xl"
            onClick={handleOnClickAdd}
            > ADD 
            </button>)


            }




        </div>
        {err && (        
        <div className="w-full flex mt-1  gap-4 justify-center items-center text-warning">
          {err}
        </div>
        )}
    </form>
  )
}
