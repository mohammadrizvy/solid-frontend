import React from "react";
import LineChart from "../../Components/LineChart/LineChart";
import PieChart from "../../Components/PieChart/PieChart";
import CustomLineChart from "../../Components/LineChart/LineChart";
import { ArrowRightLeft, ShoppingCart, UserCog, Wallet } from "lucide-react";

const DashboardHome = () => {
  return (
    <div className="p-4">
      {/* Overview Section */}
      <div className="grid lg:grid-cols-4  md:grid-cols-2 sm:grid-cols-1 gap-4">
        <div className="card bg-primary shadow-lg">
          <div className="card-body">
            <h2 className="card-title  ">
              <UserCog className="-mt-1" />
              একাউন্ট
            </h2>

            <p>ক্রেতা: 0</p>
            <p>সরবরাহকারী: 1</p>
            <p>কর্মী: 0</p>
          </div>
        </div>
        <div className="card bg-primary shadow-lg">
          <div className="card-body">
            <h2 className="card-title"> <ShoppingCart />আজকের বিক্রয়</h2>
            <p>মোট বিক্রয়: 240</p>
            <p>নগদ বিক্রয়: 240</p>
            <p>বাকি বিক্রয়: 0</p>
          </div>
        </div>
        <div className="card bg-primary shadow-lg">
          <div className="card-body">
            <h2 className="card-title"> <ArrowRightLeft />আজকের লেনদেন</h2>
            <p>নগদ গ্রহণ: 240</p>
            <p>নগদ প্রদান: 0</p>
            <p>নগদ ব্যালেন্স: 240</p>
          </div>
        </div>
        <div className="card bg-primary shadow-lg">
          <div className="card-body">
            <h2 className="card-title"> <Wallet />ব্যালেন্স</h2>
            <p>সরবরাহকারী বকেয়া :9,875</p>
            <p>সরবরাহকারী বকেয়া :9,875</p>
            <p>ক্রেতার বকেয়া :0</p>
            <p></p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="card p-10 bg-base-200 mt-6  shadow-lg">
        <div className="card-body">
          <h2 className="card-title">সাম্প্রতিক বিক্রয় (লাইন চার্ট)</h2>
          <div className="w-[100%] h-[300px]  ">
            <CustomLineChart />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2  sm:grid-cols-1 gap-4 mt-4">
        <div className="card bg-base-200 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">সাম্প্রতিক বিক্রয় (পাই চার্ট)</h2>
            <div className="w-[400px]">
              <PieChart />
            </div>
          </div>
        </div>

        {/* Balance Information */}

        <div className="card bg-primary shadow-lg">
          <div className="card-body">
            <h2 className="card-title">ব্যালেন্স</h2>
            <ul>
              <li>Cash: 13084</li>
              <li>Bkash: 0</li>
              <li>Nagad: 0</li>
              <li>Bank: 5300</li>
              <li className="font-bold">সর্বমোট: 18384</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 mt-4">
        <div className="card bg-primary shadow-lg">
          <div className="card-body">
            <h2 className="card-title">আজকের নগদ গ্রহন</h2>
            <p>Sales Invoice of: 10080240</p>
            <p>Sales Invoice of: 10080240</p>
            <p>Sales Invoice of: 10080240</p>
          </div>
        </div>
        <div className="card bg-primary shadow-lg">
          <div className="card-body">
            <h2 className="card-title">আজকের নগদ প্রদান</h2>
            <p>No data found......</p>
            <p>No data found......</p>
            <p>No data found......</p>
          </div>
        </div>
      </div>

      {/* Footer Notes */}
      <div className="card bg-primary shadow-lg mt-4">
        <div className="card-body">
          <h2 className="card-title">ডেইলি নোট </h2>
          <p> 1 | No notes found.</p>
        </div>
        <div className="p-5">
          <button className="btn btn-secondary btn-sm w-[8%]">Add Note </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
