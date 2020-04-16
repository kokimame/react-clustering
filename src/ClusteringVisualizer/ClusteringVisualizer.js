import React from 'react';
import './ClusteringVisualizer.css'

let WINDOW_WIDTH = window.innerWidth;
let WINDOW_HEIGHT = window.innerHeight;
let NUMBER_OF_POINTS = 100;

function reportWindowSize() {
    WINDOW_WIDTH = window.innerWidth;
    WINDOW_HEIGHT = window.innerHeight;
}
window.onresize = reportWindowSize;

const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';
const ANIMATION_SPEED_MS = 10;

class ClusteringVisualizer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            points: []
        }
    }
    componentDidMount() {
        this.resetPoints();
    }
    resetPoints() {
        const points = [];
        for (let i = 0; i < NUMBER_OF_POINTS; i++) {
            points.push([
                randomIntFromInterval(0, WINDOW_WIDTH),
                randomIntFromInterval(0, WINDOW_HEIGHT)
            ])
        }
        this.setState({points: points});
    }
    render() {
        const points = this.state.points;
        const TOTAL_BUTTONS = 5;
        
        return (
            <>
            <div className="points-container">
                {points.map((value, idx) => (
                    <div
                        className="a-point"
                        key={idx}
                        style={{
                            backgroundColor: PRIMARY_COLOR,
                            left: `${value[0]}px`,
                            bottom: `${value[1]}px`
                        }}
                    ></div>
                ))}
            </div>
            <div className="buttons" > 
                <button title="Generates a new random points" 
                    style={{ position: 'relative',top:`${0*(WINDOW_HEIGHT-20)/TOTAL_BUTTONS}px`}} 
                    onClick={() => this.resetPoints()}>
                    Generate New Points
                </button>
            </div>
            </>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default ClusteringVisualizer;