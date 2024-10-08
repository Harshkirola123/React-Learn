import Login from "./components/Login";
import Profile from "./components/Profile";
import UserProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserProvider>
        <Login />
        <Profile/>
    </UserProvider>
  );
}

export default App;
