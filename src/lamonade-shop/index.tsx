
import DataTable from "./dataTable";
import ExicutionInventory from "./exicution";
import { InventoryProvider } from "./context/dataContext";

const LemonadeShome = () => {
  // const [dataArray, setDataArry] = useState<InventoryItem[]>([]);
  return (
  <InventoryProvider>
    <div className="min-h-screen flex justify-center items-start p-2 bg-[#F8FCFA]">
      <div className="grid grid-cols-12  gap-0.5 w-full  ">
        
        
        <div className="col-span-12 ">
      <div className=" flex justify-center ">
            <ExicutionInventory  />
      </div>
        </div>
        <div className="col-span-12  w-full h-full  flex items-center ">
          <DataTable  />
        </div>
      </div>
    </div>
  </InventoryProvider>
  );
};

export default LemonadeShome;
