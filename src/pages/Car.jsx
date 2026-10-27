import { Link } from "react-router";
import car from "./../assets/car.png";

export default function Car() {
  return (
    <>
      <div className="w-[50%] border border-gray-300 mt-10 mb-10 mx-auto rounded-2xl p-10 flex flex-col items-center gap-3 shadow-2xl">
        <h1 className="text-2xl font-bold text-blue-800">Car Installment Calculator</h1>
        <h3 className="text-xl text-gray-600">คำนวณ Car Installment</h3>
        <img src={car} alt="car" className="w-25 h-25" />

        <form className="w-full flex flex-col gap-3">
          <p className="text-lg font-kanit">ชื่อผู้คำนวณ:</p>
          <input
            type="text"
            placeholder="ชื่อผู้คำนวณ"
            className="border border-gray-300 p-2 rounded-md"
          />

          <p className="text-lg font-kanit">ราคารถ (บาท):</p>
          <input
            type="number"
            placeholder="ราคารถ"
            className="border border-gray-300 p-2 rounded-md"
          />

          <p className="text-lg font-kanit">ดอกเบี้ยต่อปี (%):</p>
          <input
            type="number"
            step="0.01"
            placeholder="ดอกเบี้ยต่อปี"
            className="border border-gray-300 p-2 rounded-md"
          />

          <p className="text-lg font-kanit">เงินดาวน์ (%):</p>
          <div className="flex gap-4 items-center font-kanit">
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="downPayment"
                value="15"
                defaultChecked
                className="w-4 h-4 text-blue-600"
              />
              15%
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="downPayment"
                value="20"
                className="w-4 h-4 text-blue-600"
              />
              20%
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="downPayment"
                value="25"
                className="w-4 h-4 text-blue-600"
              />
              25%
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="downPayment"
                value="30"
                className="w-4 h-4 text-blue-600"
              />
              30%
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="downPayment"
                value="35"
                className="w-4 h-4 text-blue-600"
              />
              35%
            </label>
          </div>

          <p className="text-lg font-kanit">จำนวนเดือนที่ผ่อน:</p>
          <select className="border border-gray-300 p-2 rounded-md bg-white font-kanit">
            <option value="24">24 เดือน</option>
            <option value="36">36 เดือน</option>
            <option value="48">48 เดือน</option>
            <option value="60">60 เดือน</option>
            <option value="72">72 เดือน</option>
            <option value="84">84 เดือน</option>
          </select>

          <div className="flex gap-3 mt-3">
            <button
              type="button"
              className="flex-1 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 cursor-pointer"
            >
              คำนวณ
            </button>
            <button
              type="reset"
              className="flex-1 bg-gray-300 text-black p-2 rounded-md hover:bg-gray-400 cursor-pointer"
            >
              ล้างข้อมูล
            </button>
          </div>
        </form>

        <div className="w-full flex justify-center items-center mt-2 font-kanit">
          <p className="font-bold">ผ่อนชำระต่อเดือน: <span className="text-blue-800">0.00</span> บาท</p>
        </div>

        <Link
          to="/"
          className="w-full text-center bg-gray-300 hover:bg-gray-400 p-2 rounded-md mt-2 font-kanit text-black"
        >
          กลับหน้าหลัก
        </Link>
      </div>
    </>
  );
}