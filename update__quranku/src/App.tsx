import React, { useEffect } from 'react';

interface AppProps { }

const App: React.FC<AppProps> = ({ }) => {
  const [surah, setSurah] = React.useState<any>([]);

  useEffect(() => {
    fetch('https://equran.id/api/surat')
      .then(response => response.json())
      .then(data => setSurah(data))
  }, [])


  return (
    <div className="h-screen flex justify-center items-center flex-wrap">

      <h1
        className="text-4xl font-bold text-center text-neutral-800">
        List Surah
      </h1>

      {
        surah.map((item: any) => {
          return (
            <div className="flex justify-center my-2 px-4 w-full">
              <div
                className="rounded-lg px-4 py-2 shadow-lg w-full dark:bg-neutral-700">
                <h5
                  className="mb-2 text-end text-3xl font-medium leading-tight text-white">
                  {
                    item.nama
                  }
                </h5>
                <p className="text-base text-neutral-600 dark:text-neutral-200">
                  Jumlah ayat :
                  <span className='mx-1'>
                    {
                      item.jumlah_ayat
                    }
                  </span>
                  ayat
                </p>
                <p className="text-base text-neutral-600 dark:text-neutral-200">
                  Tempat turun :
                  <span className='mx-1'>
                    {
                      item.tempat_turun
                    }
                  </span>
                </p>
                <audio controls
                  className="w-full mt-2 rounded-lg shadow-lg bg-neutral-100 dark:bg-neutral-700"
                >
                  <source src="horse.ogg" type="audio/ogg" />
                  <source src="horse.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default App;