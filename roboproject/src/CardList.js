import React from 'react'
import Card from './Card'

export default function CardList({persons}) {
    return (
        <>
            {persons.map(({id, name, email}) => {
                return <Card key={id} id={id} name={name} email={email}/>
            })}
        </>
    )
}

