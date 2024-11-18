import MyTimer from "@/components/timer";


export default async function Lockout() {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 1800); // 10 minutes timer
    return (
      <div>
        <MyTimer expiryTimestamp={time} />
      </div>
    )
}