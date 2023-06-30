import React, { useEffect } from "react";
import './Navbar.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

        

    function goLogout() {
        dispatch(addToken(''));
        alert("Você precisa estar logado");
        navigate('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position="static" className="appbar">
            <Toolbar variant="dense" className='toolbar'>
                <Link to='/home' className='text-decorator-none'>
                    <Box className='cursor'>
                        <img src="/src/assets/imagens/logo-texto-transparente.png" alt="Logo horizontal transparente" style={{ width: "9em" }} />
                    </Box>
                </Link>
                <Box display="flex" justifyContent="start">
                    <Link to='/home' className='text-decorator-none'>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6">
                                Home
                            </Typography>
                        </Box>
                    </Link>
                    <Box display="flex" justifyContent="start">

                        <Link to='/cursos' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6">
                                    Cursos
                                </Typography>
                            </Box>
                        </Link>
<<<<<<< HEAD
                        <Box display="flex" justifyContent="start">
                            
                            <Link to='/cursos' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6">
                                        Cursos
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/planos' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6">
                                        Planos
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/sobre' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6">
                                        Sobre Nós
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/cadastroUsuario' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6">
                                        Faça Parte
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to='/login' className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" style={{color: "#464248"}}>
                                        Logout
                                    </Typography>
                                </Box>
                            </Link>
=======
                        <Link to='/planos' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6">
                                    Planos
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/sobre' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6">
                                    Sobre Nós
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/cadastroUsuario' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6">
                                    Faça Parte
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={1} className='cursor' onClick={goLogout}>
                            <Typography variant="h6" style={{ color: "#464248" }}>
                                Logout
                            </Typography>
>>>>>>> 2e8bf47e62528ff5aebc7da15cc326a86efb87ff
                        </Box>

                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    }

    return (
        <>
            {navbarComponent}
        </>
    );
}

export default Navbar;