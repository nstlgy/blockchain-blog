import CutCornerButton from "../components/CutCornerButton";

const listItems = [
  "Experience unparalleled security and scalability",
  "Fully benefit from scalable network effects",
  "Unlock the potential of decentralized networks",
];

function FeaturesGrid() {
  return (
    <div>
      <section>
        <div className="container">
          <h2>Empower the future of blockchain.</h2>
          <p>
            Blockforge provides robust and secure infrastructure to support the
            next generation of decentralized applications.
          </p>
          <ul>
            {listItems.map((item) => (
              <li key={item}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div>
            <CutCornerButton className="">Get Started</CutCornerButton>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturesGrid;
