import React from 'react'

export default function About(props) {
  return (
    <div>
      <>
      <div className="container my-5" style={{color: props.mode==='light'?'black':'white'}} >
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quos tempore facere quo magnam, libero voluptate optio consectetur possimus illo perspiciatis quia a saepe aliquam nemo velit neque vitae? Tempora, sed veniam. Libero dicta quod, cum laudantium maxime voluptate non officiis sapiente aspernatur voluptates vitae sed repudiandae vero facere soluta! Assumenda eum voluptas expedita praesentium aliquam quam explicabo, adipisci non!</p>   
      </div>
      </>
    </div>
  )
}
