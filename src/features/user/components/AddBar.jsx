

export default function AddBar() {
  return (
    <form className="w-[1400px] bg-base-300 min-h-[120px] flex-col rounded-lg">
        <div className="w-full rounded-t-lg h-8 font-bold flex justify-center items-center mt-2"> Create New Diagnosis</div>
        <div className="w-full flex mt-1  gap-4 justify-center items-center">
            <div>
            <select  className="min-w-[200px] w-[200px] h-[40px] rounded-lg text-center font-bold">
                <option value="1">Principle</option>
                <option value="2">Comorbid</option>
                <option value="3">Complicate</option>
            </select>
            </div>
            <div>
                <input type="text" className="min-w-[900px] w-[900px] h-[40px] pl-12  rounded-lg" autoFocus/>
            </div>
            <button type="submit" className="btn btn-success min-w-[200px]  min-h-[40px] h-[42px] font-bold text-xl"> ADD </button>
        </div>
    </form>
  )
}
