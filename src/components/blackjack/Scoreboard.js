import React from 'react'

function Scoreboard(props) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Wins</th>
                        <th>Losses</th>
                        <th>Draw</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.wins}</td>
                        <td>{props.losses}</td>
                        <td>{props.draw}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Scoreboard
