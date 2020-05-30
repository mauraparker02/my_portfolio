import React from "react";
import { SideNav, SideNavItem, Icon, Button} from 'react-materialize';


function Navbar(props) {
    return (
        <div>
  <style>
    {`
            #root > div > div {
              z-index: 99999 !important;
            }
          `}
  </style>
  <SideNav
    id="SideNav-10"
    options={{
      draggable: true
    }}
    trigger={<Button node="button">=</Button>}
  >
    <SideNavItem
      href="#!portfolio"
      waves
    >
      About  
    </SideNavItem>
    <SideNavItem
      href="#!about"
      waves
    >
      Portfolio
    </SideNavItem>
    <SideNavItem
      href="#!about"
      waves
    >
      Contact 
    </SideNavItem>
  </SideNav>
</div>
    )
}

export default Navbar;
