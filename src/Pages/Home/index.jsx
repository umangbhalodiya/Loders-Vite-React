import { useState } from "react";
import "./Home.scss";
import loaders from "../../Components/LoaderComponents";
import { Modal } from "../../Components/Modals/Index";
export const Home = () => {
  const [component, setComponent] = useState({});
  const [styleModal, setStyleModal] = useState(false);
  return (
    <div className="home_container">
      <div className="loaders_grid">
        {loaders.map((item, i) => {
          return (
            <div
              className="loader_item"
              key={i}
              onClick={() => {
                setComponent(item);
                setStyleModal(true);
              }}
            >
              {item.component}
            </div>
          );
        })}
      </div>
      {styleModal && <Modal setStyleModal={setStyleModal} loader={component} />}
    </div>
  );
};
