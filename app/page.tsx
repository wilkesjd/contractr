import ContractrLogo from "@/components/img/contractr-logo"
import Buttons from "@/components/landing-page-buttons"

export default async function Index() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <ContractrLogo />
        <div className="flex-row py-8 lg:space-x-16 md:space-x-16 sm:space-x-8 space-x-2">
        <Buttons/>
        </div>
      </div>
    </>
  );
}
