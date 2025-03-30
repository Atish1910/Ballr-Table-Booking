import { useState } from "react";

function Pr({ setIsLoggedIn }) {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // List of valid PR users with their credentials
    const validUsers = [
        { name: "Adity", phone: "9876543210", password: "1111" },
        { name: "Mayur", phone: "9998887776", password: "2222" },
        { name: "Akshay", phone: "8888428371", password: "1234" }
    ];

    const handleLogin = (e) => {
        e.preventDefault();

        // Check if entered phone & password match any valid user
        const user = validUsers.find(u => u.phone === phone && u.password === password);

        if (user) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("loggedInUser", user.name);  // Store PR Name
            setIsLoggedIn(true);
        } else {
            setError("Invalid phone number or password");
        }
    };

    return (
        <section className="login_01">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <h1>Ballr PR Login</h1>
                    <div className="col-lg-6 border rounded-3 py-4">
                        <form onSubmit={handleLogin}>
                            <input 
                                type="number" 
                                className="form-control mb-3" 
                                placeholder="Enter Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <input 
                                type="password" 
                                className="form-control mb-3" 
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {error && <p className="text-danger">{error}</p>}
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pr;
