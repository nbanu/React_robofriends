import React,{Component} from 'react';

import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary'

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots:[],
            searchField:''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
            this.setState({robots:users});
             })
       

    }

    onSearchChange= (event)=>{
        this.setState({searchField:event.target.value});
     }

    render(){
        const{robots,searchField} = this.state;

        if(!robots.length){
            return(
                
                <h1>Loading ...</h1>
            );
        }else{
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());

        })
        
        return(
            <div className = "tc">
            <h1>RoboFriends</h1>
            <SearchBox searchChange = {this.onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                <CardList robots={filteredRobots}/>
                </ErrorBoundary>
                </Scroll>
            
         </div>
     );
        }
    }
}

export default App;