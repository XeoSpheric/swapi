export default function About() {
  return (
    <>
      <div className="hero min-h-8 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">SWAPI - About</h1>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="grid grid-cols-12 gap-4 my-2">
        <div className="col-span-2 mx-auto">
          <div className="stats stats-vertical shadow bg-amber-200 text-black">
            <div className="stat">
              <div className="stat-title">People</div>
              <div className="stat-value">82</div>
            </div>
            <div className="stat">
              <div className="stat-title">Planets</div>
              <div className="stat-value">60</div>
            </div>
            <div className="stat">
              <div className="stat-title">Films</div>
              <div className="stat-value">7</div>
            </div>
            <div className="stat">
              <div className="stat-title">Species</div>
              <div className="stat-value">37</div>
            </div>
            <div className="stat">
              <div className="stat-title">Vehicles</div>
              <div className="stat-value">39</div>
            </div>
            <div className="stat">
              <div className="stat-title">Starships</div>
              <div className="stat-value">36</div>
            </div>
          </div>
        </div>
        <div className="col-span-10">
          <h2 className="text-3xl">What is this?</h2>
          <p>
            The Star Wars API is the world's first quantified and
            programmatically-formatted set of Star Wars data. After hours of
            watching films and trawling through content online, we present to
            you all the People, Films, Species, Starships, Vehicles and Planets
            from Star Wars. We've formatted this data in JSON and exposed it to
            you in a RESTish implementation that allows you to programmatically
            collect and measure the data. Check out the documentation to get
            started consuming swapi data
          </p>
          <div className="divider"></div>
          <h2 className="text-3xl">What happened to swapi.co?</h2>
          <p>
            Unfortulately swapi.co is not maintained anymore, and the service is
            currently down. This is a branch of SWAPI that will be supported
            going forward.
          </p>
        </div>
      </div>
    </>
  );
}
