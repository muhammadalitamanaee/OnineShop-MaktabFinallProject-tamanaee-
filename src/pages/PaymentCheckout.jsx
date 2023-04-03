import React from "react";

const PaymentCheckout = () => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
      <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700">
        <div className="w-full pt-1 pb-5">
          <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
            <i className="mdi mdi-credit-card-outline text-3xl"></i>
          </div>
        </div>
        <div className="mb-10">
          <h1 className="text-center font-bold text-xl uppercase">
            صفحه پرداخت شاپرک{" "}
          </h1>
        </div>
        <div className="mb-3 flex -mx-2">
          <div className="px-2">
            <label for="type1" className="flex items-center cursor-pointer">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-indigo-500"
                name="type"
                id="type1"
                checked
              />
              <img
                src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                className="h-8 ml-3"
              />
            </label>
          </div>
          <div className="px-2">
            <label for="type2" className="flex items-center cursor-pointer">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-indigo-500"
                name="type"
                id="type2"
              />
              <img
                src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                className="h-8 ml-3"
              />
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label className="font-bold text-sm mb-2 ml-1">نام حساب </label>
          <div>
            <input
              className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="محمد علی تمنایی"
              type="text"
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="font-bold text-sm mb-2 ml-1">شماره کارت</label>
          <div>
            <input
              className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="0000 0000 0000 0000"
              type="text"
            />
          </div>
        </div>
        <div className="mb-3 -mx-2 flex items-end">
          <div className="px-2 w-1/2">
            <label className="font-bold text-sm mb-2 ml-1">تاریخ انقضا </label>
            <div>
              <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                <option value="01">10 - دی</option>
                <option value="02">11 - بهمن</option>
                <option value="03">12 - اسفند</option>
                <option value="04">01 - فروردین</option>
                <option value="05">02 - اردیبهشت</option>
                <option value="06">03 - خرداد</option>
                <option value="07">04 - تیر</option>
                <option value="08">05 - مرداد</option>
                <option value="09">06 - شهریور</option>
                <option value="10">07 - مهر</option>
                <option value="11">08 - آبان</option>
                <option value="12">09 - آذر</option>
              </select>
            </div>
          </div>
          <div className="px-2 w-1/2">
            <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
              <option value="2023">1402</option>
              <option value="2024">1403</option>
              <option value="2025">1404</option>
              <option value="2026">1405</option>
              <option value="2027">1406</option>
              <option value="2028">1407</option>
              <option value="2029">1408</option>
            </select>
          </div>
        </div>
        <div className="mb-10">
          <label className="font-bold text-sm mb-2 ml-1">رمز دوم</label>
          <div>
            <input
              className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="000"
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="block w-full max-w-[140px] mx-auto bg-red-500 hover:bg-red-700 focus:bg-red-700 text-white rounded-lg px-3 py-3 font-semibold">
            <i className="mdi mdi-lock-outline mr-1"></i> انصراف
          </button>
          <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
            <i className="mdi mdi-lock-outline mr-1"></i> پرداخت
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCheckout;
