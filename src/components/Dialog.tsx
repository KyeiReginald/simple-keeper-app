import Button from "./Botton";

interface Props {
  comfirmDelete: () => void;
  closeDelete: () => void;
}

function DialogBox({ comfirmDelete, closeDelete }: Props) {
  return (
    <>
      {/* <!-- Modal backdrop --> */}
      <div
        className="fixed top-0 left-0 z-20 flex items-center justify-center w-screen h-screen bg-slate-300/20 backdrop-blur-sm"
        aria-labelledby="header-5a content-5a"
        aria-modal="true"
        tabIndex={-1}
        role="dialog"
        onClick={closeDelete}
      >
        {/* /* <!-- Modal --> */}
        <div
          className="flex max-h-[90vh] max-w-xs flex-col gap-6 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10text-center"
          id="modal"
          role="document"
        >
          {/* <!-- Modal header --> */}
          <header id="header-5a" className="flex flex-col items-center gap-4">
            {/* <FontAwesomeIcon icon={faTrashCan} color="#FB923D" size="xl" /> */}
          </header>
          {/* <!-- Modal body --> */}
          <div id="content-5a" className="flex-1 overflow-auto">
            <p>Do you want to delete this item?</p>
          </div>
          {/* <!-- Modal actions --> */}
          <div className="flex justify-center gap-8 ">
            <Button buttonText="yes" onClick={comfirmDelete} />
            <Button buttonText=" No " onClick={closeDelete} />
          </div>
        </div>
      </div>
    </>
  );
}
export default DialogBox;
