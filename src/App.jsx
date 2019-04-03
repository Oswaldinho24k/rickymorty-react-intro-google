import React from 'react'
import Home from './components/Home'
import Profile from './components/Profile'
import { getCharacters } from './services/rickymorty'



class App extends React.Component {

  state = {
    people: [
      { name: 'Maria' },
      { name: 'Aurelie' },
      { name: 'Oswaldo' }
    ],
    appName: 'my app',
    logged: false
  }

  componentWillMount() {
    //this.setState({ logged: true })
    getCharacters()
      .then(res => {
        console.log(res)
        this.setState({ people: res.results })

      }).catch(e => {
        console.log(e)
      })
  }

  handleChange = (event) => {
    console.log(event.target.value)
    const text = event.target.value
    this.setState({ appName: text })
  }

  render() {
    const { people, appName, logged } = this.state
    return (
      <div>
        {logged ? <div>Logueado</div> : <div>usted no puede andar aquí</div>}
        <input name="appName" onChange={this.handleChange} />
        <Home appName={appName} />

        <div className="list">
          {people.map((p, key) => (
            <Profile name={p.name} key={key} image={p.image} />
          ))}
        </div>
      </div>
    )
  }
}

export default App