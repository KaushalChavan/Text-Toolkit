import React from 'react'

export default function About(props) {
  return (
    <div>
      <>
      <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}} >
      <h1 className='fw-bold'>About Text Toolkit :</h1>
      <p className='mt-4'>
          Welcome to Text Toolkit, a versatile tool designed to streamline your text editing experience. Whether you’re drafting a document, composing an email, or simply playing around with text, Text Toolkit offers a range of powerful features to make your work faster and more efficient.

          <h3 className='fw-bold text-success mt-3 mb-3'>Key Features:</h3>

          <h5 id='about'>Copy Text :</h5> Quickly copy any text with a single click, saving you time and effort. <br />
          <h5 id='about'>Clear Text :</h5> Start fresh whenever you need by instantly clearing the text container with ease. <br />
          <h5 id='about'>Text Conversion :</h5> Seamlessly convert text between uppercase and lowercase. Whether you need to SHOUT or whisper, Text Toolkit has you covered. <br />
          <h5 id='about'>Word & Character Count :</h5> Stay on top of your writing with real-time word and character counts, ensuring you meet any length requirements. <br />
          
          <h5 id='about'>Why Choose Text Toolkit?</h5>

          Text Toolkit is not just another text editor. It’s designed with simplicity and functionality in mind, offering an intuitive interface that lets you focus on your content without any distractions. Whether you're a student, writer, or professional, Text Toolkit is the perfect companion for all your text-related tasks.
          </p>

      </div>
      </>
    </div>
  )
}
