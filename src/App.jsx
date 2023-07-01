import { useState } from 'react'
function App() {
  const [day, setDay] = useState(0)
  const [month, setMonth] = useState(0)
  const [year, setYear] = useState(0)
  const [dayError, setDayError] = useState(false)
  const [monthError, setMonthError] = useState(false)
  const [YearError, setYearError] = useState(false)
  const [age, setAge] = useState({ year: "", month: "", day: "" })
  function getDateinMonth(year, month) {
    return new Date(year, month, 0).getDate()
  }

  function calculateAge(e) {
    e.preventDefault()
    const date = new Date()
    const currentYear = date.getFullYear()
    const currentMonth = date.getMonth() + 1
    const currentDay = date.getDate()
    if (year === "" || year > currentYear) {
      setYearError(true)
    }
    else if (+month === "" || +month > 12 || +month < 1) {
      setMonthError(true)
    }
    else if (day === "" || +day > 31 || day < 1 || day > getDateinMonth(year, month)) {
      setDayError(true)
    }
    else {
      let calculatedYear = currentYear - Number(year);
      let calculatedMonth;
      let calculatedDay;

      if (
        currentMonth < month ||
        (currentMonth === month && currentDay < day)
      ) {
        calculatedYear--;
        calculatedMonth = 12 - month + currentMonth;
        calculatedDay = currentDay + (30 - day);
      } else if (currentDay < day) {
        calculatedMonth = currentMonth - month;
        calculatedDay = currentDay + (30 - day);
      }
      else {
        calculatedMonth = currentMonth - month;
        calculatedDay = currentDay - day;
      }
      console.log(age)
      setDayError(false)
      setMonthError(false)
      setYearError(false)
      setAge({ year: calculatedYear, month: calculatedMonth, day: calculatedDay });


    }
  }
  return (
    <div className='bg-offWhite min-h-screen flex justify-center items-center font-poppins max-[375px]:p-4'>
      <div className='bg-white flex flex-col rounded-lg rounded-br-[200px] max-[375px]:rounded-br-[100px] w-[45rem] max-[375px]:w-full p-6'>
        <form className='p-3' onSubmit={calculateAge}>
          <div className='flex flex-row gap-4 w-[30rem] max-[375px]:w-full'>
            <div className='flex flex-col gap-1'>
              <label htmlFor='day' className={`text-sm uppercase font-bold ${dayError ? "text-lightRed" : 'text-SmokeyGrey'}`}>Day</label>
              <input id='day' className={`border py-2 px-3 text-SmokeyGrey text-3xl w-full font-bold rounded-md outline-none focus:border-2 focus:border-purple-300 focus:text-black spin-button-none ${dayError ? "border-lightRed" : 'border-lightGray'}`} type="number" placeholder='DD' onChange={(e) => setDay(e.target.value)} />
              <span className='text-lightRed italic mt-1 text-sm'>{dayError ? "must be a valid day" : ""}</span>
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor='month' className={`text-sm uppercase font-bold ${monthError ? "text-lightRed" : 'text-SmokeyGrey'}`}>Month</label>
              <input id='month' className={`border py-2 px-3 text-SmokeyGrey text-3xl w-full font-bold rounded-md outline-none focus:border-2 focus:border-purple-300 focus:text-black spin-button-none`} type="number" placeholder='MM' onChange={(e) => setMonth(e.target.value)} />
              <span className='text-lightRed italic mt-1 text-sm'>{monthError ? "must be a valid month" : ""}</span>
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor='year' className={`text-sm uppercase  font-bold ${YearError ? "text-lightRed" : 'text-SmokeyGrey'}`}>Year</label>
              <input id='year' className={`border py-2 px-3 text-SmokeyGrey text-3xl w-full font-bold rounded-md outline-none focus:border-2 focus:border-purple-300 focus:text-black spin-button-none ${YearError ? "border-lightRed" : 'border-lightGray'}`} type="number" placeholder='YYYY' onChange={(e) => setYear(e.target.value)} />
              <span className='text-lightRed italic mt-1 text-sm'>{YearError ? "must be in the past" : ""}</span>
            </div>
          </div>
          <div className='flex flex-row items-center w-full my-6 relative'>
            <div className="border-b-2 w-full max-w-[40rem] border-lightGray"></div>
            <button className='bg-Purple rounded-full text-white flex justify-center items-center p-4 hover:bg-black max-[375px]:absolute left-1/2 transform -translate-x-1/2 top-0 z-10 max-[375px]:mt-[-1.5rem] max-w-full'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" /></g></svg></button>
          </div>

        </form>
        <div className='flex flex-col gap-1'>

          <div className='text-8xl max-[375px]:text-5xl font-poppins font-extrabold italic'><span className='text-Purple'>{dayError || monthError || YearError || !age.year ? "--" : age.year}</span> years</div>
          <div className='text-8xl max-[375px]:text-5xl font-poppins font-extrabold italic'><span className='text-Purple'>{dayError || monthError || YearError || !age.month ? "--" : age.month}</span> months</div>
          <div className='text-8xl max-[375px]:text-5xl font-poppins font-extrabold italic'><span className='text-Purple'>{dayError || monthError || YearError || !age.day ? "--" : age.day}</span> days</div>

        </div>



      </div>
    </div>
  )
}

export default App
