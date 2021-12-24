import React from 'react'

export default function Card({id, name, email}) {
    return (
        <div className='bg-light-green dib pa3 ma2 bw2 br3 shadow-5 grow tc'>
            <img src={`https://robohash.org/${id}`} alt="u-img"/>
            <div>
                <h1>{name}</h1>
                <p>{email}</p>
            </div>
        </div>
    )
}

