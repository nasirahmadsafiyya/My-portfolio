import React from 'react'

function links() {

  const items = ["item1", "item2", "item3", "item4"]

  return (
    <div className='absolute h-40 w-40 flex align-center justify-center flex-col gap-4'>
    {items.map((item) => (
      <a href= {`# ${item}`} key={item}>{item}</a>
    ))}
    </div>
  )
}

export default links
