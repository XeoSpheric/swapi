export default function Home() {
  return (
    <>
      <div className="hero min-h-12 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="flex justify-center">
        <div className="mockup-code w-1/2">
          <pre data-prefix="1">
            <code>wget https://swapi.dev/api/people/11</code>
          </pre>
          <pre data-prefix="2">
            <code>downloading...</code>
          </pre>
          <pre data-prefix="3" className="bg-warning text-warning-content">
            <code>Warn the younglings!!</code>
          </pre>
        </div>
      </div>
      <div className="divider"></div>
      <div className="grid grid-cols-12 gap-4 my-2">
        <div className="card col-span-12 md:col-span-6 lg:col-span-4 bg-neutral text-neutral-content mx-2">
          <div className="card-body items-center text-center">
            <h2 className="card-title">What is this?</h2>
            <p>
              The Star Wars API, or "swapi" (Swah-pee) is the world's first
              quantified and programmatically-accessible data source for all the
              data from the Star Wars canon universe! We've taken all the rich
              contextual stuff from the universe and formatted into something
              easier to consume with software. Then we went and stuck an API on
              the front so you can access it all!
            </p>
          </div>
        </div>
        <div className="card col-span-12 md:col-span-6 lg:col-span-4 bg-neutral text-neutral-content mx-2">
          <div className="card-body items-center text-center">
            <h2 className="card-title">How can I use it?</h2>
            <p>
              All the data is accessible through our HTTP web API. Consult our
              documentation if you'd like to get started. Helper libraries for
              popular programming languages are also provided so you can consume
              swapi in your favourite programming language, in a style that
              suits you.
            </p>
          </div>
        </div>
        <div className="card col-span-12 md:col-span-6 lg:col-span-4 bg-neutral text-neutral-content mx-2">
          <div className="card-body items-center text-center">
            <h2 className="card-title">What happened to swapi.co?</h2>
            <p>
              swapi.co is not supported and maintained anymore. But since so
              many projects and tutorials used it as their educational
              playground, this is an "unofficial" branch. This project is open
              source and you can contribute on GitHub.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
