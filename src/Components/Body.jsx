
import data from "../data.json"

const Body = () => {
    let days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const d = new Date();
    const eq = days[d.getDay()]

    return (
        <div className="body">
            <h2>Spending - Last 7 days</h2>

            <div className="charts">
                {data && data.map((item, i) => {
                    return (
                        <div className="chart" key={i}>
                            <div className="amount">
                                <p>${item.amount}</p>
                            </div>
                            <div className="col" style={{ height: item.amount * 2.5, background: eq === item.day ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)' }}></div>
                            <p className="day">{item.day}</p>
                        </div>
                    )
                })}
            </div>

            <div className="line"></div>

            <div className="footer">
                <div className="footer__text">
                    <p>Total this month</p>
                    <h1>$478.33</h1>
                </div>
                <div>
                    <p>+2.4%</p>
                    <p>from last month</p>
                </div>
            </div>
        </div>
    )
}

export default Body