import React from 'react';
class PureComponent extends React.PureComponent{
    render(){
        console.log('Pure Component has rendered')
    return(
        <div>
            <h1>{this.props.title}</h1>
        </div>
    );
    }
}
export default PureComponent;


// OR
// import React, { useEffect, useState } from 'react';
// const PureComponent = (props) => {
//   useEffect(() => {
//     console.log('Pure Component has rendered');
//   }, []);

//   return (
//     <div>
//       <h1>{props.title}</h1>
//     </div>
//   );
// };
// export default PureComponent;
