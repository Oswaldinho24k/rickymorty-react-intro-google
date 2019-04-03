import React, { Component } from 'react'

class Home extends Component {
    render() {
        console.log(this.props)
        const { appName } = this.props
        return (
            <div>
                {appName}
            </div>
        )
    }
}

export default Home
