export default function (props) {
    
const center = {
  width: "100%",
  display: "flex",
  flexDirection:"column",
  justifyContent: "center",
  alignItems: "center",
};

  const setcolor={
    backgroundColor: props.Theme === "dark"?"rgb(58 61 65)":"white",
    color: props.Theme === "dark"?"white": "",
  };

  return (
    <>
      <div style={center}>
        <h2>AboutUs</h2>
        <div
          className="accordion my-3"
          id="accordionPanelsStayOpenExample"
          style={Width}
        >
          <div className="accordion-item" style={setcolor}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
                style={setcolor}
              >
                TextMe Analytics — A Brief Introduction and Steps Involved
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show mx-2"
            >
              <div className="accordion-body"></div>
              <strong>Text analytics</strong> is the process of transforming
              unstructured text in documents into structured data which can be
              used for analysis. Text analysis is used to find patterns in the
              text and find meaning in them. It works by breaking phrases and
              sentences into components, and then evaluating the meaning and
              roles using algorithms or software.
              <strong>
                Data analysts and other professionals use text mining tools to
                derive useful information and insights from huge amounts of raw
                data, such as reviews, social media comments, and news articles.
              </strong>
            </div>
          </div>
          <div className="accordion-item" style={setcolor}>
            <h2 className="accordion-header" >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
                style={setcolor}
              >
                What is TextMe used for?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                <strong>Trusted by millions of users, </strong>
                TextMe is the market-leading provider of private custom phone
                numbers in the US & Canada. With TextMe your calls & texts to
                any number in the US & Canada are totally free! No hidden cost,
                no catch!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Width = {
  width: "80%",
};
