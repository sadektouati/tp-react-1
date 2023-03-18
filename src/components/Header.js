import { Link, useLocation } from 'react-router-dom'
import Button from './Button'
const Header = (props) => {
    const location = useLocation()
    return (
        <header>
            <Link to="/">Welcome</Link>
            
            <h1><Link to="/products">Our products</Link></h1>
            { location.pathname === '/products' && (
                <Button 
                text={props.showAdd ? 'close' : 'add'} 
                color={props.showAdd ? 'red' : 'green'}
                onClick={props.onAdd}/>
            )}
        </header>
    )
}

export default Header