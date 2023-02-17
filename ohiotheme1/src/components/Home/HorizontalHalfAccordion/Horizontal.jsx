import React, { useState } from "react";
import HorizontStyle from "../HorizontalHalfAccordion/HorizontalAccord.module.scss";

const Horizontal = () => {
  const [translateX, setTranslateX] = useState(false);
  const [translateBoth, setTranslateBoth] = useState(false);
  const AccordMoving = (event) => {
    setTranslateX((current) => !current);
  };
  const AccordMoving2 = (event) => {
    setTranslateBoth((current) => !current);
  };
  // const AccordMoving3=event=>{
  //   setTranslateX(current =>!current);
  // }
  return (
    <section className={HorizontStyle.fifth_section}>
      <div className="container">
        <div className={`row px-3 ${HorizontStyle.accordion_none}`}>
          <div className="col-xl-12">
            <div className={HorizontStyle.accordion_general}>
              <div
                className={
                  translateX
                    ? `${HorizontStyle.accord_component1} ${HorizontStyle.translating1}`
                    : `${HorizontStyle.accord_component1}`
                }
                onClick={AccordMoving}
              >
                <div className={HorizontStyle.component_texts}>
                  <div className={HorizontStyle.step_number}>Step 1.</div>
                  <h3>User experience and brand strategy preparing.</h3>
                  <p>
                    Profesionales del diseño <strong>gráfico proident</strong>,
                    taken of my entire soul, like these sweet mornings of spring
                    which I enjoy whole.{" "}
                    <strong>Diseñador Gráfico y Digital y además como</strong>{" "}
                    greate idea.
                  </p>
                </div>
                <div className={HorizontStyle.picture}>
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/oh__img100.jpeg"
                    alt=""
                  />
                </div>
              </div>
              <div
                className={
                  translateBoth
                    ? `${HorizontStyle.accord_component2} ${HorizontStyle.translating2}`
                    : `${HorizontStyle.accord_component2}`
                }
                onClick={AccordMoving}
              >
                <div className={HorizontStyle.component_texts}>
                  <div className={HorizontStyle.step_number}>Step 2.</div>
                  <h3>Resources preparing for the post-launch.</h3>
                  <p>
                    Profesionales del diseño <strong>gráfico proident</strong>,
                    taken of my entire soul, like these sweet mornings of spring
                    which I enjoy whole.{" "}
                    <strong>Diseñador Gráfico y además como.</strong>
                  </p>
                </div>
                <div className={HorizontStyle.picture}>
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/oh__img102.jpeg"
                    alt=""
                  />
                </div>
              </div>
              <div
                className={HorizontStyle.accord_component3}
                onClick={AccordMoving2}
              >
                <div className={HorizontStyle.component_texts}>
                  <div className={HorizontStyle.step_number}>Step 3.</div>
                  <h3>Core UI components developing & testing.</h3>
                  <p>
                    Profesionales del diseño <strong>gráfico proident</strong>,
                    taken of my entire soul, like these sweet mornings of spring
                    which I enjoy whole.{" "}
                    <strong>Diseñador Gráfico y Digital.</strong>
                  </p>
                </div>
                <div className={HorizontStyle.picture}>
                  <img
                    src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/oh__img103.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`row px-3 pt-5 ${HorizontStyle.accordion_transformation}`}
        >
          <div className="col-lg-12">
            <div className={HorizontStyle.card_giant}>
              <div className={HorizontStyle.card_texts}>
                <div className={HorizontStyle.step_number}>Step 1.</div>
                <h3>User experience and brand strategy preparing.</h3>
                <p>
                  Profesionales del diseño <strong>gráfico proident</strong>,
                  taken of my entire soul, like these sweet mornings of spring
                  which I enjoy whole.{" "}
                  <strong>Diseñador Gráfico y Digital y además como</strong>{" "}
                  greate idea.
                </p>
              </div>
              <div className={HorizontStyle.pic}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/oh__img100.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className={HorizontStyle.card_giant}>
              <div className={HorizontStyle.card_texts}>
                <div className={HorizontStyle.step_number}>Step 2.</div>
                <h3>Resources preparing for the post-launch.</h3>
                <p>
                  Profesionales del diseño <strong>gráfico proident</strong>,
                  taken of my entire soul, like these sweet mornings of spring
                  which I enjoy whole.{" "}
                  <strong>Diseñador Gráfico y además como.</strong>
                </p>
              </div>
              <div className={HorizontStyle.pic}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/oh__img102.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className={HorizontStyle.card_giant}>
              <div className={HorizontStyle.card_texts}>
                <div className={HorizontStyle.step_number}>Step 3.</div>
                <h3>Core UI components developing & testing.</h3>
                <p>
                  Profesionales del diseño <strong>gráfico proident</strong>,
                  taken of my entire soul, like these sweet mornings of spring
                  which I enjoy whole.{" "}
                  <strong>Diseñador Gráfico y Digital.</strong>
                </p>
              </div>
              <div className={HorizontStyle.pic}>
                <img
                  src="https://colabrio.ams3.cdn.digitaloceanspaces.com/ohio-stage-demo-1/oh__img103.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Horizontal;
