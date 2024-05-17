

import { NavLink } from "react-router-dom"

import { Container } from "./styles"

import { ReactComponent as BurguerIcon } from "../../assets /burger.svg"

import { ReactComponent as PizzaIcon } from "../../assets /pizza.svg"

import { ReactComponent as SodaPopIcon } from "../../assets /soda.svg"  

import { ReactComponent as IceCreamIcon } from "../../assets /ice-cream.svg"

import menuImg from '../../assets /menu.svg'

import { useState } from "react"

export function Sidebar() {

    const [menuOpen, stMenuOpen]= useState(false)

    const handleToggleMenu = () => {
        stMenuOpen(!menuOpen)

    }


    return <Container isMenuOpen = {menuOpen} >
        <button type='button' onClick={handleToggleMenu}>
            <img src={menuImg} alt='Abrir e fechar o menu'/>
        </button>
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>
                        <BurguerIcon />

                        <span>Hamburgueres</span>
                    </NavLink>
                </li>
               
                <li>
                    <NavLink to="Pizzas" >
                        <PizzaIcon/>
                        <span>Pizzas</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="Bebidas" >
                        <SodaPopIcon/>
                        <span>Bebidas</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="Sobremesas" >
                        <IceCreamIcon/>
                        <span>Sobremesas</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </Container>
}

