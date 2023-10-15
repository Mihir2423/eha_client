import { Box, IconButton, Snackbar, SnackbarContent } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";
import { CheckCircle, CloseSharp } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { removeMsg } from "@/redux/features/addToCartSlice";
import Loading from "@/utils/loading";

const BannerSection = dynamic(() => import("./BannerSection"), {
  loading: () => <p>Loading...</p>,
  ssr: true,
});
const DealsForYou = dynamic(
  () => import("../LandingPageComponents/DealsForYou/DealsForYou"),
  {
    loading: () => <Loading />,
    ssr: false,
  }
);
const BestSeller = dynamic(
  () => import("../LandingPageComponents/BestSeller"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const NewArrival = dynamic(
  () => import("../LandingPageComponents/NewArrival"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const HomePage = ({ posts, laptops }) => {
  const dispatch = useDispatch();
  const msg = useSelector((state) => state?.addToCart?.successMsg);
  const [success, setSuccess] = React.useState(msg);
  React.useEffect(() => {
    setSuccess(msg);
  }, [msg]);
  return (
    <Box className="p-0 pb-4">
      <BannerSection />
      <DealsForYou posts={posts} />
      <BestSeller posts={laptops} />
      <NewArrival posts={posts} />
      <BestSeller posts={laptops} />

      {success && (
        <Snackbar
          open={true}
          autoHideDuration={3000}
          onClose={() => dispatch(removeMsg())}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <SnackbarContent
            message={
              <div className="flex items-center">
                <CheckCircle style={{ marginRight: "8px" }} />{" "}
                {/* Add the icon here */}
                Item Added Successfully in the Cart
              </div>
            }
            action={
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={() => dispatch(removeMsg())}
              >
                <CloseSharp fontSize="small" />
              </IconButton>
            }
          />
        </Snackbar>
      )}
    </Box>
  );
};

export default HomePage;
