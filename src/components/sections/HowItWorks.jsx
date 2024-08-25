import Content from "../../data/sections/how-it-works.json";

const HowItWorksSection = () => {
  return (
    <section className="mil-how-it-works mil-deep-bg mil-p-90-90">
      <div
        className="mil-deco mil-deco-accent"
        style={{ top: 0, right: "20%" }}
      />
      <div
        className="mil-deco2 mil-deco-deccent"
        style={{ bottom: 0, left: "30%", transform: "rotate(180deg)" }}
      />
      <div className="container">
        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
          {Content.subtitle}
        </span>
        <h2 className="mil-mb-90">
          {Content.title.first}{" "}
          <span className="mil-accent">{Content.title.second}</span>{" "}
          {Content.title.third}
        </h2>
        <div className="row">
          {Content.items.map((item, key) => (
            <div className="col-md-6 col-xl-3" key={`how-it-works-i-${key}`}>
              <div className="mil-mb-60">
                <div className="mil-icon-box-head mil-mb-30">
                  <div className="mil-icon-frame mil-icon-frame-sm">
                    <img src={item.icon} alt="icon" />
                  </div>
                  <h5>{item.name}</h5>
                </div>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
