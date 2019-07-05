import * as React from "react";
import { Frame, PropertyControls, ControlType } from "framer";

const wrapperStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
}

interface Props {
    background: string
    facingMode: string
}

export class Camera_Feed extends React.Component<Props> {

    static defaultProps = {
        background: "#000000",
        facingMode: "environment",
    }

    static propertyControls: PropertyControls<Props> = {
        background: { type: ControlType.Color, title: "background" },
        facingMode: {
            type: ControlType.Enum,
            options: ["environment", "user"],
            optionTitles: ["Front", "Back"],
            title: "Camera",
        },
    }

    constructor() {
        super()
        this.video = React.createRef()
    }

    componentDidMount() {
       if (navigator.mediaDevices) this.enableCamera()
    }

    enableCamera() {
        // https://stackoverflow.com/questions/27420581/get-maximum-video-resolution-with-getusermedia
        navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: this.props.facingMode,
                width: { ideal: 4096 },
                height: { ideal: 2160 }
            }
        }).then((stream) => {
            this.video.current.srcObject = stream
            this.video.current.play()
        }).catch(function(err) {
            console.log(err)
        });
    }

    render() {
        return (
            <Frame background={this.props.background} style={wrapperStyle}>
                <video ref={this.video}></video>
            </Frame>
        )
    }
}
