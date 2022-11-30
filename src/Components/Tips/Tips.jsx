import "./Tips.css";

const Tips = () => {
  return (
    <div className="container">
      <header>
        <h1 className="bigHeading">Enkla tips</h1>

        <div className="headerButtons">
          <button>Dark mode</button>

          <button className="closeButton">X</button>
        </div>
      </header>
      <p className="mediumHeading">
        Hur kan du bidra till att bekämpa klimatförändringarna?
      </p>

      <div className="innerContainer">
        <div className="box1">
          <p className="smallHeading">Minska på köttet</p>
          <p>
            {" "}
            Utsläpp från boskap står för 14,5% av alla växthusgaser. Genom att
            minska konsumtionen av köt.....{" "}
          </p>
        </div>

        <div className="box2">
          <p className="smallHeading">Undvik bilen</p>
          <p>
            {" "}
            Cykla, gå eller använd kollektivtrafiken. Minska antalet bilresor
            genom att endast använda bilen...
          </p>
        </div>

        <div className="box3">
          <p className="smallHeading">Börja källsortera</p>
          <p>
            Sätt upp speciella kärl för att källsortera skräp hemma och i
            skolan. När du källsorterar ditt skräp kan det återvinnas...{" "}
          </p>
        </div>

        <button> Fler tips</button>

        <div className="box4">
          <p className="smallHeading">Spara elektricitet</p>
          <p>
            {" "}
            Du kan spara mycket elektricitet genom att koppla in dina prylar i
            ett grenuttag som du stänger av när du inte använder dom...{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tips;
