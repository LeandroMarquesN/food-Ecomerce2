import styled from 'styled-components'

export const Container = styled.main`
 width:100%;
 min-height: 100vh;
 
 display:flex;

   > section {

        flex:1;
        width:100%;
        height: 100vh;
        overflow-y: auto;
        padding: 2rem 1.85rem;

        img {
        width: 10rem;
        margin-bottom: 2rem;
        }
    }


`
