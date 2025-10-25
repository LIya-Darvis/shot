import './styles.css'

interface IButton {
    onClick: void;
    isDisabled: boolean;

}

export const ItemButton = (params: IButton) => {
    return (
        <button onClick={() => params.onClick}>

        </button>
    )
}
