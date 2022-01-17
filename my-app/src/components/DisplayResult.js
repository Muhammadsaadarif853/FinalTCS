import React from 'react'
import axios from 'axios'

export default function DisplayResult() {
    return (
        <div>
        <h3 className='m-3 d-flex justify-content-center'>Result</h3>
        <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Reg #</th>
            <th scope="col">CGPA</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Sp19-bcs-035</td>
            <td>Muhammad Saad arif</td>
            <td>3.31</td>
          </tr>
      
        </tbody>
      </table>
        </div>
    )
}
