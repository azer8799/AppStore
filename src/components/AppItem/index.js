// Write your code here
import './index.css'

const AppItem = props => {
  const {appData} = props
  const {imageUrl, appName} = appData

  return (
    <li className="appItem-container">
      <img className="logo" alt="logos" src={imageUrl} />
      <p className="desc">{appName}</p>
    </li>
  )
}

export default AppItem
