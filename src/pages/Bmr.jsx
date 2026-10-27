import { Link } from "react-router";
import bmr from "./../assets/bmr.png";
 
export default function Bmr() {
  return (
    <>
      <div className="w-[50%] border border-gray-300 mt-30 mx-auto rounded-2xl
                      p-10 flex flex-col items-center gap-3 shadow-2xl">
        <h1 className="text-2xl font-bold text-blue-800">BMR Calculator</h1>
        <h3 className="text-xl text-gray-600">คำนวณ BMR</h3>
        <img src={bmr} alt="bmi" className="w-25 h-25" />
 
        <form className="w-full flex flex-col gap-3">
          <p className="text-lg font-kanit">ป้อนน้ำหนัก (kg):</p>
          <input type="number" placeholder="น้ำหนัก" className="border border-gray-300 p-2 rounded-md" />
          <p className="text-lg font-kanit">ป้อนส่วนสูง (cm):</p>
          <input type="number" placeholder="ส่วนสูง" className="border border-gray-300 p-2 rounded-md" />
          <p className="text-lg font-kanit">ป้อนอายุ (ปี):</p>
          <input type="number" placeholder="ส่วนสูง" className="border border-gray-300 p-2 rounded-md" />
          <p className="text-lg font-kanit">เพศ:</p>
          <div className="flex gap-6 items-center font-kanit">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="male"
                defaultChecked
                className="w-4 h-4 text-blue-600"
              />
              ชาย
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="female"
                className="w-4 h-4 text-blue-600"
              />
              หญิง
            </label>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md
                        mt-3 hover:bg-blue-700 cursor-pointer">
            คำนวณ
          </button>
          <button type="submit" className="bg-gray-300 text-back p-2 rounded-md
                        mt-1 hover:bg-gray-700 cursor-pointer">
            รีเซ็ต
          </button>
        </form>
 
        <div className="w-full flex justify-center items-center mt-2 font-kanit">
          <p>ค่า BMR ที่คำนวณได้:</p>
          <p className="text-xl font-bold text-blue-800 ml-2  font-kanit">0.00</p>
        </div>
 
        <Link to="/" className="w-full text-center bg-gray-300 hover:bg-gray-700 p-2
                                  rounded-md mt-5 font-kanit text-black">
          กลับไปหน้าหลัก
        </Link>
      </div>
    </>
  )
}