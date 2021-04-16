import RepositoryItem from './RepositoryItem';

export default function RepositoryList() {
    return (
        <section>
            <h1>Lista de repositorios</h1>
            <ul>
                <RepositoryItem title="itemA"/>
                <RepositoryItem title="itemB"/>
            </ul>
        </section>
    )
}