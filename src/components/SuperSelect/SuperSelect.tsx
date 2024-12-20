import {KeyboardEvent, memo, useEffect, useState} from 'react';
import s from './SuperSelect.module.css'

export type ItemsType = {
    title: string
    id: string
    population: number,
    country: string
}

type SelectProps = {
    value: any
    setSelectorValue: (value: any) => void
    items: ItemsType[]
};
export const SuperSelect = (props: SelectProps) => {
    const {value, setSelectorValue, items} = props;
    const [collapsedValue, setCollapsedValue] = useState(false);
    const [hoveredItemValue, sethoveredItemValue] = useState(value);
    const onBlurHandler = () => {
        setCollapsedValue(false)
    }
    const selectedValue = items.find((i => i.id === value))
    const hoveredItem = items.find((i => i.id === hoveredItemValue))
    const onItemClick = (value: any) => {
        setSelectorValue(value)
        setCollapsedValue(false)
    }

    useEffect(() => {
        sethoveredItemValue(value)
    }, [value])

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === hoveredItemValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? items[i + 1] : items[i - 1]
                    if (pretendentElement) {
                        setSelectorValue(pretendentElement.id)
                        break
                    }

                }
            }
            if (!selectedValue) {
                setSelectorValue(items[0].id)
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setCollapsedValue(false)
        }

    }
    return (
        <div>
            <div onClick={() => setCollapsedValue(!collapsedValue)}
                 onBlur={onBlurHandler}
                 className={s.selectWrapper}
                 tabIndex={0}
                 onKeyUp={onKeyUp}>
                <span className={`${s.selectHeader} ${s.selectCommon}`}>{selectedValue && selectedValue.title}</span>

                {collapsedValue && items.map((i, index) =>
                    <div
                        key={index} onClick={() => onItemClick(i.id)}
                        className={hoveredItem === i ? `${s.selectedItem} ${s.selectCommon}` : `${s.selectOptions} ${s.selectCommon}`}
                        onMouseEnter={() => sethoveredItemValue(i.id)}>{i.title}
                    </div>
                )}
            </div>
        </div>
    );
};
// export const SuperSelect = memo(SuperSelectComponent)