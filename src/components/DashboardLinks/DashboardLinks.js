import Link from "next/link";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Badge, Box } from "@mui/material";
import Properties from "../Properties/Properties";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import LowPriorityIcon from "@mui/icons-material/LowPriority";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import AddIcon from "@mui/icons-material/Add";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';


const DashboardLinks = () => {
  function notificationsLabel(count) {
    if (count === 0) {
      return "no notifications";
    }
    if (count > 39) {
      return "more than 39 notifications";
    }
    return `${count} notifications`;
  }
  return (
    <Box className="flex flex-col text-white p-2">
      <div>
        <h1 className="font-bold text-3xl">inmobalia</h1>
      </div>
      {/* DashBoard LInks */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <DashboardIcon />
          <Link href="/">Dashboard</Link>
        </Box>
        <Box
          sx={{
            borderRadius: "50%",
            backgroundColor: "#657938",
            padding: "4px",
          }}
        >
          <h1>39</h1>
        </Box>
      </Box>
      <Box>
        <Properties />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "space-between",
          marginTop: "210px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <DeveloperBoardIcon />
          <Link href="/">Developments</Link>
        </Box>
      </Box>
      {/* ------------------------------ */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "space-between",
          marginTop: "40px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <LowPriorityIcon />
          <Link href="/">New Leads</Link>
        </Box>
        <Box
          sx={{
            borderRadius: "100%",
            backgroundColor: "#887a50",
            padding: "4px",
          }}
        >
          <h1>31</h1>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <PermContactCalendarIcon />
          <Link href="/">Contact</Link>
        </Box>
        <Box
          sx={{
            borderRadius: "100%",
            backgroundColor: "#887a50",
            padding: "2px",
          }}
        >
          <AddIcon />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <PriceChangeIcon />
          <Link href="/">Sales</Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <CalendarViewMonthIcon />
          <Link href="/">Calender</Link>
        </Box>
      </Box>
      {/* -------------------------------- */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <MailOutlineIcon />
          <Link href="/">NewSletters</Link>
        </Box>
        <Box
          sx={{
            borderRadius: "100%",
            backgroundColor: "#887a50",
            padding: "2px",
          }}
        >
          <AddIcon />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <CreditCardIcon />
          <Link href="/">REMS</Link>
        </Box>
        <Box
          sx={{
            borderRadius: "100%",
            backgroundColor: "#887a50",
            padding: "2px",
            cursor: "pointer",
          }}
        >
          <AddIcon />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <MarkUnreadChatAltIcon />
          <Link href="/">AgentChat</Link>
        </Box>
        <Box
          sx={{
            borderRadius: "100%",
            backgroundColor: "#887a50",
            padding: "4px",
          }}
        >
          <h1>18</h1>
        </Box>
          </Box>
          {/* ------------------------------------------ */}
          <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <ThumbsUpDownIcon />
          <Link href="/">Management</Link>
        </Box>
        <Box
          sx={{
            borderRadius: "100%",
            backgroundColor: "#887a50",
            padding: "2px",
          }}
        >
          <AddIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLinks;
