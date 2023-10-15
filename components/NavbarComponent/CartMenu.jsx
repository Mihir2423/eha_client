import React, { useState } from "react";
import { IconButton, Menu, MenuItem, Typography, Snackbar, SnackbarContent } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "react-use-cart";
import { useSession } from "next-auth/react";
import { RemoveCircleOutlined,CheckCircle,CloseSharp } from "@mui/icons-material";
import { nova_thai,nova } from "@/utilities/font";

const CartMenu = ({ anchorEl, isCartOpen, handleCloseCart }) => {
  const { data: session } = useSession();
  const { isEmpty, items, cartTotal, removeItem } = useCart();
  const [success, setSuccess] = useState(false); // Add state for success message

  const removeItemFromCart = (itemId) => {
    removeItem(itemId);
    setSuccess(true);
  };

  let content;

  if (isEmpty) {
    content = <Typography className="p-2">Cart is empty!!</Typography>;
  } else if (items && items.length > 0) { // Check if items is an array and has elements
    content = items.map((item) => (
      <MenuItem key={item.id} onClick={handleCloseCart}>
        <div className="flex items-center">
          <Image
            src={item.img}
            alt={item.name}
            width={70}
            height={70}
            className="w-[40px] h-[40px] object-cover rounded-md m-1"
          />
          <Typography>
            <span className={`text-sm font-semibold ${nova_thai.className} m-1`}>
              {item.name}
            </span>
            <span
              className={`text-[15px] font-semibold ${nova_thai.className} text-green-500 m-1`}
            >
              ₹{item.price}
            </span>
          </Typography>
          <span className="flex-grow">
            <IconButton
              aria-label="delete"
              className="p-2 border-2"
              onClick={() => removeItemFromCart(item.id)}
            >
              <RemoveCircleOutlined />
            </IconButton>
          </span>
        </div>
      </MenuItem>
    ));
  }

  return (
    <div>
      <Menu
        id="cart-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        open={isCartOpen}
        onClose={handleCloseCart}
      >
        {content}
        <MenuItem
          onClick={handleCloseCart}
          className="bg-black btn text-white hover:bg-gray-800 px-2"
        >
          {session ? (
            <Link href="/Cart" className="text-right">
              <span className={`text-sm font-semibold ${nova.className} `}>
                View Cart
              </span>
            </Link>
          ) : (
            <Link href="/auth/login" className="text-right">
              <span className={`text-sm font-semibold ${nova.className} `}>
                Login
              </span>
            </Link>
          )}
        </MenuItem>
      </Menu>
      {success && (
        <Snackbar
  open={true}
  autoHideDuration={6000}
  onClose={() => setSuccess(false)}
  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
>
  <SnackbarContent
    message={
      <div className="flex items-center">
        <CheckCircle style={{ marginRight: "8px" }} /> {/* Add the icon here */}
        Item Removed Successfully from Cart
      </div>
    }
    action={
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => setSuccess(false)}
      >
        <CloseSharp fontSize="small" />
      </IconButton>
    }
  />
</Snackbar>
      )}
    </div>
  );
};

export default CartMenu;
