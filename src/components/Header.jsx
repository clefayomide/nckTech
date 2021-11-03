import React from 'react'
import CompanyLogo from './CompanyLogo'
import HeaderNav from './HeaderNav'
import MobileNav from './MobileNav'

const Header = () => {
    return (
        <>
            <header className="header">
                <CompanyLogo  className="companyLogo"/>
                <HeaderNav />
                <MobileNav />
            </header>
        </>
    )
}

export default Header
