import TailButton from '../../../components/TailButton'

export default function DiagTailBar() {
  return (
    <div className="w-full mt-6 flex justify-around">
        <TailButton name="BACK TO DIAGNOSIS"/>
        <TailButton name="NEXT PATIENT"/>
    </div>
  )
}
