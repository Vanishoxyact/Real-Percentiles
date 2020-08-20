import React, { Component } from 'react';
import WarcraftLogsService from '../warcraft_logs/wl_service'

class Main extends Component {

   constructor(props) {
      super(props)

      this.state = {
         data: ''
      }
   }

   componentDidMount() {
      WarcraftLogsService.readReport("abcd").then(
         response =>  {
            this.setState({ data: response.data })
         }
      )
   }

   render() {
      return (
         <div>
            {this.state.data}
         </div>
      )
   }
}

export default Main