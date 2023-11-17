import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Buttons from "./components/Buttons";
import PredefinedQuery from "./components/PredefinedQuery";
import SqlEditor from "./components/SqlEditor";
import Table from "./components/Table";
import DataDraw from "./components/TableDrawer/DataDraw";

// App component
function App() {
  // State variables
  const [value, setValue] = useState("select * from customers;");
  const [rows, setRows] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [query, setQuery] = useState("");
  const [defaults, setDefaults] = useState(1);
  const [csvData, setCSVData] = useState([]);

  // Checking if the query is empty and showing a toast message
  if (value === "") {
    toast.error("Please remove the code and run the query");
    setValue("-- Query Window! \n-- Enter you Query!");
  }

  // useEffect to update defaults based on the entered query
  useEffect(() => {
    if (value.toLowerCase() === "select * from customers;") {
      setDefaults(1);
    } else if (value.toLowerCase() === "select * from employees;") {
      setDefaults(2);
    } else if (value.toLowerCase() === "select * from orders;") {
      setDefaults(3);
    } else if (
      value.toLowerCase() ===
      "select contact_name, address,city,postal_code, country from customers limit 18;"
    ) {
      setDefaults(4);
    } else {
      setDefaults(0);
    }
  }, [value]);

  // JSX structure
  return (
    <div className="flex flex-wrap justify-center items-start w-full">
      {/* Left column */}
      <div className="w-full lg:w-9/12">
        <div className="flex flex-wrap justify-center items-start w-full">
          {/* PredefinedQuery component */}
          <div className="w-full lg:w-3/12">
            <PredefinedQuery setValue={setValue} setDefaults={setDefaults} />
          </div>
          {/* Buttons and SqlEditor components */}
          <div className="w-full lg:w-9/12">
            <div className="flex w-full justify-between">
              {/* Input header */}
              <div className="font-bold text-center py-4 w-28 bg-gray-200">
                Input
              </div>
              {/* Buttons component */}
              <Buttons
                setQuery={setQuery}
                setHeaders={setHeaders}
                setRows={setRows}
                setCSVData={setCSVData}
                value={value}
                setValue={setValue}
                setDefaults={setDefaults}
                defaults={defaults}
              />
            </div>
            {/* SqlEditor component */}
            <SqlEditor value={value} setValue={setValue} />
          </div>
        </div>
        {/* Table component */}
        <Table query={query} headers={headers} rows={rows} csvData={csvData} />
      </div>

      {/* Right column */}
      <div className="w-full lg:w-3/12">
        {/* DataDraw component */}
        <DataDraw />
      </div>

      {/* Toaster component for displaying toast messages */}
      <Toaster
        position="bottom-left"
        gutter={8}
        toastOptions={{
          duration: 3000,
        }}
      />
    </div>
  );
}

// Exporting the App component
export default App;
