import React from 'react';
class NormalComponent extends React.Component{
    render(){
        console.log('Normal Component has rendered')
    return(
        <div>
            <h1>{this.props.title}</h1>
        </div>
    );
    }
}
export default NormalComponent;