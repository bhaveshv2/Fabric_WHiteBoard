import React from 'react';
import WhiteBoard, { getWhiteBoardData } from 'fabric-whiteboard';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: 'select',
      width: '600px',
      height: '600px',
      brushColor: '#f44336',
      brushThickness: 2,
      jData:''
    }

    this.refLeft = undefined
    this.refRight = undefined
  }


  handleOnModeClick=(mode)=> {
    this.setState({
      mode: mode,
    })
  }

  handleOnBrushColorChange=(color)=> {
    this.setState({
      brushColor: color.hex,
    })
  }

  handleOnBrushThicknessChange=(thickness)=> {
    this.setState({
      brushThickness: thickness,
    })
  }

  getJSONData=()=>{
    const jsonData = getWhiteBoardData(this.refLeft);
    console.log(jsonData);
    const domTextarea = document.getElementById('domTextarea');
    if(domTextarea){
      domTextarea.value = JSON.stringify(jsonData);
    }
  }

  // handelChangeJSONData = ()=>{
  //   const jsonData = getWhiteBoardData(this.refLeft);
  //   console.log(jsonData);
  //   this.setState({
  //     jData:JSON.stringify(jsonData)
  //   })
  // }

  render() {
    const { mode, width, height, brushColor, brushThickness } = this.state

    return (
      <div className="App" id="App">
        <h1>Fabric WhiteBoard</h1>
        <div className="whiteboard" id="whiteboard">
          <WhiteBoard
            ref={(ref) => {
              this.refLeft = ref
            }}
            width={width}
            height={height}
            showToolbar={true}
            enableToolbar={true}
            showBoard={true}
            mode={mode}
            onModeClick={this.handleOnModeClick}
            brushColor={brushColor}
            brushColors={[
              '#f44336',
              '#e91e63',
              '#9c27b0',
              '#673ab7',
              '#3f51b5',
              '#2196f3',
            ]}
            brushThickness={brushThickness}
            onBrushColorChange={this.handleOnBrushColorChange}
            onBrushThicknessChange={this.handleOnBrushThicknessChange}
          />
        </div>

        <div className="toolbar" id="toolbar">
            <button className="toolbar-button" onClick={this.getJSONData}>Get JSON</button>
            <textarea id="domTextarea"></textarea>
        </div>
      </div>
    )
  }
}

export default App;