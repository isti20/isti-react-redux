import { Provider } from "react-redux";
import Counter from "./redux/Counter";
import store from "../app/Store";

const Redux = () => {
    return (
        <div>
            <Provider store={store}>
                <Counter />
            </Provider>
        </div>
    )
}

export default Redux;