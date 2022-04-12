import React from 'react'
import { Link } from 'react-router-dom'
import LogoWhite from '../../Component/FormComponent/LogoWhite'
import LoginBgVideo from '../../Component/LoginBgVideo'

export default function AuthLayout({ renderForm }){
    return (
    <>
        <LoginBgVideo/>
        <div className="pageWrap pageCenterCnt">
            <Link to={'/'} className="linkStyle">
                <LogoWhite className='logo'/>
            </Link>
            {renderForm }
        </div>
    </>
    )
}