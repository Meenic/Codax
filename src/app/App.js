import Sidebar from "./layout/Sidebar/Sidebar";
import Navbar from "./layout/Navbar/Navbar";
import Content from "./layout/Content/Content";
import Footer from "./layout/Footer/Footer";

export default function App() {
  return (
    <div className="h-full flex">
      <Sidebar />
      <div className="wrapper-with-sidebar">
        <div className="flex-1">
          <Navbar />
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  );
}
