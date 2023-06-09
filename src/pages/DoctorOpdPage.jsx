import HeaderMain from '../layouts/HeaderMain'
import MaleDoctor from '../icons/male-doctor.svg'
import DoctorOpdMenu from '../features/user/components/DoctorOpdMenu'
import DoctorOpd from '../features/user/components/DoctorOpd'

export default function DoctorOpdPage() {
  return (
    <>
    <HeaderMain title="WORKSPACE - OPD GP" name="นพ. สวัสดี มีสุข" logo={MaleDoctor} />
    <DoctorOpdMenu active="1" />
    <div className="flex  flex-col  h-screen  w-full  items-center justify-start mt-[20px]">
        <DoctorOpd/>
    </div>
</>
  )
}
