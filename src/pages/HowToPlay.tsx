import { Link } from 'react-router-dom';

function HowToPlay() {
    return (
      <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-[#1a043a] to-[#151278] px-6 py-10">
        <div className="flex items-center justify-between w-full px-10 mx-6 mb-28">
          <Link to={`/`}>
            <img
              src="/icon-back.svg"
              alt="Back"
              className="ml-10 w-14 h-14 cursor-pointer"
            />
          </Link>

          <h1 className="text-7xl text-white font-mouse font-extrabold text-center flex-1">
            How to Play
          </h1>

          <div className="w-16 h-16"></div>
        </div>
        <div className="flex justify-center gap-12 text-white w-full max-w-7xl">
          <div className="flex flex-col items-center text-center w-96 h-96 p-10 bg-white bg-opacity-10 rounded-2xl shadow-lg">
            <h1 className="text-6xl font-extrabold font-mouse text-purple-300">01</h1>
            <h3 className="text-3xl font-semibold font-mouse mt-4">Pick a Category</h3>
            <h5 className="text-xl mt-4 font-mouse opacity-80">
              First, choose a word category, like animals or movies. The
              computer randomly selects a secret word and shows blanks for each
              letter.
            </h5>
          </div>

          <div className="flex flex-col items-center text-center w-96 h-96 p-10 bg-white bg-opacity-10 rounded-2xl shadow-lg">
            <h1 className="text-6xl font-mouse font-extrabold text-purple-300">02</h1>
            <h3 className="text-3xl font-mouse font-semibold mt-4">Guess Letters</h3>
            <h5 className="text-xl font-mouse mt-4 opacity-80">
              Take turns guessing letters. If correct, blanks fill in. If wrong,
              you lose health. After eight incorrect guesses, it's game over.
            </h5>
          </div>

          <div className="flex flex-col items-center text-center w-96 h-96 p-10 bg-white bg-opacity-10 rounded-2xl shadow-lg">
            <h1 className="text-6xl font-mouse font-extrabold text-purple-300">03</h1>
            <h3 className="text-3xl font-mouse font-semibold mt-4">Win or Lose</h3>
            <h5 className="text-xl font-mouse mt-4 opacity-80">
              Win by guessing all letters before health runs out. Lose if you
              fail before completing the word.
            </h5>
          </div>
        </div>
      </div>
    );
}

export default HowToPlay;
