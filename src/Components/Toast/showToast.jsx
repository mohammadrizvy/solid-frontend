import toast from "react-hot-toast";

const showToast = (message, type = "success") => {
  const options = {
    style: {
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "#D19E47",
      secondary: "#F9EEDD",
    },
  };

  if (type === "success") {
    toast.success(message, options);
  } else if (type === "error") {
    toast.error(message, options);
  } else {
    toast(message, options);
  }
};

export default showToast;
