import React from 'react'

const About = () => {
    return (
        <div>
            <h2>About Component</h2>
            {/* Include the static HTML file */}
            <iframe
                title="About Page"
                src={`/about.html`}
                width="100%"
                height="500px"
                frameBorder="0"
            />
        </div>
    )
}

export default About