import TailButton from '../../../components/TailButton'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function DiagTailBar({consultationId}) {


  return (
    <div className="w-full mt-6 flex justify-around">
        <TailButton name="ADMIT"/>
        <TailButton name="PASS WORK"/>
        <TailButton name="REFER"/>


        <Link to = {`/doctor/dc/${consultationId}`}  >     
        <TailButton name="DISCHARGE"/>
        </Link>

    </div>
  )
}
