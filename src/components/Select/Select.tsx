import {useState} from 'react';
import  s from  './Select.module.css'

type ItemsType = {
    title: string,
    value: any
}

type SelectProps = {
    value: any
    setSelectorValue: (value: any) => void
    items: ItemsType[]
};
export const Select = (props: SelectProps) => {
    const {value, setSelectorValue, items} = props;
    const [collapsedValue, setCollapsedValue] = useState(false);
    const onBlurHandler = () => {
        setCollapsedValue(false)
    }

    return (
        <div>
            <div onClick={() => setCollapsedValue(!collapsedValue)} onBlur={onBlurHandler} className={`${s.selectHeader} ${s.selectCommon}`}>{value}</div>
            {collapsedValue && items.map((i, index) => {
                const setSelectorValueHandler = () => {
                    setSelectorValue(i.title)
                    setCollapsedValue(false)
                }
                return <div key={index} onClick={setSelectorValueHandler} className={`${s.selectOptions} ${s.selectCommon}`}>{i.title}</div>
            })}
        </div>
    );
};