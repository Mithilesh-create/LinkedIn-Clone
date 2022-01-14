import Header from "../components/Header";
import SignIn from "../components/SignIn";

function index() {
  return (
    <div className="h-screen w-full flex flex-col font-fontpopins bg-gray-100" style={{maxHeight:900}}>
      <Header  />
      <SignIn />
    </div>
  );
}

export default index;
