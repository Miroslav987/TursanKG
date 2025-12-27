import AllTours from '@widgets/all-tours/ui';
// import { FaqBlock } from '@widgets/faq-block/ui';
import PopularToursSlider from '@widgets/popular-tours-slider/ui/PopularToursSlider';
// import { RegionList } from '@widgets/region-list';

const MainPage = () => {
    return (
    <div>
             <PopularToursSlider/>
             <AllTours/>
             {/* <RegionList/> */}
             {/* <FaqBlock/> */}
    </div>
    );
};

export default MainPage;