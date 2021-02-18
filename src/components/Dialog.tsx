import React from "react";

interface Props {
  children: React.ReactNode;
  open: boolean;
  onClose: Function;
}
export default function Dialog({ open, onClose }: Props) {
  console.log(open);
  return (
    <>
      <div className="flex items-center justify-center h-64">
        <button
          className="modal-button bg-teal-200 p-3 rounded-lg text-teal-900 hover:bg-teal-300"
          onClick={() => onClose()}
        >
          Blast off
        </button>
        {open && (
          <div className="modal opacity-0 pointer-events-none absolute w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="modal-overlay absolute w-full h-full bg-black opacity-25 top-0 left-0 cursor-pointer"></div>
            <div className="absolute w-1/2 h-32 bg-white rounded-sm shadow-lg flex items-center justify-center text-2xl">
              <span>Text</span>
            </div>
          </div>
        )}{" "}
      </div>
    </>
  );
}
