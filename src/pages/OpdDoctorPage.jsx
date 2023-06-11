import HeaderMain from '../layouts/HeaderMain'
import MaleDoctor from '../icons/male-doctor.svg'
import OpdDoctorMenu from '../features/user/components/OpdDoctorMenu'
import OpdDoctor from '../features/user/components/OpdDoctor'

 
export default function DoctorOpdPage() {
  const patientList =  [
    {patientId: 1, attendUserId : 1 ,firstName:"ป่วย1" , lastName: "ยังป่วย"  , createdAt: "10/06/2022 09:40"},
    {patientId: 2, attendUserId : null ,firstName:"ป่วย2" , lastName: "ยังป่วย"  , createdAt: "10/06/2022 09:44"},
    {patientId: 3, attendUserId : null ,firstName:"ป่วย2" , lastName: "ยังป่วย"  , createdAt: "10/06/2022 09:44"},
    {patientId: 4, attendUserId : null ,firstName:"ป่วย2" , lastName: "ยังป่วย"  , createdAt: "10/06/2022 09:44"},
    {patientId: 5, attendUserId : null ,firstName:"ป่วย2" , lastName: "ยังป่วย"  , createdAt: "10/06/2022 09:44"},
    {patientId: 6, attendUserId : null ,firstName:"ป่วย2" , lastName: "ยังป่วย"  , createdAt: "10/06/2022 09:44"},
    {patientId: 7, attendUserId : null ,firstName:"ป่วย2" , lastName: "ยังป่วย"  , createdAt: "10/06/2022 09:44"},
    {patientId: 8, attendUserId : null ,firstName:"ป่วย2" , lastName: "ยังป่วย"  , createdAt: "10/06/2022 09:44"},
    {patientId: 9, attendUserId : null ,firstName:"ป่วย2" , lastName: "ยังป่วย"  , createdAt: "10/06/2022 09:44"},
    {patientId: 10, attendUserId : null ,firstName:"ป่วย2" , lastName: "ยังป่วย"  , createdAt: "10/06/2022 09:44"},
    {patientId: 11, attendUserId : null ,firstName:"ป่วย2" , lastName: "ยังป่วย"  , createdAt: "10/06/2022 09:44"},
    {patientId: 12, attendUserId : null ,firstName:"ป่วย2" , lastName: "ยังป่วย"  , createdAt: "10/06/2022 09:44"},
    {patientId: 13, attendUserId : null ,firstName:"ป่วย2" , lastName: "ยังป่วย"  , createdAt: "10/06/2022 09:44"},
    {patientId: 14, attendUserId : null ,firstName:"ป่วย2" , lastName: "ยังป่วย"  , createdAt: "10/06/2022 09:44"},
    {patientId: 15, attendUserId : null ,firstName:"ป่วย2" , lastName: "ยังป่วย"  , createdAt: "10/06/2022 09:44"},
  ]

  return (
    <>
    <HeaderMain title="WORKSPACE - OPD GP" name="นพ. สวัสดี มีสุข" logo={MaleDoctor} />
    <OpdDoctorMenu active="1" />
    <div className="flex  flex-col  h-screen  w-full  items-center justify-start mt-[20px]  rounded-lg">
        <OpdDoctor patientList={patientList}/>
    </div>
</>
  )
}
