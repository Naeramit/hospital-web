import TailButton from '../../../components/TailButton'
import { Link } from 'react-router-dom'
export default function DiagTailBar() {
  return (
    <div className="w-full mt-6 flex justify-around">
        <TailButton name="BACK TO DIAGNOSIS"/>

        <Link to ={`/doctor/`}>
        <TailButton name="NEXT PATIENT"/>
        </Link>
    </div>
  )
}
