import React from 'react'

const Foooter = () => {

    const year = new Date().getFullYear()

    return (
        <>
            <footer className = "footer" >
                <p>Copyrights © SKB {year}</p>
            </footer>
        </>
    )
}

export default Foooter