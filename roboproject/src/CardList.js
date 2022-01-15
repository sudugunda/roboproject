import React, { useState } from 'react'
import Card from './Card'

export default function CardList({persons}) {

    return (
        <div className='w-80'>
            {persons.map(({id, name, email}) => {
                return <Card key={id} id={id} name={name} email={email}/>
            })}
        </div>
    )
}

