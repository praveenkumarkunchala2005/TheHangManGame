import { useState } from 'react';
import { useEffect } from 'react';

interface BoxProps {
  char: string;
  keyboard: boolean;
  won?: boolean | null;
  onClick?: (char: string) => void;
}
const Box = (props: BoxProps) => {
  const [dd, setdd] = useState(false);
  const func = () => {
    if(dd==true) return;
    props.onClick && props.onClick(props.char);
    setdd(true);
  }
  useEffect(() => {
    if(props.won !== null) {
      setdd(false);
    }
  }, [props.won]);

  if(props.keyboard === true) {
    return (
      <>
        { !dd ? (
          <button onClick={func}>
            <div className="h-24 w-24 border-blue-600 bg-white transition delay-10 duration-300 ease-in-out font-mouse font-extrabold hover:-translate-y-2 hover:scale-110 rounded-2xl border-4 text-black flex flex-col justify-center items-center text-center m-3 ">
            <h1 className="text-4xl">{props.char}</h1>
            </div>
          </button>
        ):(
          <button onClick={func}>
            <div className="h-24 w-24 bg-slate-600  font-mouse font-extrabold  rounded-2xl  text-black flex flex-col justify-center items-center text-center m-3 ">
              <h1 className="text-4xl">{props.char}</h1>
            </div>
          </button>
        )}
      </>
    );
  };
  return (
    <>
        {props.char === " " ? (
          <div className="h-24 w-24  rounded-2xl  text-center m-3 ">
            <h1 className="text-4xl">{props.char}</h1>
          </div>
        ) : (
          <div className="h-24 w-24 border-white bg-blue-700  rounded-2xl border-4 font-mouse font-extrabold text-white flex flex-col justify-center items-center text-center m-3 ">
            <h1 className="text-4xl">{props.char}</h1>
          </div>
        )}
    </>
  );
};

export default Box;