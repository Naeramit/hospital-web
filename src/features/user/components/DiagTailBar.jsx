import TailButton from '../../../components/TailButton'

export default function DiagTailBar() {
  return (
    <div className="w-full mt-6 flex justify-around">
        <TailButton name="ADMIT"/>
        <TailButton name="PASS WORK"/>
        <TailButton name="REFER"/>
        <TailButton name="DISCHARGE"/>
    </div>
  )
}
