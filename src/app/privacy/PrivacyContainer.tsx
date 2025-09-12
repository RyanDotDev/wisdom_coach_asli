import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";

export default function PrivacyContainer() {
  return (
    <>
      <div>
        <Header />
        <div className='pt-[5rem] pb-[10rem] lg:pl-[10rem] lg:pr-[10rem] pl-[2rem] pr-[2rem]'>
          <FirstSection />
          <br></br>
          <SecondSection />
          <br></br>
          <ThirdSection />
        </div>
      </div>
    </>
  )
}