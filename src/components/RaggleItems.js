import React from 'react'
import {Card, Button} from 'react-bootstrap'
import uline_blanket from '../images/uline_blanket.jpg'




const data = {
    "ulineProducts" : [
        {"name":"Uline Blanket", "description": "warm blanket"},
        {"name": "Uline Scarf", "description": "warm scarf"},
        {"name": "Uline Socks", "description": "warm socks"}
    ]
}

const RaggleItems = () => {
  return (
      <div>
          <h2>Raggle Products</h2>
          
                      <>
                    <div class="card-deck">
                        <div class="card bg-primary">
                            <div class="card-body text-center">
                            <p class="card-text">Some text inside the first card</p>
                            </div>
                        </div>
                        <div class="card bg-warning">
                            <div class="card-body text-center">
                            <p class="card-text">Some text inside the second card</p>
                            </div>
                        </div>
                        <div class="card bg-success">
                            <div class="card-body text-center">
                            <p class="card-text">Some text inside the third card</p>
                            </div>
                        </div>
                        <div class="card bg-danger">
                            <div class="card-body text-center">
                            <p class="card-text">Some text inside the fourth card</p>
                            </div>
                        </div>
                        </div>
                    </>
                      )

              )}
      </div>
  )
    
}




export default RaggleItems
