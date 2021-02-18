import React from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";
import Dialog from "./components/Dialog";

export default function App() {
  const [showModal, setShowModal] = React.useState(true);
  return (
    <>
      {showModal ? (
        <div className="relative">
          <div
            class={`p-2 ${
              showModal
                ? "bg-opacity-25 bg-purple-600 text-red-500 p-20 sm:px-6 pointer-events-none"
                : "bg-red-500 text-white p-20 sm:px-6"
            }`}
            onClick={() => setShowModal(true)}
            style={{ opacity: 0.5 }}
          >
            <p className="text-6xl">fdhgghfh</p>
          </div>
          <div
            className="absolute justify-center items-center inset-1 z-50 outline-none focus:outline-none"
            style={{
              top: "0",
              bottom: "0",
              left: "50%"
            }}
            onClick={() => setShowModal(false)}
          >
            <div className="absolute w-auto p-6 my-2 mx-auto max-w-sm">
              <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start p-3 justify-between p-2 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3sm font-semibold">Modal Title</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative flex-auto">
                  <p className="my-2 text-gray-600 p- text-sm leading-relaxed">
                    I always felt like I could do anything
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          class="bg-red-500 text-white p-20 sm:px-6"
          onClick={() => setShowModal(true)}
        >
          fdhg
        </div>
      )}
    </>
  );
}
