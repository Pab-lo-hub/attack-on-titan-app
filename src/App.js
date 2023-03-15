import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div classNameName="App">
      <div>

        <section
          className="relative bg-[url(https://www.linkpicture.com/q/607711.jpg)] bg-cover bg-center bg-no-repeat">
          <div
            className="absolute inset-0 sm:bg-transparent"
          ></div>



          <div
            className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
          >
            <div className="max-w-xl text-center sm:text-left">
              <h1 className="text-3xl font-extrabold sm:text-5xl text-red-800">
              Shingeki No Kyojin

                <strong className="block font-extrabold  text-white pt-2">
                進撃の巨人
                </strong>
              </h1>

              <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed  text-white">
              “On that day, mankind received a grim reminder. 
              We lived in fear of the Titans and were disgraced to live in these cages we called walls.”
              </p>

              <div className="mt-8 flex flex-wrap gap-4 text-center">
                <a
                  href="#"
                  className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  Get Started
                </a>

                <a
                  href="#"
                  className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
