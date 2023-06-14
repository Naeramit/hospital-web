import TailButton from '../../../components/TailButton'
import { Link } from 'react-router-dom'
export default function DiagTailBar({ workspaceId,consultationId}) {
  return (
    <div className="w-full mt-6 flex justify-around">
      
        <Link to ={`/doctor/diag/${consultationId}`}>
        <TailButton name="BACK TO DIAGNOSIS"/>
        </Link>

        <Link to ={`/doctor/workspace/${workspaceId}`}>
        <TailButton name="NEXT PATIENT"/>
        </Link>
    </div>
  )
}
