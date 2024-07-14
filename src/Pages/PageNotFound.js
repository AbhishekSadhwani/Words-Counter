import { Link } from 'react-router-dom';

export const PageNotFound = () => {
    return (
        <main>
            <section className="pagenotfound">
                <div className='content'>
                    <p>Oops - Page Not Found!</p>
                    <img src="https://images.unsplash.com/photo-1633078654544-61b3455b9161?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Page Not Found" />
                    <Link to="/">
                        <button>Go Back to Word Counter</button>
                    </Link>
                </div>
            </section>
        </main>
    )
}
