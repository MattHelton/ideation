import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class Generate extends Component {

    choices = ['“Beginners guide to...”', 'Buying/gift guide', 'Checklist', 'Comparison piece', 'Create a calendar of upcoming events', 'FAQ', 'Flow chart', '“How to...”', 'Interview industry experts (inside or outside your company)', 'Links roundup', 'List of things to do/never do', 'Mythbusting article', 'Predict future trends', 'Quote piece', 'The biggest influences/influencers', 'Timeline', 'Top 10 list', 'Update old content', 'Write a review/recommend a product, service, etc', '“x things to learn from...” (this could be a conference, event, TV show, movie, anything)']
    randomizer() {
        return Math.floor((Math.random() * 20))
      }
      chooseIdea() {
        return this.choices[this.randomizer()]
    }
    render() {
        return  <h3>{this.chooseIdea}</h3>
    }

}

ReactDOM.render(<Generate />, document.getElementById('generate'))