import "./Modals.scss";
import Close from "../../assets/icons/close.svg";
import Copy from "../../assets/icons/copy.png";
export const Modal = (props) => {
  const { setStyleModal, loader } = props;
  return (
    <div className="modalWrapper">
      <div className="modal_section">
        <div className="modal_header">
          <img
            src={Close}
            onClick={() => {
              setStyleModal(false);
            }}
          />
        </div>
        <div className="modal_content">{loader.component}</div>
        <div className="modal_footer">
          <button>
            <img src={Copy} /> Html
          </button>
          <button>
            <img src={Copy} /> Css
          </button>
        </div>
      </div>
    </div>
  );
};
