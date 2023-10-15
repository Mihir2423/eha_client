import { styled } from "@mui/material/styles";

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(6),
  ...theme.mixins.toolbar ,
}));
