import item from '../item.scss';

export default function RepositoryItem({title}) {
    return (
        <li>
            <strong>{title}</strong>
            <p>forms in React</p>
            <a href="#">
                Acessar repositorio
            </a>
        </li>
    )
}