import Bundesliiga from "../components/Bundesliiga";
import Valioliiga from "../components/Valioliiga";

export default function Naytto() {
  return (
    <>
      <main>
        <div className="container ">
          <div className="row">
            <div className="col-xl-6 d-flex justify-content-center pb-3">
              <Bundesliiga />
            </div>
            <div className="col-xl-6 d-flex justify-content-center">
              <Valioliiga />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
