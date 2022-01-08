import React from "react";

type SquareProps = {
    value: string;
    onClick: () => void;
};

type SquareState = {
    value?: string;
};

class Square extends React.Component<SquareProps, SquareState> {
    constructor(props: SquareProps) {
        super(props);
        this.state = {
            value: undefined,
        };
    }

    render() {
        return (
            <button
                className="square"
                onClick={() => this.props.onClick() }>
                {this.props.value}
            </button>
        );
    }
}

export default Square;
