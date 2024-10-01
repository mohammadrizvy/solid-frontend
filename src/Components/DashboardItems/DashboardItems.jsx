import { Layers3, LogIn, Tag } from "lucide-react";
import React from "react";
import {
  FaCartArrowDown,
  FaListOl,
  FaTruckArrowRight,
  FaArrowTrendDown,
  FaUsers,
  FaUser,
  FaMoneyBillTransfer,
} from "react-icons/fa6";
import { LuClipboardList, LuFileInput } from "react-icons/lu";
import {
  MdOutlineCategory,
  MdProductionQuantityLimits,
  MdOutlineStackedBarChart,
  MdOutlinePayment,
  MdSmsFailed,
  MdOutlineSms,
  MdTextsms,
} from "react-icons/md";
import { RiListSettingsLine, RiAlarmWarningLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import {
  HiArrowsRightLeft,
  HiOutlineCurrencyBangladeshi,
} from "react-icons/hi2";
import { VscExport } from "react-icons/vsc";
import { GiReturnArrow, GiBrokenAxe, GiButterflyWarning } from "react-icons/gi";
import { GoStack } from "react-icons/go";
import { BiSolidCategoryAlt } from "react-icons/bi";
import {
  TbMoneybag,
  TbTruck,
  TbTruckDelivery,
  TbUserCog,
  TbUserDollar,
  TbUsers,
  TbUsersGroup,
  TbViewfinderOff,
} from "react-icons/tb";
import { Link } from "react-router-dom";
import { CgUserAdd } from "react-icons/cg";
import { PiHandCoinsFill } from "react-icons/pi";
import { CiMemoPad, CiViewList } from "react-icons/ci";
import { TiUserAdd } from "react-icons/ti";
import { FaHome, FaSms } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";

const DashboardItems = () => {
  return (
    <div className="bangla-regular text-base">
      <li className="pb-2">
        <Link to="/dashboard">
          <RxDashboard /> ড্যাশবোর্ড
        </Link>
      </li>
      <span className="pl-2 font-bold text-xs">মেইন</span>
      <li className="pt-2">
        <details>
          <summary>
            <Tag size={20} />
            পণ্য
          </summary>
          <ul className="py-2">
            <li>
              <Link to="/dashboard/product-entry">
                <MdProductionQuantityLimits />
                পণ্য এন্ট্রি
              </Link>
            </li>
            <li>
              <Link to="/dashboard/products-entry">
                <Layers3 size={16} />
                একাধিক এন্ট্রি
              </Link>
            </li>
            <li>
              <Link to="/dashboard/product-list">
                <LuClipboardList size={16} />
                পণ্যের তালিকা
              </Link>
            </li>
            <li>
              <Link to="/dashboard/product-category">
                <MdOutlineCategory />
                পণ্য ক্যাটেগরী
              </Link>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <details>
          <summary>
            <FaCartArrowDown size={16} />
            পণ্য ক্রয়
          </summary>
          <ul className="py-2">
            <li>
              <Link to="/dashboard/product-buy">
                <FaCartArrowDown />
                পণ্য ক্রয়
              </Link>
            </li>
            <li>
              <Link to="product-buy-list">
                <FaListOl />
                ক্রয় তালিকা
              </Link>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <details>
          <summary>
            <HiOutlineCurrencyBangladeshi size={16} />
            পণ্য বিক্রয়
          </summary>
          <ul className="py-2">
            <li>
              <Link to="/dashboard/product-sell-retail">
                <VscExport />
                খুচরা বিক্রয়
              </Link>
            </li>
            <li>
              <Link to="/dashboard/product-sells">
                <FaTruckArrowRight />
                পাইকারী বিক্রয়
              </Link>
            </li>
            <li>
              <Link to="/dashboard/product-sell-list">
                <FaListOl />
                বিক্রয় তালিকা
              </Link>
            </li>
            <li>
              <Link to="product-return">
                <GiReturnArrow />
                বিক্রয় পণ্য ফেরত
              </Link>
            </li>
            <li>
              <Link to="product-list-pending">
                <GiBrokenAxe />
                ড্রাফট ইনবয়েস
              </Link>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <details>
          <summary>
            <MdOutlineStackedBarChart />
            স্টক
          </summary>
          <ul className="py-2">
            <li>
              <Link to="view-stock-full">
                <GoStack />
                পণ্য স্টক
              </Link>
            </li>
            <li>
              <Link to="view-stock-category">
                <BiSolidCategoryAlt />
                ক্যাটাগরী স্টক
              </Link>
            </li>
            <li>
              <Link to="view-stock-low">
                <FaArrowTrendDown />
                অপর্যাপ্ত স্টক
              </Link>
            </li>
            <li>
              <Link to="view-stock-expiretion">
                <RiAlarmWarningLine />
                মেয়াদ শেষ পর্যায়ে
              </Link>
            </li>
            <li>
              <Link to="view-stock-expired">
                <GiButterflyWarning />
                মেয়াদ উত্তীর্ণ পণ্য
              </Link>
            </li>
            <li>
              <Link to="product-damage">
                <TbViewfinderOff />
                ড্যামেজ/লস্ট
              </Link>
            </li>
          </ul>
        </details>
      </li>

      <li className="pb-2">
        <details>
          <summary>
            <MdOutlinePayment />
            পেমেন্ট
          </summary>
          <ul className="py-2">
            <li>
              <Link to="payment-customer">
                <TbUserDollar />
                ক্রেতা পেমেন্ট
              </Link>
            </li>
            <li>
              <Link to="payment-supplier">
                <FaTruckArrowRight />
                সরবরাহকারী পেমেন্ট
              </Link>
            </li>
            <li>
              <Link to="payment-stuff">
                <TbUsersGroup />
                কর্মীর বেতন পেমেন্ট
              </Link>
            </li>
          </ul>
        </details>
      </li>
      <span className="pl-2 font-bold text-xs">একাউন্ট</span>
      <li className="pt-2">
        <details>
          <summary>
            <TbUserCog />
            ক্রেতা
          </summary>
          <ul className="py-2">
            <li>
              <Link to="add-customer">
                <CgUserAdd />
                ক্রেতা এন্ট্রি
              </Link>
            </li>
            <li>
              <Link to="customer-list">
                <TbUsers />
                ক্রেতার তালিকা
              </Link>
            </li>
            <li>
              <Link to="add-point">
                <PiHandCoinsFill />
                পয়েন্ট ম্যানেজ
              </Link>
            </li>
          </ul>
        </details>
      </li>

      <li className="pb-2">
        <details>
          <summary>
            <TbTruck />
            সরবরাহকারী
          </summary>
          <ul className="py-2">
            <li>
              <Link to="add-supplier">
                <TbTruckDelivery />
                সরবরাহকারী এন্ট্রি
              </Link>
            </li>
            <li>
              <Link to="supplier-list">
                <CiViewList />
                সরবরাহকারী তালিকা
              </Link>
            </li>
          </ul>
        </details>
      </li>
      <span className="pl-2 font-bold text-xs">অন্যান্য</span>
      <li className="pt-2">
        <details>
          <summary>
            <HiArrowsRightLeft />
            লেনদেন
          </summary>
          <ul className="py-2">
            <li>
              <Link to="add-transaction">
                <LuFileInput />
                লেনদেন এন্ট্রি
              </Link>
            </li>
            <li>
              <Link to="transaction-list">
                <CiMemoPad />
                সকল লেনদেন সমূহ
              </Link>
            </li>
            <li>
              <Link to="transaction-category">
                <AiOutlineTransaction />
                লেনদেন খাত সমূহ
              </Link>
            </li>
            <li>
              <Link to="balance-transfer">
                <FaMoneyBillTransfer />
                ব্যালেন্স ট্রান্সফার
              </Link>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <Link to="report">
          <RiListSettingsLine />
          প্রতিবেদন
        </Link>
      </li>

      <li>
        <details>
          <summary>
            <MdTextsms />
            এসএমএস
          </summary>
          <ul className="py-2">
            <li>
              <Link to="sms-static">
                <FaSms />
                সেন্ড এসএমএস
              </Link>
            </li>
            <li>
              <Link to="sms-due">
                <MdOutlineSms />
                বকেয়া এসএমএস
              </Link>
            </li>
            <li>
              <Link to="sms-bunk">
                <MdSmsFailed />
                বাল্ক এসএমএস
              </Link>
            </li>
            <li>
              <Link to="sms-balance">
                <TbMoneybag />
                SMS Balance
              </Link>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <details>
          <summary>
            <FaUser />
            ইউজার একাউন্ট
          </summary>
          <ul className="py-2">
            <li>
              <Link to="user-add">
                <TiUserAdd />
                এড ইউজার
              </Link>
            </li>
            <li>
              <Link to="user-list">
                <FaUsers />
                ইউজার তালিকা
              </Link>
            </li>
          </ul>
        </details>
      </li>

      <li className="border-t border-base-300 mt-4 p-4">
        <Link to="/">
          <FaHome />
          Home
        </Link>
      </li>
    </div>
  );};

export default DashboardItems;
