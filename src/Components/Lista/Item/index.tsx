import style from '../Lista.module.scss'
export default function Item(props: { tarefa: string, tempo: string, selecionado: boolean,
    completado: boolean, id: string
}) {
    const {tarefa, tempo} = props;
    return(
        <li className={style.item}>
            <h3>   {tarefa}</h3>
            <span> {tempo}</span>
        </li>
    )
}
