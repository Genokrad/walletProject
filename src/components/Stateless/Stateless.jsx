export const Stateless = () => {
    return (
        <>
            {/* <p>Radio</p> */}
            <select name="month" id="month">
                <option value='m1'>January</option>
                <option value='m2'>February</option>
                <option value='m3'>March</option>
                <option value='m4'>April</option>
                <option value='m5'>May</option>
                <option value='m6'>June</option>
                <option value='m7'>July</option>
                <option value='m8'>August</option>
                <option value='m9'>September</option>
                <option value='m10'>October</option>
                <option value='m11'>November</option>
                <option value='m12'>December</option>
            </select>

            <select name="years" id="years">
                <option value='y2019'>2019</option>
                <option value='y2020'>2020</option>
                <option value='y2021'>2021</option>
                <option value='y2022'>2022</option>
                <option value='y2023'>2023</option>
                <option value='y2024'>2024</option>
                <option value='y2025'>2025</option>
                
            </select>

            <p>table</p>
        </>
    )
}