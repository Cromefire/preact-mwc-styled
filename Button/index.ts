import PButton from "preact-material-components/esm/Button";
import {load_styles, unload_styles} from "../util/style";
import style from "./index.scss";

export class Button extends PButton {
    public readonly styles = [
        {style, id: "button"}
    ];

    public componentWillMount() {
        load_styles(this.styles);
    }

    public componentWillUnmount() {
        super.componentWillUnmount();
        unload_styles(this.styles);
    }
}

// noinspection JSUnusedGlobalSymbols
export default Button;
