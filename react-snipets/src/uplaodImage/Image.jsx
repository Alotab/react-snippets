
import girl from '../assets/images/girl.jpeg'

const Image = () => {
  return (
    <div>
        <img src={girl} alt="A picture of girl" />
        {/* or */}
        {/* You dont need the import statement for doing this  */}
        <img src={require('../assets/images/girl.jpeg')} alt="" />
    </div>
  )
}

export default Image