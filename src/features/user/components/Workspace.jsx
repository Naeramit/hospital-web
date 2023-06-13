import { Link } from 'react-router-dom';


export default function Workspace() {


    
    return (
        <div className="flex flex-col items-center w-[80%] h-[600px] mt-6">
            <div className="w-full flex justify-end h-12 my-4">
                <button className="btn w-[400px] h-12 flex justify-center items-center rounded-lg bg-base-200  text-2xl font-bold hover:bg-info"
                    onClick={(e) => {
                        e.preventDefault()
                        window.my_modal_1.showModal()
                    }}>Add workspace
                </button>
                <dialog id="my_modal_1" className="modal">
                    <form method="dialog" className="modal-box w-[260px]">
                        <h3 className="font-bold text-lg">ALL WORKSPACE</h3>
                        <div>

                            <div className="flex flex-col  items-center mt-6">
                                <div className="form-control w-52">
                                    <label className="cursor-pointer label">
                                        <span className="label-text  font-bold">OPD GP</span>
                                        <input type="checkbox" className="toggle toggle-success" />
                                    </label>
                                </div>
                                <div className="form-control w-52">
                                    <label className="cursor-pointer label">
                                        <span className="label-text font-bold">OPD MED</span>
                                        <input type="checkbox" className="toggle toggle-success" />
                                    </label>
                                </div>
                                <div className="form-control w-52">
                                    <label className="cursor-pointer label">
                                        <span className="label-text font-bold">ER</span>
                                        <input type="checkbox" className="toggle toggle-success" />
                                    </label>
                                </div>
                                <div className="form-control w-52">
                                    <label className="cursor-pointer label">
                                        <span className="label-text font-bold">LR</span>
                                        <input type="checkbox" className="toggle toggle-success" />
                                    </label>
                                </div>
                                <div className="form-control w-52">
                                    <label className="cursor-pointer label">
                                        <span className="label-text font-bold">IPD</span>
                                        <input type="checkbox" className="toggle toggle-success" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex  justify-center gap-4">
                            <div className="modal-action">
                                <button className="btn hover:bg-warning hover:text-white">Cancel</button>
                            </div>
                            <div className="modal-action ">
                                <button className="btn min-w-[100px] hover:bg-success hover:text-white">Save</button>
                            </div>
                        </div>
                    </form>
                </dialog>
            </div>
            <div className="w-full h-[600px] flex flex-wrap bg-white p-10  gap-16 items-start">
                <Link to={'/doctor/workspace/1'}>
                    <div className="bg-success w-[200px] h-[80px]  rounded-lg p-4 hover:bg-secondary-focus text-4xl text-white  font-bold flex justify-center items-center">
                        <h1>OPD GP</h1>
                    </div>
                </Link>
                <Link to={'/doctor/workspace/2'}>
                    <div className="bg-success w-[200px] h-[80px]  rounded-lg p-4 hover:bg-secondary-focus text-4xl text-white  font-bold flex justify-center items-center">
                        <h1>ER</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}
