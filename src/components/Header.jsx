import React from "react";
import "../styles.css";

// assets

import oneness from "../assets/images/icons/ohm.svg"


const Header = ({img, author, experience, subjectType, gradeLevel}) => {

  console.log(author)
 

    return(
      <header className="header-container">
        {/* <div  class="menu">
          <div class="menu menu-content">
            <img class="menu-content_image" src={oneness} alt="Oneness" />
          </div>
          <div class="menu menu-button menu-button_home ">
            <img class="menu-button_image" src="../assets/images/icons/house.svg" alt="Go to Home" />
          </div>
          <div class="menu menu-button menu-button_edit">
            <img class="menu-button_image" src="../assets/images/icons/edit.svg" alt="Edit Experience" />
          </div>
          <div class="menu menu-button menu-button_read">
            <img class="menu-button_image" src="../assets/images/icons/read.svg" alt="Read Only"/>
          </div>
          <div class="menu menu-button menu-button_add">
            <img class="menu-button_image" src="../assets/images/icons/add.svg" alt="Add New Experience"/>
          </div>
        </div> */}
        <div className="header-title">
            <h1>
             Pick or Come Up With a Quote And Express it Artistically 
            </h1>
            <img src={img}/>
        </div>
        <div className="header-description">
            <div className="desc-content">
              <p>
                author
              </p>
              <span className="header-author">{author}</span>
            </div>
            <div className="desc-content">
              <p>
                Experience
              </p>
              <span>Project : {experience}</span>
            </div>
            <div className="desc-content">
              <p>
                subject type
              </p>
              <span>Art : {subjectType}</span>
            </div>
            <div className="desc-content">
              <p>
                grade level
              </p>
              <span>{gradeLevel} grade</span>
            </div>
        </div>  

      </header>

    )
}

export {Header}

