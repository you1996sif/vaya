import React from 'react'

import { Link } from 'react-scroll'

const LinkScroll = ({ toSection, name }) => {
    return (
        <div><Link to={toSection} smooth={true}>{name}</Link></div>
    )
}

export default LinkScroll

