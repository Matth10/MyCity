// React
import React from 'react'
//Components
import Card from './Card'

class Home extends React.Component {
  render() {
    const cards = Object.keys(this.props.evenements).map(key => (
      <Card
        key={key}
        details={this.props.evenements[key]}
        ajouterParticipants={this.props.ajouterParticipants}
        unRegister={this.props.unRegister}
        isRegistered={
          this.props.evenements[key].participants.indexOf(this.props.user) ===
          -1
            ? false
            : true
        }
      />
    ))

    return <div className="cards">{cards}</div>
  }
}

export default Home
