import React from 'react';


class ImageComponent extends React.Component{

    constructor(props){
        super(props)
        this.state={
            data:this.props.data
        }
    }

    changeSize=()=>{
        var data=this.state.data;
        data.clicked=!data.clicked;
        this.setState({data:data})
    }
    render(){
        const imagestyle = {
            width:"100%",
            height:"300px",
 
          };
          const root={
              float:"left",
              height:"450px",

          }

          const btnstyle={
              margin:"10px auto"
          }




        return(
            <div className={root}>
            <img style={imagestyle} src={this.state.data.src} onClick={this.changeSize} /> 
            <button style={btnstyle} > delete </button>
          
            </div>
        )
    }
}

export default ImageComponent;