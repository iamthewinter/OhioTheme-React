import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../Accordion/Accordion.scss";
import { Icon } from "@iconify/react";

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <span>
            <Icon icon="fe:plus" />
          </span>
          Website & Mobile App Design
        </Accordion.Header>
        <Accordion.Body>
          Using year-over-year design approaches and latest techs, we will
          ensure that your new website{" "}
          <strong> will be visible, accessible, and treads lightly</strong>.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <span>
            <Icon icon="fe:plus" />
          </span>{" "}
          Motion Graphics & Animation
        </Accordion.Header>
        <Accordion.Body>
          Cepteur sint occaecat cupidatat proident, taken possession of my
          entire soul, like these sweet mornings of spring which I enjoy with my
          whole.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <span>
            <Icon icon="fe:plus" />
          </span>
          User Experience
        </Accordion.Header>
        <Accordion.Body>
          Cepteur sint occaecat cupidatat proident, taken possession of my
          entire soul, like these sweet mornings of spring which I enjoy with my
          whole.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;
// import AccordStyle from "../Accordion/Accordion.module.scss"
// const Accordion = () => {
//     return (
//         <ul className={AccordStyle.accordion_container}>
//             <li className={AccordStyle.accordion}>
//                 <div className={AccordStyle.accordionHeading}>
//                     <div className={AccordStyle.head_container}>
//                         <span><Icon icon="clarity:plus-line" /></span>
//                         <h6>Website & Mobile App Design</h6>
//                     </div>
//                 </div>
//                 <div className={AccordStyle.accord_content}>
//                     <div className={AccordStyle.head_container}></div>
//                 </div>

//             </li>
//         </ul>
//     )
// }

// export default Accordion
