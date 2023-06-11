import HeaderMain from '../layouts/HeaderMain'
import MaleDoctor from '../icons/male-doctor.svg'
import PatientData from '../features/user/components/PatientData'
import OpdDischarge from '../features/user/components/OpdDischarge'

export default function OpdDischargePage() {
  const patient = { patientId: 15, attendUser: "พย.สบายดี มีสุข", firstName: "ทดสอบ", lastName: "ไม่ค่อยสบาย", age: { year: "60", month: "8" }, healthInsurance: "หลักประกันสุขภาพแห่งชาติ" }
  const orderList = [{id:1 ,  name: 'paceracetamol(500) 1 tab o prn q q 4-6 hr ', type:1, statusBar: "" ,  func:{ del:true, update:true }, amount: 10}, {id:2, name: "Ibuprofen(400) 1 tab o prn q q 8 hr ", type:1, statusBar: "" , func:{ del:true, update:true }}]

  return (
    <>
      <HeaderMain title="OPD-GP: Consultation => Discharge" name="นพ. สวัสดี มีสุข" logo={MaleDoctor} />
      <PatientData patient={patient} />
      <div className="flex  flex-col  items-center">
        <OpdDischarge  orderList={orderList} />
      </div>

    </>
  )
}
