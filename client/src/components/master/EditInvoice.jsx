import "../../../src/App.css";

export default function EditInvoice() {
  return (
    <>
        <div className=" mx-auto">
            <div className="relative bg-indigo-700 h-screen font-abel p-10 overflow-hidden">
                <div className="bg-white flex flex-col p-2 shadow-md">

                    <h1 className=" text-2xl text-center font-lobster">Edit Invoice</h1>

                    <div className="flex flex-1 gap-2">
                        

                        <div className="">
                            <div className="flex flex-row gap-1 mt-3">
                                <label htmlFor="username" className="block text-base mb-2">Bill No</label>
                                <input type="text" id="username" className="border border-black w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Bill Number..." />
                            </div>
                            <div className="flex flex-row gap-1 mt-3">
                                <label htmlFor="roles" className="block text-base mb-2">Select a Branch</label>
                                <select id="roles" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Select a role..." >
                                <option selected>Select a Branch</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                </select>
                            </div>
                            
                        </div>
                    
                    </div>
                </div>
                <div className="bg-white">
                    <table className="border border-black w-full h-full">
                        <thead>
                            <tr>
                                <th>
                                    S/n
                                </th>
                                <th>
                                    Product Name
                                </th>
                                <th>
                                    Pack
                                </th>
                                <th>
                                    MRP
                                </th>
                                <th>
                                    Expiry
                                </th>
                                <th>
                                    Quantity
                                </th>
                                <th>
                                    Free
                                </th>
                                <th>
                                    Rate
                                </th>
                                <th>
                                    Amount
                                </th>
                            </tr>
                            
                        </thead>
                    </table>
                </div>
                <div className="bg-white">
                        <div className="flex flex-row justify-between p-5">
                            

                            <div className="flex flex-row gap-1">
                                <label htmlFor="text" className="block mb-2">Total Quantity</label>
                                <input type="text" id="text" className="border
                                 border-black w-full text-base focus:outline-none
                                  focus:ring-0 focus:border-gray-600" placeholder="" />
                            </div>
                            <div className="flex flex-row gap-1">
                                <label htmlFor="text" className="block mb-2">Total Amount</label>
                                <input type="text" id="text" className="border
                                 border-black w-full text-base focus:outline-none
                                  focus:ring-0 focus:border-gray-600" placeholder="" />
                            </div>

                            <div className="w-1/10">
                                <button type="submit" className="border-2 border-red-700 bg-red-700 p-3
                                 text-white w-full rounded-md hover:bg-transparent
                                  hover:text-red-700 font-semibold">Delete</button>
                            </div>
                            <div className="w-1/10">
                                <button type="submit" className="border-2 p-3
                                 border-indigo-700 bg-indigo-700 text-white
                                   rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold">Print</button>
                            </div>
                           
                        </div>

                    </div>
            </div>
        </div>
    </>
  )
}
