
import landing from "../assets/landing.png";
import appdownload from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";


function HomePage() {
  const navigate = useNavigate()
  const handleSearchSubmit= (searchFormValues:SearchForm)=>{
    navigate({
      pathname:`/search/${searchFormValues.searchQuery}`
    })
  } 
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          
          Tuck into Takeaway today
        </h1>
        
        <span className="text-xl"> Food is just a click away!!</span>
        <SearchBar placeHolder="Search by city" onSubmit={handleSearchSubmit} searchQuery={""}/>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landing} alt="landing" />
        <div className=" flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            
            order Takeaway even faster
          </span>
          <span>
            Download the food order App for faster ordering and personalised
            recommendation.
          </span>
          <img src={appdownload} alt="download" />
        </div>
       
      </div>
    </div>
  );
}

export default HomePage;
