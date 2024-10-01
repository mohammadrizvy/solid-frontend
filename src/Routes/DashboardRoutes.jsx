import AddCustomer from "../Dashboard/DashboardAccount/Customer/AddCustomer/AddCustomer";
import AddPoint from "../Dashboard/DashboardAccount/Customer/AddPoint/AddPoint";
import CustomerList from "../Dashboard/DashboardAccount/Customer/CustomerList/CustomerList";
import AddSupllier from "../Dashboard/DashboardAccount/Supplier/AddSupplier/AddSupllier";
import SupplierList from "../Dashboard/DashboardAccount/Supplier/SupplierList/SupplierList";
import DashboardHome from "../Dashboard/DashboardHome/DashboardHome";
import CustomerPayment from "../Dashboard/DashboardMain/Payment/CustomerPayment/CustomerPayment";
import StaffPayment from "../Dashboard/DashboardMain/Payment/StaffPayment/StaffPayment";
import SupplierPayment from "../Dashboard/DashboardMain/Payment/SupplierPayment/SupplierPayment";
import ProductCategory from "../Dashboard/DashboardMain/Product/ProductCategory/ProductCategory";
import ProductEntry from "../Dashboard/DashboardMain/Product/ProductEntry/ProductEntry";
import ProductList from "../Dashboard/DashboardMain/Product/ProductList/ProductList";
import ProductsEntry from "../Dashboard/DashboardMain/Product/ProductsEntry/ProductsEntry";
import BuyList from "../Dashboard/DashboardMain/ProductBuy/BuyList/BuyList";
import ProductBuy from "../Dashboard/DashboardMain/ProductBuy/ProductBuy/ProductBuy";
import ProductListPending from "../Dashboard/DashboardMain/ProductSell/ProductListPending/ProductListPending";
import ProductReturn from "../Dashboard/DashboardMain/ProductSell/ProductReturn/ProductReturn";
import ProductSellList from "../Dashboard/DashboardMain/ProductSell/ProductSellList/ProductSellList";
import ProductsSells from "../Dashboard/DashboardMain/ProductSell/ProductSells/ProductsSells";
import SingleProductSell from "../Dashboard/DashboardMain/ProductSell/SingleproductSell/SingleProductSell";
import StockLow from "../Dashboard/DashboardMain/Stock/LowStock/StockLow";
import StockCategory from "../Dashboard/DashboardMain/Stock/StockCategory/StockCategory";
import StockDamage from "../Dashboard/DashboardMain/Stock/StockDamage/StockDamage";
import StockExpiration from "../Dashboard/DashboardMain/Stock/StockExpiration/StockExpiration";
import StockExpired from "../Dashboard/DashboardMain/Stock/StockExpried/StockExpired";
import StockProduct from "../Dashboard/DashboardMain/Stock/StockProduct/StockProduct";
import Report from "../Dashboard/DashboardOthers/Report/Report/Report";
import BlunkSms from "../Dashboard/DashboardOthers/Sms/BlunkSms/BlunkSms";
import DueSms from "../Dashboard/DashboardOthers/Sms/DueSms/DueSms";
import SendSms from "../Dashboard/DashboardOthers/Sms/SendSms/SendSms";
import SmsBalance from "../Dashboard/DashboardOthers/Sms/SmsBalance/SmsBalance";
import AddTransaction from "../Dashboard/DashboardOthers/Transaction/AddTransaction/AddTransaction";
import BalanceTransfer from "../Dashboard/DashboardOthers/Transaction/BalanceTransfer/BalanceTransfer";
import TransactionCategory from "../Dashboard/DashboardOthers/Transaction/TransactionCategory/TransactionCategory";
import TransationList from "../Dashboard/DashboardOthers/Transaction/TransactonList/TransationList";
import AddUser from "../Dashboard/DashboardOthers/UserAccount/AddUser/AddUser";
import UserList from "../Dashboard/DashboardOthers/UserAccount/UserList/UserList";
import DashboardLayout from "../Layout/DashboardLayout/DashboardLayout";

const dashboardRoutes = {
  path: "/dashboard",
  element: <DashboardLayout />,
  children: [
    //!Main Items
    //? Products
    {
      path: "",
      element: <DashboardHome />,
    },
    {
      path: "product-entry",
      element: <ProductEntry />,
    },
    {
      path: "products-entry",
      element: <ProductsEntry />,
    },
    {
      path: "product-list",
      element: <ProductList />,
    },
    {
      path: "product-category",
      element: <ProductCategory />,
    },
    //!Main Items
    //? Products-buy
    {
      path: "product-buy",
      element: <ProductBuy />,
    },
    {
      path: "product-buy-list",
      element: <BuyList />,
    },
    //!Main Items
    //? Products-sell
    {
      path: "product-sell-retail",
      element: <SingleProductSell />,
    },
    {
      path: "product-sells",
      element: <ProductsSells />,
    },
    {
      path: "product-sell-list",
      element: <ProductSellList />,
    },
    {
      path: "product-return",
      element: <ProductReturn />,
    },
    {
      path: "product-list-pending",
      element: <ProductListPending />,
    },

    //!Main Items
    //? stock
    {
      path: "view-stock-full",
      element: <StockProduct/>,
    },
    {
      path: "view-stock-category",
      element: <StockCategory />,
    },
    {
      path: "view-stock-low",
      element: <StockLow />,
    },

    {
      path: "view-stock-expiretion",
      element: <StockExpiration />,
    },

    {
      path: "view-stock-expired",
      element: <StockExpired />,
    },
    {
      path: "product-damage",
      element: <StockDamage />,
    },

    //!Main Items
    //? Payment
    {
      path: "payment-customer",
      element: <CustomerPayment />,
    },
    {
      path: "payment-supplier",
      element: <SupplierPayment/>,
    },
    {
      path: "payment-stuff",
      element: <StaffPayment />,
    },
    //!Acccount Items
    //? Customer
    {
      path: "add-customer",
      element: <AddCustomer />,
    },
    {
      path: "customer-list",
      element: <CustomerList />,
    },
    {
      path: "add-point",
      element: <AddPoint />,
    },
     //!Acccount Items
    //? Supplier
    {
      path: "add-supplier",
      element: <AddSupllier
       />,
    },
    {
      path: "supplier-list",
      element: <SupplierList />,
    },

     //!Others
    //? Transaction
    {
      path: "add-transaction",
      element: <AddTransaction />,
    },
    {
      path: "transaction-list",
      element: <TransationList />,
    },
    {
      path: "transaction-category",
      element: <TransactionCategory />,
    },
    {
      path: "balance-transfer",
      element: <BalanceTransfer />,
    },
     //!Others
    //? Report
    {
      path: "report",
      element: <Report />,
    },
     //!Others
    //? Report
    {
      path: "sms-static",
      element: <SendSms />,
    },
    {
      path: "sms-due",
      element: <DueSms />,
    },
    {
      path: "sms-bunk",
      element: <BlunkSms />,
    },
    {
      path: "sms-balance",
      element: <SmsBalance />,
    },
     //!Others
    //? User Account
    {
      path: "user-add",
      element: <AddUser />,
    },
    {
      path: "user-list",
      element: <UserList />,
    },
  ],
};

export default dashboardRoutes;
