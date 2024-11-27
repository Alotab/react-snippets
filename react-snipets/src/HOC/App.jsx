/// HIGHER ORDER COMPONENTS
/// HOC is a fucntion that takes a component and returns a new component
//read more about it

const { useState, useEffect } = require("react")

// In this simple project, we are ging to track certain pizzas that receives less attention or less order in a business

// * Using HOC to track the cursor position on the web app to know which pizza image get more attention.

// tracking mouse position using HOC

// * Presenting data using presentational components in different ways


const withMousePosition = (WrappedComponent) => {
    return (props) => {

        // to track the position of the mouse with [ x: 0,y: 0,] represent the top left corner of the screen
        const [mousePosition, setMousePosition] = useState({
            x: 0,
            y: 0,
        })

        useEffect(() => {
            const hnadleMousePositionChange = (e) => {
                setMousePosition({
                    x: e.clientX,
                    y: e.clientY,
                });
            };


            window.addEventListener("mouseover", hnadleMousePositionChange)

            return () => {
                window.removeEventListener("mouseover", hnadleMousePositionChange);
            }
        }, [])

        return (
            <WrappedComponent {...props} mousePosition={mousePosition}/>
        )
    }
}

const PanelMMouseLogger = ({ mousePosition }) => {
    if (!mousePosition) {
        return null;
    }

    return (
        <div className="BasicTracker">
            <p>Mouse Position: </p>
            <div className="Row">
                <span>x: {mousePosition.x}</span>
                <span>y: {mousePosition.y}</span>
            </div>
        </div>
    )
}

const PointMouseLogger = ({ mousePosition }) => {
    if (!mousePosition) {
        return null;
    }

    return (
        <p>
            ({mousePosition.x}, {mousePosition.y})
        </p>
    )
}

//use the HOC to craete two new components version that will be aware of the mouse position data
const  PanelMouseTracker = withMousePosition(PanelMMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

function App() {
    return (
        <div>
            <header className="Header">Little Lemon Resturant</header>
            {/* // replace these compoents with the enhance version components */}
            {/* <PanelMMouseLogger /> */}
            {/* <PointMouseLogger /> */}
            <PanelMouseTracker />
            <PointMouseTracker />
        </div>
    )
}