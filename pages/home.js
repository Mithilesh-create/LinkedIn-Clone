import MainPlayArea from "../components/MainPlayArea";
import SignedHeader from "../components/SignedHeader";

function home() {
  return (
    <div className="w-full h-screen flex flex-col flex-shrink-0 ">
      <SignedHeader />
      <MainPlayArea />
    </div>
  );
}

export default home;
