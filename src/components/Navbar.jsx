import { NavLink, useParams } from "react-router-dom";

function Navbar() {
    const today = new Date().toISOString().slice(0, 10); // Get today's date in YYYY-MM-DD format
    const { date } = useParams(); // Get selected date from URL

    // Generate dates dynamically
    const dates = Array.from({ length: 6 }, (_, i) => {
        const newDate = new Date();
        newDate.setDate(newDate.getDate() + i);
        return newDate.toISOString().slice(0, 10); // Format as YYYY-MM-DD
    });

    return (
        <section className="py-3 border navbar_01">
            <div className="container py-3">
                <div className="row border mb-3 py-2 justify-content-around">
                    <div className="col-3">
                        <img src="src/img/logo/1.png" alt="Logo" />
                    </div>
                    <div className="col-9">
                        <h1 className="text-center">Table Booking App</h1>
                    </div>
                </div>
                <div className="row">
                    {dates.map((d, index) => {
                        const dateObj = new Date(d);
                        const day = dateObj.getDate(); // Get date (e.g., 30)
                        const dayLetter = dateObj.toLocaleDateString("en-GB", { weekday: "short" }).charAt(0); // Get first letter of weekday (e.g., "S" for Sunday)

                        return (
                            <div key={index} className="col-2">
                                <NavLink 
                                    to={`/${d}`} 
                                    className={({ isActive }) => isActive ? "active-link" : ""}
                                >
                                    <span>{day}</span>
                                    <span>{dayLetter}</span>
                                     
                                </NavLink>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Navbar;
