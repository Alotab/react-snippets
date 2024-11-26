
import ReactPlyer from 'react-player'

// remember to: npm install reatc-player and import it to the top
// for complete settings, visit the package documentation
const ReactPlayer = () => {

    const vidUrl = "https://www.facebook.com/..."
  return (
    <div>
        <h1>React player example</h1>
        <ReactPlayer 
            url={vidUrl}
            playing={false}
            volume={0.5}
        />
    </div>
  )
}

export default ReactPlayer