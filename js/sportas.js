export function renderSportTable() {
    let HTML = '';
    for (let i = 0; i < 10; i++) {
        HTML += `
            <tr>
                <td>${i + 1}</td>
                <td>aaa</td>
                <td>2024-07-05</td>
            </tr>`
    }

    return `
    <table>
        <thead>
            <tr>
                <td>#</td>
                <td>Name</td>
                <td>Next game date</td>
            </tr>
        </thead> 
        <tbody>
            ${HTML}
        </tbody>
    </table>`
}