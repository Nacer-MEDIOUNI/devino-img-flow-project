import React from "react";

const EditingBlocks = ({ blocks }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <>
      <div className="my-4">
        <span className="text-sm font-bold">Editing Blocks</span>
      </div>
      <div className="w-full h-fit flex flex-wrap justify-center gap-2">
        {blocks.map((block) => (
          <div
            key={block.type}
            className="w-24 h-22 gap-2 p-4 bg-white flex flex-col items-start justify-start rounded-md cursor-grab border-2 border-black hover:-rotate-2 hover:outline-1 hover:outline-dashed hover:border-none"
            onDragStart={(event) => onDragStart(event, block.type)}
            draggable
          >
            <div className="w-6 h-6">{block.icon}</div>{" "}
            <span className="font-bold text-xs">{block.label}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default EditingBlocks;
