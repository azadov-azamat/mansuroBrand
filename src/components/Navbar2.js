import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const links = [
    {href: '/', text: 'Home'},
    {href: '#card', text: 'Product'},
    {href: '/about', text: 'About'},
    {href: '#cata', text: 'Categories'},
    {href: '#test', text: 'Blogs'},
    {href: '#test2', text: 'News'},
    {href: '/login', text: 'LOGIN'},
];

const createNavItem = ({href, text, className}) => (
    <NavItem>
        <NavLink href={href} className={className}>{text}</NavLink>
    </NavItem>
);

export default class Navbar2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className='servises mt-3 mb-4'>
                <Navbar light expand="md" >
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="links text-center container" style={{color: "black"}} navbar>
                            {links.map(createNavItem)}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}