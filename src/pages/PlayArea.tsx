import Box from "@/components/Box";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "react-router";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Mouse+Memoirs&display=swap');
</style>;

interface SelectedCategoryProps {
  selectedCategory: string;
}

function PlayArea(props: SelectedCategoryProps) {
  interface Data {
    name: string;
    selected: boolean;
  }
  const [won, setwon] = useState<boolean | null>(null);
  const [chances, setchances] = useState<number>(7);
  const [data, setData] = useState<Data[]>([]);
  const [num, setNum] = useState<number | null>(null);
  const [selectedString, setSelectedString] = useState<string>("");
  const [arr, setArr] = useState<string[]>([]);
  const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [allChars, setAllChars] = useState<string[]>(abc);
  const [size, setSize] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [changed, setchanged] = useState(0);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((fetchedData) => {
        const category = fetchedData.categories[props.selectedCategory] || [];
        if (category.length > 0) {
          if(size){
            console.log("Size:", size);
          }
          if(gameOver){
            console.log("Game Over:", gameOver);
          }
          setSize(category.length);
          setData(category);
          setAllChars(abc);
          startNewGame(category);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [props.selectedCategory]);
  const capitalizeWords = (str: string): string => {
    return str.toUpperCase();
  };

  const startNewGame = (category: Data[]) => {
    setchanged(changed + 1);
    setShowAlert(false);
    setwon(null);
    if (category.length === 0) return;
    setAllChars(abc);
    const randomIndex = Math.floor(Math.random() * category.length);
    setNum(randomIndex);
    setSelectedString(capitalizeWords(category[randomIndex].name));
    setArr(new Array(category[randomIndex].name.length).fill("_"));
  };

  useEffect(() => {
    if (selectedString) {
      setArr(
        selectedString.split("").map((char) => (char === " " ? " " : "_"))
      );
    }
  }, [selectedString]);

  useEffect(() => {
    console.log("Updated arr:", arr);
  }, [arr]);

  const GenerateNewGame = () => {
    setchanged(changed + 1);
    setShowAlert(false);
    setwon(null);
    const availableWords = data.filter((item) => !item.selected);
    if (availableWords.length === 0) {
      setAllChars(abc);
      setGameOver(true);
      return;
    }
    const newWord =
      availableWords[Math.floor(Math.random() * availableWords.length)];

    setData((prevData) =>
      prevData.map((item) =>
        item.name === newWord.name ? { ...item, selected: true } : item
      )
    );
    setSize((prevSize) => prevSize - 1);
    setchances(7);
    setNum(data.findIndex((item) => item.name === newWord.name));
    setSelectedString(capitalizeWords(newWord.name));
  };
  const RestartGame = () => {
    setchanged(changed + 1);
    setShowAlert(false);
    setAllChars(abc);
    setwon(null);
    setArr(selectedString.split("").map((char) => (char === " " ? " " : "_")));
    setchances(7);
  };

  const buttonTrigger = () => {
    return (char: string) => {
      if (num === null) return;
      if (!selectedString.includes(char)) {
        setchances(chances - 1);
        if (chances === 0) {
          setAllChars(abc);
          setGameOver(true);
        }
      }
      setArr((prevArr) =>
        prevArr.map((c, i) => (selectedString[i] === char ? char : c))
      );
    };
  };

  useEffect(() => {
    if (chances === 0) {
      setwon(false);
      setShowAlert(true);
      setAllChars(abc);
    }
  }, [chances]);

  useEffect(() => {
    if (arr.join("") === selectedString) {
      setwon(true);
      setShowAlert(true);
      setAllChars(abc);
    }
  }, [arr]);
  return (
    <div className="p-4 min-h-screen bg-gradient-to-b bg-opacity-80 from-[#1a043a] to-[#151278]">
      <header>
        <div className="flex justify-between items-center">
          <div className="flex justify-start items-center">
            <div className="p-10">
              <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogTrigger>
                  <div className="bg-transparent rounded-lg">
                    <img
                      src="/icon-menu.svg"
                      className="fill-white bg-transparent"
                      alt="Menu"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <div className="flex flex-col p-10 justify-center">
                    <Link to={`/`}>
                      <Button className="h-24 text-2xl p-10 m-5 w-full font-mouse font-extrabold">
                        Main Menu
                      </Button>
                    </Link>
                    <Link to={`/game`}>
                      <Button className="h-24 text-2xl p-10 m-5 w-full font-mouse font-extrabold">
                        Prev Menu
                      </Button>
                    </Link>
                    <Link to={``}>
                      <Button
                        onClick={() => {
                          RestartGame();
                          setOpenDialog(false);
                        }}
                        className="h-24 text-2xl p-10 m-5 w-full font-mouse font-extrabold"
                      >
                        Restart Game
                      </Button>
                    </Link>
                    <Link to={``}>
                      <Button
                        onClick={() => {
                          GenerateNewGame();
                          setOpenDialog(false);
                        }}
                        className="h-24 text-2xl p-10 m-5 w-full font-mouse font-extrabold"
                      >
                        New Game
                      </Button>
                    </Link>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="p-10 text-white text-5xl font-mouse font-extrabold">
              {props.selectedCategory}
            </div>
          </div>
          <div className="flex justify-end items-center">
            <div className="px-10 pl-10 flex flex-row items-center text-white text-5xl gap-4 font-mouse font-extrabold">
              <img
                src="/icon-heart.svg"
                className="fill-white bg-transparent"
                alt="Heart"
              />{" "}
              {chances} Lives Left
            </div>
          </div>
        </div>
      </header>
      <div>
        <AlertDialog open={showAlert} onOpenChange={() => setShowAlert(false)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                {won ? "You Won!" : "You Lost!"}
              </AlertDialogTitle>
              <AlertDialogDescription>
              {won ? "Congratulations! 🎉" : `Better luck next time 😢. The Answer is ${selectedString}`}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={GenerateNewGame}>
                New Game
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className="w-fit m-16 flex flex-row flex-wrap items-center justify-center gap-2">
        {arr.map((char, index) => (
          <Box key={index} char={char} keyboard={false} />
        ))}
      </div>

      {/* <div>
        {num !== null ? (
          <p className="text-white">Selected Word: {selectedString}</p>
        ) : (
          <p>Loading...</p>
        )}
        {num !== null ? (
          <p className="text-white">Remaining Chances {chances}</p>
        ) : (
          <p></p>
        )}
      </div> */}
      <div className="w-fit m-10 flex flex-row flex-wrap items-center justify-center gap-2">
        {allChars.map((char, index) => (
          <Box
            key={index}
            char={char}
            keyboard={true}
            won={won}
            change={changed}
            onClick={buttonTrigger()}
          />
        ))}
      </div>
    </div>
  );
}

export default PlayArea;
