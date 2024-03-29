import { Triangle } from "react-loader-spinner";
import css from "./Loader.module.css"
export const Loader = () => {
    return(
        <Triangle
            visible={true}
            height="80"
            width="80"
            color="#fff"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass={css.triangle}
        />
    )
}