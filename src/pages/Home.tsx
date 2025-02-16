import './Home.css'
import playIcon from '/icon-play.svg'
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url('/background-desktop.svg')` }}>
      <div className='lg:w-1/3 md:w-1/2  border-2 border-white rounded-lg flex flex-col justify-between items-center p-8 content-between'>
          <img className='-translate-y-3/4 h-' src="/logo.svg" alt="TheHangManGame" />
          <div className='flex justify-center items-center h-full w-full -translate-y-2/4'>
            <div className='rounded-full h-48 w-48 flex justify-center items-center playButton'>
              <Link to={'/game'} className='flex justify-center items-center'>
                <img className='h-24 w-24 hover:h-28 hover:w-28   duration-100' src={playIcon} alt="play"/>
              </Link>
            </div>
          </div>
          <div className='flex justify-items-center content-start items-start'>
            <Link to={'/HowToPlay'} className='flex justify-center items-center'>
              <Button variant="outline" size={"lg"}>How to Play</Button>
            </Link>
          </div>
      </div>
    </div>
  );
}

export default Home;