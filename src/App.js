import Button from "@mui/material/Button";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div className="App">
      hello
      <Button variant="text">Text</Button>
      <Button
        startIcon={<SettingsIcon />}
        variant="contained"
        color="secondary"
        size="small"
      >
        SETTINGS
      </Button>
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        color="success"
        size="small"
      >
        ADD NEW POST
      </Button>
      <Button variant="outlined" disabled>
        Outlined
      </Button>
      <Typography variant="h1">h1. Heading</Typography>
      <Button
        variant="contained"
        disabled
        sx={{
          backgroundColor: "skyblue",
          color: "#888",
          margin: 5,
          "&:hover": {
            backgroundColor: "blue",
          },
          "&:disabled": {
            backgroundColor: "gray",
            color: "white",
          },
        }}
      >
        My Unique Button
      </Button>
    </div>
  );
}

export default App;
