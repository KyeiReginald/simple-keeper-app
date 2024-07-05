import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { TbNotesOff } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import Dialog from "./Dialog";

interface Note {
  id: number;
  noteTile: string;
  noteContent: string;
}

interface Props {
  notes?: Note[];
  onDelete?: (id: number) => void;
  onClose?: () => void;
  update: (id: number) => void;
}

function Note({ notes = [], onDelete = () => {}, update }: Props) {
  const [showDialog, setOpenDialog] = useState<number | false>(false);

  const openDialog = (id: number) => {
    setOpenDialog(id);
  };

  const closeDialog = () => {
    setOpenDialog(false);
  };
  return (
    <>
      {notes.length === 0 && (
        <div className="flex items-center justify-center ">
          <TbNotesOff size={23} />
          <h3 className="px-3 font-semibold text-center">No notes</h3>
        </div>
      )}
      <div className="relative bg-gray-100 gap-3 mx-auto mt-3 mb-14 xl:mb-9 grid grid-cols-1 px-4 py-2 lg:py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {notes.map((note) => (
          <div
            key={note.id}
            className="p-5 bg-white max-w-l shadow-xl rounded-lg flex flex-col"
          >
            <h5 className="mb-2 text-xl font-semibold">{note.noteTile}</h5>
            <p className="mb-3 text-gray-500 flex-grow">{note.noteContent}</p>
            <div className="flex justify-end">
              <button className=" ml-4 flex  rounded-full p-1  hover:bg-gray-300">
                <MdDelete
                  size={21}
                  color="#911e1a"
                  onClick={() => openDialog(note.id)}
                />
              </button>
              <button className=" flex rounded-full p-1 bg-ray-200  hover:bg-gray-300">
                <FaEdit
                  size={21}
                  color="#911e1a"
                  onClick={() => update(note.id)}
                />
              </button>
            </div>

            {showDialog === note.id && (
              <>
                <Dialog
                  closeDelete={() => closeDialog()}
                  comfirmDelete={() => onDelete(note.id)}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
export default Note;
// () => onDelete(note.id)
