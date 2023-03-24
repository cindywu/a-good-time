"use client"
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

export default function Home() {
  const [textStuff, setTextStuff] = useState<string>('')

  return (
    <div>
      good time
      <textarea
        placeholder={'say some stuff'}
        onChange={(e) => { setTextStuff(e.target.value)}}
      />
      {/* <div>
        {textStuff}
      </div> */}
      <ReactMarkdown children={textStuff}/>
    </div>
  )
}
