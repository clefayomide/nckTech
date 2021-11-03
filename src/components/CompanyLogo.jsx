import React from 'react'

const CompanyLogo = ({ className }) => {
    return (
        <>
            <div className="company-logo-container">
                <img src="https://res.cloudinary.com/clefayomide/image/upload/v1635866351/nck%20logo.png" alt="company logo" className={className}/>
            </div>
        </>
    )
}

export default CompanyLogo
