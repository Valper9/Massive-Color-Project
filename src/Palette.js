import React,{Component} from 'react';
import ColoxBox from './ColorBox';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

class Palette extends Component {
    constructor(props){
        super(props);
        this.state = {
            level : 500,
            format : "hex"
        };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeLevel(level){
        this.setState({level})
    }
    changeFormat(val){
        this.setState({format : val});
    }
    render(){
        const {format} = this.state;
        const colorBoxes = this.props.palette.colors[this.state.level].map(color => (
            <ColorBox background={color[format]} name={color.name} />
        ));
        return (
            <div className="Palette">
                <Navbar level={this.state.level} changeLevel={this.changeLevel} handleChange={this.changeFormat}/>
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
            </div>
        );
    }
}

export default Palette;