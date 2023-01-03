import {Field, reduxForm} from 'redux-form'
import {TextField, Select, Radio, RadioGroup, FormControlLabel, MenuItem} from "@mui/material";
import {connect} from "react-redux";
import {findBestInvestment} from "../redux/actions/decision";
import './form.scss';

const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
    <TextField label={label}
               {...input}
               {...custom}
            id={'text-input'}
    />
)

const renderRadioGroup = ({input, ...rest}) => (
    <RadioGroup {...input} {...rest}
                onChange={(event, value) => input.onChange(value)}/>
)

const renderSelectField = ({input, label, meta: {touched, error}, children}) => (
    <Select
        label={label}
        {...input}
        children={children}
    />
)

let MyForm = (props) => {
    const onSubmit = (formValues) => {
        props.findBestInvestment(formValues)
    }
    return (
        <form onSubmit={props.handleSubmit(onSubmit)} className={'form'}>
            <div className={'form--field'}>
                <label htmlFor={'amount'}>
                    Кількість грошей яку ви хочете вкласти:
                </label>
                <Field component={renderTextField}
                       type={"number"}
                       name={'amount'}
                       className={'form--field__input'}
                />
            </div>
            <div className={'form--field'}>
                <label htmlFor={"toStore"}>
                    Що ви хочете зробити з грошима?
                </label>
                <Field component={renderSelectField}
                       name={'toStore'}
                       label={'Investment purpose'}
                       className={'form--field__input'}
                >
                    <MenuItem value={true} >Зберегти</MenuItem>
                    <MenuItem value={false}>Примножити</MenuItem>
                </Field>
            </div>
            <div className={'form--field'}>
                <label htmlFor={'risky'}>
                    Чи готові ви до ризику?:
                </label>
                <Field component={renderRadioGroup} name={'risky'} >
                    <FormControlLabel value={true} control={<Radio/>} label="Так"/>
                    <FormControlLabel value={false} control={<Radio/>} label="Ні"/>
                </Field>
            </div>
            <div className={'form--field'}>
                <label htmlFor={'investedBefore '}>
                    Чи інвестували ви раніше?:
                </label>
                <Field component={renderRadioGroup} name={'investedBefore '}>
                    <FormControlLabel value={true} control={<Radio/>} label="Так"/>
                    <FormControlLabel value={false} control={<Radio/>} label="Ні"/>
                </Field>
            </div>
            <div className={'form--field'}>
                <label htmlFor={'haveStartupIdea'}>
                    Чи є у вас ідея для стартапу?
                </label>
                <Field component={renderRadioGroup} name={'haveStartupIdea'}>
                    <FormControlLabel value={true} control={<Radio/>} label="Так"/>
                    <FormControlLabel value={false} control={<Radio/>} label="Ні"/>
                </Field>
            </div>
            <div className={'form--field'}>
                <label htmlFor={'trustBanks'}>
                    Чи довіряєте ви банкам?:
                </label>
                <Field component={renderRadioGroup} name={'trustBanks'}>
                    <FormControlLabel value={true} control={<Radio/>} label="Так"/>
                    <FormControlLabel value={false} control={<Radio/>} label="Ні"/>
                </Field>
            </div>

            <button className={'submit'}>Submit</button>

        </form>
    )
}

MyForm = reduxForm({
    form: 'investment'
})(MyForm)

export default connect(null, {findBestInvestment})(MyForm);