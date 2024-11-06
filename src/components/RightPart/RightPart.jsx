import React,{useState} from 'react'
import '../../App.css'
import RightTopPanel from '../Panel/RightTopPanel'
import RightCardPanel from '../Panel/RightCardPanel'
import Footer from '../Footer/Footer'
import ImagesStore from '../Card/ImagesAccess'


function RightPart() {
  const [color,setColor] = useState('#0f0f0f')
  const [btnColor,setBtnColor] = useState('#0a0a0a')
  const [backColor,setBackColor] = useState('#1f1f1f')

  const panelArr = [
    "Popular Artist",
    "Popular Album",
    "Popular Radio",
    "Featured Charts",
    "Spotify Playlists",
    "Trending Episodes"
  ];
  
  return (
    <div className='rightMainBody w-9/12 rounded-md' style={{backgroundColor:color}}>
      <div className='rightTopPanel fixed flex justify-between p-3 text-white' style={{backgroundColor:color}}>
        <RightTopPanel />
      </div>
      <div className='text-white rightCardBodyPanel flex flex-col w-full h-full' style={{backColor:backColor}}>
        <div className="App">
          {ImagesStore.map((data, index) => (
            <RightCardPanel 
              key={index}
              panelName={panelArr[index]}
              panelSubName="Show all"
              data={data}
            />
          ))}
         </div>     
        <div className='w-full p-4'>
            <Footer />
        </div>
      </div>
    </div>
  )
}

export default RightPart
