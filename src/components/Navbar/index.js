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
    {/* <SideNavItem
      user={{
        background: 'https://placeimg.com/640/480/tech',
        email: 'jdandturk@gmail.com',
        image: 'static/media/react-materialize-logo.824c6ea3.svg',
        name: 'John Doe'
      }}
      userView
    /> */}
    <SideNavItem
      href="../public/logo.png"
      icon={<Icon>cloud</Icon>}
    ></SideNavItem>
    {/* <SideNavItem href="#!second">
      Second Link
    </SideNavItem> */}
    <SideNavItem divider />
    {/* <SideNavItem subheader>
      Subheader
    </SideNavItem> */}
    <SideNavItem
      href="#!portfolio"
      waves
    >
      Portfolio 
    </SideNavItem>
    <SideNavItem
      href="#!about"
      waves
    >
      About
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
