import Sidebar from "./layout/Sidebar/Sidebar";
import Content from "./layout/Content/Content";
import Footer from "./layout/Footer/Footer";

function App() {
   return (
      <>
         <div className="wrapper">
            <Sidebar />
            <div className="w-full">
               <Content />
               <Footer />
            </div>
         </div>
      </>
   );
}

export default App;
