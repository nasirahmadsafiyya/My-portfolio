import React from 'react'

function links() {

  const items = ["HomePage", "Services", "Portfolio", "Contact", "About"];

  return (
    <div
    className='m-2 text-red-800 absolute h-4 w-4 flex align-center justify-center flex-col gap-4'
    >
    {items.map((item) => (
      <a href= {`# ${item}`} key={item}>{item}</a>
    ))}
    </div>
  )
}

export default links
