import {connect} from "react-redux";

const Decision = (props) => {
    return(
        <div>
            <p style={{fontSize: 15}}>{props.decision}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        decision: state.decision
    }
}

export default connect(mapStateToProps)(Decision)