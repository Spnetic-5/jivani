import React from 'react'
import MenuBar from "../components/MenuBar";


function goals() {
  return (
    <div className="flex h-screen">
    {/* Left Vertical Menu Bar */}
    <MenuBar />

    {/* Right Content Grid */}
    <div className="flex flex-col w-4/5 p-8 overflow-y-scroll">
      <h2 className="text-lg font-bold mb-2 text-gray-600" style={{ fontFamily: "raleway" }}>
        Hola Goals,
      </h2>
    </div>
  </div>
  )
}

export default goals