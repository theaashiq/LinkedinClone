import React from 'react'

const InputOption = ({Icon, title}) => {
  return (
    <div className="text-center flex mx-3">
    <Icon className="text-blue-500"/>
    <h1 className="font-semibold text-gray-600">{title}</h1>
  </div>
  )
}

export default InputOption