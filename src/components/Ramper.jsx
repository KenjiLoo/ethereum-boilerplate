// import React, { useState, useEffect } from "react";
// import { useMoralis } from "react-moralis";

function Ramper() {
  // const [ramper, setRamper] = useState();
  // const { Moralis } = useMoralis();
  // useEffect(() => {
  //   if (!Moralis?.["Plugins"]?.["fiat"]) return null;
  //   async function initPlugin() {
  //     Moralis.Plugins.fiat
  //       .buy({}, { disableTriggers: true })
  //       .then((data) => setRamper(data.data));
  //   }
  //   initPlugin();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [Moralis.Plugins]);

  return (
    // <iframe
    //   src={ramper}
    //   title="ramper"
    //   frameBorder="no"
    //   allow="accelerometer; autoplay; camera; gyroscope; payment;"
    //   style={{
    //     width: "420px",
    //     height: "625px",
    //     boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    //     border: "1px solid #e7eaf3",
    //     borderRadius: "1rem",
    //     backgroundColor: "white",
    //   }}
    // />
    <iframe
      // style="--border-radius: 10px; box-shadow: 0 2px 10px 0 rgba(0,0,0,.20); border-radius: var(--border-radius); margin: auto;max-width: 420px"
      src="https://widget.onramper.com?color=266677&apiKey=pk_test_x5M_5fdXzn1fxK04seu0JgFjGsu7CH8lOvS9xZWzuSM0"
      height="660px"
      width="482px"
      title="Onramper widget"
      frameBorder="0"
      allow="accelerometer; autoplay; camera; gyroscope; payment"
    ></iframe>
  );
}

export default Ramper;
