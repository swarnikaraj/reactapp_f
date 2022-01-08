

import styled from "styled-components"


export const Cardparent=styled.div`
display:flex;
width:660px;
text-align:left;
align-item:center;
margin:auto;
margin-top:100px;

&>div{  margin:auto; background:#ECDBBA; width:200px; color:#C84B31; border:2px solid #191919}
`


export const Contact=()=>{

    return <Cardparent>
        <div>
        <ul>
            <li>Country:India</li>
            <li>City: Jaipur</li>
            <li>St: xxxx</li>
        </ul>

        </div>
        <div>
        <ul>
            <li>Skype:xxxxx</li>
            <li>Telegram: xxxx</li>
            <li>Discord: xxxx</li>
        </ul>

        </div>
        <div>
          <ul>
            <li>Whatsapp:xxxxx xxx</li>
            <li>Personal:xxx xx xxxx</li>
            <li>Office: xxxx xxx xxx</li>
          </ul>

        </div>
    </Cardparent>

}