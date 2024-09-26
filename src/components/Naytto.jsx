import Bundesliiga from "../components/Bundesliiga";
import Valioliiga from "../components/Valioliiga";

export default function Naytto() {
  return (
    <>
      <main>
        <div className="container ">
          <div className="row">
            <div className="col-xl-6 d-flex justify-content-center bg-light pb-3">
              <Bundesliiga />
            </div>
            <div className="col-xl-6 d-flex justify-content-center bg-light">
              <Valioliiga />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
