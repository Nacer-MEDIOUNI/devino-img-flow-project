import React, { useRef, useCallback, useState, useEffect } from "react";
import {
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  useReactFlow,
  Background,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import "./index.css";
import SideBar from "./Components/Sidebar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { CustomImageNode } from "./Components/CustomNodes";
import {
  BiAdjust,
  BiCrop,
  BiDroplet,
  BiImageAdd,
  BiPalette,
  BiSun,
} from "react-icons/bi";
import { GiResize } from "react-icons/gi";

const initialNodes = [];
const blocks = [
  { type: "image", label: "Add Image", icon: <BiImageAdd size={24} /> },
  { type: "contrast", label: "Change Contrast", icon: <BiAdjust size={24} /> },
  { type: "result", label: "Image Output", icon: <BiImageAdd size={24} /> },
  { type: "crop", label: "Crop Image", icon: <BiCrop size={24} /> },
  { type: "brightness", label: "Change Brightness", icon: <BiSun size={24} /> },
  { type: "size", label: "Change Size", icon: <GiResize size={24} /> },
  {
    type: "background",
    label: "Add Color Background",
    icon: <BiPalette size={24} />,
  },
  {
    type: "saturation",
    label: "Change Saturation",
    icon: <BiDroplet size={24} />,
  },
];

let id = 1;
const getId = () => `dndnode_${id++}`;

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const { screenToFlowPosition } = useReactFlow();
  const [uploadedImages, setUploadedImages] = useState({});
  const [darkMode, setDarkMode] = useState(() => {
    // Retrieve the dark mode preference from local storage or default to false
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    // Save dark mode preference to local storage whenever it changes
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  const onConnect = useCallback(
    (params) => {
      console.log("Connection parameters:", params);
      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();

      if (!type || !reactFlowBounds) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node`, id: getId() },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, setNodes]
  );

  const onImageUpload = useCallback((event, nodeId) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImages((prev) => ({ ...prev, [nodeId]: reader.result }));
    };
    reader.readAsDataURL(file);
  }, []);

  const onDeleteNode = useCallback(
    (id) => {
      setNodes((nds) => nds.filter((node) => node.id !== id));
    },
    [setNodes]
  );

  const nodeTypes = {
    image: (props) => (
      <CustomImageNode
        {...props}
        onDeleteNode={onDeleteNode}
        onImageUpload={onImageUpload}
        uploadedImages={uploadedImages}
      />
    ),
  };

  return (
    <>
      <div className={` ${darkMode ? "dark" : ""}`}>
        <Header />
        <div className={`dndflow flex flex-col`}>
          <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onDrop={onDrop}
              onDragOver={onDragOver}
              fitView
              nodeTypes={nodeTypes}
            >
              <Background
                color="#FFFFF"
                variant={BackgroundVariant.Dots}
                className="dark:bg-gray-800"
              />
              <Controls position="bottom-right" />
            </ReactFlow>
          </div>
          <SideBar
            blocks={blocks}
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

const DnDFlowWrapper = () => (
  <ReactFlowProvider>
    <DnDFlow />
  </ReactFlowProvider>
);

export default DnDFlowWrapper;
