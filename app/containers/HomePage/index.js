/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

 import React from 'react';
 import { FormattedMessage } from 'react-intl';
 import messages from './messages';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

    componentDidMount(){
        var now = new Date();
        var startOfDay = new Date(now.getFullYear(), now.getMonth()  , now.getDate() +1);
        var startOfDay1 = new Date(now.getFullYear(), now.getMonth()  , now.getDate() );
        var now = startOfDay / 1000;
        var now1 = startOfDay1 / 1000;
        let  tag = 'C++'
        let express = 'https://api.stackexchange.com/2.2/questions?page=1&pagesize=100&fromdate='+now1+'&todate='+now+'&order=desc&sort=activity&tagged='+tag+'&site=stackoverflow'
        let arr = []

        fetch(express)
        .then((response) => response.json())
        .then((responseJson) => {
            let filteredPlans = responseJson.items.filter((plan) => { return plan.is_answered == true  })
            let accepted_answer_id = filteredPlans.filter((plan1) => { return plan1.accepted_answer_id   })
            arr[0] = responseJson.items.length
            arr[1] = filteredPlans.length
            arr[2] = accepted_answer_id.length
            this.setState({cData:arr})
            console.log("arr",arr)
        })
        .catch((error) => {
            console.log(error);
        })

        tag = 'Javascript'
        express = 'https://api.stackexchange.com/2.2/questions?page=1&pagesize=100&fromdate='+now1+'&todate='+now+'&order=desc&sort=activity&tagged='+tag+'&site=stackoverflow'
        fetch(express)
        .then((response) => response.json())
        .then((responseJson) => {
            let filteredPlans = responseJson.items.filter((plan) => { return plan.is_answered == true  })
            let accepted_answer_id = filteredPlans.filter((plan1) => { return plan1.accepted_answer_id   })
            arr = []
            arr[0] = responseJson.items.length
            arr[1] = filteredPlans.length
            arr[2] = accepted_answer_id.length
            this.setState({jsData:arr})
            console.log("js arr",arr)
        })
        .catch((error) => {
            console.log(error);
        })


        tag = 'Ruby'
        express = 'https://api.stackexchange.com/2.2/questions?page=1&pagesize=100&fromdate='+now1+'&todate='+now+'&order=desc&sort=activity&tagged='+tag+'&site=stackoverflow'
        fetch(express)
        .then((response) => response.json())
        .then((responseJson) => {
            let filteredPlans = responseJson.items.filter((plan) => { return plan.is_answered == true  })
            let accepted_answer_id = filteredPlans.filter((plan1) => { return plan1.accepted_answer_id   })
            arr = []
            arr[0] = responseJson.items.length
            arr[1] = filteredPlans.length
            arr[2] = accepted_answer_id.length
            this.setState({rubyData:arr})
            console.log("ruby arr",arr)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    render() {
        console.log("this",this.state)
        let cData = this.state ?  this.state.cData : ''
        let rubyData = this.state ? this.state.rubyData : ''
        let jsData = this.state ? this.state.jsData : ''
        return (
            <div>
            <h1>
            <FormattedMessage {...messages.header} />
            </h1>
            <ul>
            <li> Total c++ questions :  {cData[0]?cData[0]:''} </li>
            <li> Total c++ Answers :  {cData[0]?cData[1]:''} </li>
            <li> Total c++ accepted answers :  {cData[0]?cData[2]:''} </li>
            <li> Total ruby questions :  {rubyData[0]?rubyData[0]:''} </li>
            <li> Total ruby Answers :  {rubyData[0]?rubyData[1]:''} </li>
            <li> Total ruby accepted answers :  {rubyData[0]?rubyData[2]:''} </li>
            <li> Total js questions :  {jsData[0]?jsData[0]:''} </li>
            <li> Total js Answers :  {jsData[0]?jsData[1]:''} </li>
            <li> Total js accepted answers :  {jsData[0]?jsData[2]:''} </li>
            </ul>
            </div>
            );
        }
    }
