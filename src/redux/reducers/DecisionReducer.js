import {FIND_BEST_DECISION} from "../../constants/types";

export default (state = '', action) => {
    if(action.type === FIND_BEST_DECISION){
        return action.payload
    }else{
        return state
    }
}