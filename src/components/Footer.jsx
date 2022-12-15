import React from "react";
import "../styles.css"

const Footer = ({author}) => {
    return(
    <div className="footer-container">
      <footer>
        <span>
          Design & illustrations by <span className='author-footer'>{author}</span>
        </span>
      </footer>
    </div>

    )
}

export {Footer}
