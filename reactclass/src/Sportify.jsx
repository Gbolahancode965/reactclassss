import React , {useState} from 'react'
import Card from './props/card'
import hero from "./assets/hero.png"
import { musicArray } from './variable'

const Sportify = () => {
  const [currentSong, setcurrentSong] = useState(null)
  return (
    <div style={{ backgroundColor: '#121212', minHeight: '100vh', padding: '24px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
        {/* <Card image={hero} title="Hello" content="Adele • The best of soul and pop hits"/>
        <Card image={hero} title="Hello" content="Adele • The best of soul and pop hits"/>
        <Card image={hero} title="Hello" content="Adele • The best of soul and pop hits"/>
        <Card image={hero} title="Hello" content="Adele • The best of soul and pop hits"/> */}
        onPlay={(song) => setcurrentSong(music.url)}
        {
        musicArray.map((music) => {
            return (
                <div key={music.id}>
                  <Card title={music.title} artist={music.artist} image={music.image}/>
                </div>
            )
        })

        }

        <audio controls src={currentSong}/>

    </div>
  )
}

export default Sportify
