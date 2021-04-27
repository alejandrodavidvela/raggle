import React from 'react'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>Bumperactive</h4>
                        <ul className="list-unstyled">
                            <li>555-555-5555</li>
                            <li>Austin, Texas</li>
                            <li>123 South Street</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} THICC MEMES INC | All rights reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div> 
        </div>
    )
}

export default Footer
