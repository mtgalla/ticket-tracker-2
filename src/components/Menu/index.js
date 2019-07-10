import React from "react";
import "./style.css";
    
    
function Menu(props) {
    return (
  
    <div className="col-12">
        <nav class="menu">
            <ol>
                <li class="menu-item"><a href="/">Home</a></li>
                <li class="menu-item"><a href="/Saved">Saved</a></li>
                <li class="menu-item"><a href="sports">Sports</a></li>
                <li class="menu-item"><a href="concert">Concerts</a></li>
                <li class="menu-item"><a href="theatre">Theaters</a></li>
            </ol>
        </nav>
    </div>
    )
}

export default Menu;