import "../../../src/App.css";
 
 export default function SalesChart() {
   return (
    <div className="mx-auto flex justify-center">
    <div className="w-96 p-6 shadow-lg bg-white h-screen rounded-md">
        <p className="text-3xl block text-center "><i className="fa-solid fa-user"></i> Sales Chart</p>
        
       
        
        <div className="mt-3">
            <label htmlFor="roles" className="block text-base mb-2">Sales to view</label>
            <select id="roles" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Select a role..." >
                <option selected>Select plan</option>
                <option value="Supervisor">Annually</option>
                <option value="Manager">Monthly</option>
                <option value="Rep">Sales Daily</option>
            </select>
        </div>


      

    </div>
</div>
   )
 }
 