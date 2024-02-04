import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Loader() {
    return (
        <Box
            sx={{
                display: "flex",
                width: "90vw",
                height: "70vh",
                justifyContent: "center",
                alignItems: "center",
                transform:"scale(2)"
            }}
        >
            <CircularProgress color="secondary" />
        </Box>
    );
}
