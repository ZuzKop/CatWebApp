import { useState } from "react";
import { Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import theme from "./../../theme";

const ExpandedContent = ({ expanded, content }) => {
  return (
    <Box
      style={{
        maxHeight: expanded ? "100vh" : "0",
        overflow: "hidden",
        transition: "max-height 0.3s ease-in-out",
        paddingTop: "5px",
      }}
    >
      <Typography variant="body1">{content}</Typography>
    </Box>
  );
};

const ExpandContent = ({ content, title }) => {
  const [expandState, setExpandState] = useState(false);

  return (
    <div style={{ paddingTop: "20px", marginLeft: "10px" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            color: theme.palette.primary.light,
          }}
          variant="button"
          onClick={() => setExpandState(!expandState)}
        >
          {title}
          <ExpandMoreIcon
            style={{
              display: "inline-block",
              transition: "transform 0.3s",
              transform: `rotate(${expandState ? 180 : 0}deg)`,
            }}
          />
        </Typography>
      </div>
      <div>
        <ExpandedContent expanded={expandState} content={content} />
      </div>
    </div>
  );
};

export default ExpandContent;
