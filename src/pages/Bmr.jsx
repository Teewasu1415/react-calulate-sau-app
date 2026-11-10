import { Link } from "react-router";
import bmr from "./../assets/bmr.png";
import { useState } from "react";

 
export default function Bmr() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [bmrValue, setBmr] = useState("0.00");



  const handleCalculate = (e) => {
    e.preventDefault();
    // Implementation for BMR calculation
  };

  const handleResetClick = () => {
    setWeight("");
    setHeight("");
    setAge("");
    setGender("male");
    setBmr("0.00");
  };

  

  return (
    <>
      <div className="w-[50%] border border-gray-300 mt-30 mx-auto rounded-2xl
                      p-10 flex flex-col items-center gap-3 shadow-2xl">
        <h1 className="text-2xl font-bold text-blue-800">BMR Calculator</h1>
        <h3 className="text-xl text-gray-600">คำนวณ BMR</h3>
        <img src={bmr} alt="bmi" className="w-25 h-25" />
 
        <form className="w-full flex flex-col gap-3">
          <p className="text-lg font-kanit">ป้อนน้ำหนัก (kg):</p>
          <input type="number" placeholder="น้ำหนัก" value={weight} onChange={(e) => setWeight(e.target.value)} className="border border-gray-300 p-2 rounded-md" />
          <p className="text-lg font-kanit">ป้อนส่วนสูง (cm):</p>
          <input type="number" placeholder="ส่วนสูง" value={height} onChange={(e) => setHeight(e.target.value)} className="border border-gray-300 p-2 rounded-md" />
          <p className="text-lg font-kanit">ป้อนอายุ (ปี):</p>
          <input type="number" placeholder="อายุ" value={age} onChange={(e) => setAge(e.target.value)} className="border border-gray-300 p-2 rounded-md" />
          <p className="text-lg font-kanit">เพศ:</p>
          <div className="flex gap-6 items-center font-kanit">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="male"
                defaultChecked
                className="w-4 h-4 text-blue-600"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              ชาย
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="female"
                className="w-4 h-4 text-blue-600"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
              หญิง
            </label>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md
                        mt-3 hover:bg-blue-700 cursor-pointer" onClick={handleCalculate}>
            คำนวณ
          </button>
          <button type="submit" className="bg-gray-300 text-back p-2 rounded-md
                        mt-1 hover:bg-gray-700 cursor-pointer" onClick={handleResetClick}>
                          

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