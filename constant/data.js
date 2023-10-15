import img1 from "@/assets/svg/store-4156934_1280-removebg-preview 2.svg";

const product = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: img1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: img1,
    },
  ];
  const profile = [
    {
      id: 1,
      name: "Personal Information",
      component: "PersonalInformation",
    },
    {
      id: 2,
      name: "My Orders",
      component: "MyOrders",
    },
    {
      id: 3,
      name: "Manage Address",
      component: "ManageAddress",
    },
    {
      id: 4,
      name: "Change Password",
      component: "ChangePassword",
    },
    {
      id: 5,
      name: "Sign Out",
      component: "SignOut",
    },
  ];

export default { product, profile };