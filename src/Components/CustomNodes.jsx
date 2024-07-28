import { Handle } from "@xyflow/react";
import { CgClose } from "react-icons/cg";

export function CustomImageNode({
  data,
  id,
  onDeleteNode,
  onImageUpload,
  uploadedImages,
}) {
  return (
    <div className=" w-64 h-fit grow flex flex-col items-center justify-between bg-neutral-100 rounded-lg border-2 border-black">
      <div className="w-full text-center border-b-[1px] border-neutral-400 p-2 bg-yellow-400 rounded-t-lg">
        <span className="font-bold text-xs">Image Input</span>
      </div>
      <div className="w-fit flex flex-col  justify-center items-center  grow border-dashed rounded-md border-2 border-black m-2">
        <label className="w-full h-16 flex justify-center items-center cursor-pointer bg-neutral-200 text-black text-center text-xs font-semibold py-2 px-4 rounded-md hover:bg-neutral-300">
          Click here to add an image file
          <input
            id={`upload-${id}`}
            type="file"
            onChange={(event) => onImageUpload(event, data.id)}
            className="hidden"
          />
        </label>
        {uploadedImages[data.id] && (
          <img
            src={uploadedImages[data.id]}
            alt="Uploaded"
            style={{ width: "" }}
          />
        )}
      </div>
      <Handle type="target" position="right" />
      <button
        className="absolute top-2 right-2  bg-white text-black rounded-full border border-black w-4 h-4 flex items-center justify-center"
        onClick={() => onDeleteNode(id)}
      >
        <CgClose size={10} />
      </button>
    </div>
  );
}
