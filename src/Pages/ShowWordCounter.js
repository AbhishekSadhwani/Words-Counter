import React from 'react'
import { Header } from '../Components/Header'
import { Counter } from '../Components/Counter'

export const ShowWordCounter = () => {
  return (
    <main>
        <Header heading={"Word Counter"} subHeading={"Free online character and word count tool."} />
        <Counter />
    </main>

    

  )
}
