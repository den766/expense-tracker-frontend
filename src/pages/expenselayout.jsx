import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/footer";
import {
  LayoutDashboard,
  CirclePlus,
  ReceiptText,
  ChartColumn,
} from "lucide-react";

function ExpesneLayoutDashboard({apiError}) {
  return (
    <div>
      <Header />

      <nav className="dashboard-nav">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/expense-dashboard"}
          end
        >
          <LayoutDashboard size={18} />
          Overview
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"create-expense"}
        >
          <CirclePlus size={18} />
          Create Expense
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"expense-list"}
        >
          <ReceiptText size={18} />
          Expense List
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"reports"}
        >
          <ChartColumn size={18} />
          Reports
        </NavLink>
      </nav>

      {apiError && <p className="error">{apiError}</p>}
      <Outlet />
      <Footer />
    </div>
  );
}

export default ExpesneLayoutDashboard;
