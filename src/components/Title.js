import React from 'react'
import Typewriter from 'typewriter-effect'

const Title = ({ text = "", strings = [] }) => {
    return (
        <h1 className="d-flex mb-05">
            <span className="d-inline-block mr-05">{text}</span> 
            {
                Boolean(strings?.length > 0) &&
                <Typewriter
                    className="text-primary"
                    options={{
                        strings,
                        autoStart: true,
                        loop: true,
                    }}
                />
            }
        </h1>
    )
}

export default Title