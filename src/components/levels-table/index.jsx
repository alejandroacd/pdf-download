import './styles.css'
const LevelsTable = () => {
    return (
        <div className="table_component" role="region" tabindex="0">
            <table>
                <thead>
                    <tr>
                        <th>Levels</th>
                        <th>Employees</th>
                        <th>&nbsp;Percentage</th>
                    </tr>
                    <tr>
                        <td>HIPOs</td>
                        <td>Cristian Rodríguez, Manu Reyes, Sofía Coello, Santiago Tassano, Vicky Villaruel<br /></td>
                        <td>74%</td>
                    </tr>
                    <tr>
                        <td>Key performers</td>
                        <td>Keke Palmer, Lucía Vallejos</td>
                        <td>12%</td>
                    </tr>
                    <tr>
                        <td>High Professional</td>
                        <td>Giovanni Abbatichio</td>
                        <td>1%</td>
                    </tr>
                    <tr>
                        <td>Expert</td>
                        <td>N/A</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Decision making</td>
                        <td>Hector Sulbarán, Emanuel Otero, Dani Ramírez</td>
                        <td>8%</td>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    )
}

export default LevelsTable
