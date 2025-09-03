import React from "react";
import { Link } from "react-router-dom";
export default function Admin() {
  return (
    <div className="admin">
                    <Link to={"/"}>Back to Home</Link>

      {/* <button className='admin-btn' name='addRiddle' onClick={()=>handleAdminBtn}></button>
        <button className='admin-btn' name='deleteRiddle' onClick={}></button>
        <button className='admin-btn' name='updateRiddle' onClick={}></button> */}

      <table className="admin-riddles-table">
        <thead className="table-head">
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
          </tr>
        </thead>
        <tbody className="table-body">
          <tr>
            <td>Row 1, Col 1</td>
            <td>Row 1, Col 2</td>
            <td>Row 1, Col 3</td>
            <td>Row 1, Col 4</td>
          </tr>
          <tr>
            <td>Row 2, Col 1</td>
            <td>Row 2, Col 2</td>
            <td>Row 2, Col 3</td>
            <td>Row 2, Col 4</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
